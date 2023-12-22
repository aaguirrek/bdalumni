<script setup>
import { EmailEditor } from 'vue-email-editor'
import { ref } from 'vue';
import Swal from 'sweetalert2'
const minHeight = ref("1000px")
const locale =  ref("es")
const projectId =  ref(204902) // replace with your project id
let path = location.href.split("?")[1].split("&")
let args = {}
for (const iterator of path) {
  let arg = iterator.split("=")
  args[arg[0]] = decodeURI(arg[1])
}

console.log(args)

const tools = ref({
  // disable image tool
  image: {
    enabled: true
  }
})
const emailEditor = ref(null)
const options =  ({
  customCSS: [
    `
      a[href="https://unlayer.com/?utm_medium=web-editor&utm_campaign=editor-referral"] {
          display: none!important;
      }

      .blockbuilder-tools-panel.bootstrap .tab-content{
          height:100%!important;
      }`
          
  ]

})
const appearance =  ({
  theme: 'light',
} )

let jsondata={}
let response={}
frappe.call({
  method: "frappe.client.get",
  args: {doctype:"Email Builder",name:args.docname },
  callback(res) {
    response = res.message
    if(res.message.data!==null && res.message.data!==undefined){
      jsondata = JSON.parse(res.message.data)
    }
    
  }
});
const editorLoaded = () => {
        emailEditor.value.editor.loadDesign(jsondata);
        emailEditor.value.editor.registerCallback('image', function(file, done) {
                  var data = new FormData()
                 data.append('file',  file.attachments[0], file.attachments[0].name);
                 done({ progress: 10 })
                data.append('is_private', 0);
                data.append('folder', "Home");
                data.append('file', file.attachments[0])
                frappe.SendMedia({method:"upload_file",args:data,callback(e){
                  console.log(e)
                  done({ progress: 100, url: location.origin+e.message.file_url })
                }})
      })
    }
    

const exportHtml = () => {

  emailEditor.value.editor.saveDesign(
      (design) => {
        response.data = JSON.stringify(design)
        response.doctype = "Email Builder"
        frappe.call({
          method: "frappe.client.save",
          args: {
            doc:response
          },
          callback(res) {
            response = res.message
          }
        });

      }
  )
  emailEditor.value.editor.exportHtml(
      (data) => {
        console.log('exportHtml', data);

        frappe.call({
          method: "frappe.client.get",
          args: {doctype:args.doctype,name:args.docname },
          callback(r) {
            r.message
            r.message.message = data.html
            frappe.call({
              method: "frappe.client.save",
              args: {
                doc:r.message
              },
              callback(res) {
               
                  Swal.fire({
                    title: "Guardado!",
                    text: "Se ha guardado su diseño, de manera exitosa!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                  })
              }
            });
            
            
          }
        });
        


      }
    )
}

</script>

<template>
     <div id="app">
    <div class="container">
      <div id="bar" style="height: 66px;">
        <h3 style="float:left; margin-left: 1rem; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Creador de correos</h3>
        <button v-on:click="exportHtml">Guardar</button>
      </div>

      <EmailEditor
        :appearance="appearance"
        min-height="calc(100vh - 70px)"
        :project-id="projectId"
        :tools="tools"
        :options="options"
        :locale="locale"
        ref="emailEditor"
        v-on:load="editorLoaded"
      />

    </div>
  </div>
</template>

<style>
body{
  margin: 0;
}
iframe{
  margin-top:66px;
  height: calc(100vh - 70px)!important;
}
button{
  margin-top:1rem;
  border-radius: 10px;
    border: none;
    margin-bottom: 1rem;
    float: right;
    margin-right: 1rem;
    height: 24px;
    font-size: 9pt;
    background: #1d1d1c;
    color: white;
}
#bar{
width: 100vw;
  height: 66px;
    box-shadow: 0px 1px 2px rgba(25, 39, 52, 0.05), 0px 0px 4px rgba(25, 39, 52, 0.1);
    z-index: 2;
    background: white;
    position: fixed;
}
</style>

