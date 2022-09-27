import frappe
class ArrayList:
	def __init__(self):
		self.thelist = []
		return 
	def set(self, lists):
		self.thelist = lists
		return self
	def add(self,value):
		self.thelist.append(value)
		return
	def add(self,index=-1, value=None):
		self.thelist[index]=value
		return
	def getKey(self, index):
		return self.thelist[index]
	def get_all(self):
		return self.thelist
class HashMap:
	def __init__(self):
		self.theMap = {}
		return
	
	def setValue(self, objects):
		for key in objects:
			self.theMap[key] = objects[key]
		return self
	def put(self, key, value):
		self.theMap[key] = value
		return
	def getValue(self,key):
		return self.theMap[key]
class Evolution:
	def __init__(self):
		return
	def get_all(self, doctype, *args, **kwargs):
		return frappe.get_all(doctype,args,kwargs)
	def get_doc(self, doctype, name):
		return frappe.get_doc(doctype,name)
	def save(self,doc):
		return doc.save()
	def insert(self,doc):
		return doc.insert()
	def delete(self,doc):
		return doc.delete()
	def sql(self,sql):
		lista = ArrayList()
		map = HashMap()
		doclist =frappe.db.sql(sql, as_dict=1)
		index = 0
		for el in doclist:
			doclist[index] = map.setValue(el)
			index=index+1
		return lista.set(doclist)
		