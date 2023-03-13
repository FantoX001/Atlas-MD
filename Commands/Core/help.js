module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "✨",
  category: "Core",
  start: async (
    Miku,
    m,
    { prefix, pushName, NSFWstatus, args, commands, text }
  ) => {
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `🍁Command : ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`);
      if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `💡Example : ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `help` },
          type: 1,
        },
      ];
      let buth = {
        text: `ℹ️Command Info\n\n${data.join("\n")}`,
        footer: `${botName}`,
        buttons: buttonss,
        headerType: 1,
      };
      return Miku.sendMessage(m.from, buth, { quoted: m });
    } else {
      const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());

const now = new Date();
        const hour = now.getHours();
       let greeting;

        if (hour >= 0 && hour < 12) {
          greeting = "Ohayou gozaimasu"; //good morning
        } else if (hour >= 12 && hour < 18) {
          greeting = "Konnichiwa"; //good afternoon
        } else {
          greeting = "Konbanwa"; //good evening
        }
      let textHelpMenu = `${greeting} *${pushName}* Senpai,

I am *${botName}*, a bot developed by *Team Atlas*.

🎀 My prefix is: *${prefix}*

🧩 Server Uptime: *${uptime()}*

Here's the list of my Commands.\n
           
╭──────ꕥ Core ꕥ─────╮
├
├・🎐 ʜɪ, ʜᴇʟᴘ, 
├・🎐 ᴄᴏᴜᴘʟᴇᴘᴘ, ᴏᴡɴᴇʀ, 
├・🎐 ꜱᴄʀɪᴘᴛ, ꜱᴛᴀʟᴋ, 
├・🎐 ꜱᴜᴘᴘᴏʀᴛ, ʀᴀɴᴋ
├
╰──────────────────╯
╭─────ꕥ Group ꕥ─────╮
├
├・🏮 ᴀᴅᴍɪɴꜱ, ᴀɴɴᴏᴜɴᴄᴇ,
├・🏮 ᴀɴᴛɪʟɪɴᴋɢᴄ, ʙᴏᴛꜱᴡɪᴛᴄʜ, 
├・🏮 ᴄʜᴀɴɢᴇɢᴄɴᴀᴍᴇ, ᴄʜᴀᴛʙᴏᴛɢᴄ, 
├・🏮 ᴅᴇʟᴇᴛᴇ, ᴘʀᴏᴍᴏᴛᴇ, 
├・🏮 ᴅᴇᴍᴏᴛᴇ, ɢᴄʟɪɴᴋ, 
├・🏮 ɢʀᴏᴜᴘ, ɢʀᴏᴜᴘɪɴꜰᴏ, 
├・🏮 ʜɪᴅᴇᴛᴀɢ, ʟᴇᴀᴠᴇ, 
├・🏮 ɴꜱꜰᴡ, ʀᴇᴍᴏᴠᴇ, 
├・🏮 ʀᴇᴘᴏʀᴛ, ʀᴇᴠᴏᴋᴇ, 
├・🏮 ꜱᴇᴛɢᴄᴅᴇꜱᴄ, ꜱᴇᴛᴘᴘɢᴄ, 
├・🏮 ᴛᴀɢᴀʟʟ, ᴡᴇʟᴄᴏᴍᴇ
├
╰──────────────────╯
╭──────ꕥ Mods ꕥ──────╮
├
├・🎀 ᴀᴅᴅᴍᴏᴅ, ᴅᴇʟᴇᴛᴇᴍᴏᴅ, 
├・🎀 ʙᴀɴ, ᴜɴʙᴀɴ, 
├・🎀 ʙᴀɴɢᴄ, ᴜɴʙᴀɴɢᴄ, 
├・🎀 ʙʟᴏᴄᴋ, ᴜɴʙʟᴏᴄᴋ, 
├・🎀 ʙʀᴏᴀᴅᴄᴀꜱᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
├・🎀 ᴍᴏᴅᴇ, ʙᴀɴʟɪꜱᴛ, 
├・🎀 ᴘᴍᴄʜᴀᴛʙᴏᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
├・🎀 ꜱᴇᴛᴄʜᴀʀᴀᴄᴛᴇʀ
├
╰──────────────────╯          
╭──────ꕥ Media ꕥ─────╮
├
├・💫 ɪɢᴅʟ, ɪɢᴅʟ2, 
├・💫 ᴘʟᴀʏʟɪꜱᴛ, ᴘʟᴀʏ, 
├・💫 ʏᴛᴀᴜᴅɪᴏ, ʏᴛᴠɪᴅᴇᴏ, 
├・💫 ʏᴛꜱ, ᴛɪᴋᴛᴏᴋ,
├・💫 ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ, ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ,
├・💫 ᴛɪᴄᴛᴏᴋᴅᴏᴄ, ʏᴛᴅᴏᴄ,
├
╰──────────────────╯
╭─────ꕥ Search ꕥ─────╮
├
├・🔎 ᴀɴɪᴍᴇ, ɢɪꜰꜱᴇᴀʀᴄʜ, 
├・🔎 ɢɪᴍᴀɢᴇ, ᴘɪɴᴛᴇʀᴇꜱᴛ, 
├・🔎 ɢɪᴛʜᴜʙ, ɢᴏᴏɢʟᴇ, 
├・🔎 ʟʏʀɪᴄꜱ, ʀɪɴɢᴛᴏɴᴇ, 
├・🔎 ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ, ᴡᴇᴀᴛʜᴇʀ, 
├・🔎 ʏᴏᴜᴛᴜʙᴇꜱᴇᴀʀᴄʜ
├
╰──────────────────╯
╭────ꕥ Utilities ꕥ────╮
├
├・🎗 ᴇᴍᴏᴊɪᴍɪx, Q / Qᴜᴏᴛᴇ, 
├・🎗 ꜱᴛɪᴄᴋᴇʀ, ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ, 
├・🎗 ꜱᴛᴇᴀʟ, ᴛᴏᴀᴜᴅɪᴏ, 
├・🎗 ᴛᴏᴍᴘ3, ᴛᴏᴍᴘ4, 
├・🎗 ᴛᴏᴜʀʟ, ꜱᴛɪᴄᴋᴇʀᴍᴇᴍᴇ,
├・🎗 ᴛᴇxᴛᴅᴇꜱɪɢɴ
├
╰──────────────────╯
╭────ꕥ Image Edit ꕥ────╮
├
├・💠 ʙʟᴜʀ, ᴄɪʀᴄʟᴇ, 
├・💠 ᴊᴀɪʟ, ʀᴇᴍᴏᴠᴇʙɢ, 
├・💠 ᴛʀɪɢɢᴇʀ
├
╰──────────────────╯
╭────ꕥ Audio Edit ꕥ────╮
├
├・🎧 ʙᴀꜱꜱ, ʙʟᴏᴡɴ, 
├・🎧 ᴅᴇᴇᴘ, ꜰᴀᴛ, 
├・🎧 ɴɪɢʜᴛᴄᴏʀᴇ, ʀᴇᴠᴇʀꜱᴇ, 
├・🎧 ʀᴏʙᴏᴛ, ꜱʟᴏᴡ, 
├・🎧 ꜱᴍᴏᴏᴛʜ, ᴛᴇᴍᴘᴏ
╰──────────────────╯
╭────ꕥ Essentials ꕥ────╮
├
├・🧩 ᴇʟᴇᴍᴇɴᴛ, ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
├・🧩 Qᴜᴇꜱᴛɪᴏɴ, ꜱᴀʏ, 
├・🧩 ꜱᴀʏᴊᴀᴘᴀɴᴇꜱᴇ, ꜱᴀʏʙᴇɴɢᴀʟɪ, 
├・🧩 ꜱᴀʏʜɪɴᴅɪ, ᴜᴅɪᴄᴛɪᴏɴᴀʀʏ
├
╰───────────────────────╯
╭────ꕥ Weeb ꕥ────╮
├
├・ 🧧 ᴀɴɪᴍᴇQᴜᴏᴛᴇ, ᴄᴏꜱᴘʟᴀʏ, 
├・ 🧧 ᴄᴏꜱᴘʟᴀʏᴠɪᴅᴇᴏ, ꜰᴏxɢɪʀʟ, 
├・ 🧧 ᴍᴀɪᴅ, ᴡᴀʟʟᴘᴀᴘᴇʀ, 
├・ 🧧 ᴡᴀɪꜰᴜ
├
╰──────────────────╯
╭────ꕥ Reactions ꕥ────╮
├
├・ 🎋 ʙᴇʜᴀᴘᴘʏ, ʙɪᴛᴇ, 
├・ 🎋 ʙᴏɴᴋ, ʙᴜʟʟʏ, 
├・ 🎋 ᴄʀʏ, ᴅᴀɴᴄᴇ, 
├・ 🎋 ʜᴀɴᴅʜᴏɴᴅ, ʜᴀᴘᴘʏ, 
├・ 🎋 ʜɪɢʜꜰɪᴠᴇ, ʜᴜɢ, 
├・ 🎋 ᴋɪᴄᴋ, ᴋɪʟʟ, 
├・ 🎋 ᴋɪꜱꜱ, ᴘᴀᴛ, 
├・ 🎋 ꜱʟᴀᴘ, ꜱᴍɪʟᴇ, 
├・ 🎋 ᴡᴀᴠᴇ, ᴡɪɴᴋ, 
├・ 🎋 ʏᴇᴇᴛ
├
╰──────────────────╯
╭────ꕥ Logo Maker ꕥ────╮
├
├・ 🎄 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ, 
├・ 🎄 3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ,
├・ 🎄 ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ,
├・ 🎄 ʙʟᴏᴏᴅ, ʙᴏᴋᴇʜ, 
├・ 🎄 ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ, 
├・ 🎄 ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・ 🎄 ᴄɪʀᴄᴜɪᴛ, ᴄʟᴏᴜᴅ, 
├・ 🎄 ᴅᴇᴇᴘꜱᴇᴀ, ᴅᴇᴍᴏɴ, 
├・ 🎄 ᴅʀᴏᴘᴡᴀᴛᴇʀ, ɢʟɪᴛᴄʜ, 
├・ 🎄 ᴄʟɪᴛᴄʜ2, ɢʟɪᴛᴄʜ3 
├・ 🎄 ɢʀᴀꜰꜰɪᴛɪ, ʜᴏʟʟᴏɢʀᴀᴘʜɪᴄ, 
├・ 🎄 ᴊᴏᴋᴇʀ, ʟɪᴏɴ , ᴍᴀɢᴍᴀ, 
├・ 🎄 ᴍᴀᴛʀɪx, ɴᴇᴏɴ, 
├・ 🎄 ɴᴇᴏɴᴅᴇᴠɪʟ, ɴᴇᴏɴɢʀᴇᴇɴ, 
├・ 🎄 ɴᴇᴏɴʟɪɢʜᴛ, ᴘᴀᴘᴇʀᴄᴜᴛ, 
├・ 🎄 ᴘᴇɴᴄɪʟ, ᴘᴏʀɴʜᴜʙ, 
├・ 🎄 ꜱᴄɪꜰɪ, ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・ 🎄 ᴛʜᴜɴᴅᴇʀ, ᴛʜᴜɴᴅᴇʀ2, 
├・ 🎄 ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ, ᴡᴀʟʟ,
├・ 🎄 ᴡᴏʟꜰ
├
╰──────────────────╯
╭────ꕥ Mine Craft ꕥ────╮
├
├・ 🎒 ʙᴜʏ, ɪɴᴠᴇɴᴛᴏʀʏ, 
├・ 🎒 ᴍɪɴᴇ, ꜱʜᴏᴘ, 
├・ 🎒 ʀᴇɢ-ɪɴᴠ, 
├
╰──────────────────╯
╭────ꕥ ECONOMY ꕥ────╮
├
├・ 🔖 ʙᴀɴᴋ, ᴄᴀᴘᴀᴄɪᴛʏ, 
├・ 🔖 ᴅᴀɪʟʏ, ᴅᴇᴘᴏꜱɪᴛ, 
├・ 🔖 ɢᴀᴍʙʟᴇ, ʟʙ, 
├・ 🔖 ʀᴏʙ, ꜱʟᴏᴛ, 
├・ 🔖 ᴛʀᴀɴꜱꜰᴇʀ, ᴡᴀʟʟᴇᴛ, 
├・ 🔖 ᴡɪᴛʜᴅʀᴀᴡ
├
╰──────────────────╯\n\n`;

      if (NSFWstatus == "true") {
        textHelpMenu += `╭────ꕥ NSFW ꕥ────╮
