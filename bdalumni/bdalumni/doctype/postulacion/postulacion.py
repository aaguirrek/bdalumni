# Copyright (c) 2022, Evolution Soluciones and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document
from frappe.share import add_docshare, notify_assignment
from frappe.utils import nowdate

class Postulacion(Document):
	def after_insert(self):
		oferta = frappe.get_doc("Oferta Laboral",self.oferta_laboral)
		
		add_docshare(self.doctype,self.name,oferta.owner,1,
		1,0,1,0,None,1)
		pass
