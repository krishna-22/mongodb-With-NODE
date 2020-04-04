const mongoClient = require('mongodb').MongoClient
const assert =require('assert')

const url ='mongodb://localhost:27017' //port number at which mongo server is running
const dbname = 'confusion'
mongoClient.connect(url,(err,client)=>
{
    assert.equal(err,null);
    console.log('connected to server')

    const db=client.db(dbname)
    const collection = db.collection('dishes')

    collection.insertOne({'name':'puri','description':'oily'},(err,result)=>{
        assert.equal(err,null)
        console.log('insertion done')
        console.log(result.ops)

        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null)
            console.log('Found ')
            console.log(docs)

            db.dropCollection('dishes',(err,result=>{
                assert.equal(err,null)
                client.close()
            }))
        })
    })
})
