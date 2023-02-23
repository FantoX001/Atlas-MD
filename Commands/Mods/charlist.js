module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7",
  react: "🎀",
  start: async (Miku, m, { text, prefix ,modStatus}) => {

    let txt = `       『  *Bot Charactes*  』\n\n\n_0 - Atlas MD_\n\n_1 - Power MD_\n\n_2 - Makima MD_\n\n_3 - Denji MD_\n\n_4 - Zero Two_\n\n_5 - Chika MD_\n\n_6 - Miku MD_\n\n_7 - Marin MD_\n\n_8 - Ayanokoji MD_\n\n_9 - Ruka MD_\n\n_10 - Mizuhara MD_\n\n_11 - Rem MD_\n\n_12 - Sumi MD_\n\n_13 - Kaguya MD_\n\n_14 - Yumeko MD_\n\n_15 - Kurumi MD_\n\n_16 - Mai MD_\n\n_17 - Yor MD_\n\n_18 - Shinbou MD_\n\n_19 - Eiko MD_\n\n\nExample: *${prefix}setchar 5* or choose button below.\n`;

    let botLogos = [
        'https://wallpapercave.com/wp/wp5924545.jpg',
        'https://wallpapercave.com/wp/wp11253614.jpg',
        'https://images5.alphacoders.com/126/1264439.jpg',
        'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/11/Chainsaw-Man-Denji-e-Power.webp?resize=1068%2C601&ssl=1',
        'https://images3.alphacoders.com/949/949253.jpg',
        'https://images4.alphacoders.com/100/1002134.png',
        'https://wallpapercave.com/wp/wp10524580.jpg',
        'https://images2.alphacoders.com/125/1257915.jpg',
        'https://wallpapers.com/images/file/kiyotaka-ayanokoji-in-pink-qs33qgqm79ccsq7n.jpg',
        'https://wallpapercave.com/wp/wp8228630.jpg',
        'https://images3.alphacoders.com/128/1288059.png',
        'https://images.alphacoders.com/711/711900.png',
        'https://moewalls.com/wp-content/uploads/2022/07/sumi-sakurasawa-hmph-rent-a-girlfriend-thumb.jpg',
        'https://wallpapercave.com/wp/wp6099650.png',
        'https://wallpapercave.com/wp/wp5017991.jpg',
        'https://wallpapercave.com/wp/wp2535489.jpg',
        'https://images4.alphacoders.com/972/972790.jpg',
        'https://images7.alphacoders.com/123/1236729.jpg',
        'https://wallpapercave.com/wp/wp4650481.jpg',
        'https://images8.alphacoders.com/122/1229829.jpg'
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];
   
    let sections = [] 
    let chars = ['Atlas MD', 'Power MD', 'Makima MD', 'Denji MD', 'Zero Two', 'Chika MD' , 'Miku MD', 'Marin MD','Ayanokoji MD','Ruka MD','Mizuhara MD','Rem MD','Sumi MD','Kaguya MD','Yumeko MD','Kurumi MD','Mai MD','Yor MD','Shinbou MD','Eiko MD']
    let buttonDesc =[`Set bot character to Atlas MD`, `Set bot character to Power MD`, `Set bot character to Makima MD`, `Set bot character to Denji MD`, `Set bot character to Zero Two`, `Set bot character to Chika MD`, `Set bot character to Miku MD`, `Set bot character to Marin MD`, `Set bot character to Ayanokoji MD`, `Set bot character to Ruka MD`, `Set bot character to Mizuhara MD`, `Set bot character to Rem MD`, `Set bot character to Sumi MD`, `Set bot character to Kaguya MD`, `Set bot character to Yumeko MD`, `Set bot character to Kurumi MD`, `Set bot character to Mai MD`, `Set bot character to Yor MD`, `Set bot character to Shinbou MD`, `Set bot character to Eiko MD`]
    let buttonTexts = [`${prefix}setchar 0`, `${prefix}setchar 1`, `${prefix}setchar 2`, `${prefix}setchar 3`, `${prefix}setchar 4`, `${prefix}setchar 5`, `${prefix}setchar 6`, `${prefix}setchar 7`, `${prefix}setchar 8`, `${prefix}setchar 9`, `${prefix}setchar 10`, `${prefix}setchar 11`, `${prefix}setchar 12`, `${prefix}setchar 13`, `${prefix}setchar 14`, `${prefix}setchar 15`, `${prefix}setchar 16`, `${prefix}setchar 17`, `${prefix}setchar 18`, `${prefix}setchar 19`]
    
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