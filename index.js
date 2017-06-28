/*eslint-env node*/
'use strict';

//require() declarations
var dotenv = require('dotenv');
const Discord = require('discord.js');

dotenv.config();

const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!'); //eslint-disable-line
});

client.on('message', message => {
	if (message.content === 'ping') {
		message.reply('pong');
	}
});

client.login(process.env.DISCORD_TOKEN_ID);