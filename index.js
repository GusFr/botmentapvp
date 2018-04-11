const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function (message) {
    if (message.content === "/help") {
        message.reply("Patientez le bot se developpe")

	}

})

bot.on("ready", function() {
    bot.user.setActivity("MentaBot, Tapez /help");
    console.log("Le bot a bien ete conecte")
})

bot.login("NDE2MzMzNTYzNzgxMTg1NTU3.DbAOjQ._333l8YCZ7HOpkbTr3crtvnA0oo")