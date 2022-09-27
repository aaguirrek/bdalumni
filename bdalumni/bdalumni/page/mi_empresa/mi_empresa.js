frappe.pages['mi-empresa'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Bienvenido Evolution Soluciones',
		single_column: true
	});
	const template = frappe.render_template("mi_empresa", {} );
	$('[data-page-route="mi-empresa"] .page-content').html(template);
	

}
function refresh(){
	frappe.set_route("/empresa/Evolution Soluiones EIRL");
}