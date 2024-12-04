
/*const {
  adams
} = require(__dirname + "/../Ibrahim/adams");
const {
  format
} = require(__dirname + "/../Ibrahim/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../config");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
adams({
  'nomCom': "menu1",
  'categorie': "General"
}, async (_0x1c384d, _0x50a3f9, _0x2e5d33) => {
  let {
    ms: _0x3ec6f5,
    repondre: _0x1814ea,
    prefixe: _0x25ec83,
    nomAuteurMessage: _0x4eb5d4
  } = _0x2e5d33;
  let {
    cm: _0x3db69a
  } = require(__dirname + "/../Ibrahim/adams");
  var _0x355c60 = {};
  var _0x589187 = s.MODE.toLowerCase() === "public" ? "public" : "private";
  _0x3db69a.map(_0x1bfaa6 => {
    const _0x4a891b = _0x1bfaa6.categorie.toUpperCase();
    if (!_0x355c60[_0x4a891b]) {
      _0x355c60[_0x4a891b] = [];
    }
    _0x355c60[_0x4a891b].push(_0x1bfaa6.nomCom);
  });
  moment.tz.setDefault('' + s.TZ);
  const _0x1391b4 = moment().format("HH:mm:ss");
  const _0x2a830f = moment().hour();
  let _0x48ef77 = "Good night";
  if (_0x2a830f >= 0 && _0x2a830f <= 11) {
    _0x48ef77 = "Good morning";
  } else {
    if (_0x2a830f >= 12 && _0x2a830f <= 16) {
      _0x48ef77 = "Good afternoon";
    } else {
      if (_0x2a830f >= 16 && _0x2a830f <= 21) {
        _0x48ef77 = "Good evening";
      }
    }
  }
  let _0x2f45ce = "\n*🤗Hello* *" + _0x4eb5d4 + "*\n╭────《𝐂𝐘𝐁𝐄𝐑𝐈𝐎𝐍》──────❒\n╏✰▏ *User* : " + s.OWNER_NAME + "\n╏✰▏ *Developer* : *🕵CARLTECH*\n╰───────────────────❒\n╏✰▏ *Mode* : " + _0x589187 + "\n╏✰▏ *Commands* : " + _0x3db69a.length + " \n╰───────────────────❒\n╏✰▏ *Time* : " + _0x1391b4 + " \n╏✰▏ *Ram* : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n╏✰▏ *Series* : *SPARK-X*\n╰───────────────────❒ \n\n";
  let _0x449925 = readmore + " \n╭─────═━┈┈━═──━┈⊷\n┇ Welcome 🤗 \n╰─────═━┈┈━═──━┈⊷\n\n";
  const _0x340393 = Object.keys(_0x355c60).sort();
  _0x340393.forEach(_0x3b4c66 => {
    _0x449925 += "*╭────❒* *" + _0x3b4c66 + "* *❒*";
    _0x355c60[_0x3b4c66].forEach(_0x30010e => {
      _0x449925 += "\n*╏* " + _0x30010e;
    });
    _0x449925 += "\n*╰─═════════════❒*\n";
  });
  _0x449925 += "\n☆☆☆☆☆☆☆☆☆☆☆☆☆\n©CarlTech\n☆☆☆☆☆☆☆☆☆☆☆☆☆";
  try {
    await zk.sendMessage(dest, { 
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
                externalAdReply: {
                    body: "©Carltech",
                    thumbnailUrl: "https://files.catbox.moe/ytix9f.jpeg",
                    sourceUrl: 'https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h',
                    mediaType: 1,
                    rendersmallThumbnail: true
                }
            }
        });

        // Send audio with caption
        await zk.sendMessage(dest, { 
            audio: { 
                url: "https://files.catbox.moe/oordg5.mp3" // Replace with your audio URL
            }, 
            mimetype: 'audio/mp4', 
            ptt: false, // Set to true if you want it as a voice note
            caption: "FESTIVALS",
            contextInfo: {
                externalAdReply: {
                    body: "FESTIVAL SONG BY CYBERION",
                    thumbnailUrl: "https://files.catbox.moe/va22vq.jpeg",
                    sourceUrl: 'https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h',
                    rendersmallThumbnail: false
                }
            }
        });

    } catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
}); */     
