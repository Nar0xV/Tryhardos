const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('Tryhardos', function () {
    console.log("Je suis connecté !")
    })

    bot.on('guildMemberAdd', member => {

        const général = member.guild.channels.find('id', '478982791904624640') // ID de notre channel
        var embed = new Discord.RichEmbed()
        .setColor('#76D880')
        .setDescription(`:inbox_tray: <@${member.user.id}>, bienvenue sur le discord de la team Tryhardos esport!`)
        return général.send({embed})
        
        });
 
        bot.on('guildMemberRemove', member => {

            const général = member.guild.channels.find('id', '478982791904624640') // ID de notre channel
            var embed = new Discord.RichEmbed()
            .setColor('#76D880')
            .setDescription(`:inbox_tray: <@${member.user.id}>nous a quitté ! `)
            return général.send({embed})
 
        });
 
bot.login('NDc5MjA3Njc0ODM2Mjg3NTAw.DlV9Gg.A7zDNTIbvRmz2zFKdvD2V-fyZFM')
