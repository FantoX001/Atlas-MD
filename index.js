
require("./config.js");
require("./Core.js");

const pino = require('pino');
const {
    default: MikuConnect,
    DisconnectReason,
    delay,
    fetchLatestBaileysVersion,
    useSingleFileAuthState,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto
} = require("@adiwajshing/baileys");

const fs = require("fs");
const chalk = require("chalk");
const Jimp = require('jimp');
const yargs = require("yargs");
const path = require("path");
const figlet = require('figlet');
const FileType = require('file-type');
const express = require("express");
const { join } = require("path");
const {
    Boom
} = require("@hapi/boom");
const CFonts = require('cfonts');
const moment = require('moment-timezone');
const PhoneNumber = require('awesome-phonenumber');
const {
    exec,
    spawn,
    execSync
} = require("child_process");
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
});
const {
    smsg,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep
} = require('./lib/myfunc');
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
} = require('./lib/exif')
const qrcode = require('qrcode')
const prefix = global.prefa;

const welcomeLeft = require('./Processes/welcome.js');
const {
    Collection,
    Simple
} = require("./lib");
const {
    serialize,
    WAConnection
} = Simple;
const Commands = new Collection()
const {
    color
} = require('./lib/color');
Commands.prefix = prefa
const mongoose = require("mongoose");
const Auth = require('./Processes/Auth');
const {
    clear
} = require("console");


const readCommands = () => {
    let dir = path.join(__dirname, "./Commands")
    let dirs = fs.readdirSync(dir)
    let cmdlist = {}
    try {
        dirs.forEach(async (res) => {
            let groups = res.toLowerCase()
            Commands.category = dirs.filter(v => v !== "_").map(v => v)
            cmdlist[groups] = []
            let files = fs.readdirSync(`${dir}/${res}`).filter((file) => file.endsWith(".js"))
            //console.log(files)
            for (const file of files) {
                const command = require(`${dir}/${res}/${file}`)
                cmdlist[groups].push(command)
                Commands.set(command.name, command)
                delay(100)
            }
        })
        Commands.list = cmdlist
    } catch (eerror) {
        console.error("An error occured!")
    }
}


readCommands()
const PORT = port;
const app = express();
let QR_GENERATE = "invalid";

