class Inventory {
  constructor(){
    this.products = {};
  }
  
   addProduct(productName, quantity, pricePerEach){
    
    // validate product name
    if(typeof productName !== 'string'){
      return 'Product name must be a string';
    }
    
    // validate quantity
    if(typeof quantity !== 'number' || quantity < 1){
      return 'Quantity must be an integer from 1';
    }
    
    // validate price
    if(typeof pricePerEach !== 'number'){
      return 'Price must be a number'
    }
    
    // converts the product name to uppercase to avoid duplicates
    productName = productName.toUpperCase();
    
    // check to see if the product already exists and update the quantity and the price
    if(this.products.hasOwnProperty(productName)){
      this.products[productName].quantity += quantity;
      this.products[productName].price = pricePerEach;
      
      // print a success message to the console
      console.log(productName + ' updated successfully!');
    }
    
    // add a new product if it does not exist.
    else{
      this.products[productName] = {quantity, price: pricePerEach};
      
      // print a success message to the console
      console.log(productName + '  added successfully!');
    }
  }
  
  removeProduct(productName, quantity){
    // validate the product name
    if(typeof productName !== 'string'){
      return 'Product name must be a string';
    }
    
    // validate the quantity
    if(typeof quantity !== 'number' || quantity < 1){
      return 'Quantity must be an integer from 1';
    }
    // check to see if the product exist
    if(this.products.hasOwnProperty(productName)){
      
      // check to see if the quantity to be removed is greater than the quantity in the inventory
      if(this.products[productName].quantity < quantity){
        
        // false if the condition is not true
        return false;
      }else{
        
        // deduct the quantity from the total quantity of the product
        this.products[productName].quantity -= quantity;
        
        // prints a success message to the console
        console.log(quantity + ' unit quantity have been removed from ' + productName + '. You have ' + this.products[productName].quantity + ' left.')
        
        return true;
      }
    }
    
    // if the product does not exist
    else{
      return false;
    }
  }
}

class StockProducts extends Inventory{
  // redeclare the `addProduct` method previously declared in the base (Inventory) Class
  addProduct(productName, quantity, pricePerEach){
    
    // reference the `addProduct` method in the base (Inventory) Class
    super.addProduct(productName, quantity, pricePerEach);
  }
}

class Sales extends Inventory{
  
  
}