const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
     },
  password: 
  { type: String, 
    required: true, 
    select: false}
})

// userSchema.set('toJSON', {
//   transform: function(doc, ret, opt) {
//       delete ret['password']
//       return ret
//   }
// })
//ask dalton about this.

module.exports = mongoose.model('User', UserSchema);