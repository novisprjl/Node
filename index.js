import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productRouter.js";

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database connected...");
})
.catch((err) => {
    console.log("Mongodb connection error: ", err);
});


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());
app.use(cors);

app.use('/auth', authRouter);
app.use('/products', productRouter);


// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
