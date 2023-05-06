# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: MIT. See LICENSE

import frappe
import frappe.www.list
from frappe import _

no_cache = 1


def get_context(context):
	if frappe.session.user == "Guest":
		frappe.throw(_("You need to be logged in to access this page"), frappe.PermissionError)
	roles = frappe.get_roles(frappe.session.user)
	if "Alumnis" in roles:
		frappe.redirect("/app")
	if "Empresa" in roles:
		frappe.redirect("/app/mi-empresa")
	context.current_user = frappe.get_doc("User", frappe.session.user)
	context.show_sidebar = False
