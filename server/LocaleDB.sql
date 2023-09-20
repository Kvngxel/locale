CREATE TABLE "directory" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "address" varchar,
  "telephone" integer,
  "user_id" integer,
  "tags" varchar,
  "profile_image" varchar,
  "description" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);
--  Sample data Directory
INSERT INTO "directory" ("id","name", "address", "telephone", "user_id", "tags", "profile_image", "description", "created_at", "updated_at")
VALUES
  ('1','Business1', '123 Main Street', 123456789, 1, 'Tag1, Tag2', 'image1.jpg', 'Description of 1', '2023-09-20 10:00:00', '2023-09-20 10:30:00'),
  ('2','Business2', '456 Elm Street', 987654321, 2, 'Tag3, Tag4', 'image2.jpg', 'Description of 2', '2023-09-20 11:00:00', '2023-09-20 11:30:00'),
  ('3','Business3', '789 Oak Avenue', 555555555, 3, 'Tag1, Tag3', 'image3.jpg', 'Description of 3', '2023-09-20 12:00:00', '2023-09-20 12:30:00'),
  ('4','Business4', '101 Pine Road', 111111111, 4, 'Tag2, Tag4', 'image4.jpg', 'Description of 4', '2023-09-20 13:00:00', '2023-09-20 13:30:00'),
  ('5','Business5', '222 Cedar Lane', 999999999, 5, 'Tag1, Tag2', 'image5.jpg', 'Description of 5', '2023-09-20 14:00:00', '2023-09-20 14:30:00');


CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "directory_id" integer UNIQUE,
  "imageURL" varchar,
  "address" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);
--  Sample data User
INSERT INTO "user" ("first_name", "last_name", "directory_id", "imageURL", "address", "created_at", "updated_at")
VALUES
  ('User1', 'LastName1', 1, 'image1.jpg', '123 User St', '2023-09-20 09:00:00', '2023-09-20 09:30:00'),
  ('User2', 'LastName2', 2, 'image2.jpg', '456 User Ave', '2023-09-20 09:30:00', '2023-09-20 10:00:00'),
  ('User3', 'LastName3', 3, 'image3.jpg', '789 User Rd', '2023-09-20 10:00:00', '2023-09-20 10:30:00'),
  ('User4', 'LastName4', 4, 'image4.jpg', '101 User Ln', '2023-09-20 10:30:00', '2023-09-20 11:00:00'),
  ('User5', 'LastName5', 5, 'image5.jpg', '222 User Blvd', '2023-09-20 11:00:00', '2023-09-20 11:30:00');


CREATE TABLE "like" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "directory_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp,
  UNIQUE("user_id", "directory_id") -- User can only like one directory
  FOREIGN KEY ("user_id") REFERENCES "user" ("id"),
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);
--  Sample data Like
INSERT INTO "like" ("user_id", "directory_id", "created_at", "updated_at")
VALUES
  (1, 1, '2023-09-20 09:30:00', '2023-09-20 09:45:00'),
  (2, 3, '2023-09-20 10:00:00', '2023-09-20 10:15:00'),
  (3, 2, '2023-09-20 10:30:00', '2023-09-20 10:45:00'),
  (4, 5, '2023-09-20 11:00:00', '2023-09-20 11:15:00'),
  (5, 4, '2023-09-20 11:30:00', '2023-09-20 11:45:00');


CREATE TABLE "dislike" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "directory_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp,
  UNIQUE("user_id", "directory_id") -- User can only dislike one directory
  FOREIGN KEY ("user_id") REFERENCES "user" ("id"),
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);
--  Sample data Dislike
INSERT INTO "dislike" ("user_id", "directory_id", "created_at", "updated_at")
VALUES
  (1, 3, '2023-09-20 09:45:00', '2023-09-20 10:00:00'),
  (2, 1, '2023-09-20 10:15:00', '2023-09-20 10:30:00'),
  (3, 5, '2023-09-20 10:45:00', '2023-09-20 11:00:00'),
  (4, 2, '2023-09-20 11:15:00', '2023-09-20 11:30:00'),
  (5, 4, '2023-09-20 11:45:00', '2023-09-20 12:00:00');


CREATE TABLE "comment" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "directory_id" integer,
  "comment" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  FOREIGN KEY ("user_id") REFERENCES "user" ("id"),
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);
--  Sample data Comment
INSERT INTO "comment" ("user_id", "directory_id", "comment", "created_at", "updated_at")
VALUES
  (1, 2, 'Comment 1', '2023-09-20 09:30:00', '2023-09-20 09:45:00'),
  (2, 4, 'Comment 2', '2023-09-20 10:00:00', '2023-09-20 10:15:00'),
  (3, 1, 'Comment 3', '2023-09-20 10:30:00', '2023-09-20 10:45:00'),
  (4, 5, 'Comment 4', '2023-09-20 11:00:00', '2023-09-20 11:15:00'),
  (5, 3, 'Comment 5', '2023-09-20 11:30:00', '2023-09-20 11:45:00');


CREATE TABLE "directory_image" (
  "id" integer PRIMARY KEY,
  "image_URL" varchar,
  "directory_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp,
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);
--  Sample data Directory Image
INSERT INTO "directory_image" ("image_URL", "directory_id", "created_at", "updated_at")
VALUES
  ('image1.jpg', 1, '2023-09-20 09:30:00', '2023-09-20 09:45:00'),
  ('image2.jpg', 1, '2023-09-20 10:00:00', '2023-09-20 10:15:00'),
  ('image3.jpg', 1, '2023-09-20 10:30:00', '2023-09-20 10:45:00'),
  ('image4.jpg', 2, '2023-09-20 11:00:00', '2023-09-20 11:15:00'),
  ('image5.jpg', 2, '2023-09-20 11:30:00', '2023-09-20 11:45:00');


-- ALTER TABLE "like" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

-- ALTER TABLE "directory" ADD FOREIGN KEY ("id") REFERENCES "user" ("directory_id");

-- ALTER TABLE "like" ADD FOREIGN KEY ("directory_id") REFERENCES "directory" ("id");

-- ALTER TABLE "dislike" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

-- ALTER TABLE "dislike" ADD FOREIGN KEY ("directory_id") REFERENCES "directory" ("id");

-- ALTER TABLE "comment" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

-- ALTER TABLE "comment" ADD FOREIGN KEY ("directory_id") REFERENCES "directory" ("id");

-- ALTER TABLE "directory_image" ADD FOREIGN KEY ("directory_id") REFERENCES "directory" ("id");
