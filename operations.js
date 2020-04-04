const assert = require('assert');

exports.insertdocument=(db,document,collection,callback)=>{
   const coll= db.collection(collection);
   coll.insert(document,(err,result)=>
   {
       assert.equal(err,null);
       console.log('inserted ' +result.result.n); // returns no of insertions done
       callback(result);
   })

}

exports.finddocuments=(db,collection,callback)=>{
    const coll= db.collection(collection);
    coll.find({}).toArray((err,docs)=>
    {
            assert.equal(err,null);
            callback(docs);
    })
};

exports.removedocument=(db,document,collection,callback)=>{
    const coll= db.collection(collection);
      coll.deleteOne(document,(err,result)=>{
          assert.equal(err,null);
          console.log('Removed ');
          callback(result);
      })
}

exports.updatedocument=(db,document,update,collection,callback)=>{
    const coll= db.collection(collection)
    coll.updateOne(document,{$set:update},null,(err,result)=>{
        assert.equal(err,null);
        console.log('updated ');
        callback(result);
    })
}