import express from "express"
const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("https://github.com/jack5341")
})

app.get("/hello", (req,res) => res.send("hello"))

const PORT = 3000 || process.env.PORT
app.listen(PORT, () => console.log("Server does work"))