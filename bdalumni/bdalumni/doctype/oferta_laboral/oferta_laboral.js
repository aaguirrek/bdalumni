// Copyright (c) 2022, Evolution Soluciones and contributors
// For license information, please see license.txt

frappe.ui.form.on('Oferta Laboral', {
	// refresh: function(frm) {

	// }
	after_save: function(frm){
		loadData();
	},
	after_cancel: function(frm){
		loadData();
	},
	validate: function(frm){
		loadData();
	},
	on_submit: function(frm){
		loadData();
	}
});
