const { log } = require('console')
const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())

app.listen(PORT, (req,res)=>{
    console.log(`Server is running on ${PORT}`);
})