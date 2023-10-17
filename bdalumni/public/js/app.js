$(document).ready(()=>{
	if(window.location.hostname === "empresas-jointec.tecsup.edu.pe"){
	   frappe.set_route("/app/mi-empresa")
	   $(".navbar-brand.navbar-home").attr("href","/app/mi-empresa")

	   $(".navbar-brand.navbar-home").append(`<span class="btn btn-primary btn-sm primary-action hidden-xs">Ir al panel de mi empresa</span>` )
	   $(".navbar-brand.navbar-home").click((e)=>{
			e.preventDefault();
			frappe.set_route("/app/mi-empresa");		
		   	$("#dtable").html('<div id="datatable" class="w-100"></div>');
			createDatatable();
			loadData();
	   })

	   
		createDatatable();loadData();


	   setTimeout(()=>{
	   $(".navbar-brand.navbar-home").attr("href","/app/mi-empresa");
	   $(".navbar-brand.navbar-home").append(`<span class="btn btn-primary btn-sm primary-action hidden-xs">Ir al panel de mi empresa</span>` )
	
	   $(".navbar-brand.navbar-home").click((e)=>{
			e.preventDefault();
			frappe.set_route("/app/mi-empresa");
			$("#dtable").html('<div id="datatable" class="w-100"></div>');
			createDatatable();
			loadData();
		})

		
	},700)
	}
})
if(localStorage.getItem("container_fullwidth")==="true"){}else{
	localStorage.setItem("container_fullwidth","true")
}
if($("body").hasClass("full-width")===false){
    $("body").addClass("full-width")
}
let datatable = null; 
function createDatatable(){
	datatable = new DataTable('#datatable', {
			
		columns: [
			{
				name:"Nombre",
				editable: false
			},
			{
				name:"Publicacion",
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
}
function loadData(){
	
	frappe.call({method:"frappe.client.get_list",args:{doctype:"Oferta Laboral",fields:["oferta","owner","hasta","fin_de_publicación","localidad","tipo_de_puesto","fecha_de_publicación","name","docstatus"],filters:[["docstatus","!=",2],['owner',"=",frappe.user.name]]},callback:function(e){
		let data=[]; let idx=0;
		for (const key in e.message) {
			const element = e.message[key];
			frappe.call({method:"frappe.client.get_count",args:{doctype:'Postulacion',filters:[["oferta_laboral","=",element.name]]},callback:function(e){
				let count = e.message
				var datapush=[]
				datapush.push(`<a onclick="editar_oferta('${element.name}') "> ${element.oferta}</a>`)
				datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element["fecha_de_publicación"]} </a>`)
				datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element["fin_de_publicación"]} </a>`)
				datapush.push(`<a onclick="editar_oferta('${element.name}') " class="badge ${element.docstatus==0?"badge-warning":"badge-success"} text-regular text-white m-auto">${element.docstatus==0?"Borrador":"Activo"}</a>`)
				datapush.push(`<a onclick="postulantes_oferta('${element.name}') "><i class="octicon octicon-person"></i> ${count} </a>`)
				datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element.localidad} </a>`)
				datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element.tipo_de_puesto} </a>`)
				datapush.push(`<a onclick="editar_oferta('${element.name}') ">${element.owner} </a>`)
				datapush.push(`<a class="btn btn-danger btn-sm primary-action shadow-sm" onclick="desactivar_oferta('${element.name}')">${element.docstatus==1?"Desactivar":"Eliminar"}</a>${element.docstatus==0?`<a class="btn btn-primary btn-sm primary-action shadow-sm" onclick="editar_oferta('${element.name}')">Editar</a>`: `<a class="btn btn-default btn-sm primary-action shadow-sm" onclick="postulantes_oferta('${element.name}')">Ver Postulantes</a>`}`);
				data.push(datapush)	
				datatable.refresh(data);
				idx++;
			}})
		}
	}})
}