import express from "express";
import dotenv from "dotenv";
import dbConnect from "./configs/dbConnect";
import AuthRoutes from "./routes/Auth";
import TripRoutes from "./routes/Trip";
import ExpenseRoutes from "./routes/Expense";
import PaymentRoutes from "./routes/PaymentMethods";
import UserRoutes from "./routes/User";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
// Cookie Parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// CORS
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

// Import Backend PORT Number
dotenv.config();
const PORT = process.env.PORT;

// Server listening
app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
})

// Database Connection
dbConnect();

app.use("/auth", AuthRoutes);
app.use("/trip", TripRoutes);
app.use("/expense", ExpenseRoutes);
app.use("/user", UserRoutes);
app.use("/payment", PaymentRoutes);