├
├・ 💦 ᴘᴜꜱꜱʏ, ꜱᴘʀᴇᴀᴅᴘᴜꜱꜱʏ,
├・ 💦 ɢᴇɴꜱʜɪɴ, ꜱQᴜɪʀᴛ,
├・ 💦 ɢʟᴀꜱꜱᴇꜱ, ꜱᴜɴɢʟᴀꜱꜱᴇꜱ,
├・ 💦 ꜱᴡɪᴍꜱᴜɪᴛ, ꜱᴄʜᴏᴏʟꜱᴡɪᴍꜱᴜɪᴛ,
├・ 💦 ʜᴏʟᴏ ʟɪᴠᴇ, ᴀꜱꜱ,
├・ 💦 ᴜɴᴅᴇʀᴡᴇᴀʀ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ꜱᴇx,
├・ 💦 ꜱᴇx2, ꜱᴇx3,
├・ 💦 ʙʟᴏɴᴅᴇ, ᴛᴡɪɴᴛᴀɪʟꜱ,
├・ 💦 ʙʀᴇᴀꜱᴛꜱ, ᴛʜɪɢʜʜɪɢʜꜱ,
├・ 💦 ꜱᴋɪʀᴛ, ɢᴀᴍᴇᴄɢ,
├・ 💦 ᴀɴɪᴍᴀʟᴇᴀʀꜱ, ꜰᴏxɢɪʀʟ,
├・ 💦 ᴅʀᴇꜱꜱ, ꜱᴄʜᴏᴏʟᴜɴɪꜰᴏʀᴍ,
├・ 💦 ᴛᴡᴏɢɪʀʟꜱ, ɢʟᴏᴠᴇꜱ,
├・ 💦 ᴠᴏᴄᴀʟᴏɪᴅ, ᴛᴏᴜʜᴏᴜ,
├・ 💦 ᴡᴇᴀᴘᴏɴ, ᴡɪᴛʜꜰʟᴏᴡᴇʀꜱ,
├・ 💦 ᴘɪɴᴋʜᴀɪʀ, ᴄʟᴏᴜᴅꜱᴠɪᴇᴡ,
├・ 💦 ᴡʜɪᴛᴇ, ᴀɴɪᴍᴀʟ,
├・ 💦 ᴛᴀɪʟ, ɴᴜᴅᴇ,
├・ 💦 ᴘᴏɴʏᴛᴀɪʟ, ʙᴇᴅ,
├・ 💦 ᴡʜɪᴛᴇ ʜᴀɪʀ, ʀɪʙʙᴏɴꜱ,
├・ 💦 ᴊᴀᴘᴀɴᴇꜱᴇᴄʟᴏᴛʜꜱ, 
├・ 💦 ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ,
├・ 💦 ʙɪᴋɪɴɪ, ʙᴀʀᴇꜰᴏᴏᴛ,
├・ 💦 ɴᴏʙʀᴀ, ꜰᴏᴏᴅ,
├・ 💦 ᴡɪɴɢꜱ, ᴘᴀɴᴛʏʜᴏꜱᴇ,
├・ 💦 ᴏᴘᴇɴꜱʜɪʀᴛ, ʜᴇᴀᴅʙᴀɴᴅ,
├・ 💦 ᴘᴇɴɪꜱ, ᴄʟᴏꜱᴇ,
├・ 💦 ᴡᴇᴛ, ᴄᴀᴛɢɪʀʟ,
├・ 💦 ᴡᴏʟꜰɢɪʀʟ, ɴᴇᴋᴏ,
├・ 💦 ʟᴏʟɪ, ꜱᴘʀᴇᴀᴅʟᴇɢꜱ,
├・ 💦 ʙʀᴀ, ꜰᴀᴛᴇꜱᴇʀɪᴇꜱ,
├・ 💦 ᴛʀᴇᴇ, ᴇʟʙᴏᴡɢʟᴏᴠᴇꜱ,
├・ 💦 ɢʀᴇᴇɴʜᴀɪʀ, ʜᴏʀɴꜱ,
├・ 💦 ᴡɪᴛʜᴘᴇᴛᴀʟꜱ, ᴅʀᴜɴᴋ,
├・ 💦 ᴄᴜᴍ, ʜᴇᴀᴅ ᴅʀᴇꜱꜱ,
├・ 💦 ᴛɪᴇ, ꜱʜᴏʀᴛꜱ,
├・ 💦 ᴍᴀɪᴅ, ʜᴇᴀᴅᴘʜᴏɴᴇꜱ,
├・ 💦 ᴀɴᴜꜱᴠɪᴇᴡ, ɪᴅᴏʟ,
├・ 💦 ɢᴜɴ, ꜱᴛᴏᴄᴋɪɴɢꜱ,
├・ 💦 ᴛᴇᴀʀꜱ, ʙʀᴇᴀꜱᴛʜᴏʟᴅ,
├・ 💦 ɴᴇᴄᴋʟᴀᴄᴇ, ꜱᴇᴇᴛʜʀᴏᴜɢʜ,
├・ 💦 ʙᴜɴɴʏᴇᴀʀꜱ, ʙᴜɴɴʏɢɪʀʟ,
├・ 💦 ᴛᴏᴘʟᴇꜱꜱ, ʙᴇᴀᴄʜ,
├・ 💦 ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇꜱ, ʏᴜʀɪ,
├・ 💦 ᴠᴀᴍᴘɪʀᴇ, ꜱʜɪʀᴛ,
├・ 💦 ᴘᴀɴᴛʏᴘᴜʟʟ, ᴛᴏʀɴᴄʟᴏᴛʜᴇꜱ,
├・ 💦 ʙᴏɴᴅᴀɢᴇ, ꜰɪɴɢᴇʀɪɴɢ
├・ 💦 ʙᴇʟʟ, ꜱʜɪʀᴛʟɪꜰᴛ,
├・ 💦 ᴛᴀᴛᴛᴏᴏ, ᴄʜᴀɪɴ,
├・ 💦 ꜰʟᴀᴛᴄʜᴇꜱᴛ 
├
╰──────────────────╯\n\n`;
      }

      textHelpMenu += `*🔰  ${botName}  🔰*
 _Powered By:_ *Team ATLAS*

