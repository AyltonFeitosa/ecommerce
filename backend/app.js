const expores = require("express");
const mongoose = require('mongoose');
const app = expores();
const port = 3000;
const cors = require("cors");
const categoryRoutes = require('./routes/category');
const brandRoutes = require('./routes/brand');

app.use(cors());
app.use(expores.json());
app.get("/",(req,res)=>{
    res.send('Server running');
})
app.use('/category',categoryRoutes);
app.use('/brand', brandRoutes)

async function connectDb(params) {
    await mongoose.connect("mongodb://localhost:27017",{
        dbName: "ecommerce"
    })
    console.log("mongodb connected")
}
connectDb().catch((err)=>{
    console.error(err);
})

app.listen(port,()=>{
    console.log("Server running on port", 3000)
})