const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

let connectedClients = 0;
let newUpdate = false;

app.get("/update",(req,res)=>{
    newUpdate = true;
    res.send(200);
});


app.get("/",(req,res)=>{
    
    let count =0;
    connectedClients++;
    let checkforUpdate = false;

    let ref= setInterval(()=>{
        if(count===30){
            connectedClients--;
            if(connectedClients==0){
                console.log("All clients update done")
                newUpdate=false;
            }
            clearInterval(ref);
           try{ res.json({
                msg:"30 seconds done"
            })
        }
        catch(err){
            console.log("response sent as update for this client")
        }
        }
        else{
            count++;
            checkforUpdate = newUpdate;
            if(checkforUpdate){
               res.json({update:"Update from server"})
               count=30;
            }
            console.log(count);
        }
    },1000);



});


app.listen(3001,()=>{
    console.log("Service started at 3001")
});