let status;
async function startMiku() {
    await mongoose.connect(mongodb)

    const {
        getAuthFromDatabase
    } = new Auth(sessionId)

    const {
        saveState,
        state,
        clearState,
    } = await getAuthFromDatabase()

    console.log(color(figlet.textSync('Atlas Bot MD', {
        font: 'Pagga',
        horizontalLayout: 'default',
        vertivalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }), 'yellow'))

    console.log(color('\nHello, I am Yakashi, the owner of this bot.\n\nThanks for using: Yaka MD.\nThe Original Bot Is Developed By TEAM ATLAS. This is a Modified One.', 'aqua'))
    console.log(color('\nYou can follow me on GitHub: Yakashi13\n\n', 'aqua'))




    let {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()
    const Miku = MikuConnect({
        logger: pino({
            level: 'silent'
        }),
        printQRInTerminal: true,
        browser: ['Yaka MD', 'Safari', '1.0.0'],
        auth: state,
        version
    })

    store.bind(Miku.ev)

    Miku.public = true
    Miku.ev.on('creds.update', saveState)
    Miku.serializeM = (m) => smsg(Miku, m, store)

    Miku.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect,
            qr
        } = update
        status = connection;
        if (connection) {
            await console.info(`Atlas MD Server Status => ${connection}`);
          }

        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete Session and Scan Again`);
                process.exit();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting....");
                startMiku();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server, reconnecting...");
                startMiku();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                process.exit();
            } else if (reason === DisconnectReason.loggedOut) {
                clearState()
                console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
                process.exit();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                startMiku();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut, Reconnecting...");
                startMiku();
            } else {
                console.log(`Disconnected: Reason "Probably your WhatsApp account Banned for Spamming !\n\nCheck your WhatsApp !"`)
            }
        }
        if (qr) {
            QR_GENERATE = qr;
        }
    })


    Miku.ev.on("group-participants.update", async (m) => {
        welcomeLeft(Miku, m);
    });

    Miku.ev.on("messages.upsert", async (chatUpdate) => {
        m = serialize(Miku, chatUpdate.messages[0])

        if (!m.message) return
        if (m.key && m.key.remoteJid == "status@broadcast") return
        if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return
        require("./Core.js")(Miku, m, Commands, chatUpdate)
    })

    
     Miku.getName = (jid, withoutContact  = false) => {
        id = Miku.decodeJid(jid)
        withoutContact = Miku.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = Miku.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === Miku.decodeJid(Miku.user.id) ?
            Miku.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    Miku.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    Miku.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Miku.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    /** Send Button 5 Images
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Miku.send5ButImg = async (jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
        let message = await prepareWAMessageMedia({
            image: img,
            jpegThumbnail: thumb
        }, {
            upload: Miku.waUploadToServer
        })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
                hydratedTemplate: {
                    imageMessage: message.imageMessage,
                    "hydratedContentText": text,
                    "hydratedFooterText": footer,
                    "hydratedButtons": but
                }
            }
        }), options)
        Miku.relayMessage(jid, template.message, {
            messageId: template.key.id
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    Miku.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        Miku.sendMessage(jid, buttonMessage, {
            quoted,
            ...options
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Miku.sendText = (jid, text, quoted = '', options) => Miku.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted
    })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Miku.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Miku.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Miku.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Miku.sendMessage(jid, {
            video: buffer,
            caption: caption,
            gifPlayback: gif,
            ...options
        }, {
            quoted
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    Miku.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Miku.sendMessage(jid, {
            audio: buffer,
            ptt: ptt,
            ...options
        }, {
            quoted
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Miku.sendTextWithMentions = async (jid, text, quoted, options = {}) => Miku.sendMessage(jid, {
        text: text,
        contextInfo: {
            mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')
        },
        ...options
    }, {
        quoted
    })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Miku.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await Miku.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Miku.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }
        await Miku.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    Miku.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await Miku.getFile(path, true)
        let {
            mime,
            ext,
            res,
            data,
            filename
        } = types
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            } catch (e) {
                if (e.json) throw e.json
            }
        }
        let type = '',
            mimetype = mime,
            pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let {
                writeExif
            } = require('./lib/exif')
            let media = {
                mimetype: mime,
                data
            }
            pathFile = await writeExif(media, {
                packname: options.packname ? options.packname : global.packname,
                author: options.author ? options.author : global.author,
                categories: options.categories ? options.categories : []
            })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        } else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await Miku.sendMessage(jid, {
            [type]: {
                url: pathFile
            },
            caption,
            mimetype,
            fileName,
            ...options
        }, {
            quoted,
            ...options
        })
        return fs.promises.unlink(pathFile)
    }
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    Miku.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    Miku.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }


    Miku.sendListMsg = (jid, text = '', footer = '', title = '', butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
            text: text,
            footer: footer,
            title: title,
            buttonText: butText,
            sections
        }
        Miku.sendMessage(jid, listMes, {
            quoted: quoted
        })
    }

    Miku.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
            size: await getSizeMedia(data),
            ...type,
            data
        }
    }

    Miku.sendFile = async (jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await Miku.getFile(PATH, true)
        let {
            filename,
            size,
            ext,
            mime,
            data
        } = types
        let type = '',
            mimetype = mime,
            pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let {
                writeExif
            } = require('./lib/sticker.js')
            let media = {
                mimetype: mime,
                data
            }
            pathFile = await writeExif(media, {
                packname: global.packname,
                author: global.packname,
                categories: options.categories ? options.categories : []
            })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        } else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await Miku.sendMessage(jid, {
            [type]: {
                url: pathFile
            },
            mimetype,
            fileName,
            ...options
        }, {
            quoted,
            ...options
        })
        return fs.promises.unlink(pathFile)
    }
    Miku.parseMention = async (text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    return Miku
}

startMiku();

app.use("/", express.static(join(__dirname, "Page")));
app.get("/qr", async (req, res) => {
    const { session } = req.query;
    if (!session)
    return void res
      .status(404)
      .setHeader("Content-Type", "text/plain")
      .send("Provide the session id for authentication")
      .end();
    if (sessionId !== session)
    return void res
      .status(404)
      .setHeader("Content-Type", "text/plain")
      .send("Invalid session")
      .end();
    if (status == "open")
    return void res
      .status(404)
      .setHeader("Content-Type", "text/plain")
      .send("Session already exist")
      .end();
    res.setHeader("content-type", "image/png");
    res.send(await qrcode.toBuffer(QR_GENERATE));
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`${__filename} Updated`))
    delete require.cache[file]
    require(file)
})
