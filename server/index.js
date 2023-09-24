import express from "express";
import sql from "./db.js"
import cors from "cors"
import UserRoutes from "./routes/userRoutes.js";
import DirectoryRoutes from "./routes/directoryRoutes.js"


const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
}));
app.use(express.json());
app.use("/api/user", UserRoutes);
app.use("/api/directory", DirectoryRoutes);


app.get ("/", (req, res)=> {
    res.send("Locale Server")
});

app.listen("3000", () => {
    console.log(`Server is running on port 3000`);
})