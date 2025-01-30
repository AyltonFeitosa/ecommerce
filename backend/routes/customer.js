const express = require("express");
const { getNewProducts, getProductForList, getProductForListing, getProduct, getFeaturedProducts } = require("../handlers/product-handler");
const { getCategories } = require("../handlers/category-handler");
const { getBrands } = require("../handlers/brand-handler");
const { getWishlist, addToWishList, removeFromWishList } = require("../handlers/wishlist-handler");
const { getCartItems, addToCart, removefromCart } = require("../handlers/shopping-cart-handler.");
const router=express.Router();

router.get("/new-products", async (req,res)=>{
    const products = await getNewProducts();
    res.send(products);
})

router.get("/featured-products", async (req,res)=>{
    const products = await getFeaturedProducts();
    res.send(products);
})

router.get("/categories", async (req,res)=>{
    const categories = await getCategories();
    res.send(categories);
})

router.get("/brands", async (req,res)=>{
    const brands = await getBrands();
    res.send(brands);
})

router.get("/products", async (req,res)=>{
    const { searchTerm, categoryId, sortBy, sortOrder,brandId, pageSize, page } = req.query;
    const products = await getProductForListing(
        searchTerm,
        categoryId,
        brandId,          
        page, 
        pageSize,        
        sortBy, 
        sortOrder,        
    );
    res.send(products);
})

router.get("/product/:id", async (req,res)=>{
    const id = req.params["id"];
    const product = await getProduct(id);
    res.send(product);
})

router.get('/wishlists', async (req,res)=>{
    console.log(req.user);
    const userId= req.user.id;
    const items = await getWishlist(userId);
    res.send(items)
})

router.post('/wishlists/:id', async (req,res)=>{
    console.log(req.user);
    const userId= req.user.id;
    const productId = req.params.id;
    const item = await addToWishList(userId,productId);
    res.send(item);
})

router.delete('/wishlists/:id', async (req,res)=>{
    console.log(req.user);
    const userId= req.user.id;
    const productId = req.params.id;
    await removeFromWishList(userId,productId);
    res.send({message: 'ok'});
})

router.get('/carts', async (req,res)=>{
    console.log(req.user); 
    const userId= req.user.id; // recebe o id do usuario que fez a requisicao
    const items = await getCartItems(userId); //chama a func com os dados do userid como parametro
    res.send(items) //retorna o json dos carrinho
})

router.post('/carts/:id', async (req,res)=>{
    console.log(req.user); //exibe dados do user
    const userId= req.user.id; //armazeno o id do user na variavel 
    const productId = req.params.id; //armazena o id do produto e passa via url 
    const quantity = req.body.quantity; //quantidade
    const items = await addToCart(userId, productId, quantity); //chama func com parametros 
    res.send(items);
})

router.delete('/carts/:id', async (req,res)=>{
    console.log(req.user);
    const userId= req.user.id;
    const productId = req.params.id;
    const items = await removefromCart(userId, productId);
    res.send(items);
})





module.exports=router;