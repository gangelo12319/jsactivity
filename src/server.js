const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const pokemonRouter = require("../routes/pokemon");
const { Console } = require("console");

dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"../public")));

app.use("/",pokemonRouter);

// app.get("/",(req,res)=> {return res.status(200).json({
//     message: "hello words",
// })
// });

const PORT = 3000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`)
});