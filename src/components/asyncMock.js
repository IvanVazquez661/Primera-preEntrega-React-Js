import img1 from "../components/img/img1.webp"
import img2 from "../components/img/img2.jpg"
import img3 from "../components/img/img3.jpg"

const products = [
    {
      id: '1',
      name: 'Xiaomi POCO F5',
      price: 500,
      category: 'Celulares',
      img:img1,
      stock: 100,
      descripcion: 'Descripción de Xiaomi POCO'
    },
    {
      id: '2',
      name: 'Apple iPad mini',
      price: 1000,
      category: 'tablet',
      img:img2, 
      stock: 50
    },
    {
      id: '3',
      name: 'Xbox Series X',
      price: 1000,
      category: 'Consolas',
      img:img3, 
      stock: 50
    },
  ];
  
  export const getProduct = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      }, 500);
    });
  };

  export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === category));
      }, 500);
    });
  };
