$(document).ready(()=>{
	if(frappe.user.has_role("Empresa") === true && (frappe.user.has_role("System Manager") === false || frappe.user.has_role("System Manager") === undefined)){
	   frappe.set_route("/app/mi-empresa")
	}
})