module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7",
  react: "🎀",
  start: async (Miku, m, { text, prefix ,modStatus}) => {

    let txt = `       『  *Bot Charactes*  』\n\n\n_0 - Atlas MD_\n\n_1 - Power MD_\n\n_2 - Makima MD_\n\n_3 - Denji MD_\n\n_4 - Zero Two_\n\n_5 - Chika MD_\n\n_6 - Miku MD_\n\n_7 - Marin MD_\n\n_8 - Ayanokoji MD_\n\n_9 - Ruka MD_\n\n_10 - Mizuhara MD_\n\n_11 - Rem MD_\n\n_12 - Sumi MD_\n\n_13 - Kaguya MD_\n\n_14 - Yumeko MD_\n\n_15 - Kurumi MD_\n\n_16 - Mai MD_\n\n_17 - Yor MD_\n\n_18 - Shinbou MD_\n\n_19 - Eiko MD_\n\n\_20 - Benimaru MD_\n\n_21 - Hinata MD_\n\n_22 - Obito MD_\n\n_23 - Mikasa MD_\n\n_24 - Emilia MD_\n\n\nExample: *${prefix}setchar 5* or choose button below.\n`;

    let botLogos = [
      'https://wallpapercave.com/wp/wp5924545.jpg',
      'https://wallpapercave.com/wp/wp11287624.jpg',
      'https://wallpapercave.com/wp/wp9666938.jpg',
      'https://wallpapercave.com/wp/wp11646689.jpg',
      'https://wallpapercave.com/uwp/uwp2159409.jpeg',
      'https://images4.alphacoders.com/100/1002134.png',
      'https://wallpapercave.com/wp/wp5440431.jpg',
      'https://wallpapercave.com/uwp/uwp2518151.webp',
      'https://wallpapers.com/images/file/kiyotaka-ayanokoji-in-pink-qs33qgqm79ccsq7n.jpg',
      'https://wallpapercave.com/uwp/uwp1175293.png',
      'https://wallpapercave.com/wp/wp7231907.jpg',
      'https://wallpapercave.com/wp/wp3923451.png',
      'https://moewalls.com/wp-content/uploads/2022/07/sumi-sakurasawa-hmph-rent-a-girlfriend-thumb.jpg',
      'https://wallpapercave.com/uwp/uwp912010.jpeg',
      'https://wallpapercave.com/wp/wp5235308.png',
      'https://wallpapercave.com/wp/wp5894820.jpg',
      'https://wallpapercave.com/wp/wp10128659.png',
      'https://wallpapercave.com/wp/wp11031122.jpg',
      'https://wallpapercave.com/uwp/uwp3393663.webp',
      'https://images8.alphacoders.com/122/1229829.jpg',
      'https://wallpapercave.com/wp/wp9179142.jpg',
      'https://wallpapercave.com/uwp/uwp985562.jpeg',
      'https://images3.alphacoders.com/105/1052843.jpg',
      'https://wallpapercave.com/wp/wp8142276.png',
      'https://wallpapercave.com/wp/wp8142276.png'
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];
   
    let sections = [] 
    let chars = ['𝐀𝐭𝐥𝐚𝐬 𝐌𝐃', '𝐏𝐨𝐰𝐞𝐫 𝐌𝐃', '𝐌𝐚𝐤𝐢𝐦𝐚 𝐌𝐃', '𝐃𝐞𝐧𝐣𝐢 𝐌𝐃', '𝐙𝐞𝐫𝐨 𝐓𝐰𝐨 𝐌𝐃', '𝐂𝐡𝐢𝐤𝐚 𝐌𝐃', '𝐌𝐢𝐤𝐮 𝐌𝐃', '𝐌𝐚𝐫𝐢𝐧 𝐌𝐃', '𝐀𝐲𝐚𝐧𝐨𝐤𝐨𝐣𝐢 𝐌𝐃', '𝐑𝐮𝐤𝐚 𝐌𝐃', '𝐌𝐢𝐳𝐮𝐡𝐚𝐫𝐚 𝐌𝐃', '𝐑𝐞𝐦 𝐌𝐃', '𝐒𝐮𝐦𝐢 𝐌𝐃', '𝐊𝐚𝐠𝐮𝐲𝐚 𝐌𝐃', '𝐘𝐮𝐦𝐞𝐤𝐨 𝐌𝐃', '𝐊𝐮𝐫𝐮𝐦𝐢 𝐌𝐃', '𝐌𝐚𝐢 𝐌𝐃', '𝐘𝐨𝐫 𝐌𝐃', '𝐒𝐡𝐢𝐧𝐛𝐨𝐮 𝐌𝐃', '𝐄𝐢𝐤𝐨 𝐌𝐃', '𝐁𝐞𝐧𝐢𝐦𝐚𝐫𝐮 𝐌𝐃', '𝐇𝐢𝐧𝐚𝐭𝐚 𝐌𝐃', '𝐎𝐛𝐢𝐭𝐨 𝐌𝐃', '𝐌𝐢𝐤𝐚𝐬𝐚 𝐌𝐃', '𝐄𝐦𝐢𝐥𝐢𝐚 𝐌𝐃']
    let buttonDesc =[`Set bot character to Atlas MD`, `Set bot character to Power`, `Set bot character to Makima`, `Set bot character to Denji`, `Set bot character to Zero Two`, `Set bot character to Chika`, `Set bot character to Miku`, `Set bot character to Marin`, `Set bot character to Ayanokoji`, `Set bot character to Ruka`, `Set bot character to Mizuhara`, `Set bot character to Rem`, `Set bot character to Sumi`, `Set bot character to Kaguya`, `Set bot character to Yumeko`, `Set bot character to Kurumi`, `Set bot character to Mai`, `Set bot character to Yor`, `Set bot character to Shinbou`, `Set bot character to Eiko`, `Set bot character to Benimaru Shinmon`, `Set bot character to Hinata Hyuga`, `Set bot character to Obito`, `Set bot character to Mikasa`, `Set bot character to Emilia`]
    let buttonTexts = [`${prefix}setchar 0`, `${prefix}setchar 1`, `${prefix}setchar 2`, `${prefix}setchar 3`, `${prefix}setchar 4`, `${prefix}setchar 5`, `${prefix}setchar 6`, `${prefix}setchar 7`, `${prefix}setchar 8`, `${prefix}setchar 9`, `${prefix}setchar 10`, `${prefix}setchar 11`, `${prefix}setchar 12`, `${prefix}setchar 13`, `${prefix}setchar 14`, `${prefix}setchar 15`, `${prefix}setchar 16`, `${prefix}setchar 17`, `${prefix}setchar 18`, `${prefix}setchar 19`, `${prefix}setchar 20`, `${prefix}setchar 21`, `${prefix}setchar 22`, `${prefix}setchar 23`, `${prefix}setchar 24`, `${prefix}setchar 25`]
    
    for (let i = 0; i < chars.length; i++) {
        const list = {title: `${prefix}setchar ${i}`,
        rows: [
        
                {
                 title: `${chars[i]}`, 
                 rowId: `${buttonTexts[i]}`,
                 description: `${buttonDesc[i]}`
                }
                ]
             }
                sections.push(list)
            }


    let buttonMessage = {
      //image: { url: randomimage },
      text: txt,
      footer: `*${botName}*`,
      buttonText: "Choose Character",
      sections,
    };

    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
