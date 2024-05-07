import frappe.defaults
from frappe.desk.form.save import send_updated_docs
from frappe.share import add_docshare
import frappe.utils
#from .javaUtil import *
import frappe
from frappe.utils.password import update_password as _update_password
@frappe.whitelist(allow_guest=True)
def docField(docname):
	data = frappe.db.sql("""SELECT * FROM tabDocField WHERE parent = %(docname)s ORDER BY idx ASC;""", values={"docname":docname}, as_dict=1)
	return data

@frappe.whitelist(allow_guest=True)
def get_initial(name,pwd):
	if pwd=="":
		return {"error":True}
	if frappe.db.exists("Perfil del exalumno",name, cache=False) is None:
		return {"error":True}
	data = frappe.get_doc("Perfil del exalumno", name)
	if data.pwd==pwd or pwd.startswith("g__"):
		data.foto = frappe.utils.get_url( data.foto,True) 
		asesorias =  frappe.db.count(dt="Asesorias",filters=[["egresado",'=',name],['estado','=','Aprobado']])
		eventos =  frappe.db.count(dt="Eventos",filters=[["fecha",'>',frappe.utils.today()]])
		postulacion = frappe.get_all('Postulacion',fields=["*"],filters=[['exalumno','=',name]])
		if data.cover != None:
			cover =  frappe.utils.get_url( data.cover,True) 
		else:
			cover = frappe.utils.get_url( "/files/header-min.jpg",True)
		extra={
			"full_name":data.nombre + " "+data.apellidos,
			"cover":cover,
			"cargo":data.experiencia_laboral[len(data.experiencia_laboral)-1].cargo+" en "+data.experiencia_laboral[len(data.experiencia_laboral)-1].nombre_de_la_empresa
		}
		return {'extra':extra,"egresado":data,'asesorias':asesorias,'eventos':eventos,'postulacion':postulacion,"error":False}
	else:
		return {"error":True}

@frappe.whitelist(allow_guest=True)
def checkEmpresa(ruc,email,first_name):
	
	frappe.set_user("Administrator")
	if frappe.db.exists("Empresa",{"ruc":ruc}) is None:
		return False
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
			frappe.set_user("Administrator")
			doc = frappe.get_doc("User",email)
			doc.role_profile_name="Empresa"
			doc.save()
		empresa = frappe.get_list(doctype="Empresa",fields=["name"],filters=[["ruc","=",ruc]])
		add_docshare("Empresa",empresa[0].name,email,1,1,0,1,0,None,1)
		
		return True


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

@frappe.whitelist()
def checkEmpresa(ruc,email,first_name):
	
	frappe.set_user("Administrator")
	if frappe.db.exists("Empresa",{"ruc":ruc}) is None:
		return False
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
			frappe.set_user("Administrator")
			doc = frappe.get_doc("User",email)
			doc.role_profile_name="Empresa"
			doc.save()
		empresa = frappe.get_list(doctype="Empresa",fields=["name"],filters=[["ruc","=",ruc]])
		add_docshare("Empresa",empresa[0].name,email,1,1,0,1,0,None,1)
		
		return True

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


@frappe.whitelist(allow_guest=True)
def get_ofertas_all():
	lista_carreras = frappe.get_list(doctype="Nombre de carrera",fields=["name","nombre"],limit_page_length=200,order_by="nombre asc")
	ofertas_laborales = frappe.get_list(doctype="Oferta Laboral",fields=["name","oferta","mostrar_salario","fecha_de_publicación","fin_de_publicación","hasta","desde","empresa","logo_empresa","grado_profesional","nombre_de_carrera","tipo_de_puesto","localidad","puestos_sin_frontera","vacantes"],filters=[["docstatus","=","1"],["fin_de_publicación",">",frappe.utils.nowdate() ]],limit_page_length=200,order_by="modified desc")
	ofertas=[]
	for oferta in ofertas_laborales:
		oferta.logo_de_la_empresa = frappe.utils.get_url( oferta.logo_empresa,True)
		oferta.desde = "S/. "+str(oferta.desde)
		if oferta.hasta > 0 :
			oferta.desde = str(oferta.desde)+" - S/. "+str(oferta.hasta)
		ofertas.append(oferta)
	
	return {
		"carreras":lista_carreras,
		"ofertas":ofertas
	}

@frappe.whitelist(allow_guest=True)
def get_oferta(name,user=None):
	oferta 					= frappe.get_doc( "Oferta Laboral" , name )
	extras 					= {
		"logo_empresa":"",
		"desde":""
	}
	extras["logo_empresa"]  = frappe.utils.get_url( oferta.logo_empresa , True )
	extras["desde"] 		= "S/. " + str( oferta.desde )

	if  oferta.desde > 0 and oferta.hasta > 0:
		extras["desde"] = "S/. " + str(oferta.desde)+" - S/. "+str(oferta.hasta)
	if  oferta.desde == 0:
		extras["desde"] = "S/. " + str(oferta.hasta)


	postulacion = frappe.get_list(
		doctype = "Postulacion",
		fields = ["*"],
		filters = [
			["exalumno","=",user],
			["oferta_laboral","=",name]
		]
	)


	return {

		"oferta":oferta,
		"extras":extras,
		"postulacion":postulacion

	}