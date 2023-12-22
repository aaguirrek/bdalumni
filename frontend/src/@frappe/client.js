import { ChatDB } from '@db/chat';
import { useFrappeStore } from '@store/frappe';
import FormData from 'form-data';


const get_mensajes=(item,index)=>{
	const Chat = ChatDB()
	const FrappeStore = useFrappeStore()
	let mobile_no = item.id.user
	item.index = index
	frappe.call({
	  method:"green_api.client.fetchMessages",
	  args:{mobile_no:FrappeStore.$state.Phone,chat_id:mobile_no
	  },
	  callback(e){
		Chat.$patch({chat:e.message,contact:item})
	  }
	})
}
const sendMessage = (to,mensaje_txt, files=[]) =>{
	const Chat = ChatDB()
	const FrappeStore = useFrappeStore()
	let chats = Chat.$state.chat
	
	if(files.length>0){
		sendMedia(to,mensaje_txt, files)
	}else{
		chats.push({
			send:1,
			fromMe:true,
			sender:to,
			buffer_img:null,
			body :mensaje_txt,
			id:{id:"temp-"+(new Date()).toString()},
			hasMedia:false,
			timestamp: (new Date()).getTime()/1000
		
		})
		Chat.$patch({chat:chats})
		frappe.call({
		  method:"green_api.client.send_message",
		  args:{
			message:mensaje_txt,
			docname:"GREEN-"+FrappeStore.$state.Phone,
			mobile_no:to,
		  },
		  callback(e){
		  //isGroup=false
			let first = to+"@c.us"
			let all_contacts = FrappeStore.$state.Chats
			
			all_contacts.sort(function(x,y){ return x.id._serialized == first ? -1 : y.id._serialized == first ? 1 : 0; });
			all_contacts[0].lastMessage.body = mensaje_txt
			Chat.$patch({Chats:all_contacts})
			get_mensajes(Chat.$state.contact)
		  }
		})
	}
	return ''
}
const sendMedia = (to,mensaje_txt, files) =>{
	const Chat = ChatDB()
	const FrappeStore = useFrappeStore()
	let chats = Chat.$state.chat
	for (let index = 0; index < files.length -1; index++) {

		
		chats.push({
			send:1,
			fromMe:true,
			downloaded:0,
			sender:to,
			isLocal:true,
			type:"image",
			_data:{
				body :"/9j/4AAQSkZJRgABAQEAAAAAAAD/4QAuRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABADsAAEABAAEAAAABAAAAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAFjAdoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAp1NooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKdHG0jhEVmdjgKBnNNq9on/ACG7P/rqKAI/7Lvv+fOf/v2aP7Lvv+fOf/v2a6bV9b1C11j7HZxpJlQVUrkkmov7T8Sf8+A/79//AF6AOe/su+/585/+/Zo/su+/585/+/ZroP7T8Sf8+A/79/8A16P7T8Sf8+A/79//AF6AOf8A7Lvv+fOf/v2aP7Lvv+fOf/v2a6H+0/En/PgP+/f/ANej+0/En/Pgv/fv/wCvQBzM1tPbYE8LxluRvGM+tRVualFrerGNrmxYGMELsTHWsm5s7izcLcwtEzDIDDGaAIaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACr2i/8huz/wCuoqjV7Rf+Q3Z/9dRQBu3X/I9W30X/ANBNR63r9/ZatNBBIojXGAUB6ipLr/kerf6L/wCgmql/Zx3/AIzNvMxWNyM4OM4XOPqaAK//AAlWqf8APWP/AL9ij/hKtU/56x/9+xV3xJolnYWUdxaqY23hCpbO7P17iuaoA2P+Eq1T/nrH/wB+xR/wlWqf89Y/+/YrHrZvNAez0FLyTImLguv91T/XOPzoAdD4o1N541MseGYA/ux681Y8Z/8AIQt/+uR/nWBb/wDHzD/vr/Ot/wAZ/wDIQt/+uR/nQBzlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABV7Rf+Q3Z/8AXUVRq9ov/Ibs/wDrqKAN26/5Hq3+i/8AoJrJ8SOyeIZ2UlWXaQQcY4Fa11/yPVt9F/8AQTWZ4hiebxJNHGpeRigVR3OBQBDax3viC9jgknkkCjLM5zsX/GtLXvDQto/tOnqxiUYkj6ke4rf0fSV0myEeMzPzIw7n0+gq/g+lAHIeFtH+0SC+uF/dIf3Sn+I+v0H866m8t1vLOaBukqlf8/jUqRiNAqqFVRgKBjFLg+hoA8zhRo7yNGGGWQAj05rd8Z/8hC3/AOuR/nVfXrP7L4kUgYSZ1kX05PP61P4z/wCQhb/9cj/OgDnaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACrFjcizv4LhlLCJwxUHGar0UAb9tqK6n4utrmONo1JC7Sc9FNV/EbtH4huGRmVgFwwOMfLVHTrz7Bfw3Ozf5RztzjPGK3z4yQ8nTlJ9S4P8ASgDnfttz/wA/M/8A38NH225/5+Z/+/hrof8AhMY/+gan/fQ/wo/4TGP/AKBqf99D/CgDnvttz/z8z/8Afw0fbbn/AJ+Z/wDv4a6H/hMY/wDoGp/30P8ACj/hMY/+gan/AH0P8KAOfjmkluoTJIzkOMbiTjmtzxn/AMhC3/65H+dSf8Jin/QOX/vof4Vk61q39r3Ecvk+VsXbjOc85oAzqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHyKA7ADgE0yiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK04408tfkXoO1FFAH//2Q==",
				caption:''
			},
			isGif:false,
			id:{id:"temp-"+(new Date()).toString()},
			hasMedia:true,
			timestamp: (new Date()).getTime()/1000
		
		})

		const file = files[index];
		let data = new FormData();
		data.append('file', file)
		data.append('file_name', file.name);
		data.append('mobile_no', FrappeStore.$state.Phone);
		data.append('to', to);
		data.append('message', '');
		data.append('mimetype', file.type);
		frappe.call({
			method:"green_api.client.sendMedia",
			dataType:'multipart/form-data',
			args:data,
			callback(e){
				let first = to+"@c.us"
				let all_contacts = FrappeStore.$state.Chats
				all_contacts.sort(function(x,y){ return x.id._serialized == first ? -1 : y.id._serialized == first ? 1 : 0; });
				all_contacts[0].lastMessage.body = mensaje_txt
				Chat.$patch({Chats:all_contacts})
				get_mensajes(Chat.$state.contact)
			}
		})
	}
	const last_file = files[files.length -1]
	
	chats.push({
		send:1,
		fromMe:true,
		downloaded:0,
		sender:to,
		isLocal:true,
		type:"image",
		_data:{
			body :"/9j/4AAQSkZJRgABAQEAAAAAAAD/4QAuRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABADsAAEABAAEAAAABAAAAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAFjAdoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAp1NooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKdHG0jhEVmdjgKBnNNq9on/ACG7P/rqKAI/7Lvv+fOf/v2aP7Lvv+fOf/v2a6bV9b1C11j7HZxpJlQVUrkkmov7T8Sf8+A/79//AF6AOe/su+/585/+/Zo/su+/585/+/ZroP7T8Sf8+A/79/8A16P7T8Sf8+A/79//AF6AOf8A7Lvv+fOf/v2aP7Lvv+fOf/v2a6H+0/En/PgP+/f/ANej+0/En/Pgv/fv/wCvQBzM1tPbYE8LxluRvGM+tRVualFrerGNrmxYGMELsTHWsm5s7izcLcwtEzDIDDGaAIaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACr2i/8huz/wCuoqjV7Rf+Q3Z/9dRQBu3X/I9W30X/ANBNR63r9/ZatNBBIojXGAUB6ipLr/kerf6L/wCgmql/Zx3/AIzNvMxWNyM4OM4XOPqaAK//AAlWqf8APWP/AL9ij/hKtU/56x/9+xV3xJolnYWUdxaqY23hCpbO7P17iuaoA2P+Eq1T/nrH/wB+xR/wlWqf89Y/+/YrHrZvNAez0FLyTImLguv91T/XOPzoAdD4o1N541MseGYA/ux681Y8Z/8AIQt/+uR/nWBb/wDHzD/vr/Ot/wAZ/wDIQt/+uR/nQBzlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABV7Rf+Q3Z/8AXUVRq9ov/Ibs/wDrqKAN26/5Hq3+i/8AoJrJ8SOyeIZ2UlWXaQQcY4Fa11/yPVt9F/8AQTWZ4hiebxJNHGpeRigVR3OBQBDax3viC9jgknkkCjLM5zsX/GtLXvDQto/tOnqxiUYkj6ke4rf0fSV0myEeMzPzIw7n0+gq/g+lAHIeFtH+0SC+uF/dIf3Sn+I+v0H866m8t1vLOaBukqlf8/jUqRiNAqqFVRgKBjFLg+hoA8zhRo7yNGGGWQAj05rd8Z/8hC3/AOuR/nVfXrP7L4kUgYSZ1kX05PP61P4z/wCQhb/9cj/OgDnaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACrFjcizv4LhlLCJwxUHGar0UAb9tqK6n4utrmONo1JC7Sc9FNV/EbtH4huGRmVgFwwOMfLVHTrz7Bfw3Ozf5RztzjPGK3z4yQ8nTlJ9S4P8ASgDnfttz/wA/M/8A38NH225/5+Z/+/hrof8AhMY/+gan/fQ/wo/4TGP/AKBqf99D/CgDnvttz/z8z/8Afw0fbbn/AJ+Z/wDv4a6H/hMY/wDoGp/30P8ACj/hMY/+gan/AH0P8KAOfjmkluoTJIzkOMbiTjmtzxn/AMhC3/65H+dSf8Jin/QOX/vof4Vk61q39r3Ecvk+VsXbjOc85oAzqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHyKA7ADgE0yiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK04408tfkXoO1FFAH//2Q==",
			caption:mensaje_txt
		},
		isGif:false,
		id:{id:"temp-"+(new Date()).toString()},
		hasMedia:true,
		timestamp: (new Date()).getTime()/1000
	
	})

	let data = new FormData();
	data.append('file', last_file)
	data.append('file_name', last_file.name);
	data.append('mobile_no', FrappeStore.$state.Phone);
	data.append('to', to);
	data.append('message', mensaje_txt);
	data.append('mimetype', last_file.type);
	frappe.SendMedia({
		method:"green_api.client.sendMedia",
		dataType:'multipart/form-data',
		args:data,
		callback(e){
			let first = to+"@c.us"
			let all_contacts = FrappeStore.$state.Chats
			all_contacts.sort(function(x,y){ return x.id._serialized == first ? -1 : y.id._serialized == first ? 1 : 0; });
			all_contacts[0].lastMessage.body = mensaje_txt
			all_contacts[0].lastMessage.type = 'image'
			all_contacts[0].lastMessage._data = {caption:mensaje_txt}
			Chat.$patch({Chats:all_contacts})
			get_mensajes(Chat.$state.contact)
		}
	})
	for (let docfield in files){
		const file = files[docfield][0]
		AttachFile(docfield,file,"CRM Item","marketplace",1,0)
	}
		
}
const getItems = () =>{
	const FrappeStore = useFrappeStore()
	frappe.call({
		method:"crm.client.get_list",
		args:{
			doctype:"CRM Item",
			fields:["*"],
			filters:{
				empresa: FrappeStore.user.empresa
			}
		},
		callback(e){
			FrappeStore.$patch({Items:e.message})
		}
	})
}

