import Ticket from "../models/Ticket"
import { gerarQR } from "../utils/qrCodeGenerator.js"

export const comprarIngresso = async (req, res) => {
  const { nomeCliente, email, eventoId } = req.body

  const { codigo, qr } = await gerarQR()

  const ingresso = await Ticket.create({
    nomeCliente,
    email,
    eventoId,
    codigoQR: codigo
  })

  res.json({ ingresso, qr })
}

export const validarIngresso = async (req, res) => {
  const { codigo } = req.params

  const ingresso = await Ticket.findOne({ codigoQR: codigo })

  if (!ingresso) return res.json({ status: "QR inválido ❌" })

  if (ingresso.status === "usado") {
    return res.json({ status: "Ingresso já utilizado ❌" })
  }

  ingresso.status = "usado"
  ingresso.usadoEm = new Date()
  await ingresso.save()

  res.json({ status: "Entrada liberada ✅", ingresso })
}

