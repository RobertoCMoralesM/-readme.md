class Persona{
    constructor(celular,nombre,edad){
            this.Celular=celular;
            this.nombre=nombre;
            this.edad=edad;
    }
    info(){
        return "Celular: "+this.Celular+"<br>"+"Nombre: "+this.nombre+"<br>"+"Edad: "+this.edad;
    }
}

class Lista{
    constructor(){
        this.datos=[];
    }
    agregar(nuevo){
        this.datos.push(nuevo);
    }
    listar(){
        let txtt="";
        for(let i=0; i<this.datos.length; i++){
            txtt=txtt+this.datos[i].info()+"<br>"+"<br>";
        }
        return txtt;
    }

    eliminar(ID){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].ID===ID) {
                return this.datos.splice(i);
            }
        }
        return null;
    }

    buscar(Numero){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].Celular==Numero) {
                return this.datos[i];
            }
        }
        return null;

    }
}

let persona=new Lista();


let nuevo = new Persona('111','Alan',10);
persona.agregar(nuevo);
nuevo = new Persona('222','Beto',20);
persona.agregar(nuevo);
nuevo = new Persona('333','Carlos',30);
persona.agregar(nuevo);
nuevo = new Persona('444','David',40);
persona.agregar(nuevo);
nuevo = new Persona('555','Efrain',50);
persona.agregar(nuevo);

document.write(persona.listar());

let buscado = persona.buscar(111);
document.write("Se encontro:" + buscado.info());