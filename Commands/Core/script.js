const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "📃",
    category: "Core",
    
     start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/yakashi.png')
        let repoInfo = await axios.get('https://github.com/Yakashi13/Yakashi-MD')
        let repo = repoInfo.data
        let txt = `      🧣 *${botName}'s Script* 🧣\n\n*🎀 Total Forks:* ${repo.forks_count}\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${repo.license.name}\n*📁 Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* ${repo.html_url}\n\n❝ Original project is made by *Team ATLAS*\n* repo link - https://api.github.com/repos/FantoX001/Atlas-MD .\n* *_Dont forget to give a Star to the main project_* ⭐. ❞\n\n*©️ 𝖄𝖆𝖐𝖆𝖘𝖍𝖎 - 2023*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
