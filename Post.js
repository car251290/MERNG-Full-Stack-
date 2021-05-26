const {model, Schema} = require ('mongoose');

const PostSchema = Schema ({
    body: String,
    userName : String,
    createdAt: String,
    comments :[{
        body: String,
        userName : String,
        createdAt : String,
    }
  ],
  likes:[{
      userName: String,
      createdAt: String,

   }],
   user : [{
       type: Schema,
       ref : 'users'
   }]
});

module.exports= module('Post', userSchema);