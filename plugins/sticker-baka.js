/*import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
import axios from "axios" 
let handler = async (m, { conn}) => {
try {
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
//let res = await axios.get("http://api.nekos.fun:8080/api/baka")
let res = await fetch('http://api.nekos.fun:8080/api/baka')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `+${m.sender.split('@')[0]} está diciendo baka a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(baka)$/i  
export default handler*/


import fetch from 'node-fetch'
const dir = [
  await fetch('http://api.nekos.fun:8080/api/baka'),
  await fetch('http://api.nekos.fun:8080/api/baka'),
  await fetch('http://api.nekos.fun:8080/api/baka'),
];
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['baka'] 
export default handler
