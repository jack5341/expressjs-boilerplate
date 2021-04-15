import { Router } from "express"
const route = Router()

route.get("/world", (req,res) => res.send("world"))

module.exports = Router