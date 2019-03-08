const mongoose = require('mongoose');
const PostSchema = require('./Post');

const UserSchema = mongoose.Schema({
  username: String,
  image: String,
  email: { 
    type: String, 
    required: true, 
    unique: true},
  password: { 
    type: String, 
    required: true, 
    select: false},
  fullname: String,
  currentcity: String,
  // joinDate: new Date(),
  posts:[PostSchema.schema]
})

// userSchema.set('toJSON', {
//   transform: function(doc, ret, opt) {
//       delete ret['password']
//       return ret
//   }
// })
//ask dalton about this.

module.exports = mongoose.model('User', UserSchema);