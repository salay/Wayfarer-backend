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

<<<<<<< HEAD
// userSchema.set('toJSON', {
//   transform: function(doc, ret, opt) {
//       delete ret['password']
//       return ret
//   }
// })
//this is to hide the password ^^^

module.exports = mongoose.model('User', UserSchema);
=======
    module.exports = mongoose.model('User', UserSchema);
>>>>>>> fb4c91d88adc1f755e5aa7ffdc0b6bd94331a6c8
