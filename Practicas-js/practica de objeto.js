    class miClase {

        constructor(primero,segundo)
        { //el constructor son las propiedades
            this.uno = primero;
            this.dos = segundo;
            this.tres = "Hola";
        }

    miMetodoUno()
    { //se declaro un Metodo/funcion
      return this.uno; 
    }
    mimetodoDos(ParametroUno,ParametroDos)
    { //se declaro un Metodo/funcion con parametros
    document.write(
        "El parametro UNO es: " + ParametroUno +
        "</br>El parametro Dos es: " + ParametroDos
    );
    }
}  // FIN DE LA CLASE


   //Instancio mi clase
   var ObjetoUno = new miClase("Emma","123");
/*  //Recuperar datos insertados.
    document.write(ObjetoUno.uno+"</br>");
    ObjetoUno.mimetodoDos("kevin","MetodoDos"); */
  
/*   //Primero llamo al objeto y del objeto al metodo
    var nombre = ObjetoUno.miMetodoUno();
    console.log(nombre+"</br>");
    nombre =String(prompt(ObjetoUno.miMetodoUno()));
 */


    //Herencia
    class miClaseDos extends miClase{ //extends miClase hereda los valores de clase 1
        constructor(uno,dos,cuarto){ //propiedades
            super (uno,dos);
            this.cuatro = cuarto;
        }
    }
    var objetoheredado = new miClaseDos("asd","123","Pepe");
    document.write(objetoheredado.dos);