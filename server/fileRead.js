import { promises as fsPromises } from 'fs';




const filePath1 = 'conversion_data.csv';


async function readFileAndPrint() {
    try {
      // Read the contents of the file
      const data = await fsPromises.readFile(filePath1, 'utf8');
  
      // Print the data to the console
      console.log('File Contents:', data);
    //   return data
      // You can also send the data as an HTTP response if needed
      // res.send(data);
    } catch (err) {
      console.error('Error reading file:', err);
    }
  }
  export { readFileAndPrint };
  
  // Call the function to read and print the file contents
  
