
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let Carriers = new Schema({
  carriername: {
    type: String
  },
  description: {
    type: String
  },
  
  trucknumber: {
    type: String
  },

  status: {
    type: Boolean
  }
}, {
  collection: 'carriers'
})

module.exports = mongoose.model('Carriers', Carriers)
