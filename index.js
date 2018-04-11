const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function (message) {
    if (message.content === "/help") {
        message.channel.sendMessage("```\nListe des Commandes: \n- /help\n```")

	}

})

bot.on("ready", function() {
    bot.user.setActivity("MentaBot : Tapez /help");
    console.log("Le bot a bien ete conecte")
})

bot.login(discord.env.TOKEN)
