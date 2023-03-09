const moment = require('moment-timezone')

module.exports = {
    name: "report",
    alias: ["issue"],
    desc: "To report an issue to owner",
    cool:3600,
    category: "Group",
    usage: `report <describe issue>`,
    react: "🍁",
    start: async (
      Miku,
      m,
      { text, prefix, isBotAdmin, isAdmin, pushName, metadata, args }
    ) => {
        if(!m.isGroup){
            if (!args[0]) return m.reply(`Please provide a message to report Developers !`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;

            try {
                userPfp = await Miku.profilePictureUrl(m.sender, "image");
              } catch (e) {
                userPfp = botImage3;
              }

            let reportMessage = `              *「 Report Recieved 」*\n\n*👤 Reported By:* @${userTag}\n\n*📝 Message:* ${userMess}\n\n*📅 Date:* ${moment().tz('Asia/Kolkata').format('DD/MM/YYYY')}\n*⏰ Time:* ${moment().tz('Asia/Kolkata').format('hh:mm:ss A')}\n*🍁 Character using:* ${botName}\n\n*📌 Note: This is an automated message, please do not reply to this message to avoid blocking.*`;
            m.reply(`Sending report to main developer...\n\nIf it is a spam you might get *blocked* and *banned*.`);
            
            let devs = [`918101187835@s.whatsapp.net`,`923045204414@s.whatsapp.net`]

            for (let i = 0; i < devs.length; i++) {
              await Miku.sendMessage(devs[i],{image: {url: userPfp}, caption: reportMessage,mentions: [m.sender],});
            }
        }
        else{
            if (!args[0]) return m.reply(`Please provide a message to report Developers !`);
            let userTag = m.sender.split("@")[0];
            let userMess = args.join(" ");
            let userName = pushName;
            let gcName = metadata.subject;

            try {
                ppgc = await Miku.profilePictureUrl(m.from, "image");
              } catch {
                ppgc = botImage3;
              }
              let reportMessage = `              *「 Report Recieved 」*\n\n*👤 Reported By:* @${userTag}\n*🧩 Group Name:* ${gcName}\n\n*📝 Message:* ${userMess}\n\n*📅 Date:* ${moment().tz('Asia/Kolkata').format('DD/MM/YYYY')}\n*⏰ Time:* ${moment().tz('Asia/Kolkata').format('hh:mm:ss A')}\n*🍁 Character using:* ${botName}\n\n*📌 Note: This is an automated message, please do not reply to this message to avoid blocking.*`;
              m.reply(`Sending report to main developer...\n\nIf it is a spam you might get *blocked* and *banned*.`);

//               let devs = [`918101187835@s.whatsapp.net`,`923045204414@s.whatsapp.net`,`918515848233@s.whatsapp.net`,`918231033230@s.whatsapp.net`]
let devs = process.env.MODS.split(",").map(number => `${number}@s.whatsapp.net`);
              for (let i = 0; i < devs.length; i++) {
                await Miku.sendMessage(devs[i],{image: {url: ppgc}, caption: reportMessage,mentions: [m.sender],});
            }
        }
    }
}
