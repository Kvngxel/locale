import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";
import sql from "../db.js";

const createDirectory = asyncHandler(async (req, res) => {
  const {
    dir_name,
    address,
    directory_email,
    telephone,
    profile_image,
    quote,
    description,
  } = req.body;
  const id = req.user.id;
  try {
    const user = await sql`INSERT INTO directory (dir_name,
        address,
        directory_email,
        telephone,
        profile_image,
        quote,
        user_id,
        description,
        created_at) VALUES (${dir_name}, ${address},${directory_email},${telephone},${profile_image},${quote},${id},${description}, CURRENT_TIMESTAMP) RETURNING *`;

    return res.status(201).json({ message: "Directory Successfully created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
});

const updateDirectory = asyncHandler(async (req, res) => {
  const { first_name, last_name, profile_pic, address } = req.body;
  const id = req.user.id;

  try {
    const user = await sql`
        UPDATE directory
        SET first_name = ${first_name}, last_name = ${last_name}, profile_pic=${profile_pic}, address=${address}, updated_at= CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING *`;
    console.log("successful");
    const test = await sql`SELECT * FROM directory WHERE id = ${id}`;
    console.log(test);
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
  const id = req.user.id;

  try {
    const deletedDir =
      await sql`DELETE FROM directory WHERE user_id = ${id} RETURNING *`;

    if (deletedDir && deletedDir.length > 0) {
      res.status(200).json(deletedDir[0]);
    } else {
      res.status(404).send("Directory not found");
    }
  } catch (error) {
    console.error("Error deleting Directory:", error);
    res.status(500).send("Internal server error");
  }
});
const directorydetails = asyncHandler(async (req, res) => {
  const id = req.user.id;
  try {
    const directories = await sql`SELECT * from directory WHERE user_id = ${id} `;
    if (directories) {
      res.status(201).send(directories);
    } else {
      res.status(404).send("An error occurred");
    }
  } catch (error) {
    console.error("An error occurred:", error); // Log the error for debugging.
    res.status(500).send("Internal Server Error");
  }
});
const allDirectories = asyncHandler(async (req, res) => {
  try {
    const directories = await sql`SELECT * from directory`;
    if (directories) {
      res.status(200).send(directories);
    } else {
      res.status(404).send("An error occurred");
    }
  } catch (error) {
    console.error("An error occurred:", error); // Log the error for debugging.
    res.status(500).send("Internal Server Error");
  }
});
const likeDirectory = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const dir_id = req.params.id;
  try {
    const user = await sql`INSERT INTO like (        
        user_id,
        directory_id,
        created_at) VALUES (${user_id}, ${dir_id}, CURRENT_TIMESTAMP) RETURNING *`;

    return res.status(201).json({ message: "Directory Successfully Liked" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
});
const unlikeDirectory = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const dir_id = req.params.id;

  try {
    const deletedLike =
      await sql`DELETE FROM like WHERE user_id = ${user_id} AND directory_id = ${dir_id} RETURNING *`;

    if (deletedLike && deletedLike.length > 0) {
      return res
        .status(201)
        .json({ message: "Directory Successfully Unliked" });
    } else {
      res.status(404).send("Directory not found");
    }
  } catch (error) {
    console.error("Error deleting Directory:", error);
    res.status(500).send("Internal server error");
  }
});
const directoryLikes = asyncHandler(async (req, res) => {
  const dir_id = req.params.id;
  try {
    const likes = await sql`SELECT * from like WHERE directory_id = ${dir_id}`;
    if (likes) {
      res.status(200).send(likes);
    } else {
      res.status(404).send([]);
    }
  } catch (error) {
    console.error("An error occurred:", error); // Log the error for debugging.
    res.status(500).send("Internal Server Error");
  }
});
const dislikeDirectory = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const dir_id = req.params.id;
  try {
    const user = await sql`INSERT INTO dislike (        
        user_id,
        directory_id,
        created_at) VALUES (${user_id}, ${dir_id}, CURRENT_TIMESTAMP) RETURNING *`;

    return res.status(201).json({ message: "Directory Successfully Liked" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
});
const delDislike = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const dir_id = req.params.id;

  try {
    const deletedDislike =
      await sql`DELETE FROM dislike WHERE user_id = ${user_id} AND directory_id = ${dir_id} RETURNING *`;

    if (deletedDislike && deletedDislike.length > 0) {
      return res
        .status(201)
        .json({ message: "Unliked removed Successfully" });
    } else {
      res.status(404).send("Directory not found");
    }
  } catch (error) {
    console.error("Error deleting Directory:", error);
    res.status(500).send("Internal server error");
  }
});
const directoryDislikes = asyncHandler(async (req, res) => {
  const dir_id = req.params.id;
  try {
    const dislikes =
      await sql`SELECT * from dislike WHERE directory_id = ${dir_id}`;
    if (dislikes) {
      res.status(200).send(dislikes);
    } else {
      res.status(404).send([]);
    }
  } catch (error) {
    console.error("An error occurred:", error); // Log the error for debugging.
    res.status(500).send("Internal Server Error");
  }
});
const addComment = asyncHandler(async (req, res) => {
  const { comment } = req.body;
  const user_id = req.user.id;
  const dir_id = req.params.id;
  try {
    const user = await sql`INSERT INTO comment (        
        user_id,
        directory_id,
        comment,
        created_at) VALUES (${user_id}, ${dir_id}, ${comment}, CURRENT_TIMESTAMP) RETURNING *`;

    return res.status(201).json({ message: "Comment Successfully Uploaded" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
});
const deleteComment = asyncHandler(async (req, res) => {
  const user_id = req.user.id;
  const comment_id = req.params.id;

  try {
    const deletedComment =
      await sql`DELETE FROM comment WHERE user_id = ${user_id} AND id = ${comment_id} RETURNING *`;

    if (deletedComment && deletedComment.length > 0) {
      return res.status(201).json({ message: "Comment Successfully Deleted" });
    } else {
      res.status(404).send("Comment Not Found");
    }
  } catch (error) {
    console.error("Error Deleting Comment:", error);
    res.status(500).send("Internal server error");
  }
});
const directoryComments = asyncHandler(async (req, res) => {
  const dir_id = req.params.id;
  try {
    const comments =
      await sql`SELECT * from comment WHERE directory_id = ${dir_id}`;
    if (comments) {
      res.status(200).send(comments);
    } else {
      res.status(404).send([]);
    }
  } catch (error) {
    console.error("An error occurred:", error); // Log the error for debugging.
    res.status(500).send("Internal Server Error");
  }
});

export {
  createDirectory,
  directorydetails,
  allDirectories,
  updateDirectory,
  deleteDirectory,
  directoryLikes,
  likeDirectory,
  dislikeDirectory,
  directoryDislikes,
  delDislike,
  unlikeDirectory,
  addComment,
  deleteComment,
  directoryComments,
};
