const app = new Vue({
    el: '#app',
    data: {
        lista: producto,
        nombreProducto: '',
        // BUSCADOR FILTRO
        name:'',
        carrito: [],
        legajoP: '',
        nomP: '',
        precioP: '',
    },
    methods:{
        // ESTO ES UN EXPERIMENTO
        agregar: function(){
            console.log("Agregue");
            if( this.nomP.trim() != '' && this.precioP.trim() != ''){
                this.lista.push({
                    id: parseInt(this.legajoP),
                    nombre: this.nomP,
                    precio:  parseInt( this.precioP ),
                    fotoUrl: 'img/productogenericocrash.png'
                });
                this.legajoP = '';
                this.nomP = '';
                this.precio = '';
            }
        },
       
        darLike: function(produ){
            produ.like = !produ.like;
            this.agregarCarrito(produ.like, produ.id);
        },
        agregarCarrito: function(varr,es){
            if(varr == true){
                console.log(es);
                // this.lista.forEach(element => {
                //     if(es== element.id ){
                //         console.log(element);
                //     }else{
                //         console.log("No compraste nada")
                //     }
                // });
                // lista.id[es];
 
                console.log("Este es el id: "+this.lista[es-1].id);
                console.log(this.lista[es-1].nombre);
                console.log(this.lista[es-1].precio);
                pedido = this.lista[es-1];
                console.log("Agregaste el producto");
                this.carrito.push(
                    pedido,
                );
                // this.carrito.forEach(element => {
                //     //console.log(element.id)
                //     console.log(element.nombre)
                //     //console.log(element.precio)
                // });


                localStorage.setItem('producto', this.carrito[0].nombre );
                this.carrito[0].nombre = localStorage.getItem('producto');
     
                return this.carrito;
                // return pedido;
            }else{
                console.log("Error");
            }
        },

        eliminar: function(index){
            console.log(index);
        },
        borrarTodo: function(){
            this.lista = [];
        }
    },

    computed: {
        buscarProducto(){
            return this.lista.filter(post => {
                return post.nombre.toLowerCase().includes(this.nombreProducto.toLowerCase());
            });
        },
        filtrarProducto(){
            return this.lista.sort();
        },
        mostrarProducto(){
            return this.carrito;
        },
        productosTotales(){
            return this.carrito.length;
        }
    }
})