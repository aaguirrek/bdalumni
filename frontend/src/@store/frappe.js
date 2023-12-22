import { useLeadsStore } from '@/@store/leads';
import { useCalendarStore } from '@/views/apps/calendar/useCalendarStore';
import { useCalendarStore as useTareasStore } from '@/views/apps/tareas/useCalendarStore';
import { useCalendarStore as useCitasCStore } from '@/views/apps/citas/useCalendarStore';
import { useEventStore } from '@store/calendar';
import { useCalendarCitasStore } from '@store/citas';

import { Phones } from '@frappe/pusherClient';
import { ChatDB } from '@db/chat';
import { defineStore } from 'pinia';

export const useFrappeStore = defineStore('frappe', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      qrScan:false,
      qrScanInfo:{},
      user: {},
      lead_status:"",
      qrcodePusher:null,
      marketplace:[],
      sellers:[],
      citas_admite:[],
      DialogPhones:false,
      DialogProductos:false,
      deal_status:"",
      is_deal:0,
      Items:[],
      item_i:{},
      itemTypes:{
        Vuelo : "tabler-plane",
        Paquete : "tabler-briefcase",
        Hotel: "tabler-building",
        Producto: "tabler-basket",
        Certificado: "tabler-file-certificate",
        Parque: "tabler-rollercoaster",
        Barco: "tabler-sailboat",
        Mapa: "tabler-map-pin",
        Otro:"tabler-package",
        Entrada : "tabler-ticket"
      },
      index:-1,
      Phones:[],
      leads_contact:[],
      active_phones:{},
      Phone:"Selecciona o agrega un numero WhatsApp",
      route:'',
      ready:'ready',
      qr:{escaneado:0},
      Chats:[],
      to_phone_no:'',
      Pusher:[],
      contact:null,
      contacts:[]
    }
  },
  actions: {
    cambiarStatus(nuevoStatus="",is_deal=0) {
      const leadsStore =  useLeadsStore()
      const ptr = this
      let fieldname = {
        status:nuevoStatus,is_deal:is_deal
      }
      if(nuevoStatus===""){return this.lead_status = ""}
      if(is_deal===1){
        fieldname={deal_status:nuevoStatus,is_deal:is_deal}
      }
      return frappe.call({
        method:"crm.client.set_value",
        args:{
          doctype:"CRM Lead",
          name:leadsStore.$state.lead.name,
          fieldname:fieldname
        },
        callback(e){
          leadsStore.$patch( {lead: e.message} )
          let activitylog = []
          frappe.call({   method: "crm.fcrm.doctype.crm_lead.api.get_lead",  args: { "name": e.message.name },
          callback(res) {
            activitylog = res.message.activities;
            leadsStore.$patch( { activityLog: activitylog} )
            ptr.lead_status =  e.message.status
            ptr.is_deal =  e.message.is_deal
            ptr.deal_status =  e.message.deal_status
            }
          })
          leadsStore.getLeads()
          leadsStore.getDeals()
        }
      })

    },
    cambiarDealStatus(nuevoStatus="") {
      const leadsStore =  useLeadsStore()
      const ptr = this
      if(nuevoStatus===""){return this.lead_status = ""}
      return frappe.call({
        method:"crm.client.set_value",
        args:{
          doctype:"CRM Lead",
          name:leadsStore.$state.lead.name,
          fieldname:"deal_status",
          value:nuevoStatus
        },
        callback(e){
          
          leadsStore.$patch( {lead: e.message} )

          let activitylog = []
          let calllog = []
          
          frappe.call({   method: "crm.fcrm.doctype.crm_lead.api.get_lead",  args: { "name":  leadsStore.$state.lead.name },
            callback(res) {
              activitylog = res.message.activities;
              leadsStore.$patch( {emails: res.docinfo.communications} )
              frappe.call({  method: "frappe.client.get_list", args: {  "doctype": "CRM Call Log", "fields":["*"],  "filters": { lead: leadsStore.$state.lead.name },   },
                  callback(res) {
                    calllog = res.message
                    for (const key in calllog) {
                      calllog[key].activity_type = "Call"
                    }
                    activitylog = activitylog.concat(calllog);
                    activitylog.sort((a, b) => new Date(b.creation).getTime() - new Date(a.creation).getTime())
                    
                    ptr.deal_status =  leadsStore.$state.lead.deal_status
                    leadsStore.$patch( {activityLog: activitylog} )
                    leadsStore.$patch( {calls: calllog} )
                  }
              });
                }
          });
        }
      })

    },
    convertirEnDeal() {
      const leadsStore =  useLeadsStore()
      const ptr = this
      return frappe.call({
        method:"crm.client.set_value",
        args:{
          doctype:"CRM Lead",
          name:leadsStore.$state.lead.name,
          fieldname:"is_deal",
          value: 1
        },
        callback(e){
          
          leadsStore.$patch( {lead: e.message} )

          
          ptr.is_deal =  e.message.is_deal
          ptr.deal_status =  e.message.deal_status
          ptr.lead_status =  e.message.status
          let activitylog = []
          let calllog = []
          
          frappe.call({   method: "crm.fcrm.doctype.crm_lead.api.get_lead",  args: { "name":  leadsStore.$state.lead.name },
            callback(res) {
              activitylog = res.message.activities;
              leadsStore.$patch( {emails: res.docinfo.communications} )
              frappe.call({  method: "frappe.client.get_list", args: {  "doctype": "CRM Call Log", "fields":["*"],  "filters": { lead: leadsStore.$state.lead.name },   },
                  callback(res) {
                    calllog = res.message
                    for (const key in calllog) {
                      calllog[key].activity_type = "Call"
                    }
                    activitylog = activitylog.concat(calllog);
                    activitylog.sort((a, b) => new Date(b.creation).getTime() - new Date(a.creation).getTime())
                    
                    leadsStore.$patch( {activityLog: activitylog} )
                    leadsStore.$patch( {calls: calllog} )

                              
              
                    
                  }
              });
            }
          });
        }
      })

    },
    regresarEstadoAnterior(){
      const prt = this
      const leadsStore =  useLeadsStore()
      return frappe.call({
        method:"crm.client.set_value",
        args:{
          doctype:"CRM Lead",
          name:leadsStore.$state.lead.name,
          fieldname:"is_close",
          value: 0
        },
        callback(e){
          prt.lead = e.message
          prt.leadActivity(e.message.name)
        }
      })
    },
    crearComprobante(){
      const prt = this
      const leadsStore =  useLeadsStore()
      return frappe.call({
        method:"crm.client.set_value",
        args:{
          doctype:"CRM Lead",
          name:leadsStore.$state.lead.name,
          fieldname:"is_close",
          value: 1
        },
        callback(e){
          prt.lead = e.message
          prt.leadActivity(e.message.name)
        }
      })
    },
    CalendarEventos(call=null) {
            
      const storeCalendarBase = useCalendarStore()
      let eventos = []
      let filtro=[]
      for(var e in storeCalendarBase.$state.selectedCalendars){
        filtro.push(storeCalendarBase.$state.selectedCalendars[e])
      }
      const event = useEventStore()
      frappe.call({
        method:"frappe.client.get_list",
        args:{
          doctype:"CRM EVENTOS",
          fields:["*"],
          filters:[["empresa","=",this.user.empresa],["type","in",filtro]]
        },
        callback(e){
          for(var i in e.message){
            var data = {}
            const item = e.message[i]
            data.id = item.name
            data.url = item.url===null?'':item.url
            data.title = item.title
            data.start = new Date(item.start)
            data.end = new Date(item.end)
            data.extendedProps = {}
            data.extendedProps.calendar = item.type
            data.extendedProps.description = item.description
            data.extendedProps.guests = JSON.parse(item.guests)
            data.extendedProps.location = item.location
            data.extendedProps.creation = item.creation
            data.extendedProps.modified = item.modified
            data.extendedProps.empresa = item.empresa
          
            data.extendedProps.modified_by = item.modified_by
            data.extendedProps.owner = item.owner
            data.extendedProps.lead = item.lead
            data.extendedProps.title_lead = item.title_lead
            data.extendedProps.status = item.status
            eventos.push(data)
          } 
          event.$patch( {events: eventos} )  
          if(call!==null){
            call(eventos)
          }
        }
      })
    },
    CalendarTareas(call=null) {
            
      const storeCalendarBase = useTareasStore()
      let eventos = []
      let filtro=[]
      for(var e in storeCalendarBase.$state.selectedCalendars){
        if(storeCalendarBase.$state.selectedCalendars[e] === "Tareas privadas"){
          filtro.push("Tarea-"+frappe.user_id)
        }else{
          filtro.push(storeCalendarBase.$state.selectedCalendars[e])
        }
      }
      const event = useEventStore()
      frappe.call({
        method:"frappe.client.get_list",
        args:{
          doctype:"CRM EVENTOS",
          fields:["*"],
          filters:[["empresa","=",this.user.empresa],["type","in",filtro]]
        },
        callback(e){
          for(var i in e.message){
            var data = {}
            const item = e.message[i]
            data.id = item.name
            data.url = ''
            data.title = item.title
            data.start = new Date(item.start)
            data.end = new Date(item.end)
            data.extendedProps = {}
            if(item.type === "Tarea-"+frappe.user_id){
              data.extendedProps.calendar = "Tareas privadas"
            }else{
              data.extendedProps.calendar = item.type
            }
            data.extendedProps.description = item.description
            data.extendedProps.guests = JSON.parse(item.guests)
            data.extendedProps.location = item.location
            data.extendedProps.creation = item.creation
            data.extendedProps.url_lead = item.url===null?'':item.url
            data.extendedProps.modified = item.modified
            data.extendedProps.modified_by = item.modified_by
            data.extendedProps.owner = item.owner
            data.extendedProps.lead = item.lead
            data.extendedProps.title_lead = item.title_lead
            data.extendedProps.status = item.status
            data.extendedProps.empresa = item.empresa
            eventos.push(data)
          } 
          event.$patch( {tareas: eventos} )  
          if(call!==null){
            call(eventos)
          }
        }
      })
    },
    CalendarCitas(call=null) {
            
      const storeCalendarBase = useCitasCStore()
      let eventos = []
      let filtro=[]
      for(var e in storeCalendarBase.$state.selectedCalendars){
        filtro.push(storeCalendarBase.$state.selectedCalendars[e])
      }
      const event = useCalendarCitasStore()
      frappe.call({
        method:"frappe.client.get_list",
        args:{
          doctype:"CRM EVENTOS",
          fields:["*"],
          filters:[["empresa","=",this.user.empresa],["type","in",filtro]]
        },
        callback(e){
          for(var i in e.message){
            var data = {}
            const item = e.message[i]
            data.id = item.name
            data.url = ''
            data.title = item.title
            data.start = new Date(item.start)
            data.end = new Date(item.end)
            data.extendedProps = {}
            
            data.extendedProps.calendar = item.type
            data.extendedProps.description = item.description
            data.extendedProps.guests = JSON.parse(item.guests)
            data.extendedProps.location = item.location
            data.extendedProps.creation = item.creation
            data.extendedProps.url_lead = item.url===null?'':item.url
            data.extendedProps.modified = item.modified
            data.extendedProps.modified_by = item.modified_by
            data.extendedProps.owner = item.owner
            data.extendedProps.lead = item.lead
            data.extendedProps.title_lead = item.title_lead
            data.extendedProps.status = item.status
            data.extendedProps.empresa = item.empresa
            eventos.push(data)
          } 
          event.$patch( {citas: eventos} )  
          if(call!==null){
            call(eventos)
          }
        }
      })
    },
    clearQrInfo(){
      this.qrScanInfo = {}
    },
    leadActivity(item_name = undefined){
      const useLeads =  useLeadsStore();
      if(item_name===undefined){
        item_name = useLeads.$state.lead.name;
      }
      let activitylog = []
      let calllog = []
      frappe.call({   method: "crm.fcrm.doctype.crm_lead.api.get_lead",  args: { "name":  item_name },
          callback(res) {
            activitylog = res.message.activities;
            useLeads.$patch( {emails: res.docinfo.communications} )
            frappe.call({  method: "frappe.client.get_list", args: {  "doctype": "CRM Call Log", "fields":["*"],  "filters": { lead: item_name },   },
                callback(res) {
                  calllog = res.message
                  for (const key in calllog) {
                    calllog[key].activity_type = "Call";
                  }
                  activitylog = activitylog.concat(calllog);
                  activitylog.sort((a, b) => new Date(b.creation).getTime() - new Date(a.creation).getTime())
                  
                  useLeads.$patch( {activityLog: activitylog} )
                  useLeads.$patch( {calls: calllog} )
                }
            });
          }
          
      });
    },
    get_notes(item_name){
      const useLeads =  useLeadsStore();
      frappe.call({
            method: "frappe.client.get_list",
            args: {
                      "doctype": "CRM NOTA",
                      "fields":["*"],
                      "filters": { lead: item_name },
            },
            callback(res) {
              useLeads.$patch( {notes: res.message} );
            }
      });
    },
    get_citas(item_name){
      const useLeads =  useLeadsStore()
      frappe.call({
            method: "frappe.client.get_list",
            args: {
                      "doctype": "CRM EVENTOS",
                      "fields":["*"],
                      "filters": [["lead",'=',item_name],["type","=","Citas"]],
            },
            callback(res) {
              useLeads.$patch( {citas: res.message} )
            }
      });
    },
    get_tareas(item_name){
      const useLeads =  useLeadsStore()
      frappe.call({
            method: "frappe.client.get_list",
            args: {
                      "doctype": "CRM EVENTOS",
                      "fields":["*"],
                      "filters": [["lead",'=',item_name],["type","=","Tareas"]],
            },
            callback(res) {
              useLeads.$patch( {tareas: res.message} )
            }
      });
    },
    get_tasks(item_name){
      const useLeads =  useLeadsStore()
      frappe.call({
            method: "frappe.client.get_list",
            args: {
                      "doctype": "CRM EVENTOS",
                      "fields":["*"],
                      "filters": { lead: item_name, type:"Tareas" },
            },
            callback(res) {
              useLeads.$patch( {tasks: res.message} )
            }
      });
    },
    get_wp_lists(item_name, from_pusher = false, intento=0){
      const prt = this
      if(item_name!==undefined){
        if((this.Phone === item_name && from_pusher === true) || from_pusher === false){  /*  
          frappe.call({
            method:"green_api.client.getChats",
            args:{ mobile_no:item_name },
            callback(e){
              if(e.message===undefined){
                if(intento<2){
                  intento++;
                  setTimeout( prt.get_wp_lists(item_name, false,intento) ,2000);
                }else{
                  let mobile_no = prt.Phone;
                  frappe.call({method:"green_api.client.qr",args:{ mobile_no:mobile_no, user_id: frappe.user_id, empresa:prt.user.empresa},callback(e){ Phones(mobile_no) }});
                  prt.DialogPhones=true;
                }
              }else{
                if(e.message.length>0){ prt.Chats = e.message }
                e.message.forEach( (value, index) => { prt.getProfilePicUrl(index, value.id.user,item_name) });
              }
            }
          })
          */
        }
      }
    },
    getWhatsAppLists(item_name, from_pusher = false, intento=0){
      const prt = this;
      if(item_name!==undefined){
        if((this.Phone === item_name && from_pusher === true) || from_pusher === false){
          if(this.ready === 'ready'){
            frappe.call({
              method:"green_api.client.getChats",
              args:{
                mobile_no:item_name
              },
              callback(e){
                if(e.message===undefined){
                  if(intento<2){
                    intento++;
                    setTimeout( prt.get_wp_lists(item_name, false,intento) ,2000);
                  }else{
                    let mobile_no = prt.Phone;
                    frappe.call({method:"green_api.client.qr",args:{ mobile_no:mobile_no, user_id: frappe.user_id, empresa:prt.user.empresa},callback(e){ Phones(mobile_no); }});
                    prt.DialogPhones=true;
                  }
                }else{
                  if(e.message.length>0){
                    prt.Chats = e.message;
                  }
                  e.message.forEach( (value, index) => {
                    prt.getProfilePicUrl(index, value.id.user,item_name);
                  });
                }
              }
            })
          }
          else{
            setTimeout( prt.get_wp_lists(item_name, false) ,3000)
          }
        }
      }
    },    
    getProfilePicUrl(key, img,item_name){
      const prt = this;
      try{
        frappe.call({
          method:"green_api.client.getProfilePicUrl",
          args:{
            contactId:img,
            mobile_no:item_name
          },
          callback(e){
            prt.Chats[key].ProfilePicUrl = e.message;
          }
        })
      }catch(e){}
     
    },
    getProfilePicUrlFromWhatsApp(img,item_name){
      const prt = this
      try{
        frappe.call({
          method:"green_api.client.getProfilePicUrl",
          args:{
            contactId:img,
            mobile_no:item_name
          },
          callback(e){
            prt.Chats[key].ProfilePicUrl = e.message
  
          }
        })
        
      }catch(e){}
     
    },
    get_contacts(){
      const prt = this
      frappe.call({
            method: "frappe.client.get_list",
            args: {
                      "doctype": "Contact",
                      "fields":["*"],
                      "filters": { custom_empresa: this.user.empresa },
            },
            callback(res) {
              prt.contacts = res.message
            }
      });
    },
    get_contact(item,phone_no=null){
      const Chat = ChatDB()
      const prt = this
      this.contact = item
      frappe.call({
            method: "frappe.client.get",
            args: {
                      "doctype": "Contact",
                      "name": item.name,
            },
            callback(res) {
              prt.contact = res.message
            }
      });
      frappe.call({
        method: "crm.client.get_list",
        args: {
                  "doctype": "CRM Lead",
                  "fields":["*"],
                  "filters":{tax_id:item.custom_tax_id,empresa:prt.user.empresa},
                  "order_by":"modified DESC"
        },
        callback(res) {
          prt.leads_contact = res.message
        }
      });
      let mobile_no = phone_no
      if(mobile_no===null){
        mobile_no = item.mobile_no
      }
      if(mobile_no.startsWith("+")){
        mobile_no = mobile_no.substring(1)
      }
      item.id={}
      item.id.user=mobile_no
      Chat.$patch({is_open:false})
      frappe.call({
        method:"green_api.client.fetchMessages",
        args:{mobile_no:prt.Phone,chat_id: mobile_no
        },
        callback(e){
          Chat.$patch({chat:e.message,contact:item})
        }
      })
    },
    
    open_WhatsApp(phone_no=null){
      const prt = this
      const Chat = ChatDB()
      let item = this.contact
      let mobile_no = phone_no
      if(mobile_no===null){
        mobile_no = item.mobile_no
      }
      if(mobile_no.startsWith("+")){
        mobile_no = mobile_no.substring(1)
      }
      item.id={}
      item.id.user=mobile_no
      Chat.$patch({is_open:false})
      frappe.call({
        method:"green_api.client.fetchMessages",
        args:{mobile_no:prt.Phone,chat_id: mobile_no
        },
        callback(e){
          Chat.$patch({chat:e.message,contact:item})
        }
      })
    },
    show_contact(item){
      const prt = this
      this.contact = item
      frappe.call({
            method: "frappe.client.get",
            args: {
                      "doctype": "Contact",
                      "name": item.name,
            },
            callback(res) {
              prt.contact = res.message
            }
      });
      frappe.call({
        method: "crm.client.get_list",
        args: {
                  "doctype": "CRM Lead",
                  "fields":["*"],
                  "filters":{tax_id:item.custom_tax_id,empresa:prt.user.empresa},
                  "order_by":"modified DESC"
        },
        callback(res) {
          prt.leads_contact = res.message
        }
      });
      
    },
    get_the_chat(item){
      const Chat = ChatDB()
      const prt = this      
      this.contact = item
      if(item.mobile_no.startsWith("+")){
        item.mobile_no = item.mobile_no.substring(1)
      }
      item.id={}
      item.id.user=item.mobile_no
      Chat.$patch({is_open:false})
      frappe.call({
        method:"green_api.client.fetchMessages",
        args:{mobile_no:prt.Phone,chat_id: item.mobile_no
        },
        callback(e){
          Chat.$patch({chat:e.message,contact:item,is_open:false})
        }
      })
    },
    get_phones(){
      const prt = this
      frappe.call({
            method: "frappe.client.get_list",
            args: { "doctype": "Api Whatsapp", "fields":["*"], "filters": { empresa: prt.user.empresa } },
            callback(res) {
              prt.Phones = res.message
            }
      });
      
    }
  }
  
})
