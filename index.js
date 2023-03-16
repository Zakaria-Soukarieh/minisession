// import express from "express";
// import dotenv from "dotenv";
// import db from "./config/db.js";
// import progRoutes from "./routes/program.route";

// dotenv.config();

// const port = process.env.PORT || 3000;

// await db();

// const app = new express();
// app.use(express.json());


// app.use("/api/progs", progRoutes);


// // app.get("/", (req, res) => { res.send("hello world"); });
// app.listen(port, () => console.log(`server started on port ${port}`));

///////////////////////////////////////////


// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const { errorHandler } = require("./middleware/errorMiddleware");

// const connectDB = require("./config/db");




// const port = process.env.PORT || 5000;

// db();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use("/api/progs", require("./routes/program.route"));

// // app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));

////////////////////////////////////////////////////////////
import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import progRoutes from "./routes/program.route.js";

dotenv.config();

const port = process.env.PORT || 3000;

await db();

const app = new express();
app.use(express.json());

app.use("/api/progs", progRoutes);
// app.use('/api/progs', require('./routes/program.route'))

app.listen(port, () => console.log(`server started on port ${port}`));
