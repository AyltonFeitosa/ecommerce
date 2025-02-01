const Cart = require("../db/cart");

async function addToCart(userId, productId, quantity){
    let product = await Cart.findOne({ userId: userId, productId: productId});
    if(product){
        if(product.quantity+quantity <= 0){
            removefromCart(userId, productId)
        }else{
            await Cart.findByIdAndUpdate(product._id,{
                quantity: product.quantity + quantity            
            });
        }        
    }else{    
    product = new Cart({
        userId: userId,
        productId: productId,
        quantity: quantity
        });
        await product.save(); // salvei no banco de dados 
        console.log("produto add no carrinho")
    }
}

async function removefromCart(userId, productId){
    await Cart.findOneAndDelete({
        userId:userId,
        productId:productId,
    });
    console.log("produto removido")
}

async function getCartItems(userId) {
    const products = await Cart.find({ userId: userId}).populate("productId")
    return products.map((x) => { // vou criar um objeto com quantidade e o produto
        return {quantity: x.quantity, product:x.productId}
    });
}

async function clearCart(userId) {
    await Cart.deleteMany({
        userId: userId      
    });
}

module.exports = {
    getCartItems,
    addToCart,
    removefromCart,  
    clearCart  
};