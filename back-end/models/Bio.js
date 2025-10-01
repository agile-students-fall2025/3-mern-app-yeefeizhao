const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    introParagraph: {
      type: String,
      required: true,
    },
    profilePicUrl: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Bio = mongoose.model('Bio', bioSchema)

module.exports = {
  Bio,
}


