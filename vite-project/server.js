import express from "express";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Resolve __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read and parse db.json from the data folder
const db = JSON.parse(readFileSync(join(__dirname, "data", "db.json"), "utf-8"));

const app = express();

// CORS headers — allow any frontend to fetch from this server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  // Handle preflight OPTIONS requests — browser sends this before every POST/PUT
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route: GET /api/posts → returns all blog entries
app.get("/api/posts", (req, res) => {
  res.json(db.blogs);
});

// Route: POST /api/posts → create a new blog
app.post("/api/posts", (req, res) => {
  const newPost = req.body;
  newPost.id = db.blogs.length > 0 ? Math.max(...db.blogs.map(b => b.id)) + 1 : 1;
  db.blogs.push(newPost);
  writeFileSync(join(__dirname, "data", "db.json"), JSON.stringify(db, null, 2));
  res.status(201).json(newPost);
});

// Route: GET /api/posts/:id → returns a single blog by id
app.get("/api/posts/:id", (req, res) => {
  const post = db.blogs.find((b) => b.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

app.listen(8000, () => {
  console.log(" Server running on http://localhost:8000");
  console.log(" Blogs API: http://localhost:8000/api/posts");
});
