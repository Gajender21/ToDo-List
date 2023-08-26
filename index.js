import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT= process.env.PORT || 3030;
var liItemsWork=new Array();
var liItemsToday=new Array();



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("styles"));
app.use(express.static("Assets"));


app.get("/",(req,res)=>{
    console.log("home");
    liItemsWork=[];
    liItemsToday=[];
    res.render("index.ejs");
});

app.get("/work",(req,res)=>{
    console.log("work");

    res.render("index.ejs");
});

app.get("/today",(req,res)=>{
    console.log("today");
    var date= new Date().toLocaleDateString();
   
    console.log(date);
    res.render("today.ejs",{
        dt : getdate()
    });
});
app.post("/listaddtoday",(req,res)=>{
    
    liItemsToday.push(req.body["textinput"]);
    console.log(liItemsToday);
    res.render("today.ejs",{
       a1: liItemsToday,
       dt : getdate()
        
    });
});
app.post("/listaddwork",(req,res)=>{
    
    liItemsWork.push(req.body["textinput"]);
    console.log(liItemsWork);
    res.render("index.ejs",{
       a1: liItemsWork
        
    }); 
});


app.listen(PORT,()=>{
console.log(`Running on port: ${PORT}`);
});



function getdate(){
    var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a  }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = dayOfWeek +", "+ curMonth +" "+dayOfMonth ;
 return today;
}