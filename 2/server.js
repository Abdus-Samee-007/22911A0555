const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 8080

app.use(express.json())

app.listen(PORT, (req,res)=>{
    console.log(`Server is running on ${PORT}`);
})

app.get('/users',async (req,res)=>{
    try {
        const res = await axios.get("http://20.244.56.144/test/users", {
            headers: {
                Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTQ5MTcwLCJpYXQiOjE3NDMxNDg4NzAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk2NWEzOThjLTAzYjktNDI4My05ZjhhLTlhMmI3ODhlODNjZCIsInN1YiI6ImFiZHVzMDA3c2FtZWVAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI5NjVhMzk4Yy0wM2I5LTQyODMtOWY4YS05YTJiNzg4ZTgzY2QiLCJjbGllbnRTZWNyZXQiOiJDZkdnZWJSaElEblRMUGtnIiwib3duZXJOYW1lIjoiUmFodWwiLCJvd25lckVtYWlsIjoiYWJkdXMwMDdzYW1lZUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMjkxMUEwNTU1In0.xzQU1rLG5QYgF3ciE6g7PXmkoPrmh6f0LS5j8K5cDYc`
            }
        })
        const users = res.data
        res.status(200).json(users)
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500,`There was an error in : ${error}`)
    }
})

app.get('/test/users/:userid/posts', async (req,res)=>{
    const { userid } = req.params;
    try {
        const res = await axios.get("http://20.244.56.144/test/users/:userid/posts")
        const users = res.data
        res.status(200).json(users)
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500,`There was an error in : ${error}`)
    }

})
