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
    res.send("Hello Boss")
});

app.get("/api/directories", async (req, res) =>{
    try {
        const directories = await sql`SELECT * from directory`;
        if (directories) {
            res.status(201).send(directories);
        } else {
            res.status(404).send("An error occurred");
        }
    } catch (error) {
        console.error("An error occurred:", error); // Log the error for debugging.
        res.status(500).send("Internal Server Error");
    }
})

app.listen("3000", () => {
    console.log(`Server is running on port 3000`);
})