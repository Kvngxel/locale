import asyncHandler from "express-async-handler";
import {generateToken} from "../utils/generateToken.js";
import sql from "../db.js";


const createDirectory = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 12);
    console.log(hashedPassword);

    const user =
      await sql`INSERT INTO directory (email, password, created_at) VALUES (${email}, ${hashedPassword}, CURRENT_TIMESTAMP) RETURNING *`;
      const userPayload = {
        id: user[0].id
      };
      return res.status(201).json({ token: generateToken(userPayload) });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
}
});

const updateDirectory = asyncHandler(async (req, res) => {
    const { first_name, last_name, profile_pic, address } = req.body;
    const id= req.user.id;
    
    try {
        const user = await sql `
        UPDATE directory
        SET first_name = ${first_name}, last_name = ${last_name}, profile_pic=${profile_pic}, address=${address}, updated_at= CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING *`;
        console.log("successful");
        const test = await sql`SELECT * FROM directory WHERE id = ${id}`;
        console.log(test)
        return res.status(201).json({ user });
        //   const user = await sql`UPDATE directory SET first_name = ${first_name}, last_name = ${last_name}, profile_pic = ${profile_pic}, address =${address},  updated_at = CURRENT_TIMESTAMP WHERE id = $1`;
        
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
});
const deleteDirectory = asyncHandler(async (req, res) => {
    const id= req.user.id;
  
    try {
      const deletedUser = await sql`DELETE FROM directory WHERE id = ${id} RETURNING *`;
      
      if (deletedUser && deletedUser.length > 0) {
        res.status(200).json(deletedUser[0]);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error("Error deleting User:", error);
      res.status(500).send("Internal server error");
    }
    
});
const allDirectories = asyncHandler(async (req, res) => {
    const id= req.user.id;
  
    try {
      const deletedUser = await sql`DELETE FROM directory WHERE id = ${id} RETURNING *`;
      
      if (deletedUser && deletedUser.length > 0) {
        res.status(200).json(deletedUser[0]);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error("Error deleting User:", error);
      res.status(500).send("Internal server error");
    }
    
});

export { createDirectory, allDirectories, updateDirectory, deleteDirectory };
