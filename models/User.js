    const mongoose = require('mongoose');
    Schema = mongoose.Schema;

    const UserSchema = mongoose.Schema({
      username: String,
      email: { 
        type: String, 
        required: true, 
        unique: true },
      password: { 
        type: String, 
        required: true, 
        select: false },
      fullname: String,
      currentcity: String,
      joinDate: { type: Date, default: Date.now },
      posts:[{
        type: Schema.Types.ObjectId,
        ref: 'Post' 
      }]
    })

    module.exports = mongoose.model('User', UserSchema);
