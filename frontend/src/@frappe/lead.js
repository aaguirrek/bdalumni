
import { useLeadsStore } from '@store/leads';
import { useFrappeStore } from '@store/frappe';
export const industriasPeruanas = [
  "Turismo",
  "Cocina",
  "Servicios",
  "Electrónica",
  "Agroindustria",
  "Alimentos",
  "Minería",
  "Finanzas",
  "Construcción",
  "Energético",
  "Telecomunicaciones",
  "Retail"
];

export const types={
	Vuelo : "tabler-plane",
	Paquete : "tabler-briefcase",
	Hotel: "tabler-building",
	Producto: "tabler-basket",
	Certificado: "tabler-file-certificate",
	Parque: "tabler-rollercoaster",
	Barco: "tabler-sailboat",
	Mapa: "tabler-map-pin",
	Entrada : "tabler-ticket"
}


export const togleDialog = (type,subtype=null) =>{
	const leadsStore =  useLeadsStore()
  switch (type) {
    case "Call":
		leadsStore.$patch( {isDialogCallVisible: !leadsStore.$state.isDialogCallVisible} ) 
      break;
    case "Note":
		leadsStore.$patch( {isDialogNoteVisible: !leadsStore.$state.isDialogNoteVisible} ) 
      break;
    case "mail":
		leadsStore.$patch( {isDialogMailVisible: !leadsStore.$state.isDialogMailVisible} ) 
      break;
    case "Phones":
      leadsStore.$patch( {isDialogPhoneVisible: !leadsStore.$state.isDialogPhoneVisible} ) 
        break;
    case "Event":
		let isDialogEventVisible = leadsStore.$state.isDialogEventVisible
		isDialogEventVisible[subtype] = !leadsStore.$state.isDialogEventVisible[subtype]
		leadsStore.$patch( {isDialogEventVisible: !isDialogEventVisible } ) 
    default:
      break;
  }
}
export const sendMail = (mail_title,mail_desc)=> {
const FrappeStore = useFrappeStore()
const leadsStore =  useLeadsStore()
  return frappe.call(
    {
      method:'frappe.core.doctype.communication.email.make', 
      args:{
        recipients: leadsStore.$state.lead.email,
        cc: '',
        bcc: '',
        subject: mail_title,
        content: mail_desc,
        doctype: 'CRM Lead',
        name: leadsStore.$state.lead.name,
        send_email: 1,
        sender: frappe.user_id,
        sender_full_name: FrappeStore.$state.user.full_name || undefined,
    },callback(e){
      FrappeStore.leadActivity()
    }
  }
  )
}
export const clearMessage = () => {
 return ''
}
export const guardarNota = (note_title,note_desc) =>{
	const leadsStore =  useLeadsStore()
  return frappe.call({
    method:"crm.client.insert_note",
    args:{doc:{
      doctype:"CRM NOTA",
      title:note_title,
      content:note_desc,
      lead:leadsStore.$state.lead.name
    }},
    callback(e){
      leadsStore.$patch( {notes: e.message, isDialogNoteVisible: false} ) 
    }
  })
}
export const EditLeadData = (fieldname,value, leadCustomer) =>{
	const FrappeStore = useFrappeStore()
	const leadsStore =  useLeadsStore()
  if(fieldname === "salutation"){
    value = leadCustomer.salutation
  }
  if(fieldname === "source"){
    value = leadCustomer.source
  }
  if(fieldname === "industry"){
    value = leadCustomer.industry
  }
  return frappe.call({
    method:"crm.client.set_value",
    args:{
      doctype:"CRM Lead",
      name:leadsStore.$state.lead.name,
      fieldname:fieldname,
      value:value
    },
    callback(e){
      leadsStore.$patch( {lead: e.message} )
      FrappeStore.leadActivity(e.message.name)
    }
  })
}
export const add_comment = (comment)=>{
	const FrappeStore = useFrappeStore()
	const leadsStore =  useLeadsStore()
  return frappe.call( {
      method:'crm.client.add_comment', 
      args:{
        reference_doctype: 'CRM Lead',
        reference_name: leadsStore.$state.lead.name,
        content:comment,
        comment_email: frappe.user_id,
        comment_by: FrappeStore.$state.user.full_name || undefined,
      },callback(e){
        FrappeStore.leadActivity()
      }
    })

}
export const addTask = (type,event)=>{
	const FrappeStore = useFrappeStore()
	const leadsStore =  useLeadsStore()
	return frappe.call( {
		method:'crm.client.add_task', 
		args:{
			doc:{
			doctype: 'CRM EVENTOS',
			title:event.Title,
			start:event.Start,
			type:type,
			end:event.End,
			allday:event.AllDay,
			guests:JSON.stringify(event.Participantes),
			location:event.Location,
			description:event.Description,
			status:event.status?event.status:"Pendiente",
			lead: leadsStore.$state.lead.name,
			empresa: FrappeStore.user.empresa
			}
		},callback(e){
			FrappeStore.leadActivity()
			FrappeStore.CalendarEventos()
			leadsStore.$patch( { isDialogEventVisible: false} ) 
			FrappeStore.get_citas(leadsStore.$state.lead.name)
			FrappeStore.get_tareas(leadsStore.$state.lead.name)
		}
		})
	  

}
export const itemSelect = (nombre) =>{
	const FrappeStore = useFrappeStore()
  return FrappeStore.$state.Items[nombre]!==undefined?FrappeStore.$state.Items[nombre]:{}
}
export const itemSave = (product, ItemIndex) =>{

	if(product.value!==undefined){
		product = product.value
	}
  delete product.value;
  
	const FrappeStore = useFrappeStore()
	const leadsStore =  useLeadsStore()
  let total_lead={total:0,total_fee:0}
  let items = []
  if(ItemIndex!= -1){
    items = JSON.parse(leadsStore.$state.lead.items)

  }

  if( leadsStore.$state.lead.items !== undefined && leadsStore.$state.lead.items !== null){
    if( leadsStore.$state.lead.items !== '' ){
      items = JSON.parse(leadsStore.$state.lead.items)
    if(ItemIndex === -1){
      items.push( {  ...FrappeStore.$state.Items[product.nombre], cantidad:product.cantidad, desc:product.desc, precio_total:product.precio_total, proveedor:product.proveedor, precioProveedor:product.precioProveedor, nombre:product.nombre, fee:product.fee} )
    }
    items[ItemIndex] = product
	for (const iterator of items ) {
      total_lead.total =  total_lead.total + parseFloat(iterator.precio_total)
      total_lead.total_fee =  total_lead.total_fee + (parseFloat(iterator.fee) * parseFloat(iterator.cantidad) )
	  }
    }else{
      if(ItemIndex === -1){
        items.push( {  ...FrappeStore.$state.Items[product.nombre], cantidad:product.cantidad, desc:product.desc, precio_total:product.precio_total, proveedor:product.proveedor, precioProveedor:product.precioProveedor, nombre:product.nombre, fee:product.fee} )
      }
    }
  }else{
    if(ItemIndex === -1){
      items.push( {  ...FrappeStore.$state.Items[product.nombre], cantidad:product.cantidad, desc:product.desc, precio_total:product.precio_total, proveedor:product.proveedor, precioProveedor:product.precioProveedor, nombre:product.nombre, fee:product.fee} )
    }
  }
  if(ItemIndex === -1){
    total_lead.total =  total_lead.total + parseFloat(product.precio_total)
    total_lead.total_fee =  total_lead.total_fee + (parseFloat(product.fee) * parseFloat(product.cantidad) ) 
  }
  return frappe.call({
    method:"crm.client.set_value",
    args:{
      doctype:"CRM Lead",
      name:leadsStore.$state.lead.name,
      fieldname:"items",
      value:JSON.stringify(items)
    },
    callback(e){

      frappe.call({ method:"crm.client.set_value", args:{ doctype:"CRM Lead", name:leadsStore.$state.lead.name, fieldname:"total", value:total_lead.total  },  callback(e){ 
          frappe.call({ method:"crm.client.set_value", args:{  doctype:"CRM Lead", name:leadsStore.$state.lead.name, fieldname:"total_fee", value:total_lead.total_fee  },  callback(e){ 
                leadsStore.$patch( {lead: e.message} )
                leadsStore.$patch({isDialogCallVisible:false})
          } })
        } 
      })
      leadsStore.$patch( {lead: e.message} )
      FrappeStore.leadActivity(e.message.name)
    }
  })
}
export  const EvaularTotal = (product) =>{
  if( product.cantidad !==undefined && product.cantidad !==''){
    if( product.fee !== undefined && product.fee !=='' ){
      if(product.precioProveedor !== undefined && product.precioProveedor !=='' ){
        product.precio_total = ( parseFloat(product.cantidad) * parseFloat(product.fee) ) + ( parseFloat(product.cantidad) * parseFloat(product.precioProveedor) ) 
      }else{
        product.precio_total = parseFloat(product.cantidad) * ( parseFloat(product.fee)  )
      }
    }else{ product.precio_total = 0 }
  }else{product.precio_total = 0}
  return product
}
export  const openLink = (website) =>{
  if(website.startsWith("http")){
    window.open(website, '_blank');
  }else{
    window.open("https://"+website, '_blank');
  }
}
export const gotoChat = () =>{
    
}
export const crearLead = (item, cantidad) =>{
    
    const store = useFrappeStore() 
    const producto = {
      nombre:item.item_name,
      cantidad:parseInt(cantidad),
      fee:parseFloat(item.amount),
      precio_total:(parseFloat(item.amount)+item.costo_proveedor)*parseInt(cantidad),
      proveedor : item.proveedor,
      precioProveedor:item.costo_proveedor,
      ...item,
      desc:''
    }
    delete producto.modified
    delete producto.modified_by
    frappe.call({
      method:'crm.client.insert', 
      args:{
        doc:{
          doctype:'CRM Lead',
          organization_name:store.$state.user.empresa,
          status:"Contacted",
          website:null,
          job_title:null,
          source:"Marketplace",
          industry:null,
          total: (parseFloat(item.amount)+item.costo_proveedor)*parseInt(cantidad),
          total_fee: (parseFloat(item.amount)+item.costo_proveedor)*parseInt(cantidad),
          first_name:store.$state.user.full_name,
          last_name:null,
          tax_id:store.$state.user.dni,
          gender:null,
          email:store.$state.user.email,
          mobile_no:null,
          salutation:"Sr",
          empresa:item.empresa,
          items:JSON.stringify([producto]),
          country:"Peru"
        }
    },callback(e){
    }
  })
}