🎀 To use any of these commands type " *${prefix}Command name* ".

🏮 To get Support Group link type " *${prefix}support* ".

🧩 To report any issues to Developer type " *${prefix}report <describe issue>* ".\n`;

      let favSongs = [
        "dandilions",
        "night changes",
        "heat waves",
        "counting stars",
        "just dance",
        "intentions",
        "Someone to you",
        "Cristina perry Hero",
        "Chainsmokers takeaway",
        "Chainsmokers closer",
        "play date",
        "maroon5 memories",
        "Ed Sheeran photograph",
        "Rosa linn snap",
        "until i make you mine",
        "post malone sunflower",
        "A thousand years",
        "mary on a cross",
        "eminem mockingbird",
        "taking to the moon kina",
        "calm down",
        "the chainsmokers",
        "see you again",
        "maroon5 girls like you",
        "passenger let her go",
        "ed sheeran perfect",
        "twenty one pilots stressed out",
        "justin bieber love yourself",
        "linkin park numb",
        "dusk till dawn",
        "coldplay paradise",
        "one direction what makes you beautiful",
        "charlie puth attention",
        "eminem lose yourself",
        "happier",
        "post malone psycho",
        "avicii waiting for love",
        "happeir marshmello",
        "taylor swift blank space",
        "built a bitch",
        "fat rat well meet again",
        "see youe tears",
        "gangstars paradise",
        "nf hope",
        "nf clouds",
        "nf just like you",
        "nf story",
        "nf lost",
        "nf trust",
        "nf the search",
        "nf leave me alone",
        "nf when i grew up",
        "nf no name",
        "nf let you down",
        "nf lie",
        "eminem not afraid",
        "Stay",
        "Good 4 U",
        "Kiss Me More",
        "Levitating",
        "Montero (Call Me By Your Name)",
        "Leave The Door Open",
        "Peaches",
        "Industry Baby",
        "Save Your Tears",
        "drivers license",
        "Blinding Lights",
        "Positions",
        "Don't Start Now",
        "Watermelon Sugar",
        "Therefore I Am",
        "My Ex's Best Friend",
        "Mood",
        "Heat Waves",
        "Fancy Like",
        "Take My Breath",
        "Bad Habits",
        "You Right",
        "Heartbreak Anniversary",
        "deja vu",
        "Shivers",
        "Happier Than Ever",
        "Need To Know",
        "I Don't Wanna Talk (feat. Mariah the Scientist)",
        "Cold Heart",
        "Leave Before You Love Me",
        "Rumors",
        "Waves",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "Famous Friends",
        "Leave The Door Open",
        "Gone",
        "Better Days",
        "Good Days",
        "Love Story (Taylor's Version)",
        "Proud Of You",
        "Off The Grid",
        "Rapstar",
        "Yebba's Heartbreak",
        "In The Bible",
        "Take Me Home Tonight",
        "Streets",
        "I Need You To Hate Me",
        "Blue Jeans",
        "Sweet Dreams",
        "Leave The Door Open",
        "Fancy Like",
        "Need To Know",
        "Kiss Me More",
        "Rapstar",
        "Montero (Call Me By Your Name)",
        "Good 4 U",
        "Stay",
        "Bad Habits",
        "My Ex's Best Friend",
        "Save Your Tears",
        "Levitating",
        "Heartbreak Anniversary",
        "Peaches",
        "Take My Breath",
        "Deja Vu",
        "Good Days",
        "Industry Baby",
        "Blinding Lights",
        "Mood",
        "Don't Go Yet",
        "Astronaut In The Ocean",
        "Therefore I Am",
        "drivers license",
        "Shivers",
        "Leave Before You Love Me",
        "Rumors",
        "Better Days",
        "Friday (feat. Mufasa & Hypeman)",
        "Without You",
        "The Business",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "You Right",
        "Proud Of You",
        "All I Know So Far",
        "Wild Side",
        "Take Me Home Tonight",
        "Breaking Up Was Easy In The 90s",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "In The Bible",
        "Leave The Door Open",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "Golden",
        "Rasputin",
        "Waves",
        "Blue Jeans",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Bad Guy",
        "Stay",
        "Good 4 U",
        "Levitating",
        "Kiss Me More",
        "Montero (Call Me By Your Name)",
        "Bad Habits",
        "Peaches",
        "Save Your Tears",
        "Industry Baby",
        "Deja Vu",
        "Heartbreak Anniversary",
        "My Ex's Best Friend",
        "Fancy Like",
        "Take My Breath",
        "Mood",
        "Don't Go Yet",
        "Rapstar",
        "Blinding Lights",
        "Shivers",
        "Leave Before You Love Me",
        "Therefore I Am",
        "Good Days",
        "drivers license",
        "You Right",
        "Better Days",
        "Leave The Door Open",
        "All I Know So Far",
        "Wild Side",
        "The Business",
        "Rumors",
        "Astronaut In The Ocean",
        "Breaking Up Was Easy In The 90s",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Without You",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "Golden",
        "Waves",
        "In The Bible",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "Rasputin",
        "Take Me Home Tonight",
        "Bad Guy",
        "Dance Monkey",
        "Watermelon Sugar",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "I Don't Wanna Live Forever",
        "Levitating (feat. DaBaby)",
        "Good 4 U",
        "Levitating",
        "Kiss Me More",
        "Montero (Call Me By Your Name)",
        "Bad Habits",
        "Peaches",
        "Save Your Tears",
        "Industry Baby",
        "Deja Vu",
        "Heartbreak Anniversary",
        "My Ex's Best Friend",
        "Fancy Like",
        "Take My Breath",
        "Mood",
        "Don't Go Yet",
        "Rapstar",
        "Blinding Lights",
        "Shivers",
        "Leave Before You Love Me",
        "Therefore I Am",
        "Good Days",
        "drivers license",
        "You Right",
        "Better Days",
        "Leave The Door Open",
        "All I Know So Far",
        "Wild Side",
        "The Business",
        "Rumors",
        "Astronaut In The Ocean",
        "Breaking Up Was Easy In The 90s",
        "Dancing With The Devil",
        "Happier Than Ever",
        "Without You",
        "Love Nwantiti (feat. Dj Abux & Soulking)",
        "Golden",
        "Waves",
        "In The Bible",
        "I Wanna Dance With Somebody (Who Loves Me)",
        "Rasputin",
        "Take Me Home Tonight",
        "Bad Guy",
        "Dance Monkey",
        "Watermelon Sugar",
        "Don't Start Now",
        "Savage Love (Laxed - Siren Beat)",
        "I Don't Wanna Live Forever",
        "Levitating (feat. DaBaby)",
        "Shallow",
        "Rolling in the Deep",
        "Someone Like You",
        "Hello",
        "Someone You Loved",
        "All of Me",
        "Thinking Out Loud",
        "Shape of You",
        "The A Team",
        "Photograph",
      ];

      let selectedSong = favSongs[Math.floor(Math.random() * favSongs.length)];

      let buttons = [
        {
          buttonId: `${prefix}owner`,
          buttonText: { displayText: "🧣 Bot Owner 🧣" },
          type: 1,
        },
        {
          buttonId: `${prefix}repo`,
          buttonText: { displayText: "🧩 Source Code 🧩" },
          type: 1,
        },
        {
          buttonId: `${prefix}play ${selectedSong}`,
          buttonText: { displayText: `🔖 Song of the day 🔖` },
          type: 1,
        },
      ];
      let buttonMessage = {
        video: { url: botVideo },
        gifPlayback: true,
        caption: textHelpMenu,
        buttons: buttons,
        footer: `*${botName}*`,
        headerType: 4,
      };

      await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
    }
  },
};
