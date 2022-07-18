import frappe

@frappe.whitelist(allow_guest=True)
def docField(docname):
	data = frappe.db.sql("""SELECT * FROM tabDocField WHERE parent = %(docname)s ORDER BY idx ASC;""", values={"docname":docname}, as_dict=1)
	return data

@frappe.whitelist(allow_guest=True)
def docTable(docname):
	data = frappe.db.sql("""SELECT * FROM tabDocField WHERE parent = %(docname)s  AND in_list_view = 1  ORDER BY idx ASC;""", values={"docname":docname}, as_dict=1)
	return data


@frappe.whitelist(allow_guest=True)
def docListView(docname):
	data = frappe.db.sql("""SELECT * FROM tabDocField WHERE parent = %(docname)s  AND in_list_view = 1  ORDER BY idx ASC;""", values={"docname":docname}, as_dict=1)
	return data