const fetch = require("node-fetch");
const fs = require("fs");

module.exports = {
  name: "emojimix",
  alias: ["combine", "emoji_kitchen"],
  desc: "To combine two emojis and get a new image",
  category: "utilities",
  usage: `emoji <emoji1>+<emoji2>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args, reply,pushName }) => {
    if (!args[0]) return m.reply(`Please provide two emojis to combine! *Example :* ${prefix + command} 🦉+🤣`);
    let [emoji1, emoji2] = args[0].split("+");
    let jsonData = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
        .then((res) => res.json());

    for (let res of jsonData.results) {
        let encmedia = await Miku.sendImageAsSticker(m.from, res.url, m, { packname: packname, author: pushName, categories: res.tags });
        await fs.unlinkSync(encmedia);
    }
  },
};
