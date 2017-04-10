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
  
   removeProduct(productName, quantity){
    if(this.products.hasOwnProperty(productName)){
      
      if(this.products[productName].quantity < quantity){
        return false;
      }else{
        
        this.products[productName].quantity -= quantity;
        
        console.log(quantity + ' unit quantity have been removed from ' + productName + '. You have ' + this.products[productName].quantity + ' left.')
        
        return true;
      }
    }
    
    else{
      return false;
    }
  }
}