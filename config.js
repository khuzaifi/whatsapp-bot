/**
   * Create By Bernekellboy
   * Contact Me on wa.me/6289695073357
   * Follow https://github.com/Bernekellboy 
   * Yang jual script ini this is jahanam waiting for you bro 
   * Jangan asal ubah nanti eror nangis.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
// Daftar Kalo Limit Nya Habis
global.APIKeys = {
	'https://zenzapi.xyz': 'Apikey Luwh Disini Ngabs',
}

// Other
// Jangan Asal Isi Awas Eror
global.owner = ['6285782708395','6285782708395','6285782708395'] // Nomer Luwh Disinih Ngabs
global.ownernumber = 'wa.me/6285782708395' // Sama Ajah Ngabs
global.ownername = 'KhuzaifiGanz🔥' // Nama Luwh Ngabs
global.botname = 'KhuzaifiGanz-bot' // Nama Pler Luwh Ngabs
global.packname = '© KHUZAIFIGANZ-MD'
global.facebook = 'KhuzaifiGanz'
global.footer = 'CREATED BY KHUZAFIGANZ️'
global.myweb = 'https://rootsec.xyz/' // Nama Web Bokep Luwh Ngabs
global.igeh = 'https://instagram.com/snssus_' // Nama Igeh Buat Coli Luwh Ngabs
global.allfriend = '📺 All My Friends And All Creator Bot Wangsap' // Isi Temen Bangsat Luwh Ngabs
global.quotes = '📜 Jadikan hinaan itu sebagai alasan lu agar semangat dan bisa untuk membuktikan bahwa lu bukaj seperti yang mereka kira!.' // Quotes Wiboe Luwh Ngabs
global.author = 'Ig : @snssus_'
global.sessionName = 'nekell'
global.prefa = ['','!','.','🐦','🐤','🗿'] // Jangan Di Ubah Nanti Eror
global.sp = '⭔'
global.mess = {
    success: '✅ Done Success',
    admin: '❌Fitur Khusus Admin Group!',
    botAdmin: '📢 Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '❌ Fitur Khusus Owner Bot',
    group: '❌ Fitur Digunakan Hanya Untuk Group!',
    private: '❌ Fitur Digunakan Hanya Untuk Private Chat!',
    bot: '❌ Fitur Khusus Pengguna Nomor Bot',
    wait: '⌛ Sabar Loading...',
}
global.thumb = fs.readFileSync('./lib/nekell.jpg') //Gambar Bot Luwh

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
