const axios = require("axios");
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const fs = require("fs");

module.exports = {
  name: "quote",
  alias: ["q", "quotes"],
  desc: "To make any text to quote",
  category: "Search",
  usage: `q <Your line>`,
  react: "👀",
  start: async (Miku, m, { text, prefix, args, pushName }) => {
    if (!args[0] && !m.quoted)
      return m.reply(`Please provide a text (Type or mention a message) !`)
      
        if (m.quoted){
          try {
            userPfp = await Miku.profilePictureUrl(m.quoted.sender, "image");
          } catch (e) {
            userPfp = botImage3;
          }
        }
        else{
          try {
            userPfp = await Miku.profilePictureUrl(m.sender, "image");
          } catch (e) {
            userPfp = botImage3;
          }
        }
    

    var waUserName = pushName;

    const quoteText = m.quoted ? m.quoted.msg : args ? args.join(" ") : "";

    var quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    };

    const quoteResponse = await axios
      .post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })

      fs.writeFileSync("quote.png", quoteResponse.data.result.image, "base64");


      let stickerMess = new Sticker("quote.png", {
        pack: packname,
        author: pushName,
        type: StickerTypes.FULL,
        categories: ['🤩', '🎉'],
        id: '12345',
        quality: 70,
        background: 'transparent'
    });

    const stickerBuffer2 = await stickerMess.toBuffer()
    await Miku.sendMessage(m.from, {sticker:stickerBuffer2}, { quoted: m }).then((result) => {
      fs.unlinkSync("quote.png");
    }).catch((err) => {
      m.reply("An error occurd!")
    });
  },
};
