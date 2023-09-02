class ProductManager {
    constructor () {
        this.products = [];
    }
    
    addproductos(title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.products.length ? this.products[this.product.length-1].id + 1 : 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        // console.log(product);
        if (this.products.find (codeRepetido => codeRepetido.code === product.code )) {
            console.log("este producto ya existe")
        }
        else {
            this.products.push(product);
        }
        // console.log(this.products);
    };

    static getProducts() {
        return (this.products);
    }

    static getProductsById(IdToFind) {
        if (this.products.find (IdExistente => IdExistente.id === IdToFind)) {
            console.log (IdExistente)
        }
        else {
            console.log ("not found")
        }
    }


};
let product = new ProductManager();
product.addproductos("producto prueba", "probando", 10, "no image", "A1", 15);
product.addproductos("producto prueba 2", "probando 2", 20, "no image", "A2", 30);
ProductManager.getProductsById (1);
console.log (ProductManager.getProducts());