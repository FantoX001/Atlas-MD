module.exports = {
    name: "hi",
    alias: ["hello", "hey", "yoo", "moshi moshi"],
    desc: "Say hello to bot.",
    react: "💜",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`\n*_Yoo  ${pushName}  Senpai_*  !!,\n\n*I am  ${botName}  bot.*\n\n *Nice knowing you!!* \n\n*Soo, How can I help you??*\n\nType anything with  ${prefix}  to respond..`},{quoted:m})
    }
}
