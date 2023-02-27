module.exports = {
    name: "hi",
    alias: ["hello", "hey", "yoo", "moshi"],
    desc: "Say hello to bot.",
    react: "💜",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`\n\n𝐘𝐨𝐨 *${pushName}* 😼!!,\n\nI am *${botName}* 😎`},{quoted:m})
    }
}
