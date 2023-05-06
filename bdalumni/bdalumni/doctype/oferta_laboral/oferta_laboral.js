// Copyright (c) 2022, Evolution Soluciones and contributors
// For license information, please see license.txt

frappe.ui.form.on('Oferta Laboral', {
	// refresh: function(frm) {

	// }
	after_save: function(frm){
		$("#dtable").html('<div id="datatable" class="w-100"></div>');
		createDatatable();
		loadData();
	},
	after_cancel: function(frm){
		$("#dtable").html('<div id="datatable" class="w-100"></div>');
		createDatatable();
		loadData();
	},
	validate: function(frm){
		$("#dtable").html('<div id="datatable" class="w-100"></div>');
		createDatatable();
		loadData();
	},
	on_submit: function(frm){
		$("#dtable").html('<div id="datatable" class="w-100"></div>');
		createDatatable();
		loadData();
	}
});
