const mongoClient = require('mongodb').MongoClient
const assert =require('assert')
const dboper = require('./operations')

const url ='mongodb://localhost:27017' //port number at which mongo server is running
const dbname = 'confusion'
// nested structure of callbacks
mongoClient.connect(url,(err,client)=>
{
    assert.equal(err,null);
    console.log('connected to server')

    const db=client.db(dbname)
    dboper.insertdocument(db,{name:'sai',marks:'97'},'dishes',(result)=>{
      console.log('insert document \n '+result.ops);
      dboper.finddocuments(db,'dishes',(result)=>{
          console.log('found documents');
          dboper.updatedocument(db,{name:'sai'},{marks:100},'dishes',(docs)=>{
              console.log('updated document \n'+ result.result)
              dboper.finddocuments(db,'dishes',(docs)=>{
                  console.log('found ');
                  db.dropCollection('dishes',(result)=>{
                      console.log('dropped collection ',result);
                  })
              })
          })
      });
    });
})
