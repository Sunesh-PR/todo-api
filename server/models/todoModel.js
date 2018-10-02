const mongoose = require('mongoose');
var todo = mongoose.model('Todo',{
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type:Boolean,
      default:false
    },
    completedDate:{
      type:Number,
      default:null
    }
});
module.exports = {todo};
