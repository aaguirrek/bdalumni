from .javaUtil import *
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


