var grupo = new Set()
grupo=[{Nombre:"Alan", Celular:111, Edad:10},
  {Nombre:"Beto", Celular:222, Edad:20},
  {Nombre:"Carlos", Celular:333, Edad:30},
  {Nombre:"David", Celular:444, Edad:40},
  {Nombre:"Efrain", Celular:555, Edad:50}]

function Buscar(){
let tex = document.getElementById("textoabuscar").value
for(let i=0;i<5;i++){
  if(grupo[i].Celular==tex){
  document.getElementById("resultado").innerHTML="Nombre: "+grupo[i].Nombre+"<br>"+ "Celular: "+grupo[i].Celular+"<br>"+"Edad: "+grupo[i].Edad +"<br> <br>"
  }
}
}

function lista(){
    document.getElementById("lista").value=""
    let res=""
    for(let i=0;i<5;i++){
    res= res+ "Nombre: "+grupo[i].Nombre+"<br>"+ "Celular: "+grupo[i].Celular+"<br>"+"Edad: "+grupo[i].Edad +"<br> <br>"
    }
    document.getElementById("lista").innerHTML=res


}