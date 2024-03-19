import express from "express";
const app=express();

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/another" ,(req,res) => {
    res.render("shoulder.ejs");
});
app.get("/another1" ,(req,res) => {
    res.render("chest.ejs");
});
app.get("/another2" ,(req,res) => {
    res.render("bicep.ejs");
});
app.get("/another3" ,(req,res) => {
    res.render("abs.ejs");
});
app.get("/another4" ,(req,res) => {
    res.render("tricep.ejs");
});
app.get("/another5" ,(req,res) => {
    res.render("leg.ejs");
});
app.get("/another6" ,(req,res) => {
    res.render("back.ejs");
});
app.get("/another7" ,(req,res) => {
    res.render("cardio.ejs");
});
app.listen(3000,()=>{
    console.log("hello running");
}); 
