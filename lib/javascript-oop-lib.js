class Inventory {
  constructor(){
    this.products = {};
  }
  
  addProduct(productName, quantity, pricePerEach){
    productName = productName.toUpperCase();
    
    if(this.products.hasOwnProperty(productName)){
      this.products[productName].quantity += quantity;
      this.products[productName].price = pricePerEach;
      
      console.log(productName + ' updated successfully!');
    }
    
    else{
      this.products[productName] = {quantity, price: pricePerEach};
      
      console.log(productName + '  added successfully!');
    }
  }
  
}