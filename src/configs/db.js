const mongoose = require('mongoose')
require('dotenv').config()
const uri = `mongodb+srv://anupam:ck7YjLLDD5Av5AxP@entitylisting.zk6x66s.mongodb.net/login-app-db?retryWrites=true&w=majority`
const connectMongoDB = () => {
  return mongoose.connect(uri)
}
module.exports = connectMongoDB
