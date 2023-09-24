import asyncHandler from "express-async-handler";
import {generateToken} from "../utils/generateToken.js";
import sql from "../db.js";
import pkg from "bcryptjs";
const { hash } = pkg;
import bcrypt from "bcryptjs";

const comparePasswords = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

//@description     Auth the user
//@route           POST /api/user/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    console.log(user);
    if (!user) {
      return res.status(400).json({ error: "invalid username" });
    }
    // console.log(user.password);
    const isMatch = await comparePasswords(password, user[0].password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({ error: "Password is not correct" });
    }

    // Authentication successful
    const userPayload = {
        id: user[0].id
      };
    
    return res.status(201).json({ token: generateToken(userPayload) });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//@description     Register the user
//@route           POST /api/user
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 12);
    console.log(hashedPassword);

    const user =
      await sql`INSERT INTO users (email, password, created_at) VALUES (${email}, ${hashedPassword}, CURRENT_TIMESTAMP) RETURNING *`;
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

//@description     Update the user Profile
//@route           PUT /api/users
//@access          Public
const updateProfile = asyncHandler(async (req, res) => {
    const { first_name, last_name, profile_pic, address } = req.body;
    const id= req.user.id;
    
    try {
        const user = await sql `
        UPDATE users
        SET first_name = ${first_name}, last_name = ${last_name}, profile_pic=${profile_pic}, address=${address}, updated_at= CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING *`;
        console.log("successful");
        const test = await sql`SELECT * FROM users WHERE id = ${id}`;
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

//@description     Delete the user
//@route           DELETE /api/users/login
//@access          Public
const deleteUser = asyncHandler(async (req, res) => {
    const id= req.user.id;
  
    try {
      const deletedUser = await sql`DELETE FROM users WHERE id = ${id} RETURNING *`;
      
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

//@description     Get the user details
//@route           GET /api/users/login
//@access          Public
const userProfile = asyncHandler(async (req, res) => {
    const id= req.user.id;
  
    try {
        const user = await sql`SELECT * FROM users WHERE id = ${id}`;
      
      if (user && user.length > 0) {
        res.status(200).json(user[0]);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error("Error Retrieving User details:", error);
      res.status(500).send("Internal server error");
    }
    
});

export { authUser, registerUser, updateProfile, deleteUser, userProfile };