const getSellers = () =>{
	const FrappeStore = useFrappeStore()
	let filters={
		tipo: 'B2B'
	}
	if(FrappeStore.user.tipo==='B2B'){
		filters.name = FrappeStore.user.empresa
	}
	frappe.call({
		method:"crm.client.get_list",
		args:{
			doctype:"Empresa lista CRM",
			fields:["*"],
			filters:filters,
			limit_page_length:200
		},
		callback(e){
			FrappeStore.$patch({sellers:e.message})
		}
	})
}
const getCitasAdmitibles = () =>{
	const FrappeStore = useFrappeStore()
	let filters={
		admite_citas: 'Si'
	}
	frappe.call({
		method:"crm.client.get_list",
		args:{
			doctype:"Empresa lista CRM",
			fields:["*"],
			filters:filters
		},
		callback(e){
			FrappeStore.$patch({citas_admite:e.message})
		}
	})
}
const getMarketPlace = (sellers=null,tipos=null,start=0) =>{
	const FrappeStore = useFrappeStore()
	let filters={
		publicable: true
	}
	if(sellers!==null){
		filters.empresa = ['in',sellers]
	}
	if(FrappeStore.user.tipo==='B2B'){
		filters.empresa = FrappeStore.user.empresa
	}
	if(tipos!==null){
		filters.tipo = ['in',tipos]
	}
	frappe.call({
		method:"crm.client.get_list",
		args:{
			doctype:"CRM Item",
			fields:["*"],
			filters:filters,
			limit_start:start
		},
		callback(e){
			if(start===0){
				FrappeStore.$patch({marketplace:e.message})
			}else{
				let arrMarket = FrappeStore.$state.marketplace;
				let marketArr = arrMarket.concat(e.message)
				FrappeStore.$patch({marketplace:marketArr})
			}
			if(e.message.length>18){
				getMarketPlace(sellers,tipos,start+20)
			}
		}
	})
}
const guardarItems = (opts,files) =>{
	const FrappeStore = useFrappeStore()
	let items = FrappeStore.$state.Items
	let doc = {}
	frappe.call({
		method:"crm.client.insert",
		args:{
			doc:{
				doctype:"CRM Item",
				empresa: FrappeStore.user.empresa,
				...opts
			}
		},
		callback(e){
			items.push(e.message)
			doc=e.message
			FrappeStore.$patch({Items:items})
		}
	})
	for (let docfield in files){
		const file = files[docfield][0]
		AttachFile(docfield,doc.name,file,"CRM Item","marketplace",1,0, (e)=>{items[itemSel] = e.message;FrappeStore.$patch({Items:items})},doc)
	}
}
const EditarItems = (opts,itemSel,files) =>{
	const FrappeStore = useFrappeStore()
	let items = FrappeStore.$state.Items
	let doc={
		doctype:"CRM Item",
		empresa: FrappeStore.user.empresa,
		...opts
	}
	delete doc.modified
	delete doc.modified_by
	frappe.call({
		method:"crm.client.save",
		args:{ doc:doc },
		callback(e){
			items[itemSel] = e.message
			FrappeStore.$patch({Items:items})
		}
	})
	for (let docfield in files){
		const file = files[docfield][0]
		AttachFile(docfield,doc.name,file,"CRM Item","marketplace",1,0, (e)=>{items[itemSel] = e.message;FrappeStore.$patch({Items:items})},doc)
	}
}
const AttachFile = (docfield,docname,file,doctype,folder,optimize=0,is_private=0,callback=(e)=>{},doc={}) =>{
	let data = new FormData();
	data.append('file', file)
	data.append('file_name', file.name);
	data.append('mimetype', file.type);
	data.append('is_private', is_private);
	data.append('fieldname', docfield);
	data.append('folder', 'Home/'+folder);
	data.append('doctype', doctype);
	data.append('optimize', optimize);
	data.append('docname', docname);
	if (file.file_url) {
		data.append('file_url', file.file_url);
	}
	frappe.SendMedia({
		method:"upload_file",
		dataType:'multipart/form-data',
		args:data,
		callback(e){
			e.message.file_url
			doc[docfield] = e.message.file_url
			frappe.call({
				method:"crm.client.save",
				args:{ doc:doc },
				callback(e){
					callback(e)
				}
			})
		}
	})
	
}
export {sendMessage, guardarItems, getItems,EditarItems,AttachFile,getMarketPlace,getSellers,getCitasAdmitibles}