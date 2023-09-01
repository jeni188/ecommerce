const connectDB=require('./config/connectdb');
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');

const express =require('express');
const app = express();

const port = 5000;

connectDB();
 
app.use(express.json());
connectDB();
app.use(userRoutes);
app.use(productRoutes)

app.listen(port, () =>{
    console.log(`Server is running on  ${port}`);
});