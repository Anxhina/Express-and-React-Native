
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const postSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   photo: {
      type: String,
      required: true
   },
   desc: {
      type: String,
      required: true
   }
   //   createdBy: { type: String },
   //   createdAt: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Post', postSchema);