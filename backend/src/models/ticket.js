import mongoose from "mongoose"

const TicketSchema = new mongoose.Schema({
  eventoId: mongoose.Schema.Types.ObjectId,
  nomeCliente: String,
  email: String,
  codigoQR: String,
  status: { type: String, default: "valido" },
  criadoEm: { type: Date, default: Date.now },
  usadoEm: Date
})

export default mongoose.model("Ticket", TicketSchema)
