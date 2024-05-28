const products = [
    {
        id: "sandwich1",
        nombre: "Jamon y Queso",
        descripcion: "sandwich de jamon y queso",
        precio: 7200,
        stock: 5,
        category:"productos",
        imagen:"https://i.pinimg.com/originals/14/6a/ef/146aefc5fb79233350f56d74401db7f8.jpg"

    },
    
    {
        id: "sandwich2",
        nombre: "Jamon y Verdura",
        descripcion: "sandwich de jamon y verdura",
        precio: 7200,
        stock: 5,
        category:"productos",
        imagen:"https://www.cucinare.tv/wp-content/uploads/2019/10/S%C3%A1ndwich-de-miga.jpg"
    },
    {
        id: "sandwich3",
        nombre: "Roquefort",
        descripcion: "sandwich de Roquefort",
        precio: 8200,
        stock: 5,
        category: "especiales",
        imagen: "https://i.ytimg.com/vi/qEHHVrV3tNA/maxresdefault.jpg",

    },
    {
        id: "sandwich4",
        nombre: "Ternera",
        descripcion: "sandwich de Ternera",
        precio: 10200,
        stock: 5,
        category: "especiales",
        imagen: "https://cdn.pedix.app/PMZFSw2a9UV6xch0akeh/products/1651463428482.png?size=800x800",

    },
    {
        id: "sandwich5",
        nombre: "Crudo",
        descripcion: "sandwich de Crudo",
        precio: 10400,
        stock: 5,
        category: "especiales",
        imagen: "https://madrepata.com.ar/wp-content/uploads/2017/05/47-1.jpg",

    },
    {
        id: "sandwich6",
        nombre: "Anana",
        descripcion: "sandwich de Anana",
        precio: 9000,
        stock: 5,
        category: "especiales",
        imagen: "https://sakoteacasa.com.ar/wp-content/uploads/2018/12/sand.anana_.jpg",

    }
    
]

const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(products)
        }, 3000);
       
    });
    
};
export default getProducts 