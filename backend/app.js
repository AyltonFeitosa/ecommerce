const expores = require("express");
const mongoose = require('mongoose');
const app = expores();
const port = 3000;
const cors = require("cors");
const categoryRoutes = require('./routes/category');
const brandRoutes = require('./routes/brand');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const customerRoutes = require('./routes/customer');
const authRoutes = require('./routes/auth');
const { verifyToken, isAdmin } = require("./middleware/auth-middleware");

app.use(cors());
app.use(expores.json());
app.get("/",(req,res)=>{
    res.send('Server running');
})
app.use('/category', verifyToken, isAdmin, categoryRoutes);
app.use('/brand', verifyToken, isAdmin, brandRoutes);
app.use('/orders', verifyToken, isAdmin, orderRoutes);
app.use('/product', verifyToken, isAdmin, productRoutes);
app.use('/customer', verifyToken, customerRoutes);
app.use('/auth', authRoutes);

// Substitua a URL de conexão local para o MongoDB Atlas
async function connectDb() {
    const mongoURI = "mongodb+srv://ayltonof36:Banestes2@mymongodb.veyxx.mongodb.net/?retryWrites=true&w=majority&appName=mymongodb";
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "ecommerce" // Nome do banco de dados no MongoDB Atlas
        });
        console.log("MongoDB conectado com sucesso!");
    } catch (err) {
        console.error("Erro de conexão com o MongoDB:", err);
    }
}

connectDb();

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
});
