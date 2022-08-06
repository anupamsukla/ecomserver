const mongoose = require('mongoose')
require('dotenv').config()
const uri = `mongodb+srv://anupam:ck7YjLLDD5Av5AxP@entitylisting.zk6x66s.mongodb.net/login-app-db?retryWrites=true&w=majority`
const connectMongoDB = () => {
  return mongoose.connect(uri)
}
module.exports = connectMongoDB
//`mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@backend.svdlc.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
