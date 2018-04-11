const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = "/";

bot.on("message", function (message) {
    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Liste des Commandes")
            .setDescription("Liste des commandes du BOT")
            .addField("`◊◊◊◊◊◊◊◊◊◊◊◊◊`")
            .addField("- /help","**Page d'aide**", true)
            .addField("`◊◊◊◊◊◊◊◊◊◊◊◊◊`")
            .addField("**Commandes Admin:**")
            .addField("`◊◊◊◊◊◊◊◊◊◊◊◊◊`")
            .addField("- /kick", "**Expulsez Un Joueur**", true)
            .addField("- /ban", "**Bannir Un Joueur**", true)
            .setColor("0x009127")
            .setFooter("©Menta PvP - 2018 Tout droits réservés")
        message.channel.sendEmbed(embed);
    }  

})

bot.on("ready", function() {
    bot.user.setActivity("MentaBot : Tapez /help");
    console.log("Le bot a bien ete conecte")
})

bot.login(process.env.TOKEN)
