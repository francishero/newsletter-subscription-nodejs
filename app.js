
const express=require('express')
const bodyParser=require('body-parser')

const app=express()

app.listen(process.env.PORT || 3001,()=>console.log('Server running'))

//middleware
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/',(req,res)=>{
	addEmailToMailChimp(req.body.email)
	//console.log(req.body.email)
	res.end('Success!!')
})

function addEmailToMailChimp(email)
{
	var request = require("request");

var options = { method: 'POST',
  url: 'https://us16.api.mailchimp.com/3.0/lists/dccd34011f/members',
  headers: 
   { 'postman-token': 'f394040c-bad0-d474-3708-1ff8c909ce04',
     'cache-control': 'no-cache',
     'content-type': 'application/json',
     authorization: 'Basic YW55c3RyaW5nOjQ1ZTFiMjIxZGNkOTc2NDgwOWQ5ZTk4MDQzZGM3ZmZmLXVzMTY=' },
  body: { email_address: email, status: 'subscribed' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

}