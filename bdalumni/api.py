from frappe.desk.form.save import send_updated_docs
from frappe.share import add_docshare
from .javaUtil import *
import frappe
from frappe.utils.password import update_password as _update_password
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

@frappe.whitelist(allow_guest=True)
def search(docname,searchvalue):
	doc = frappe.db.sql("""SELECT name, coalesce(title_field, 'name') as title_field, coalesce(search_fields, 'name') as search_fields FROM `tabDocType` WHERE name = %(docname)s;""", values={"docname":docname}, as_dict=1)
	docname = "tab"+docname
	if doc[0]["search_fields"] != "name":
		doc[0]["search_fields"] = "name,"+doc[0]["search_fields"]
	data = frappe.db.sql("SELECT name, "+doc[0]["search_fields"]+" as title_field FROM `"+docname+"` WHERE CONCAT_WS('|', "+doc[0]["search_fields"]+" )  like %(searchvalue)s  LIMIT 15;", values={"searchvalue":"%"+searchvalue+"%"}, as_dict=1)
	return  data
	
@frappe.whitelist(allow_guest=True)
def search2(docname,searchvalue):
	#Evolution evolution;
	#List<Map<String,Object>> doclist;
	#Map<String,Object> doc;
	evolution = Evolution()
	doclist = evolution.sql("SELECT name, coalesce(title_field, 'name') as title_field, coalesce(search_fields, 'name') as search_fields FROM `tabDocType` WHERE name = '"+docname+"';")
	docname = "tab"+docname
	doc = doclist.getKey(0)
	if doc.getValue("search_fields") != "name":
		doc.put("search_fields","name,"+doc.getValue("search_fields"))
	return   evolution.sql("SELECT name, "+doc.getValue("search_fields")+" as title_field FROM `"+docname+"` WHERE CONCAT_WS('|', "+doc.getValue("search_fields")+" )  like '%"+searchvalue+"%'  LIMIT 15;")


@frappe.whitelist(allow_guest=True)
def create( email, nombre, apellido, pwd ):
	doc = frappe.get_doc({
					"doctype": "User",
					"enabled":1,
					"email": email,
					"username": email,
					"first_name": nombre,
					"last_name": apellido,
					"send_welcome_email":0,
					"thread_notify":0,
					"role_profile_name": "Empresa",
					"module_profile":"Empresa",
					"new_password":pwd,
					"user_type":"System User"
	})
	doc.insert(ignore_permissions=True)
	_update_password(user=email, pwd=pwd, logout_all_sessions=0)
	frappe.set_user("Administrator")
	doc = frappe.get_doc("User",email)
	doc.role_profile_name="Empresa"
	doc.save()
	#frappe.db.set_value("empresa",ruc,"owner",email)
	pass
@frappe.whitelist(allow_guest=True)
def setEmpresafinal(email):
	doc = frappe.get_doc("User",email)
	doc.module_profile = "Empresa"
	doc.role_profile_name ="Empresa"
	doc.user_type = "System User"
	doc.save(ignore_permissions=True)
	doc = frappe.get_doc("User",email)
	doc.user_type = "System User"
	doc.save(ignore_permissions=True)
	return doc


@frappe.whitelist(allow_guest=True)
def update_profile( email, first_name, last_name, new_password, mobile_no ):
	username = email
	if first_name == 'Administrator' or first_name == 'administrator':
		username = 'Administrator'
	doc = frappe.get_doc("User",username)
	doc.email = email
	doc.username = username
	doc.first_name = first_name
	doc.last_name = last_name
	doc.mobile_no = mobile_no
	doc.save(ignore_permissions=True)

	if new_password != '' and new_password is not None:
		doc = frappe.get_doc("User",username)
		_update_password(user=username, pwd=new_password, logout_all_sessions=0)
		doc.save(ignore_permissions=True)

	return doc

@frappe.whitelist(allow_guest=True)
def set_empresa(razon_social,email):
	add_docshare("Empresa",razon_social,email,1,1,0,1,0,None,1)

def ofertas(user):
	if not user:
		user = frappe.session.user
	return "(`tabOferta Laboral`.owner = {user} or `tabOferta Laboral`.assigned_by = {user})".format(user=user)

@frappe.whitelist()
def cancel(doctype,name):
	doc = frappe.get_doc(doctype, name)
	if doc.docstatus==0:
		doc.delete()
		frappe.msgprint("Se ha eliminado tu publicación", indicator="red", alert=True)
	else:
		doc.cancel()
		frappe.msgprint("Se ha desactivado tu publicación", indicator="red", alert=True)