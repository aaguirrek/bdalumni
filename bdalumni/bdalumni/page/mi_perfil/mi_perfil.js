frappe.pages['mi-perfil'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Mi Perfil',
		single_column: true
	});
	frappe.call({
		method:"frappe.client.get",
		args:{
			doctype:'User',
			name:frappe.user.name
		},
		freeze:true,
		callback:function(e){
			const template = frappe.render_template("mi_perfil", {doc:e.message} );
			$('[data-page-route="mi-perfil"] .page-content').html(template);
		}
	})

	page.set_primary_action('Actualizar mi perfil', () => {
		if($("#new_password").val() === $("#confirm_password").val()){
			frappe.call({
				method:"bdalumni.api.update_profile",
				args:{
					first_name:$("#first_name").val(),
					last_name:$("#last_name").val(),
					email:$("#email").val(),
					mobile_no:$("#mobile_no").val(),
					new_password:$("#new_password").val()
				},
				freeze:true,
				callback:function(e){
					$("#new_password").val("");
					$("#confirm_password").val("");
					frappe.msgprint("Se han actualizado sus datos correctamente");
				}
			})
		}else{
			$(".password-mismatch-message").html( "Las contraseñas no coinciden" );
		}
	})
}



