const mongoose = require('mongoose');
Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: String,
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
  posts:[{
    type: Schema.Types.ObjectId,
    ref: 'Post' 
  }]
})

// userSchema.set('toJSON', {
//   transform: function(doc, ret, opt) {
//       delete ret['password']
//       return ret
//   }
// })
//ask dalton about this.

module.exports = mongoose.model('User', UserSchema);