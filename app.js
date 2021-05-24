const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const {
	prefix,
	token,
} = require('./config.json');
const queue = new Map();
const bot = new Discord.Client();
const TOKEN = "ODQ2MTA0ODAyMDQ3NTU3Njcz.YKqqgA.mvbYOQP5X31JpOZiyMhaq5KGNJM";

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`)
});


bot.login(TOKEN);