const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = "/";

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command + args.shift().toLowerCase();

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "permkick");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Erreur: Tu n'as pas la permission!").catch(console.error)
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Erreur: Merci de mentionner l'utilisateurà expulsez").catch(console.error)
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Erreur: Cet utilisateur est introuvable ou impossible à expulser!")
        }
        if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Erreur: Je n'ai pas la permission KICK_MEMBERS pour faire cela.").catch(console.error)
        }
        kickMember.kick().then(member => {
            message.reply('${member.user.username} a été expulsé !').catch(console.error)
            message.guild.channels.find("name", "logs_discord").send('**${member.user.username a été expulsé du discord par **${member.author.username')

    }


bot.on("message", function (message) {
    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Liste des Commandes")
            .setDescription("Liste des commandes du BOT")
            .addField("`◊◊◊◊◊◊◊◊◊◊◊◊◊`")
            .addField("- /help","**Page d'aide**", true)
            .addField("`◊◊◊◊◊◊◊◊◊◊◊◊◊`")
            .addField("**Commandes Admin:**", "`◊◊◊◊◊◊◊◊◊◊◊◊◊`", true)
            .addField("- /kick @Joueur", "**Expulsez Un Joueur**", true)
            .addField("- /ban @Joueur", "**Bannir Un Joueur**", true)
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
