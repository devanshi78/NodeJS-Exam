import express from "express"
import db from "./config/db.js"
import cookieParser from "cookie-parser";
import dotenv from "./config/dotenv.js";
import router from "./routers/index.js";
import bodyParser from "body-parser";

const app = express();
const port = dotenv.PORT || 3001;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));
app.use(cookieParser());

app.use('/',router);

app.listen(port,(error) => {
    if(!error){
        console.log("server started.");
        console.log('http://localhost:'+port)
    }
})