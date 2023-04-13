var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const path = require('path');
var router = express.Router();



var passwordValidator = require('password-validator');
const app = express();

var b;
const ejs = require("ejs");
var engines = require('consolidate');
const { send } = require("process");
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.use(bodyParser.urlencoded({
    extended: true
}));
const rb = require('./Database/DBs/RaisedBlood.js').rb
const bt = require('./Database/DBs/Bloods.js').bt
const types = require('./Database/DBs/Types.js').types
//const RaisedBlood = require('./Database/DBs/')

var Reqtype;

app.get("/", (req, res) => {
    res.render("Home1.html")

});

app.get('/RaiseBlood', function(req, res) {
    res.render('RaiseBlood.html');
});
app.get('/getBlood', function(req, res) {
    res.render('GetBlood.html');
});
app.get('/SuggestedBlood', function(req, res) {
    console.log(Reqtype);
    res.render('SuggestedBlood');
});
app.get('/ShowBloodsTable', async(req, res)=> {
    console.log(Reqtype);
    let b = await types.find({});
    res.render('ShowBloodsTable',{bloods:b});
});

app.get('/Success', function(req, res) {
    res.render('Success.html');
});

/******************************************HERE************************/
app.post("/RaiseBlood", async(req, res) => {
    console.log('Raising blood');
    let bt1 = new bt({
        FName:req.body.FName,
        id:req.body.id,
        amount:req.body.amount,
        date:req.body.date,
        type:req.body.type
    });
    let t= await types.findOne({type:req.body.type});
    const am=parseInt(req.body.amount);
    t.amount= t.amount+am;
    //t.amount = a;
    t.save(function(err) {

        if (!err) {

            console.log(t);
        }
});
    bt1.save(function(err) {

        if (!err) {

            console.log(bt1);

            return res.redirect('/Home1.html');
        }
});
 });

async function checkamount(type1,amount)
{
    const b=await types.findOne({type:type1});
    console.log("Here are the vars: ",type1,amount);
    if(b==null){
        return false;
    }
    if (b.amount-amount>=0){
        console.log('return true in check amount');
        return true;
    }
    console.log('Return false');
    return false;

}

app.post("/GetBlood", async(req, res) => {
    console.log("Get blood");
    let t= await types.findOne({type:req.body.type});
    const am=parseInt(req.body.amount);
    let arr=[];

    if (t.amount-am<0)
    {
        Reqtype=t.type;
        console.log(Reqtype);
        if(Reqtype=='A+')
        {
            b = await types.find({$or: [{ type: 'A-' },{ type: 'O+' },{type: 'O-'}]});
           console.log(b);
        }
        if(Reqtype=='O+')
        {
            b = await types.find({$or: [{ type: 'O+' },{type: 'O-'}]});
            console.log(b);
        }
        if(Reqtype=='B+')
        {
            b = await types.find({$or: [{ type: 'B-' },{ type: 'O+' },{type: 'O-'},{type:'B+'}]});
            console.log(b);
        }
        if(Reqtype=='AB+')
        {
             b = await types.find({$or: [{type:'A+'},{ type: 'A-' },{ type: 'O+' },{type: 'O-'},{type:'B+'},{ type: 'B-' },{type:'AB-'}]});
            console.log(b);
        }
        if(Reqtype=='A-')
        {
             b = await types.find({$or: [{type: 'O-'}]});
            console.log(b);
        }
        if(Reqtype=='O-')
        {
             b = await types.find({$or: [{type: 'O-'}]});
            console.log(b);
        }
        if(Reqtype=='B-')
        {
             b = await types.find({$or: [{type: 'O-'}]});
            console.log(b);
        }
        if(Reqtype=='AB-')
        {
             b = await types.find({$or: [{ type: 'A-' },{type: 'O-'},{ type: 'B-' }]});
            console.log(b);
        }

        return res.render('SuggestedBlood.ejs',{
            bloods: b
            })
    }
    else{
    t.amount= t.amount-am;
    t.save(function(err) {

        if (!err) {

            console.log(t);
        }
    
    return res.redirect('/success.html');
    })
}});

app.get("/ErrorPage",async(req,res)=>{
    console.log(Reqtype);
    res.render('ErrorPage.html');
})
app.get("/GetEmergency",async(req,res)=>{
    let obj= await types.findOne({type:'O-'});
    const am=parseInt(obj.amount);
    if (am==0)
    {
        return res.render('ErrorPageFoeEmergency.html');
    }
    return res.render('GetEmergency.ejs',{
        q:obj
    });

})

app.post("/GetEmergency",async(req,res)=>{
    let obj= await types.findOne({type:'O-'});
    const am=parseInt(obj.amount);
    const am1=parseInt(req.body.amount);
    if(am-am1<0)
    {
        return res.render('GetEmergency.ejs',{
            q:obj
        });
    }
    if(am-am1>=0)
    {
        obj.amount=obj.amount-am1;
        obj.save(function(err) {

            if (!err) {
    
                console.log(obj);
            }})
    }
    res.render('Home1.html');

})
app.post("/SuggestedBlood", async(req, res) => {
    console.log(req.body.amount);
    console.log(typeof(req.body.type));
    const obj= await types.findOne({type:req.body.type});
    let c=false;
    if (obj!=null)
    {
        if (obj.amount-req.body.amount>=0)
        {
            const am=parseInt(req.body.amount);
            obj.amount=obj.amount-am;
            obj.save(function(err) {

                if (!err) {
        
                    console.log(obj);
                }})
            c=true;
        }
    }
    if (c==true)
    {
        console.log("Suggested blood succeded");
        return res.redirect('/Success.html');
    }
    if (c==false)
    {
        console.log('valorant');
        if(Reqtype=='A+')
        {
            b = await types.find({$or: [{ type: 'A-' },{ type: 'O+' },{type: 'O-'}]});
           console.log(b);
        }
        if(Reqtype=='O+')
        {
            b = await types.find({$or: [{ type: 'O+' },{type: 'O-'}]});
            console.log(b);
        }
        if(Reqtype=='B+')
        {
            b = await types.find({$or: [{ type: 'B-' },{ type: 'O+' },{type: 'O-'},{type:'B+'}]});
            console.log(b);
        }
        if(Reqtype=='AB+')
        {
             b = await types.find({$or: [{type:'A+'},{ type: 'A-' },{ type: 'O+' },{type: 'O-'},{type:'B+'},{ type: 'B-' },{type:'AB-'}]});
            console.log(b);
        }
        if(Reqtype=='A-')
        {
             b = await types.find({$or: [{type: 'O-'}]});
            console.log(b);
        }
        if(Reqtype=='O-')
        {
             b = await types.find({$or: [{type: 'O-'}]});
            console.log(b);
        }
        if(Reqtype=='B-')
        {
             b = await types.find({$or: [{type: 'O-'}]});
            console.log(b);
        }
        if(Reqtype=='AB-')
        {
             b = await types.find({$or: [{ type: 'A-' },{type: 'O-'},{ type: 'B-' }]});
            console.log(b);
        }
        return res.render('SuggestedBlood.ejs',{
            bloods: b
            })
    }
});

app.get('/ShowBloodTables.ejs')



module.exports = app;






















































