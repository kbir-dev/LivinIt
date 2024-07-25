import express from "express"
import cors from "cors"
const app = express()
const port = 3000

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));

app.use(express.json());

app.get('/test', (req, res) => {
  res.json("test ok")
})

app.post('/register', (req, res) => {
  const {name , email, password} = req.body;
    res.json({
      name,
      email,
      password
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})