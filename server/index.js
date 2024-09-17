const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');


const app=express();
const port =5000;

app.use(cors());
app.use(bodyParser.json());

//imitating api data since there is no access

const mockReviews=[
        {id :'1',name:'John',rating:5,comment:'nice'},
        {id :'2',name:'Travis',rating:4,comment:'good'},
        {id :'3',name:'Kayle',rating:2,comment:'could improve'},
        {id :'4',name:'Garen',rating:3,comment:'mid'}
]

//endpoint for review fetching
app.get('/api/reviews',(req,res)=>{
    res.json(mockReviews);
});

//enpoint for sumbmiting reply
app.post('/api/reviews/:id/reply',(req,res)=>{
    const reviewid=req.params.id;
    const{reply}=req.body;
    console.log(`reply for review ${reviewid}:${reply}`)
    res.json({message:'reply send sucessfully'})
})

app.listen(port,()=>{
    console.log('server running on port 5000');
});
