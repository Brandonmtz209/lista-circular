class Inventario{
    constructor(value){
        this.value = value;
        this.next = null;
        this.primero=null;
    }
    agregar(base){
    if(this.primero === null){
      this.primero = base;
      this.primero.next=base;
    }else{
        let temp=this.primero;
        while(temp.next!=this.primero){
            temp = temp.next;
            //console.log(temp);
        }
        base.next=this.primero;
        temp.next=base;
    }
    
    base.next = this.primero;
    }
    listar(){
        let res='';
        let temp=this.primero;
        if(this.primero!=null){
            do{
                res+='Nombre: '+temp.nombre+', Minutos: '+temp.minutos +'<br>';
                temp=temp.next;
            }while(temp!=this.primero);
        }
        return res;
    }
    buscar(nombre) {
        let actual = this.primero;
        if(this.primero!=null){
            do{
                if (actual.nombre == nombre) {
                    return actual;
                }else
                actual=actual.next;
            }while(actual!=this.primero);
        }
    }
    recorrido(baseInicio,horaInicio,minutoInicio,horaFin,minutoFin){
        console.log("el tiempo de inicio es: "+horaInicio+':'+minutoInicio+" y el tiempo final es: "+horaFin+":"+minutoFin);
        let tiempoinicio;
        let tiempofinal;
        parseInt(horaInicio*=60);
        parseInt(horaFin*=60);
        tiempoinicio=horaInicio+parseInt(minutoInicio);
        tiempofinal=horaFin+parseInt(minutoFin);
        let temp=this.primero;
        while(temp.nombre!=baseInicio){
            temp = temp.next;
        }
        let tiempopasado=tiempoinicio;
        console.log("estas en la base: "+temp.nombre+" y son las "+Math.floor(tiempopasado/60)+':'+Math.floor(tiempopasado%60));
        //console.log(tiempofinal,tiempopasado);
        while(tiempopasado<=tiempofinal){
            tiempopasado+=parseInt(temp.minutos);
            temp=temp.next;
            console.log("estas en la base: "+temp.nombre+" y son las "+Math.floor(tiempopasado/60)+':'+Math.floor(tiempopasado%60));
        }
        //console.log(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin);
    }
    eliminar(nombre){
        if (this.primero.nombre == nombre) {
          this.primero = this.primero.next;
          if(this.primero==this.primero.next){
            this.primero=null;
            //console.log("entro aqui");
          }
          //console.log("entro el primer if");
        }else{
            //console.log("entro al else");
          let actual = this.primero;
          if(this.primero!=null){

            //console.log("entro al segundo if");
            do{
                if (actual.next.nombre === nombre) {
                    //console.log("entro el tercer if");
                    actual.next = actual.next.next;
                    return actual;
                }else
                actual = actual.next;
            }while(actual!=this.primero);
          }
       }
    }

      
}