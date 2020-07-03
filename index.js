const Discord = require('discord.js');
const client = new Discord.Client();

client.login("NzI4MzMxMDY5MjQ1NDg5MjEy.Xv41lg.ltuEpDYIZvEU03MYDVqlinmkFzQ");

const prefix = "!";


client.on("ready", async () => {
    console.log("Allumé")
    client.user.setStatus("dnd");
    setTimeout(() => {
        client.user.setActivity("Developpement | !Help");
    }, 100)
});

client.on("message", message => {
    if(message.content === prefix + "help"){
        message.delete()
        
        let embed = new Discord.MessageEmbed()

        .setColor("#40A497")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTitle("**__Demande d'aide__**")
        .setDescription("**Suivez les commandes ci-dessous**")
        .addField(" » !clear <Nombre>", "    ■ Suppréssion de message")
        .addField(" ")
        .addField(" » !say <message>", "    ■ Message qui ne sera pas écris par vous")
        .addField("Nom d'utilisateurs", message.guild.memberCount)
        .setFooter(`Commande executée par ${message.author.username}$`)
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on("message", message => {
    if(message.content === prefix + "rab"){
        message.channel.send("**Rien à battre**")
    }
})

client.on("message", message => {
    if(message.content === prefix + "test"){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FF2D00')
            .setTitle('Some title')
            .setURL('https://discord.gg/ujvDcqC')
            .setAuthor('Aide','https://imgur.com/VsOpJEl', 'https://discord.gg/ujvDcqC')
            .setDescription('Some description here')
            .setThumbnail('https://imgur.com/VsOpJEl')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

            message.channel.send(exampleEmbed)
    }
})