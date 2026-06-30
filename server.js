// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");

// const connectDB = require("./config/db");

// dotenv.config();

// connectDB();

// const app = express();

// app.use(cors());

// app.use(express.json());

// app.use("/api/auth", require("./routes/authRoutes"));

// app.use("/api/tasks", require("./routes/taskRoutes"));

// app.listen(process.env.PORT, () => {
//   console.log(
//     `Server Running on ${process.env.PORT}`
//   );
// });


const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local development
      process.env.CLIENT_URL,  // Your deployed frontend
    ],
    credentials: true,
  })
);

// Parse JSON
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Kanban API is running 🚀");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});