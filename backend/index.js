import express from "express"
import cors from "cors"
const app = express()
import dotenv from "dotenv"
import connectToDB from "./db/database.js"
dotenv.config()
const port = process.env.PORT;

connectToDB();

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));

app.use(express.json());

app.get('/', (req, res) => {
  res.json("test ok")
})

//importing routes

import router from "./routes/user.routes.js"

//decalring routes
app.use("/api/user", router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});