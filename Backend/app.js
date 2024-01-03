import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"
import userRoutes from "./routes/userRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

const app = express();

app.use(express.json())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.urlencoded({
    extended: true
}))

app.use(cookieParser())

app.use("/api/admin", adminRoutes)
app.use("/api/user", userRoutes)
app.use("/api/messages", messageRoutes)
app.use(express.static("uploads/images"))

export default app