const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
var cmd = require('node-cmd')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000

function runScript(url){
	var pyProcess = cmd.get('python script.py '+url,
              function(data, err, stderr) {
                if (!err) {
                  console.log("data from python script " + data)
                } else {
                  console.log("python script cmd error: " + err)
                  }
                }
              );
}
app.get('/',(req,res)=>{
	res.send({status:"At index page!"})
})

app.post('/',(req,res)=>{
	runScript(req.body.url)
	console.log(req.body);
	res.send({'status':'Read',path:req.body.url+'.png'})
})

app.listen(port,()=>{
	console.log('Live on ',port)
})