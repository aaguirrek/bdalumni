import { useFrappeStore } from '@/@store/frappe';
import { ChatDB } from '@db/chat';
import { io } from "socket.io-client";
import {useQrStore} from "@store/qr";

const subscribe=(phone)=>{
      return  io("ws://localhost:3300/"+phone);
}
const reconect=(phone)=>{
      setTimeout(()=>{
            if(!pusher.connected){
                  return subscribe(phone);
            }else{
                  reconect()
            }
      },300)
}


const connectQRCode = (valueData) =>{
      const QrStore = useQrStore()
      console.log(valueData)
      const FrappeStore = useFrappeStore()
	QrStore.$patch({code:valueData})
	let date = new Date();
	let newdate = (new Date(date.valueOf() - date.getTimezoneOffset() * 60000).toISOString()).replace('T'," ").split('.')[0]
     
	let docqr = {
		doctype:'lecturaqr',
		empresa:FrappeStore.$state.user.empresa, 
		tiempo:newdate,
            qrcode:valueData,
		miqrcode:FrappeStore.user.fit_avit_code
	}
	FrappeStore.clearQrInfo()
	let gender="Female"
	let saludation="Sra"
      if(FrappeStore.$state.qrcodePusher !==null){
            frappe.call({
                  method:"crm.client.get_qrInfo", 
                  args:{name: valueData},
                  callback(e){
                        const doc = e.message
                        if(doc.asistente.sexo === "Masculino"){
                              gender="Male"
                              saludation="Sr"
                        }

                        docqr.empresa_leida = doc.asistente.empresa
                        docqr.nombre = doc.asistente.full_name
                        try{
                              
                              frappe.call({
                                    method:"crm.client.get_list", 
                                    args:{
                                          doctype: 'lecturaqr',
                                          fields:['*'],
                                          filters:[['qrcode','=',valueData],['miqrcode','=',FrappeStore.user.fit_avit_code]]
                                    },
                                    callback(e){
                                          if(e.message.length==0){
                                                frappe.call({
                                                      method:"frappe.client.insert",
                                                      args:{doc:docqr},
                                                      callback(e){}
                                                })
                                          }
                                    }
                              })

                        }catch(e){}
                        
                        doc.extras={}
                        doc.extras.gender=gender
                        doc.extras.saludation=saludation
                        FrappeStore.$patch({qrScanInfo:doc,qrcodePusher:valueData})
                        
                  }
            })
      }
}

const personalClient = ()=>{
      const FrappeStore = useFrappeStore()
      let pusher = subscribe(FrappeStore.user.fit_avit_code)
      pusher.on("connect")
      pusher.on('connect_failed', function () {  pusher = subscribe(FrappeStore.user.fit_avit_code);  });
      pusher.on("disconnect", () => { pusher = subscribe(FrappeStore.user.fit_avit_code);  });
      let first_connect=false
      
      pusher.on( 'qrcode', data => { 
            if(data.qr!=='no' ){
                  if(first_connect===true){
                        connectQRCode(data.qr);
                        frappe.call({
                              method:"crm.client.avit_qrcode",
                              args:{qrcode:'FITAVIT-002461',qr:'no'},
                              callback(e){}
                        })
                  }else{
                        first_connect=true
                  }
            }
            setTimeout(()=>{first_connect=true},5000)
      })
}

const Phones=(phone)=>{
      const FrappeStore = useFrappeStore()
      let qrcodeObj = {} 
      qrcodeObj.loading = undefined
      qrcodeObj.qrcode=undefined
      qrcodeObj.percent=undefined
      qrcodeObj.ready='not ready'
      FrappeStore.$patch({qr:qrcodeObj,ready:'not ready'}) 
      if(FrappeStore.$state.active_phones[phone] === undefined){
            const Chat = ChatDB()
            let pusher = subscribe(phone);
            let actives = FrappeStore.$state.active_phones
            actives[phone] = true
            FrappeStore.$patch({active_phones:actives})
            pusher.on("connect")
            pusher.on('connect_failed', function () {  pusher = subscribe(phone);  });
            pusher.on("disconnect", () => { pusher = subscribe(phone);  });
            pusher.on( 'message', data => {
                        if(Chat.$state.contact.id!==undefined){
                        //let first = data.message.from
                        //let all_contacts = FrappeStore.$state.Chats
                        //all_contacts.sort(function(x,y){ return x.id._serialized == first ? -1 : y.id._serialized == first ? 1 : 0; });
                        //all_contacts[0].lastMessage = data.message
                        //Chat.$patch({Chats:all_contacts})
                        try{
                              if(Chat.$state.contact.id!==undefined){
                                    //<--- 011-908-000100016636-11 --->
                                    if((data.message.from.split('@'))[0]=== Chat.$state.contact.id.user){
                                          let chats = Chat.$state.chat
                                          chats.push(data.message)
                                          Chat.$patch({chat:chats})
                                    }else{

                                    }
                              }else{
                              }

                        }catch(e){}
                  }else{
                  }
            })
            pusher.on('qr', data => {
                  //console.log( FrappeStore.$state.Phone)
                  let  qr = FrappeStore.$state.qr
                  qr.qrcode = data.message
                  qr.escaneado=1
                  FrappeStore.$patch({qr:qr}) 
                  
                  
            })
            pusher.on('auth_failure', data => {
                  //console.log(data)
                  FrappeStore.$patch({ready:'fail'}) 
                  
            })
            pusher.on('ready', data => {
                  if(data.message==="Client is ready"){
                        //console.log(data)
                        let  qr = FrappeStore.$state.qr
                        qr.loading = undefined
                        qr.qrcode=undefined
                        qr.percent=undefined
                        qr.ready='ready'
                        FrappeStore.$patch({qr:qr, ready:'ready'}) 
                        FrappeStore.$patch({DialogPhones:false})
                        FrappeStore.get_phones()
                        FrappeStore.get_wp_lists(FrappeStore.$state.numero)
                        FrappeStore.open_WhatsApp(FrappeStore.$state.to_phone_no)
                  }
                  
            })
            pusher.on('loading_screen', data => {
                  FrappeStore.$patch({ready:'loading'})
                  let  qr = FrappeStore.$state.qr
                  qr.percent = data.message.percent
                  qr.qrcode=undefined
                  qr.escaneado = 1
                  FrappeStore.$patch({qr:qr}) 
            })
            let pushers = FrappeStore.$state.Pusher
            pushers.push(pusher)
            FrappeStore.$patch({Pusher:pushers}) 
      }
}

export {Phones,personalClient}