let empresa=""
frappe.pages['mi-empresa'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: `Bienvenido ${frappe.user.full_name()}`,
		single_column: true
	});
	frappe.call({method:"frappe.client.get_count",args:{doctype:'Oferta Laboral',filters:[["docstatus","=",0],['owner',"=",frappe.user.name]]},callback:function(e){ let counts = e.message;
		const template = frappe.render_template("mi_empresa", {postulaciones:counts} );
		$('[data-page-route="mi-empresa"] .page-content').html(template).ready(function () { setTimeout(function(){createDatatable();loadData();},500) });
	}});
	frappe.call({method:"frappe.client.get_list",args:{doctype:'Empresa'},callback:function(e){
		if(e.message.length>0){
			empresa = e.message[e.message.length - 1].name;
		}else{
			empresa = "";
		}
	}})
}
function desactivar_oferta(name){
	frappe.call({method:"bdalumni.api.cancel",args:{doctype:"Oferta Laboral",name:name},callback:function(e){loadData()}});
}
function postulantes_oferta(name){
	frappe.set_route('List', 'Postulacion','List', { oferta_laboral: name })
}
function refresh(){
	
	frappe.set_route("/app/empresa");
}
function miEmpresa(){
	frappe.set_route("/app/empresa/"+empresa);
}
function Postulaciones(){
	frappe.set_route('List', 'Postulacion','List', { oferta_laboral: null })
}
function Ofertas(){
	frappe.set_route("/app/oferta-laboral");
}
function nueva_oferta(){
	frappe.set_route('Form', 'Oferta Laboral','new')
}
function editar_oferta(name){
	frappe.set_route('Form', 'Oferta Laboral',name)
}
function encuestas(){
	frappe.set_route('/app/encuestas')
}
function calendario_citas(){
	frappe.set_route('/app/event/view/calendar/default')
}
function webhooks(){
	frappe.set_route('/app/webhook')
}
function perfil(){
	frappe.set_route('/app/mi-perfil')
}
