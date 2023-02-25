module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Say hello to bot.",
    react: "🧣",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`𝓚𝓸𝓷𝓲𝓬𝓱𝓲𝔀𝓪 *${pushName}* 𝓢𝓮𝓷𝓹𝓪𝓲𝓲 !!, I am *${botName}* bot. type *${prefix}help* to get my full command list.`},{quoted:m})
    }
}
