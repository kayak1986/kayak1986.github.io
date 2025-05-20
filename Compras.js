const producto =[

    {
        id: 1,
        nombre: "Paseo9a12",
        precio: "25.000",
        img:"",
        descripcion: "",
    },
    {
        id: 2,
        nombre: "kayak14a17",
        precio: "25",
        img:"",
        descripcion: "",
    },
    {
        id: 3,
        nombre: "kayak9a17",
        precio: "9000",
        img:"",
        descripcion: "",
    },
    {
        id: 4,
        nombre: "kayaknocturno",
        precio: "6000",
        img:"",
        descripcion: "",
    },
    {
        id: 5,
        nombre: "Remopaseo",
        precio: "6000",
        img:"",
        descripcion: "",
    },
    {
        id: 6,
        nombre: "Remoclase",
        precio: "5000",
        img:"",
        descripcion: "",
    },
    {
        id: 7,
        nombre: "Remocurso",
        precio: "25000",
        img:"",
        descripcion: "",
    },
];


let contadorCarrito = 0;
const carrito = [];

const productoCatalogoHTML = (producto) => {
    const text = `
          <div class="col"></div>
          <div class="card" style="width: 18rem;">
          <img src="img/happy-friends-kayaking-river-with-sunset-background.jpg" 
          class="card-img-top" alt="200" height="200">
          <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Duración 3hs de 9am a 12am - Disfrutaras del delta y su magia acompañado por un guia 
          <br>Precio: ${producto.precio}.</p>
          <a href="#" class="btn btn-success">Agregrar</a>
        </div>
        `;
};
const productoCarritoHTML = (producto) => "";

const mostrarCatalogo = () => {};
const mostrarCarrito = () => {};


const botonesCatalogo = () => {};
const botonesCarrito = () => {};

mostrarCatalogo();
