const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const {
	prefix,
	token,
} = require('./config.json');
const queue = new Map();
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`)
});


bot.login(TOKEN);
