const express =require("express");
const app = express();

app.get("/",(req,res)=>{
	res.send("hello")
});
// DB connections
require("./Db_con/connection");
require("./strap")()
const port = 5000;

function run(){
	app.listen(port, console.log(`Server is run on port ${port}`))
}

run();