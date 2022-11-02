frappe.pages['mi-empresa'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Bienvenido Evolution Soluciones',
		single_column: true
	});
	
	frappe.db.count('Oferta Laboral').then(counts => {
	const template = frappe.render_template("mi_empresa", {postulaciones:counts} );
		$('[data-page-route="mi-empresa"] .page-content').html(template).ready(function () {
			setTimeout(function(){
				const datatable = new DataTable('#datatable', {
			
					columns: [
						{
							name:"Nombre",
							editable: false
						},
						{
							name:"Vencimiento",
							editable: false
						},
						{
							name:"Estado",
							editable: false
						},
						{
							name:"Postulantes",
							editable: false,
							width: 70
						},
						{
							name:"Localidad",
							editable: false
						},
						{
							name:"Tipo de puesto",
							editable: false
						},
						{
							name:"Publicado por",
							editable: false
						},
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
					data:[],
					checkboxColumn: true,
					inlineFilters: true,
					layout: "fluid"
				});
				frappe.call({method:"frappe.client.get_list",args:{doctype:"Oferta Laboral",fields:["oferta","owner","hasta","fin_de_publicación","localidad","tipo_de_puesto","name"]},callback:function(e){
					var data=[]
					for (const key in e.message) {
						if (Object.hasOwnProperty.call(e.message, key)) {
							const element = e.message[key];
							frappe.db.count('Postulacion', { oferta_laboral: element.name }).then(count => {
								var datapush=[]
									console.log(count)
									datapush.push(`<a onclick="editar_oferta('${element.name}') "> ${element.oferta}</a>`)
									datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element["fin_de_publicación"]} </a>`)
									datapush.push(`<a onclick="editar_oferta('${element.name}') " class="badge badge-success text-regular text-white m-auto">Activo</a>`)
									datapush.push(`<a onclick="postulantes_oferta('${element.name}') "><i class="octicon octicon-person"></i> ${count} </a>`)
									datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element.localidad} </a>`)
									datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element.tipo_de_puesto} </a>`)
									datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element.owner} </a>`)
									datapush.push(
									`
									<a class="btn btn-danger btn-sm primary-action shadow-sm" onclick="desactivar_oferta('${element.name}')">Desactivar</a> 
									<a class="btn btn-default btn-sm primary-action shadow-sm" onclick="postulantes_oferta('${element.name}')">Ver Postulantes</a>
									`);
									data.push(datapush)	
									datatable.refresh(data);

								})

							
							}
							
						}
					

					// ['Manas', 'Software Engineer', '$1400','],
					
				
				}
				})
				
			},500)
	});
});
	

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
	frappe.set_route("/app/postulacion");
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
