import dotenv from "dotenv"
import app from "./app.js";

// dotenv.config({
//     path: '.env'
// });
dotenv.config()

const PORT = process.env.PORT || 5100;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.log(error, "error while connecting to server");
}