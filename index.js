const Discord = require('discord.js'); 
const ytdl = require('ytdl-core');

const client = new Discord.Client();  

client.on('ready', () => {
    client.on('voiceStateUpdate', (oldMember, newMember) => {
        if(!newMember.channelID) {
            return false
        }
        
        // if(newMember.guild.name === 'Servidor de Mustache') {
        const voiceChannel = client.channels.cache.get(newMember.channelID)
        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=_4SN35o6rLk', { filter: 'audioonly' });
            const dispatcher = connection.play(stream);

            setTimeout(() => {
                voiceChannel.leave();
            }, 10000)
        })
        // }

    })
});

client.login('NzU4MDUxMDUxMTA5NzQ0NjQw.X2pUDg.lzHvhWS6KZmwKdqSVXjimFIs66I')