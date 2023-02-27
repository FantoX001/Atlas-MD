module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7",
  react: "☢️",
  start: async (Miku, m, { text, prefix ,modStatus}) => {

    let txt = `       『  *Bot Charactes*  』\n\n\n_0 - Yaka MD_\n\n_1 - Power_\n\n_2 - Makima_\n\n_3 - Denji_\n\n_4 - Zero Two_\n\n_5 - Chika_\n\n_6 - Miku_\n\n_7 - Marin_\n\n_8 - Ayanokoji_\n\n_9 - Ruka_\n\n_10 - Mizuhara_\n\n_11 - Rem_\n\n_12 - Sumi_\n\n_13 - Kaguya_\n\n_14 - Yumeko_\n\n_15 - Kurumi_\n\n_16 - Mai_\n\n_17 - Yor_\n\n_18 - Shinbou_\n\n_19 - Eiko_\n\n_20 - Benimaru_\n\n\nExample: *${prefix}setchar 7* or choose button below.\n`;

    let botLogos = [
        'https://cdn.dribbble.com/users/2400955/screenshots/10843457/test_4x.jpg',
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
        'https://wallpapercave.com/wp/wp10128659.png',
        'https://images7.alphacoders.com/123/1236729.jpg',
        'https://wallpapercave.com/wp/wp4650481.jpg',
        'https://images8.alphacoders.com/122/1229829.jpg',
        'https://wallpapercave.com/wp/wp9179142.jpg'
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];
   
    let sections = [] 
    let chars = ['Yaka', 'Power', 'Makima', 'Denji', 'Zero Two', 'Chika' , 'Miku', 'Marin','Ayanokoji','Ruka','Mizuhara','Rem','Sumi','Kaguya','Yumeko','Kurumi','Mai','Yor','Shinbou','Eiko', 'Benimaru']
    let buttonDesc =[`Set bot character to Yaka MD`, `Set bot character to Power`, `Set bot character to Makima`, `Set bot character to Denji`, `Set bot character to Zero Two`, `Set bot character to Chika`, `Set bot character to Miku`, `Set bot character to Marin`, `Set bot character to Ayanokoji`, `Set bot character to Ruka`, `Set bot character to Mizuhara`, `Set bot character to Rem`, `Set bot character to Sumi`, `Set bot character to Kaguya`, `Set bot character to Yumeko`, `Set bot character to Kurumi`, `Set bot character to Mai`, `Set bot character to Yor`, `Set bot character to Shinbou`, `Set bot character to Eiko`, `Set bot character to Benimaru Shinmon`]
    let buttonTexts = [`${prefix}setchar 0`, `${prefix}setchar 1`, `${prefix}setchar 2`, `${prefix}setchar 3`, `${prefix}setchar 4`, `${prefix}setchar 5`, `${prefix}setchar 6`, `${prefix}setchar 7`, `${prefix}setchar 8`, `${prefix}setchar 9`, `${prefix}setchar 10`, `${prefix}setchar 11`, `${prefix}setchar 12`, `${prefix}setchar 13`, `${prefix}setchar 14`, `${prefix}setchar 15`, `${prefix}setchar 16`, `${prefix}setchar 17`, `${prefix}setchar 18`, `${prefix}setchar 19`, `${prefix}setchar 20`]
    
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
