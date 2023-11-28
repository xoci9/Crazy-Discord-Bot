const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const allowedUsers = ['iloveunicorns123', 'iixociii'];

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const lowerContent = message.content.trim().toLowerCase();

    if (message.content.trim().toLowerCase().endsWith('crazy') || message.content.trim().toLowerCase() === 'crazy') {
        for (let i = 0; i < 3; i++) {
            message.channel.send("Crazy?");
            message.channel.send("I was crazy once");
            message.channel.send("They locked me in a room");
            message.channel.send("A rubber room");
            message.channel.send("A rubber room with rats");
            message.channel.send("The rats made me crazy");
        }
    }

    if (lowerContent.includes('luv you')&& allowedUsers.includes(message.author.username)) {
        message.channel.send("If you love me, just wait until you meet my creator!");
        message.channel.send("He's a HOT piece of ass :drooling_face:");
    }

    if (lowerContent.includes('love you')){
        message.channel.send("I know, love you too baby girl (bbg), :kissing_heart:");
        message.channel.send("Your my fav user, just dont tell the others. (Thanks love)");
    }
});

client.login('Your Token');


//Crazy baby i loved you where my only love but i understand now that you need to go. i really loved you with all my heart believe me but its time for you to go now. I hope you had a good time in the server and i hoop you can find someone better crazy. we all didnt deserve you. You were way to good. Anyways in gonna miss you so so so much crazy. Crazy me love my goodbye once and for all :heart:
