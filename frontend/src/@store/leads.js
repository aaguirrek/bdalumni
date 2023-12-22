import { defineStore } from 'pinia';
import { useFrappeStore } from './frappe';

export const useLeadsStore = defineStore('leads', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      lead: null,
      leads: {},
      totales:{},
      deals: {},
      leadsContact:[],
      leadStatus:{
        "Open": {
          icon: 'tabler-file-plus',
          value:"Nuevo",
          is_deal:0,
          color:"info",
          key:"Open"
        },
        "Contacted": {
          icon: 'tabler-location-share',
          value:"Contactado",
          is_deal:0,
          color:"success",
          key:"Contacted"
        },
        "Nurture": {
          icon: 'tabler-nfc',
          value:"Interesado",
          is_deal:0,
          color:"warning",
          key: "Nurture",
        },
        "Unqualified": {
          icon: 'tabler-star-off',
          value:"No Interesado",
          is_deal:0,
          color:"warning",
          key:"Unqualified"
        },
        //DEALS
        "Demo/Making": {
          icon:"tabler-progress",
          value:"Cotizando",
          is_deal:1,
          color:"info",
          key:"Demo/Making"
        },
        "Proposal/Quotation": {
          icon:"tabler-report-money",
          value:"Cotizado",
          is_deal:1,
          color:"success",
          key:"Proposal/Quotation"
        },
        "Won": {
          icon:"tabler-coin",
          value:"Ganado",
          is_deal:1,
          color:"success",
          key:"Won"
        },
        "Junk": {
          icon: 'tabler-trash-x',
          value:"Perdido",
          is_deal:0,
          color:"error",
          key:"Junk"
        }
      },
      dealStatus:[],
      notes:{},
      activityLog:{},
      emails:{},
      calls:{},
      tareas:{},
      citas:{},
      tasks:{},
      wons:[],
      isDialogCallVisible:false,
      isDialogNoteVisible:false,
      isDialogPhoneVisible:false,
      isDialogMailVisible:false,
      isDialogEventVisible:{}
    }
  },
  actions: {
    getLeads(){
      const prt = this
      const store = useFrappeStore()
         
      frappe.call({
        method: "crm.client.get_list",
        args: {
                  "doctype": "CRM Lead",
                  "fields":["*"],
                  "filters":{is_deal:0,empresa:store.$state.user.empresa},
                  "order_by":"modified DESC"
        },
        callback(res) {
          prt.leads = res.message
        }
      });
    },
    getWons(){
      const prt = this
      const store = useFrappeStore()
         
      frappe.call({
        method: "crm.client.get_list",
        args: {
                  "doctype": "CRM Lead",
                  "fields":["*"],
                  "filters":{is_deal:1,empresa:store.$state.user.empresa,deal_status:"Won"},
                  "order_by":"modified DESC"
        },
        callback(res) {
          prt.wons = res.message
        }
      });
    },
    getDeals(){
      const prt = this
      const store = useFrappeStore()
         
      frappe.call({
        method: "crm.client.get_list",
        args: {
                  "doctype": "CRM Lead",
                  "fields":["*"],
                  "filters":{is_deal:1,empresa:store.$state.user.empresa,deal_status:["!=","Won"]},
                  "order_by":"modified DESC"
        },
        callback(res) {
          prt.deals = res.message
        }
      });
    },
    getDNILeads(dni){
      const prt = this
      const store = useFrappeStore()
         
      frappe.call({
        method: "crm.client.get_list",
        args: {
                  "doctype": "CRM Lead",
                  "fields":["*"],
                  "filters":{is_deal:0,tax_id:dni,empresa:store.$state.user.empresa},
                  "order_by":"modified DESC"
        },
        callback(res) {
          prt.leadsContact[0] = res.message
        }
      });
    },
    getDNIDeals(dni){
      const prt = this
      const store = useFrappeStore()
         
      frappe.call({
        method: "crm.client.get_list",
        args: {
                  "doctype": "CRM Lead",
                  "fields":["*"],
                  "filters":{is_deal:1,tax_id:dni,empresa:store.$state.user.empresa,deal_status:["!=","Won"]},
                  "order_by":"modified DESC"
        },
        callback(res) {
          prt.leadsContact[1] = res.message
        }
      });
    },
    getDNIWons(dni){
      const prt = this
      const store = useFrappeStore()
         
      frappe.call({
        method: "crm.client.get_list",
        args: {
                  "doctype": "CRM Lead",
                  "fields":["*"],
                  "filters":{is_deal:1,tax_id:dni,empresa:store.$state.user.empresa,deal_status:"Won"},
                  "order_by":"modified DESC"
        },
        callback(res) {
          prt.leadsContact[2] = res.message
        }
      });
    }
    
  }
})
