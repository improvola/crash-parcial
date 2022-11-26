const appWeb = new Vue({
    el: '#appWeb',
    data:{
        lista: producto,
        name:'',
        carrito: [],
        legajoP: '',
        nomP: '',
        precioP: '',
        listados: app.agregarCarrito()
    },
    methods:{
        mostrar:function(){
            console.log("Este es el listado: "+this.listados);
        }
    },

    computed:{
        mostrarProducto(){
            return this.carrito;
        },
    }
})
