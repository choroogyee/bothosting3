const Discord = require("discord.js");
const client = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed();
 
client.on('ready', () => {
  console.log(`다음으로 로그인합니다. : ${client.user.tag}`);
});
 
client.on('message', msg => {
  if (msg.content === '=안녕') {
    exampleEmbed.setTitle('반가워!')
    exampleEmbed.setDescription('반갑다 이친구야!')
    exampleEmbed.setColor('#ffc0cb')
    exampleEmbed.setFooter('초롱이YT#3632','https://cdn.discordapp.com/avatars/487962402097332224/1aa399e4feb303d3e872b5228ce193da.png?size=2048');
  msg.channel.send(exampleEmbed);
  }

  if (msg.content === '=핑'){
    exampleEmbed.setTitle('크퐁!')
    exampleEmbed.setDescription(Math.floor(client.ping) + '밀리초')
    exampleEmbed.setColor('#ffc0cb')
    exampleEmbed.setFooter('초롱이YT#3632','https://cdn.discordapp.com/avatars/487962402097332224/1aa399e4feb303d3e872b5228ce193da.png?size=2048');
  msg.channel.send(exampleEmbed)
  }
});
 
client.login('NjIwOTA0MDU3MDY1NzAxMzc2.Xd5Rbg.u6RgILL9KdFRpvY2kJccjoUfEoI');