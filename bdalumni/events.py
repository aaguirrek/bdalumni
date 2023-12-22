# -*- coding: utf-8 -*-
# Copyright (c) 2017, Frappe Technologies and contributors
# For license information, please see license.txt
# bench --site erp.santanaviajes.com execute crm.task.update_all
from __future__ import unicode_literals
import frappe
import json
from frappe.share import add_docshare
import datetime



@frappe.whitelist(allow_guest=True)
def get_fields(doctype: str):
	DocField = frappe.qb.DocType("DocField")
	from_doc_fields = (
		frappe.qb.from_(DocField)
		.select(
			DocField.fieldname,
			DocField.fieldtype,
			DocField.label
		)
		.where(DocField.parent == doctype)
		.run(as_dict=True)
	)
	res = []
	res.extend(from_doc_fields)
	return res

