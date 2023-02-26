module.exports = {
    name: "hi",
    alias: ["hello", "hey", "yoo", "moshi"],
    desc: "Say hello to bot.",
    react: "💜",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`𝐘𝐨𝐨, *${pushName}* 𝐒𝐞𝐧𝐩𝐚𝐢 !!, I am *${botName}* bot. type *${prefix}help* to get my full command list.`},{quoted:m})
    }
}
