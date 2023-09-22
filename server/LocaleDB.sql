CREATE TABLE "directory" (
  "id" SERIAL PRIMARY KEY,
  "dir_name" varchar,
  "address" varchar,
  "directory_email" varchar,
  "telephone" varchar,
  "profile_image" varchar,
  "quote" varchar,
  "user_id" integer UNIQUE NOT NULL,
  "description" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
  FOREIGN KEY ("user_id") REFERENCES "users" ("id")
);


CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "profile_pic" varchar,
  "address" varchar,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
);

CREATE TABLE "like" (
  "id" SERIAL PRIMARY KEY,
  "user_id" integer NOT NULL,
  "directory_id" integer NOT NULL,
  "created_at" timestamp NOT NULL,
  UNIQUE("user_id", "directory_id"), -- User can only like one directory,
  FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);

CREATE TABLE "dislike" (
  "id" SERIAL PRIMARY KEY,
  "user_id" integer NOT NULL,
  "directory_id" integer NOT NULL,
  "created_at" timestamp NOT NULL,
  UNIQUE("user_id", "directory_id"), -- User can only dislike one directory
  FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);

CREATE TABLE "comment" (
  "id" SERIAL PRIMARY KEY,
  "user_id" integer NOT NULL,
  "directory_id" integer NOT NULL,
  "comment" varchar NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);

CREATE TABLE "directory_image" (
  "id" SERIAL PRIMARY KEY,
  "image_URL" varchar NOT NULL,
  "directory_id" integer NOT NULL,
  "created_at" timestamp NOT NULL,
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);

CREATE TABLE "directory_tags" (
  "id" SERIAL PRIMARY KEY,
  "tags" varchar NOT NULL,
  "directory_id" integer NOT NULL,
  "created_at" timestamp NOT NULL,
  FOREIGN KEY ("directory_id") REFERENCES "directory" ("id")
);

