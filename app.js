
const express=require('express')

const app=express()

app.listen(3000,()=>console.log('Server running'))

//middleware
app.use(express.static(__dirname+'/public'))

app.post('/',(req,res)=>{
	res.end('Hello world')
})