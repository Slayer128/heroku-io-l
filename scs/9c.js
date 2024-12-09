

'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  adams
} = require("../Ibrahim/adams");
adams({
  'nomCom': "repo",
  'reaction': '🏹',
  'nomFichier': __filename
}, async (_0x133707, _0x10a510, _0x4e4f84) => {
  const _0x354d8b = await fetch("https://api.github.com/repos/carl24tech/Cyberion-Spark-X");
  const _0x297a84 = await _0x354d8b.json();
  if (_0x297a84) {
    const _0x463a1e = {
      'stars': _0x297a84.stargazers_count,
      'forks': _0x297a84.forks_count,
      'lastUpdate': _0x297a84.updated_at,
      'owner': _0x297a84.owner.login
    };
    const _0x432557 = "𝑪𝒀𝑩𝑬𝑹𝑰𝑶𝑵 𝑺𝑷𝑨𝑹𝑲 𝑿 𝑰𝑵𝑭𝑶. \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝑪𝑨𝑹𝑳𝑻𝑬𝑪𝑯.\n\n𝑺𝑻𝑨𝑹⭐ 𝑻𝑯𝑬𝑵 𝑭𝑶𝑹𝐊🍴\n\n📂 Repository Name: *CYBERION*\n📝 Last Update: " + _0x463a1e.lastUpdate + "\n🕵 Owner: *CARLTECH*\n⭐ Stars: " + _0x463a1e.stars + "\n🍽 Forks: " + _0x463a1e.forks + "\n🍭 Repo: " + _0x297a84.html_url + "\n🍧 For More Info : https://github.com/carl24tech/CARLTECH-INFO⁠\n";
    await _0x10a510.sendMessage(_0x133707, {
      'image': {
        'url': "https://i.imgur.com/0nWnGBx.jpeg"
      },
      'caption': _0x432557
    });
  } else {
    console.log("Could not fetch data");
  }
});
adams({
  'nomCom': "git",
  'reaction': '🗂',
  'nomFichier': __filename
}, async (_0x3f3005, _0x5c306f, _0x1ae282) => {
  const _0x301d12 = await fetch("https://api.github.com/repos/carl24tech/Cyberion-Spark-X");
  const _0x371ddb = await _0x301d12.json();
  if (_0x371ddb) {
    const _0x41b150 = {
      'stars': _0x371ddb.stargazers_count,
      'forks': _0x371ddb.forks_count,
      'lastUpdate': _0x371ddb.updated_at,
      'owner': _0x371ddb.owner.login
    };
    const _0x4c1000 = "𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎. \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 🕵.\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n🔄 Repository Name: *CYBERION*\n📝 Last Update: " + _0x41b150.lastUpdate + "\n🕵 Owner: *CARLTECH*\n⭐ Stars: " + _0x41b150.stars + "\n🍽 Forks: " + _0x41b150.forks + "\n🔄 Repo: " + _0x371ddb.html_url + "\n⭕ For More Info : https://t.me/carlltecch";
    await _0x5c306f.sendMessage(_0x3f3005, {
      'image': {
        'url': "https://i.imgur.com/0nWnGBx.jpeg"
      },
      'caption': _0x4c1000
    });
  } else {
    console.log("Could not fetch data");
  }
});
adams({
  'nomCom': "code",
  'reaction': '🗂',
  'nomFichier': __filename
}, async (_0x14559e, _0x31212b, _0x4f939c) => {
  const _0x50bbd8 = await fetch("https://api.github.com/repos/carl24tech/Cyberion-Spark-X");
  const _0x2b28de = await _0x50bbd8.json();
  if (_0x2b28de) {
    const _0x54899f = {
      'stars': _0x2b28de.stargazers_count,
      'forks': _0x2b28de.forks_count,
      'lastUpdate': _0x2b28de.updated_at,
      'owner': _0x2b28de.owner.login
    };
    const _0x590d8d = "𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎. \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 🕵.\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n🔄 Repository Name: *CYBERION*\n📝 Last Update: " + _0x54899f.lastUpdate + "\n🕵 Owner: *CARLTECH*\n⭐ Stars: " + _0x54899f.stars + "\n🍽 Forks: " + _0x54899f.forks + "\n🔄 Repo: " + _0x2b28de.html_url + "\n⭕ For More Info : https://t.me/carlltecch";
    await _0x31212b.sendMessage(_0x14559e, {
      'image': {
        'url': "https://i.imgur.com/0nWnGBx.jpeg"
      },
      'caption': _0x590d8d
    });
  } else {
    console.log("Could not fetch data");
  }
});
