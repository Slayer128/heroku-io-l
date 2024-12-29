

const {
  adams
} = require(__dirname + "/../Ibrahim/adams");
const moment = require("moment-timezone");
const s = require(__dirname + "/../config");
adams({
  'nomCom': "scan",
  'categorie': "General"
}, async (_0x2802e7, _0x5c677e, _0x2291bc) => {
  let {
    ms: _0x2d1fc6,
    repondre: _0x3f1721,
    prefixe: _0x199e12,
    nomAuteurMessage: _0x20deec,
    mybotpic: _0x346e3b
  } = _0x2291bc;
  let {
    cm: _0x12d4ad
  } = require(__dirname + "/../Ibrahim//adams");
  var _0x543e01 = {};
  var _0x4629b8 = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x4629b8 = "private";
  }
  _0x12d4ad.map(async (_0x244ab7, _0x2a98d7) => {
    if (!_0x543e01[_0x244ab7.categorie]) {
      _0x543e01[_0x244ab7.categorie] = [];
    }
    _0x543e01[_0x244ab7.categorie].push(_0x244ab7.nomCom);
  });
  moment.tz.setDefault("Etc/GMT");
  var _0x3d8dfd = _0x346e3b();
  if (_0x3d8dfd.match(/\.(mp4|gif)$/i)) {
    try {
      _0x5c677e.sendMessage(_0x2802e7, {
        'video': {
          'url': _0x3d8dfd
        },
        'caption': "\n *Tap on the link to get session*\n \n https://spark-x-session-c.onrender.com\n \n \n *STEPS TO GET SESSION*\n \n 1. Open link\n 2. Enter your whatsapp number with your country code eg : 254,255. And tap submit\n 3. Spark-X-2025 will sent you a code. Copy that code. Then whatsapp will sent Notification\n 4. Tap on that notification then enter in the code that Spark-X-2025 sent you.\n 5. It will load for sometime then Spark-X-2025 will send A long session to your inbox on whatsapp at your own number,beginning with Spark-X-2025\n 6. Copy that long session and send it to your deployer.\n \n 🕵 \n \n> Made by : ©🕵 \n",
        'footer': "Je suis *adams*, déveloper adams Tech",
        'gifPlayback': true
      }, {
        'quoted': _0x2d1fc6
      });
    } catch (_0x63cdef) {
      console.log("🥵🥵 Menu erreur " + _0x63cdef);
      _0x3f1721("🥵🥵 Menu erreur " + _0x63cdef);
    }
  } else {
    if (_0x3d8dfd.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x5c677e.sendMessage(_0x2802e7, {
          'image': {
            'url': _0x3d8dfd
          },
          'caption': "\n *Tap on the link to get session*\n \n https://spark-x-session-c.onrender.com\n \n \n *STEPS TO GET SESSION*\n \n 1. Open link\n 2. Enter your whatsapp number with your country code eg : 254,255. And tap submit\n 3. Spark-X-2025 will sent you a code. Copy that code. Then whatsapp will sent Notification\n 4. Tap on that notification then enter in the code that Spark-X-2025 sent you.\n 5. It will load for sometime then Spark-X-2025 will send A long session to your inbox on whatsapp at your own number,beginning with Spark-X-2025\n 6. Copy that long session and send it to your deployer.\n \n 🕵 \n \n> Made by : ©🕵 \n",
          'footer': "Je suis *adams*, déveloper adams Tech"
        }, {
          'quoted': _0x2d1fc6
        });
      } catch (_0x290070) {
        console.log("🥵🥵 Menu erreur " + _0x290070);
        _0x3f1721("🥵🥵 Menu erreur " + _0x290070);
      }
    } else {
      _0x3f1721("\n *Tap on the link to get session*\n \n https://spark-x-session-c.onrender.com\n \n \n *STEPS TO GET SESSION*\n \n 1. Open link\n 2. Enter your whatsapp number with your country code eg : 254,255. And tap submit\n 3. Spark-X-2025 will sent you a code. Copy that code. Then whatsapp will sent Notification\n 4. Tap on that notification then enter in the code that Spark-X-2025 sent you.\n 5. It will load for sometime then Spark-X-2025 will send A long session to your inbox on whatsapp at your own number,beginning with Spark-X-2025\n 6. Copy that long session and send it to your deployer.\n \n 🕵 \n \n> Made by : ©🕵 \n");
    }
  }
});
