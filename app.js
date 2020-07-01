var express=require("express"),
app=express(),
mongoose=require("mongoose");
app.use(express.static(__dirname+"/public"));
app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/about",function(req,res){
    res.render("about.ejs");
});

app.listen(process.env.PORT,process.env.IP);