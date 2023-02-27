module.exports = {
    name: "hi",
    alias: ["hello", "hey", "yoo", "moshi"],
    desc: "Say hello to bot.",
    react: "💜",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`𝐘𝐨𝐨 *${pushName}* !!,\n* I am *${botName}* `},{quoted:m})
    }
}
