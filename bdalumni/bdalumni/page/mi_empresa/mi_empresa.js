frappe.pages['mi-empresa'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Bienvenido Evolution Soluciones',
		single_column: true
	});
	const template = frappe.render_template("mi_empresa", {} );
	$('[data-page-route="mi-empresa"] .page-content').html(template).ready(function () {
		setTimeout(function(){
			frappe.call({method:"frappe.client.get_list",args:{doctype:"Oferta Laboral",fields:["oferta","desde","hasta","fin_de_publicación","localidad","tipo_de_puesto","name"]},callback:function(e){
				var data=[]
				for (const key in e.message) {
					if (Object.hasOwnProperty.call(e.message, key)) {
						const element = e.message[key];
						var datapush=[]
						datapush.push(element.oferta)
						datapush.push(element.desde)
						datapush.push(element.hasta)
						datapush.push(element["fin_de_publicación"])
						datapush.push(element.localidad)
						datapush.push(element.tipo_de_puesto)
						datapush.push(
						`
						<a class="btn btn-primary btn-sm primary-action shadow-sm" onclick="editar_oferta('${element.name}')">Editar</a> 
						<a class="btn btn-danger btn-sm primary-action shadow-sm" onclick="desactivar_oferta('${element.name}')">Desactivar</a> 
						<a class="btn btn-default btn-sm primary-action shadow-sm" onclick="postulantes_oferta('${element.name}')">Ver Postulantes</a>
						`);
					}
					data.push(datapush)
					
				}

				// ['Manas', 'Software Engineer', '$1400','],
				
				const datatable = new DataTable('#datatable', {
					columns: ["Nombre","Desde","Hasta","Fin de Publicación","Localidad","Tipo de puesto",
					{
						name: "Acciones",
						id: "acciones",
						editable: false,
						resizable: false,
						sortable: false,
						focusable: false,
						dropdown: false,
						width: 300
					}],
					data:data,
					checkboxColumn: true,
					inlineFilters: true,
					layout: "fluid"
				  });
			}
			})
			
		},500)
	});;
	

}
function desactivar_oferta(name){

}
function postulantes_oferta(name){
	frappe.set_route('List', 'Postulacion','List', { oferta_laboral: name })

}
function refresh(){
	frappe.set_route("/empresa/Evolution Soluiones EIRL");
}
function Postulaciones(){
	frappe.set_route("/app/postulacion/view/kanban/Postulacion");
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
