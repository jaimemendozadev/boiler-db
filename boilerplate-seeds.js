require('dotenv').load()

// Require DB Models
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const mongoDB = process.env.DB_URL

mongoose.connect(mongoDB)
const db = mongoose.connection

const closeDB = () => {
  db.close(() => {
    console.log('The connection to the database has been terminated.')
  })
}

const initiateDBSeeding = async () => {
  // Create dummy documents in DB
  // const Model_DB_Result = await Model.create({ name: newCompany })

  closeDB()
}

const runSeedDBFunc = async () => {
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))

  db.on('connected', () => {
    console.log('Successfully connected to DB!')

    // Remove all documents from each Model
    // let model1 = await Model.remove({})

    initiateDBSeeding()
  })
}

runSeedDBFunc()
