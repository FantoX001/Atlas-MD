module.exports = {
    name: "hi",
    alias: ["hello", "hey", "yoo", "moshi moshi"],
    desc: "Say hello to bot.",
    react: "💜",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`\n𝐘𝐨𝐨 *${pushName}* 😼 *_Senpai_*!!,\n\nI am *${botName}* 😎.\n Provide Me a Command!!`},{quoted:m})
    }
}
