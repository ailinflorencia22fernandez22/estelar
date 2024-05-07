const products = [
    {
        id: "sandwich1",
        nombre: "producto 1",
        descripcion: "sandwich de jamon y queso",
        precio: 7200,
        stock: 5,
        imagen:"https://i.pinimg.com/originals/14/6a/ef/146aefc5fb79233350f56d74401db7f8.jpg"

    },
    {
        id: "sandwich2",
        nombre: "producto 2",
        descripcion: "sandwich de jamon y verdura",
        precio: 7200,
        stock: 5,
        imagen:"https://www.cucinare.tv/wp-content/uploads/2019/10/S%C3%A1ndwich-de-miga.jpg"
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