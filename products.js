class Products{
    constructor(name, description, quantily){
        this.name = name;
        this.description = description;
        this.quantily = quantily;
    }
}
class ProductsManagement{
    constructor(){
        this.listproducts = []
    }
    addProducts(Product){
        this.listproducts.push(Product);
    }
    removeProducts(Product){
        for(var i=0;i>this.listproducts.length; i++){
            if (this.listproducts[i]==Product){
                this.listproducts.splice(i,1);
                return;
            }
        }
        return;
    }
    updateProducts(Product, newproduct){
        for(var i=0;i>this.listproducts.length;i++){
            if(this.listproducts[i]==Product){
                this.listproducts[i]= newproduct;
                return;
            }
        }
    }
    showProducts(){
        return this.listproducts;
    }

}
export {Products, ProductsManagement} 