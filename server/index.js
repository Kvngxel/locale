import express from "express";
import sql from "./db.js"
import cors from "cors"
import UserRoutes from "./routes/userRoutes.js";
import DirectoryRoutes from "./routes/directoryRoutes.js"
// import axios from 'axios';
import dotenv from 'dotenv';
import { readFileAndPrint } from "./fileRead.js";
import name from "./objectManupulation.js";



// import { writeFile } from "./fileWriter.cjs";
import { writeFile } from "./fileWriter.js";


dotenv.config();




const app = express();


const accountId = process.env.ACCOUNT_ID;
const apiKey = process.env.API_KEY;
app.use(cors({
    origin: ["http://localhost:5173"], 
}));

app.use(express.json());

app.use("/api/user", UserRoutes);
app.use("/api/directory", DirectoryRoutes);


const filePath = 'conversion_data.csv';

app.get('/conversion', async (req, res) => {
    try {
      const auth = Buffer.from(`${accountId}:${apiKey}`).toString('base64');
      const response = await axios.get('https://xecdapi.xe.com/v1/convert_from.csv/?from=GBP&to=*&amount=1', {
        headers: {
          'Authorization': `Basic ${auth}`,
        },
        params: {
          currencies: 'USD,EUR,GBP', 
          format: 'csv',
        },
      });
  
      const csvData = response.data.toString();
      console.log('Conversion Data (CSV):', csvData);

  // Call the function to write the file

      await writeFile(filePath, csvData);
     
      res.send(csvData);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Error fetching conversion data');
    }
  });
  
  app.get('/extracted/:searchValue', async (req, res) => {
    try {
      const searchValue = req.params.searchValue; // Get the parameter from the URL
      const extractedValue = await name(searchValue);
     
      // Make a GET request or perform other operations using the extractedValue here
  
      // res.send(`Extracted value for search term "${searchValue.toUpperCase()}": ${extractedValue}`);
      res.send(` ${extractedValue}`);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error processing CSV file');
    }
  });


/* const file1 = readFileAndPrint();
console.log(file1)  */ 

   

app.get ("/", (req, res)=> {
    res.send("Locale Server")
});

app.listen("3000", () => {
    console.log(`Server is running on port 3000`);
})