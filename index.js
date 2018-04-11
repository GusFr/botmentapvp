const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setActivity("Menta Bot : Tapez /help");
    console/log("Bot Succes");
});

bot.login("NDE2MzMzNTYzNzgxMTg1NTU3.DbATXg.Ls-qt66uNaRx9xOG_JkPkfOExoE");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -/help");
    }

    if (message.content === "Salut"){
        message.reply("Hey :)");
        console.log("Commade Salut Sucess");
    }
});
