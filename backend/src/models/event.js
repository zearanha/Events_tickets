import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
  nome: String,
  data: Date,
  local: String,
  capacidade: Number
})

export default mongoose.model("Event", EventSchema)
