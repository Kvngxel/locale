
import { promises as fsPromises } from 'fs';
async function writeFile(filePath, data) {
  
  try {
    await fsPromises.writeFile(filePath, data, 'utf8');
    // fs.writeFileSync(filePath, data, 'utf8');
    console.log('File has been written successfully.');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

export { writeFile };


