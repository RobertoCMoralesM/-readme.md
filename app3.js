var grupo =[ {Nombre:"Alan", Celular:111, Edad:10},
{Nombre:"Beto", Celular:222, Edad:20},
{Nombre:"Carlos", Celular:333, Edad:30},
{Nombre:"David", Celular:444, Edad:40},
{Nombre:"Efrain", Celular:555, Edad:50}]

function Buscar(){
let tex = document.getElementById("textoabuscar").value
let bus =grupo.map(function(grupo){
    if(grupo.Celular==tex){
       return document.getElementById("resultado").innerHTML="Nombre: "+grupo.Nombre+"<br>"+ "Celular: "+grupo.Celular+"<br>"+"Edad: "+grupo.Edad +"<br> <br>"
        }
})
}

function lista(){
    document.getElementById("lista").value=""
    let res=""
    let lista =grupo.map(function(grupo){
        res= res+ "Nombre: "+grupo.Nombre+"<br>"+ "Celular: "+grupo.Celular+"<br>"+"Edad: "+grupo.Edad +"<br> <br>"
    })
    lista=res
    document.getElementById("lista").innerHTML=res
}