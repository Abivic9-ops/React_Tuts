import express from "express";
import { readFileSync } from "fs";
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
  next();
});

// Route: GET /api/posts → returns all blog entries
app.get("/api/posts", (req, res) => {
  res.json(db.blogs);
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
