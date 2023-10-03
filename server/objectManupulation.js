
import fs from 'fs';
import csv from 'csv-parser';

// Specify the path to your CSV file
const filePath = 'C:\\Users\\aliyu\\Desktop\\New folder\\locale\\server\\conversion_data.csv';

// Create an array to store the extracted data


async function name(searchValue) {
    
  return new Promise((resolve, reject) => {
    const data = [];
    const fileStream = fs.createReadStream(filePath);

// Use fs.createReadStream to read the CSV file
fileStream
  .pipe(csv())
  .on('data', (row) => {
    // This callback function will be called for each row in the CSV file
    data.push(row);
  })
  .on('end', () => {
    // This callback function will be called when all rows have been read
    // 950.5496370372
    // 1.2192670575
    // console.log(JSON.stringify(Object.keys(data[3])));
    /* console.log(data[1]["_4"])
    console.log(JSON.stringify(Object.keys(data[3]))); */
    for ( const key of data){
        
        if (Object.values(key).includes(searchValue.toUpperCase())){
            
            const extractedValue = Object.values(key)[Object.values(key).length - 1];
            resolve(extractedValue);
            return;
        }
    }

/*     for (const key in data[1]) {
        console.log(key,"-",data[1][key]); // Output: 'name', 'age'
      }    */
    

    // You can process the data array further as needed
    resolve(null);
  }
  
  )
  .on('error', (error) => {
    reject(error);
  });



});

    
}
export default name;




  