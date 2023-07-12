// Copyright (c) 2022, Evolution Soluciones and contributors
// For license information, please see license.txt

frappe.ui.form.on('Oferta Laboral', {
	// refresh: function(frm) {

	// }
	after_save: function(frm){
		try{
			$("#dtable").html('<div id="datatable" class="w-100"></div>');
			createDatatable();
			loadData();
		}catch(e){}
	},
	after_cancel: function(frm){
		try{
		$("#dtable").html('<div id="datatable" class="w-100"></div>');
		createDatatable();
		loadData();
		}catch(e){}
	},
	validate: function(frm){
		try{
		$("#dtable").html('<div id="datatable" class="w-100"></div>');
		createDatatable();
		loadData();
		}catch(e){}
	},
	on_submit: function(frm){
		try{
		$("#dtable").html('<div id="datatable" class="w-100"></div>');
		createDatatable();
		loadData();
		}catch(e){}
	}
});
