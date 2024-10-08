const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const {Types} = mongoose;
const {ObjectId} = Types;

const studentSchema = new Schema({

  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  linkedinUrl: String,
  languages: {type: [String], enum:["English","Spanish","French","German","Portuguese", "Dutch", "Other"]},
  program:{type: String, enum:["Web Dev", "UX/UI", "Data Analytics", "Cybersecurity"]},
  background:{type: String, default:"Empty"},
  image: {type: String, default: "https://i.imgur.com/r8bo8u7.png"},
  cohort: {type: ObjectId, ref: "Cohort"},
  projects: Array
  })