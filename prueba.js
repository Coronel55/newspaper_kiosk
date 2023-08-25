lista=["https://www.abc.com.py/","https://www.lanacion.com.py/","https://www.ultimahora.com/","https://elpais.com/america/"];

  pos = 0;
  
  const pagprevia = document.getElementById("pagprevia");
  const pagsiguiente = document.getElementById("pagsiguiente");
  const contenido= document.getElementById("contenido");
  

  function actualizar1() {
    pos=pos-1
    if (pos<0){
        pos=lista.length-1;
    }
    contenido.src= lista[pos];
  }
  function actualizar2() {
    pos=pos+1
    if (pos>lista.length-1){
        pos=0;
    }
    contenido.src= lista[pos];
  }