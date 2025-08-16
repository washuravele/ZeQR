import e from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";

const app = e();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(e.static("public"));

app.get("/",(req,res)=>{
   res.render("index.ejs");
});



app.post("/generate",(req,res)=>{
  var url = req.body.link;
  var qr_png = qr.image(url);
  qr_png.pipe(fs.createWriteStream('public/qr_code.png'));
  res.redirect("/");

});


app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
});
