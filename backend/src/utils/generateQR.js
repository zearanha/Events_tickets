import QRCode from "qrcode"
import { v4 as uuidv4 } from "uuid" 

async function gerarQR() {
  const codigo = uuidv4()
  const url = `http://localhost:3000/validar/${codigo}`
  const qr = await QRCode.toDataURL(url)

  return { codigo, qr }
}

module.exports = gerarQR
