const products = [
    {
        id: "sandwich1",
        nombre: "Jamon y Queso",
        descripcion: "Los sandwiches de miga de jamón y queso son una delicia clásica que combina lo mejor de ambos mundos: el sabor ahumado y salado del jamón con la cremosidad y el derretido del queso. Este tentador bocadillo se compone de finas capas de pan blanco rellenas con generosas porciones de jamón de calidad y láminas de queso derretido, creando una textura irresistible y un sabor reconfortante en cada bocado. Ya sea en un almuerzo rápido o como acompañamiento en una tarde de picnic, este sandwich es una opción versátil y satisfactoria que nunca pasa de moda. ¡Una combinación clásica que deleitará a los amantes del buen sabor y la simpleza en cada mordisco!",
        precio: 7200,
        stock: 10,
        category:"productos",
        imagen:"https://i.pinimg.com/originals/14/6a/ef/146aefc5fb79233350f56d74401db7f8.jpg"

    },
    
    {
        id: "sandwich2",
        nombre: "Jamon y Verdura",
        descripcion: "Deliciosos y tradicionales, los sandwiches de miga de jamón y verdura son una combinación exquisita de finas capas de pan blanco rellenas con jamón de calidad y una colorida selección de verduras frescas como lechuga, tomate y zanahoria, todo sazonado con una pizca de sal y un toque de mayonesa. Esta clásica opción de la gastronomía argentina ofrece un equilibrio perfecto entre sabores suaves y crujientes, ideal para satisfacer antojos tanto en un almuerzo rápido como en una merienda reconfortante. ¡Una elección irresistible para los amantes del buen sabor y la simplicidad de los ingredientes frescos!",
        precio: 7200,
        stock: 10,
        category:"productos",
        imagen:"https://www.cucinare.tv/wp-content/uploads/2019/10/S%C3%A1ndwich-de-miga.jpg"
    },
    {
        id: "sandwich3",
        nombre: "Roquefort",
        descripcion: "Los sandwiches de miga de Roquefort ofrecen una experiencia culinaria única y sofisticada. El característico sabor robusto y ligeramente picante del queso Roquefort se combina magistralmente con el suave pan blanco en capas finas. Este exquisito bocadillo presenta una armoniosa fusión de sabores, donde la intensidad del queso azul se equilibra con la suavidad del pan, creando una experiencia gustativa refinada y satisfactoria. Ideal para aquellos que buscan un toque gourmet en su comida diaria, este sandwich es una elección elegante y deliciosa que cautivará los paladares más exigentes. ¡Una verdadera delicia para los amantes del queso y la alta cocina!",
        precio: 8200,
        stock: 10,
        category: "especiales",
        imagen: "https://i.ytimg.com/vi/qEHHVrV3tNA/maxresdefault.jpg",

    },
    {
        id: "sandwich4",
        nombre: "Ternera",
        descripcion: "Los sandwiches de miga de ternera son una opción abundante y sabrosa que combina la jugosidad de la carne de ternera con la suavidad del pan blanco en capas finas. Cada bocado ofrece una explosión de sabor, con la ternera tierna y sazonada como protagonista principal. Este bocadillo satisfactorio es perfecto para aquellos que buscan una opción carnívora y reconfortante para su almuerzo o merienda. Ya sea acompañado de un toque de mostaza o simplemente por sí solo, este sandwich de miga es una elección clásica y deliciosa que deleitará a los amantes de la carne. ¡Una opción contundente y satisfactoria para cualquier ocasión!",
        precio: 10200,
        stock: 5,
        category: "especiales",
        imagen: "https://cdn.pedix.app/PMZFSw2a9UV6xch0akeh/products/1651463428482.png?size=800x800",

    },
    {
        id: "sandwich5",
        nombre: "Crudo",
        descripcion: "Los sandwiches de miga de jamón crudo son una delicia gourmet que combina la exquisitez del jamón crudo con la suavidad del pan blanco en finas capas. Cada bocado ofrece una experiencia sensorial única, con el sabor delicado y ligeramente salado del jamón crudo que se funde armoniosamente con la textura ligera del pan. Este bocadillo es una elección elegante y sofisticada, perfecta para aquellos que buscan disfrutar de un sabor refinado y auténtico en cada mordisco. Ya sea como un tentempié gourmet o como parte de una comida ligera, los sandwiches de miga de jamón crudo son una opción irresistiblemente deliciosa para los paladares más exigentes. ¡Una verdadera exquisitez para los amantes de la buena cocina!",
        precio: 10400,
        stock: 5,
        category: "especiales",
        imagen: "https://madrepata.com.ar/wp-content/uploads/2017/05/47-1.jpg",

    },
    {
        id: "sandwich6",
        nombre: "Anana",
        descripcion: "Los sandwiches de miga de ananá son una sorprendente combinación de sabores dulces y salados que cautivan los sentidos. Con el refrescante sabor tropical del ananá, este bocadillo añade un toque exótico a la suavidad del pan blanco en capas finas. Cada bocado es una explosión de frescura y textura, con el ananá aportando un contraste jugoso y ligeramente ácido que complementa perfectamente la ligereza del pan. Este bocadillo es una elección refrescante y original para aquellos que buscan algo fuera de lo común en su almuerzo o merienda. Ya sea para un picnic en el parque o para una reunión informal, los sandwiches de miga de ananá son una opción deliciosa y sorprendente que deleitará a todos los que los prueben. ¡Una verdadera fiesta tropical para el paladar!",
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