const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = "/";

bot.on("message", function (message) {
    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Liste des Commandes")
            .setDescription("En cours de devv")
            .addField("/help","Page d'aide", true)                 

})

bot.on("ready", function() {
    bot.user.setActivity("MentaBot : Tapez /help");
    console.log("Le bot a bien ete conecte")
})

bot.login(process.env.TOKEN)
