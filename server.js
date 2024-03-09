const express = require("express");
const mongoose = require("mongoose");
const connection_string =
  "mongodb+srv://binayyadavofficial:usWakNa6clvDjGXS@rexpress.5oaqzet.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Rexpress";
const Product = require("./models/product.model");
const ProductRoute = require("./routes/product.route");
const app = express();

//-----Middlware----->
app.use(express.json()); //can recive and send data as json
app.use(express.urlencoded({extended: false})) // can recive data from form url encoded
//========================

//<---------------|Router|------------->//

app.use("/api/products/", ProductRoute)

//<-------------GET------------>
//Home  Root Page API
app.get("/", (req, res) => {
    res.send("Hi.. goto <a href='http://localhost:3000/api/products/'> products</a>");
  
});


//All products API
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//Products by Id: API
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

//<----------POST--------------->
//ADD PRODUCTS IN DB API
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

//<---------------UPDATE-------------->
//PUT REQUEST TO UPDATE
// app.put('/api/products/:id', async (req,res) =>{
//     try {
//         const {id} = req.params ;

//         const product = await Product.findByIdAndUpdate(id, req.body); ;

//         if(!product){
//             return res.status(404).json({message: "product not found"})
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })
//<-----------DELETE--------->
// app.delete('/api/products/:id', async (req, res)=>{
//     try {
//         const {id} = req.params ;   
        
//         const product =await Product.findByIdAndDelete(id);
    
//         if(!product){
//             return res.status(404).json({message: "product Not found"})
//         }
        
//         res.status(200).json({message: "Product Deleted Successfully"})

//     } catch (error) {
//         res.status(500).json({message : error.message})
//     }
    
// })

//<---------Mongoose----MonGoDB-----Connect----->
mongoose
  .connect(connection_string)
  .then(() => {
    console.log("Connected To MONGO Database 😎!");
    app.listen(3000, () => {
      console.log("server is running in port [3000] 🏃‍♂️");
    });
  })
  .catch(() => console.log("CONNCECTION FAILED🚫"));
