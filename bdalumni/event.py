# -*- coding: utf-8 -*-
# Copyright (c) 2017, Frappe Technologies and contributors
# For license information, please see license.txt
# bench --site erp.santanaviajes.com execute crm.task.update_all
from __future__ import unicode_literals
import frappe
import json
from frappe.share import add_docshare
import datetime

@frappe.whitelist()
def checkEmpresa(doc, event=None): 
	ruc = doc.ruc
	email = doc.name
	first_name = doc.nombre_completo
	if frappe.db.exists("Empresa",{"ruc":ruc}) is None:
		pass
	else:
		if frappe.db.exists("User",email) is None:
			doc = frappe.get_doc({
							"doctype": "User",
							"enabled":1,
							"first_name":first_name,
							"full_name":first_name,
							"email": email,
							"send_welcome_email":1,
							"thread_notify":0,
							"role_profile_name": "Empresa",
							"module_profile":"Empresa",
							"user_type":"System User"
			})
			doc.insert(ignore_permissions=True)
			doc = frappe.get_doc("User",email)
			doc.role_profile_name="Empresa"
			doc.save()
		empresa = frappe.get_list(doctype="Empresa",fields=["name"],filters=[["ruc","=",ruc]])
		add_docshare("Empresa",empresa[0].name,email,1,1,0,1,0,None,1)
		
		pass