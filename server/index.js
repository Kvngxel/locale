import express from "express";
import sql from "./db.js"
import cors from "cors"

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
}));

app.get ("/", (req, res)=> {
    res.send("Hello Boss")
});

app.get("/api/directories", async (req, res) =>{
    const directories = await sql`SELECT * from directories`
    // console.log(directories)
    if (directories){
        res.status(202).send(directories)
    } else {
        res.send(404).send("An error occured")
    }
})

app.listen("3000", () => {
    console.log(`Server is running on port 3000`);
})