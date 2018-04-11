const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
	bot.user.setActivity('Menta PvP : play.menta-pvp.fr ou www.menta-pvp.fr').catch(console.error)
})

bot.on('message', function (message) {
	if (message.content === '/aide') {
		message.reply('à besoin d\'aide @Staff !')

	}
	if (message.content === 'Yo') {
		message.reply('Yo !')

	}
	if (message.content === 'yo') {
		message.reply('Yo !')

	}
	if (message.content === 'Salut') {
		message.reply('Salut à toi !')

	}

})

bot.on('guildMemberAdd', function (member) {
  	member.createDM().then(function (channel) {
  		return channel.send('**Bienvenue du Menta PvP** ' + member.displayName)
	}).catch(console.error)


})


bot.login(process.env.TOKEN)


