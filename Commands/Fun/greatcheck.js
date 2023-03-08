module.exports = {
  name: "greatecheck",
  alias: ["greatecheck"],
  desc: "check",
  cool: 3,
  react: "😮",
  category: "Fun",
  start: async (
    Miku,
    m,
    { text, prefix, args, mentionedJid, mentionByTag }
  ) => {
    if (!text)
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a user to use this command!` },
        { quoted: m }
      );
    const mentionedUser = mentionByTag[0];

    function shibam(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const dey = shibam(1, 100)
    let Mikutext = `Great Check Of : @${
      mentionedUser.split("@")[0]
    }\n\nAnswer : *${dey}%*🙄`;

    Miku.sendMessage(
      m.from,
      {
        image: { url: botImage3 },
        caption: Mikutext,
        mentions: [mentionedUser],
      },
      { quoted: m }
    );
  },
};
