

const {
  adams
} = require("../Ibrahim/adams");
const {
  default: axios
} = require("axios");
const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
adams({
  'nomCom': "gpt3",
  'reaction': '🫠',
  'categorie': "abu"
}, async (_0x1c785e, _0x175ba3, _0x5a1b37) => {
  const {
    repondre: _0x324d69,
    arg: _0x58481b,
    ms: _0x4202cf
  } = _0x5a1b37;
  try {
    if (!_0x58481b || _0x58481b.length === 0) {
      return _0x324d69("Hello 🖐️.\n\n What help can I offer you today?");
    }
    const _0x97a202 = _0x58481b.join(" ");
    const _0x1c47d7 = await fetch("https://api.gurusensei.workers.dev/llama?prompt=" + _0x97a202);
    const _0x7c010b = await _0x1c47d7.json();
    if (_0x7c010b && _0x7c010b.response && _0x7c010b.response.response) {
      const _0x3a32d3 = _0x7c010b.response.response;
      const _0x7d515 = _0x3a32d3.match(/```([\s\S]*?)```/);
      const _0x3de5d3 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "FOLLOW CHANNEL",
          'url': "https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h"
        })
      }];
      if (_0x7d515) {
        const _0x19f14d = _0x7d515[1];
        _0x3de5d3.unshift({
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 COPY YOUR CODE",
            'id': "copy_code",
            'copy_code': _0x19f14d
          })
        });
        const _0x21e17e = generateWAMessageFromContent(_0x1c785e, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x3a32d3
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "> *CYBERION-SPARK-X*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': _0x3de5d3
                })
              })
            }
          }
        }, {});
        await _0x175ba3.relayMessage(_0x1c785e, _0x21e17e.message, {
          'messageId': _0x21e17e.key.id
        });
      } else {
        const _0x1ac143 = generateWAMessageFromContent(_0x1c785e, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x3a32d3
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "> *CYBERION-SPARK-X*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': _0x3de5d3
                })
              })
            }
          }
        }, {});
        await _0x175ba3.relayMessage(_0x1c785e, _0x1ac143.message, {
          'messageId': _0x1ac143.key.id
        });
      }
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x4a7fa4) {
    console.error("Error getting response:", _0x4a7fa4.message);
    _0x324d69("Error getting response.");
  }
});
adams({
  'nomCom': "phone",
  'aliases': ["checknum", "validate", "numinfo", "valid"],
  'reaction': '📞',
  'categorie': "General"
}, async (_0xa4768a, _0x2fff28, _0x5915d4) => {
  const {
    repondre: _0x51ed3a,
    arg: _0x14a7d0,
    ms: _0x56df3b
  } = _0x5915d4;
  try {
    if (!_0x14a7d0 || _0x14a7d0.length === 0) {
      return _0x51ed3a("Please enter a phone number to validate.");
    }
    const _0x232537 = _0x14a7d0.join(" ");
    const _0x1418f5 = await fetch("https://tajammalmods.xyz/Validater.php?num=" + _0x232537);
    const _0x27e36e = await _0x1418f5.json();
    if (_0x27e36e.valid) {
      const _0x8d3f13 = _0x27e36e.carrier;
      const _0x1cbf2c = _0x27e36e.country;
      const _0x3dc36f = _0x27e36e.international_format;
      const _0x5d0b21 = _0x27e36e.national_format;
      const _0x468b7b = _0x27e36e.line_type === 1 ? "Mobile" : "Landline";
      const _0x3438dd = _0x27e36e.location;
      const _0x2a502b = _0x27e36e.time_zones[0];
      await _0x51ed3a("Phone Number Validation:\n\n*Carrier:* " + _0x8d3f13 + "\n*Country:* " + _0x1cbf2c + "\n*International Format:* " + _0x3dc36f + "\n*National Format:* " + _0x5d0b21 + "\n*Line Type:* " + _0x468b7b + "\n*Location:* " + _0x3438dd + "\n*Time Zone:* " + _0x2a502b + "\n\n> *POWERED BY FLASH-MD*");
    } else {
      await _0x51ed3a("The phone number is invalid!");
    }
  } catch (_0xfd3f13) {
    _0x51ed3a("There was an error processing your request. Please try again later.");
  }
});
adams({
  'nomCom': "technews",
  'reaction': '📰',
  'categorie': "News"
}, async (_0x15c752, _0x925ebe, _0x5e07af) => {
  const {
    repondre: _0x28aefb,
    ms: _0x3c24fb
  } = _0x5e07af;
  try {
    const _0x4d7940 = await axios.get("https://fantox001-scrappy-api.vercel.app/technews/random");
    const _0x12d0c9 = _0x4d7940.data;
    const {
      thumbnail: _0xa1cfe3,
      news: _0x56be8d
    } = _0x12d0c9;
    const _0x382106 = "*CYBERION*\n\n" + _0x56be8d + "\n\n*Powered by © Ibraah*";
    await _0x925ebe.sendMessage(_0x15c752, {
      'image': {
        'url': _0xa1cfe3
      },
      'caption': _0x382106
    }, {
      'quoted': _0x3c24fb
    });
  } catch (_0x3071fd) {
    console.error("Error fetching tech news:", _0x3071fd);
    await _0x28aefb("Sorry, there was an error retrieving the news. Please try again later.\n" + _0x3071fd);
  }
});
adams({
  'nomCom': "mail",
  'aliases': ["tempmail", "temp"],
  'reaction': '📧',
  'categorie': "General"
}, async (_0x3a3baf, _0x38c3fe, _0x32fa6b) => {
  const {
    repondre: _0x504f00,
    prefixe: _0x27ade5,
    ms: _0x42c381
  } = _0x32fa6b;
  try {
    const _0x5bf261 = Math.random().toString(36).substring(2, 12);
    const _0x215b87 = _0x5bf261 + "@1secmail.com";
    await _0x38c3fe.sendMessage(_0x3a3baf, {
      'text': "Your temporary email is: " + _0x215b87 + "\n\nYou can use this email for temporary purposes. I will notify you if you receive any emails."
    }, {
      'quoted': _0x42c381
    });
    const _0x1ed4b7 = _0x72b41d => {
      const _0x16d041 = /(https?:\/\/[^\s]+)/g;
      return _0x72b41d.match(_0x16d041);
    };
    const _0x24d731 = async () => {
      try {
        const _0x2a9c79 = await fetch("https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x5bf261 + "&domain=1secmail.com");
        const _0x2adbfe = await _0x2a9c79.json();
        if (_0x2adbfe && _0x2adbfe.length > 0) {
          for (const _0x50f073 of _0x2adbfe) {
            const _0x4ced3e = await fetch("https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0x5bf261 + "&domain=1secmail.com&id=" + _0x50f073.id);
            const _0x3777eb = await _0x4ced3e.json();
            const _0x48c253 = _0x1ed4b7(_0x3777eb.textBody);
            const _0xda0411 = _0x48c253 ? _0x48c253.join("\n") : "No links found in the email content.";
            await _0x38c3fe.sendMessage(_0x3a3baf, {
              'text': "You have received a new email!\n\nFrom: " + _0x3777eb.from + "\nSubject: " + _0x3777eb.subject + "\n\n" + _0x3777eb.textBody + "\n\nLinks found:\n" + _0xda0411
            }, {
              'quoted': _0x42c381
            });
          }
        }
      } catch (_0x2edcbb) {
        console.error("Error checking temporary email:", _0x2edcbb.message);
      }
    };
    const _0x5b54de = setInterval(_0x24d731, 30000);
    setTimeout(() => {
      clearInterval(_0x5b54de);
      _0x38c3fe.sendMessage(_0x3a3baf, {
        'text': "Your temporary email session has ended. Please create a new temporary email if needed."
      }, {
        'quoted': _0x42c381
      });
    }, 600000);
  } catch (_0x255575) {
    console.error("Error generating temporary email:", _0x255575.message);
    await _0x38c3fe.sendMessage(_0x3a3baf, {
      'text': "Error generating temporary email. Please try again later."
    }, {
      'quoted': _0x42c381
    });
  }
});
adams({
  'nomCom': "dalle",
  'aliases': ["dall", "dal"],
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x41769f, _0x183335, _0xb9535c) => {
  const {
    repondre: _0x49e2f5,
    arg: _0x2cd9ea,
    ms: _0x5147ad
  } = _0xb9535c;
  try {
    if (!_0x2cd9ea || _0x2cd9ea.length === 0) {
      return _0x49e2f5("Please enter the necessary information to generate the image.");
    }
    const _0x3055c9 = _0x2cd9ea.join(" ");
    const _0x53c3bc = "https://widipe.com/dalle?text=" + _0x3055c9;
    _0x183335.sendMessage(_0x41769f, {
      'image': {
        'url': _0x53c3bc
      },
      'caption': "*CYBERION-SPARK-X*"
    }, {
      'quoted': _0x5147ad
    });
  } catch (_0x58f4c5) {
    console.error("Erreur:", _0x58f4c5.message || "Une erreur s'est produite");
    _0x49e2f5("Oops, an error occurred while processing your request");
  }
});
adams({
  'nomCom': "gemini",
  'reaction': '🤗',
  'categorie': "carl"
}, async (_0x4543e1, _0x565099, _0x4e4dc4) => {
  const {
    repondre: _0x126924,
    arg: _0x23344a,
    ms: _0x26af81
  } = _0x4e4dc4;
  try {
    if (!_0x23344a || _0x23344a.length === 0) {
      return _0x126924("Hello 🖐️\n\n Please feel excused");
    }
    const _0x299931 = _0x23344a.join(" ");
    const _0x37da90 = await fetch("https://widipe.com/gemini?text=" + _0x299931);
    const _0x466a48 = await _0x37da90.json();
    if (_0x466a48 && _0x466a48.result) {
      const _0x5c03b0 = _0x466a48.result;
      const _0x119b00 = _0x5c03b0.match(/```([\s\S]*?)```/);
      const _0x140044 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "FOLLOW CHANNEL",
          'url': "https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h"
        })
      }];
      if (_0x119b00) {
        const _0x3f5ccb = _0x119b00[1];
        _0x140044.unshift({
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 COPY YOUR CODE",
            'id': "copy_code",
            'copy_code': _0x3f5ccb
          })
        });
        const _0x58ca38 = generateWAMessageFromContent(_0x4543e1, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x5c03b0
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "> *CYBERION-SPARK-X*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': _0x140044
                })
              })
            }
          }
        }, {});
        await _0x565099.relayMessage(_0x4543e1, _0x58ca38.message, {
          'messageId': _0x58ca38.key.id
        });
      } else {
        const _0x926aae = generateWAMessageFromContent(_0x4543e1, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x5c03b0
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "> *CYBERION-SPARK-X*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': _0x140044
                })
              })
            }
          }
        }, {});
        await _0x565099.relayMessage(_0x4543e1, _0x926aae.message, {
          'messageId': _0x926aae.key.id
        });
      }
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x5c66c0) {
    console.error("Error getting response:", _0x5c66c0.message);
    _0x126924("Error getting response.");
  }
});
adams({
  'nomCom': "calc",
  'aliases': ["cal", "calculate"],
  'reaction': '🔢',
  'categorie': "General"
}, async (_0x59c607, _0xb54085, _0x28f179) => {
  const {
    repondre: _0x2328f9,
    arg: _0x4c7b9c,
    ms: _0x59c648
  } = _0x28f179;
  if (!_0x4c7b9c || _0x4c7b9c.length === 0) {
    return _0x2328f9("Please insert math calculations like 100000+2024.\n\nNOTE: Use \"(/)\" for division and \"(*)\" for multiplication or letter x");
  }
  const _0x16d0c0 = _0x4c7b9c.join(" ");
  const _0x3b85ee = await fetch("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x16d0c0);
  const _0x35cc9c = await _0x3b85ee.json();
  await _0x2328f9(_0x35cc9c.result);
  console.log(_0x35cc9c.completion);
});
adams({
  'nomCom': "randomwallpaper",
  'aliases': ["bestwal", "best", 'bw'],
  'reaction': '🙌',
  'categorie': "Carl"
}, async (_0x7773ad, _0x4c297c, _0x55a9ca) => {
  const {
    repondre: _0x595cca,
    arg: _0x33d6f8,
    ms: _0x8fc439
  } = _0x55a9ca;
  const _0x3b5397 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x26da3a = await _0x3b5397.json();
  const _0x2151f4 = _0x26da3a.urls.regular;
  let _0x3e3373 = {
    'image': {
      'url': _0x2151f4
    },
    'caption': "*POWERED BY Carltech*"
  };
  return await _0x4c297c.sendMessage(_0x7773ad, _0x3e3373, {
    'quoted': _0x8fc439
  });
});
adams({
  'nomCom': "random",
  'reaction': '🥂',
  'categorie': "Carl"
}, async (_0x4b2827, _0x10520f, _0x411b04) => {
  const {
    repondre: _0x4270d5,
    arg: _0x3fc4ef,
    ms: _0x19ed16
  } = _0x411b04;
  const _0x17789a = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x202f06 = await _0x17789a.json();
  const _0x590737 = _0x202f06.urls.regular;
  let _0x5b1efd = {
    'image': {
      'url': _0x590737
    },
    'caption': "*POWERED BY CYBERION*"
  };
  return await _0x10520f.sendMessage(_0x4b2827, _0x5b1efd, {
    'quoted': _0x19ed16
  });
});
adams({
  'nomCom': "nature",
  'reaction': '🦗',
  'categorie': "Cyberion"
}, async (_0x4ecd38, _0x2fd59f, _0x2e7395) => {
  const {
    repondre: _0x682fe5,
    arg: _0x1e586b,
    ms: _0x21fc36
  } = _0x2e7395;
  const _0x32df30 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x223f0a = await _0x32df30.json();
  const _0x165d3d = _0x223f0a.urls.regular;
  let _0x4f36f3 = {
    'image': {
      'url': _0x165d3d
    },
    'caption': "*POWERED BY Carltech*"
  };
  return await _0x2fd59f.sendMessage(_0x4ecd38, _0x4f36f3, {
    'quoted': _0x21fc36
  });
});
adams({
  'nomCom': "time",
  'reaction': '⌚',
  'categorie': "Carl"
}, async (_0x491559, _0xc92d5b, _0x5c7fa8) => {
  const {
    repondre: _0x328c81,
    arg: _0x57752f,
    ms: _0x11a1ed
  } = _0x5c7fa8;
  try {
    if (!_0x57752f || _0x57752f.length === 0) {
      return _0x328c81("Enter the name of the country you want to know its time and date");
    }
    const _0x36b5f4 = _0x57752f.join(" ");
    const _0x5896b0 = await fetch("https://levanter.onrender.com/time?code=" + _0x36b5f4);
    const _0x3e877d = await _0x5896b0.json();
    const _0x2ffca1 = _0x3e877d.result[0].name;
    const _0x2555f1 = _0x3e877d.result[0].time;
    const _0x421e8c = _0x3e877d.result[0].timeZone;
    await _0x328c81("Live Time in *" + _0x2ffca1 + "* Stats:\n\n*Date & Time:* " + _0x2555f1 + "\n*TimeZone:* " + _0x421e8c + "\n\n> *𝖎𝖇𝖗𝖆𝖆𝖍 𝖋𝖙 𝕮𝖆𝖗𝖑𝖙𝖊𝖈𝖍*");
  } catch (_0x3ef7e4) {
    _0x328c81("That country name is incorrect!");
  }
});
adams({
  'nomCom': "lines",
  'reaction': '😘',
  'categorie': "Fun"
}, async (_0x2006fb, _0x20b9d9, _0x5b084c) => {
  const {
    repondre: _0x5437b3,
    arg: _0x5eebf1,
    ms: _0xa4e8b
  } = _0x5b084c;
  const _0x509c94 = await fetch("https://api.maher-zubair.tech/misc/lines");
  const _0x469f2a = await _0x509c94.json();
  await _0x5437b3(_0x469f2a.result);
  console.log(_0x469f2a.completion);
});
adams({
  'nomCom': "insult",
  'reaction': '💀',
  'categorie': "Fun"
}, async (_0x97708, _0x51e4fd, _0x25801e) => {
  const {
    repondre: _0x5c45a8,
    arg: _0x59245f,
    ms: _0x2ea476
  } = _0x25801e;
  const _0x1b248d = await fetch("https://api.maher-zubair.tech/misc/insult");
  const _0x1390e6 = await _0x1b248d.json();
  await _0x5c45a8(_0x1390e6.result);
  console.log(_0x1390e6.completion);
});
adams({
  'nomCom': "enhance",
  'reaction': '💥',
  'categorie': "User"
}, async (_0xf8b73b, _0x5519e9, _0x88311) => {
  const {
    repondre: _0x2b4969,
    arg: _0x490991,
    ms: _0x521d17
  } = _0x88311;
  try {
    if (!_0x490991 || _0x490991.length === 0) {
      return _0x2b4969("Please enter the Url of the image you want to enhance!");
    }
    const _0x3a17a2 = _0x490991.join(" ");
    const _0x58d322 = "https://api.maher-zubair.tech/maker/enhance?" + _0x3a17a2;
    _0x5519e9.sendMessage(_0xf8b73b, {
      'image': {
        'url': _0x58d322
      },
      'caption': "*Enhanced by CYBERION*"
    }, {
      'quoted': _0x521d17
    });
  } catch (_0x18b6d4) {
    console.error("Erreur:", _0x18b6d4.message || "Une erreur s'est produite");
    _0x2b4969("Oops, an error occurred while processing your request");
  }
});
adams({
  'nomCom': "dare",
  'reaction': '😁',
  'categorie': "Fun"
}, async (_0xee5ed5, _0x418f24, _0x2b233b) => {
  const {
    repondre: _0xe7af2a,
    arg: _0x2ad2ba,
    ms: _0x1a09a
  } = _0x2b233b;
  const _0x3de8de = await fetch("https://shizoapi.onrender.com/api/texts/dare?apikey=shizo");
  const _0x853094 = await _0x3de8de.json();
  await _0xe7af2a(_0x853094.result);
  console.log(_0x853094.completion);
});
adams({
  'nomCom': "truth",
  'reaction': '🤩',
  'categorie': "Fun"
}, async (_0x31b939, _0x2aa698, _0x53a2bc) => {
  const {
    repondre: _0x593146,
    arg: _0x3762b6,
    ms: _0xfe362f
  } = _0x53a2bc;
  const _0x5bb88f = await fetch("https://shizoapi.onrender.com/api/texts/truth?apikey=shizo");
  const _0x25da3d = await _0x5bb88f.json();
  await _0x593146(_0x25da3d.result);
  console.log(_0x25da3d.completion);
});
adams({
  'nomCom': "applenews",
  'reaction': "🗞️",
  'categorie': "abu"
}, async (_0x4a5c56, _0x175817, _0x10970d) => {
  const {
    repondre: _0x1bdb3f,
    arg: _0x1eae5f,
    ms: _0x580ed1
  } = _0x10970d;
  try {
    const _0x5d577f = await fetch("https://api.maher-zubair.tech/details/ios");
    const _0x3349df = await _0x5d577f.json();
    if (_0x3349df && _0x3349df.status === 200 && _0x3349df.result) {
      const _0x114947 = _0x3349df.result;
      const _0x36f16b = "\n*CYBERION APPLE NEWS:*\n\n\n- *Title:* " + _0x114947.title + "\n\n- *Description:* " + _0x114947.desc.split("\n")[0] + "...\n- *Read More:* " + _0x114947.link + "\n\n\n> Powered by *©devibraah*";
      const _0x2d31f1 = _0x114947.images.find(_0x57475b => _0x57475b && _0x57475b !== "https://images.macrumors.com/images-new/1x1.trans.gif");
      if (_0x2d31f1) {
        await _0x175817.sendMessage(_0x4a5c56, {
          'image': {
            'url': _0x2d31f1
          },
          'caption': _0x36f16b.trim()
        }, {
          'quoted': _0x580ed1
        });
      } else {
        await _0x175817.sendMessage(_0x4a5c56, {
          'text': _0x36f16b.trim()
        }, {
          'quoted': _0x580ed1
        });
      }
    } else {
      await _0x1bdb3f("No news data found.");
    }
  } catch (_0x4f6909) {
    console.error("Error fetching Apple news:", _0x4f6909);
    await _0x1bdb3f("There was an error fetching the news. Please try again later.");
  }
});
adams({
  'nomCom': "nasanews",
  'reaction': "🗞️",
  'categorie': "abu"
}, async (_0x2df811, _0x45e6f6, _0x364bec) => {
  const {
    repondre: _0x549ef3,
    arg: _0x5f434d,
    ms: _0x2555e3
  } = _0x364bec;
  try {
    const _0x445a8f = await fetch("https://api.maher-zubair.tech/details/nasa");
    const _0x817dd2 = await _0x445a8f.json();
    if (_0x817dd2 && _0x817dd2.status === 200 && _0x817dd2.result) {
      const _0x356590 = _0x817dd2.result;
      const _0x3a22f5 = "\n*CYBERION NASA NEWS:*\n\n\n- *Title:* " + _0x356590.title + "\n\n- *Date:* " + _0x356590.date + "\n\n- *Description:* " + _0x356590.explanation.split("\n")[0] + "...\n\n\n> Powered by *©Ibraah*";
      const _0x1fa999 = _0x356590.url;
      if (_0x1fa999) {
        await _0x45e6f6.sendMessage(_0x2df811, {
          'image': {
            'url': _0x1fa999
          },
          'caption': _0x3a22f5.trim()
        }, {
          'quoted': _0x2555e3
        });
      } else {
        await _0x45e6f6.sendMessage(_0x2df811, {
          'text': _0x3a22f5.trim()
        }, {
          'quoted': _0x2555e3
        });
      }
    } else {
      await _0x549ef3("No news data found.");
    }
  } catch (_0x21addb) {
    console.error("Error fetching NASA news:", _0x21addb);
    await _0x549ef3("There was an error fetching the news. Please try again later.");
  }
});
adams({
  'nomCom': "population",
  'reaction': "🗞️",
  'categorie': "abu"
}, async (_0xbd3f62, _0x4a1a33, _0x37d04d) => {
  const {
    repondre: _0xadb53b,
    arg: _0x3dd3d8,
    ms: _0x318329
  } = _0x37d04d;
  try {
    const _0x109c67 = await fetch("https://api.maher-zubair.tech/details/population");
    const _0x29d166 = await _0x109c67.json();
    if (_0x29d166 && _0x29d166.status === 200 && _0x29d166.result) {
      const _0x58ed29 = _0x29d166.result;
      const _0x48f38b = "*WORLDWIDE POPULATION DATA:*\n\n\n- *Total Population:* " + _0x58ed29.current.total + "\n- *Male Population:* " + _0x58ed29.current.male + "\n- *Female Population:* " + _0x58ed29.current.female + "\n- *Births This Year:* " + _0x58ed29.this_year.births + "\n- *Deaths This Year:* " + _0x58ed29.this_year.deaths + "\n- *Births Today:* " + _0x58ed29.today.births + "\n- *Deaths Today:* " + _0x58ed29.today.deaths + "\n\n\n> *Powered by ©CarlTech*";
      await _0xadb53b(_0x48f38b);
    } else {
      await _0xadb53b("No population data found.");
    }
  } catch (_0x5a61c3) {
    console.error("Error fetching population data:", _0x5a61c3);
    await _0xadb53b("There was an error fetching the population data. Please try again later.");
  }
});
adams({
  'nomCom': "jokes",
  'reaction': '🤩',
  'categorie': "Fun"
}, async (_0x481e0b, _0x60caf2, _0x587397) => {
  const {
    repondre: _0x5848c4,
    arg: _0x4f78f5,
    ms: _0x55af7e
  } = _0x587397;
  try {
    const _0x5d9acb = await fetch("https://api.popcat.xyz/joke");
    if (!_0x5d9acb.ok) {
      throw new Error("Network response was not ok.");
    }
    const _0x38086e = await _0x5d9acb.json();
    await _0x5848c4(_0x38086e.joke);
    console.log(_0x38086e.joke);
  } catch (_0x410ea6) {
    console.error("Error fetching joke:", _0x410ea6.message);
    await _0x5848c4("Failed to fetch a joke. Please try again later.");
  }
});
adams({
  'nomCom': "advice",
  'reaction': "🗨️",
  'categorie': "Fun"
}, async (_0x131a61, _0x4a8b32, _0x430d33) => {
  const {
    repondre: _0x258784,
    arg: _0x114705,
    ms: _0x8acd54
  } = _0x430d33;
  try {
    const _0x140a09 = await fetch("https://api.adviceslip.com/advice");
    const _0x59d350 = await _0x140a09.json();
    const _0x1524b0 = _0x59d350.slip.advice;
    await _0x258784("*Here is an advice for you:* \n" + _0x1524b0);
  } catch (_0x1d85f1) {
    console.error("Error:", _0x1d85f1.message || "An error occurred");
    _0x258784("Oops, an error occurred while processing your request");
  }
});
adams({
  'nomCom': "trivia",
  'reaction': '🤔',
  'categorie': "Fun"
}, async (_0x402a40, _0x193b5b, _0x5bcbc7) => {
  const {
    repondre: _0x5c27bc,
    prefixe: _0x4ab5f3,
    ms: _0x161580
  } = _0x5bcbc7;
  try {
    const _0x11c800 = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    if (_0x11c800.status !== 200) {
      return _0x5c27bc("Invalid response from the trivia API. Status code: " + _0x11c800.status);
    }
    const _0x2bde07 = await _0x11c800.json();
    if (_0x2bde07 && _0x2bde07.results && _0x2bde07.results[0]) {
      const _0x22d60f = _0x2bde07.results[0];
      const _0xa65e3c = _0x22d60f.question;
      const _0x478ece = _0x22d60f.correct_answer;
      const _0x3f459b = [..._0x22d60f.incorrect_answers, _0x478ece].sort();
      const _0x5dd03c = _0x3f459b.map((_0x12b8ed, _0x5e2437) => _0x5e2437 + 1 + ". " + _0x12b8ed).join("\n");
      await _0x193b5b.sendMessage(_0x402a40, {
        'text': "Here's a trivia question for you: \n\n" + _0xa65e3c + "\n\n" + _0x5dd03c + "\n\nI will send the correct answer in 10 seconds..."
      }, {
        'quoted': _0x161580
      });
      setTimeout(async () => {
        await _0x193b5b.sendMessage(_0x402a40, {
          'text': "The correct answer is: " + _0x478ece
        }, {
          'quoted': _0x161580
        });
      }, 10000);
    } else {
      throw new Error("Invalid response format from the trivia API.");
    }
  } catch (_0x1924a3) {
    console.error("Error getting trivia:", _0x1924a3.message);
    await _0x193b5b.sendMessage(_0x402a40, {
      'text': "Error getting trivia. Please try again later."
    }, {
      'quoted': _0x161580
    });
  }
});
adams({
  'nomCom': "inspire",
  'reaction': '✨',
  'categorie': "General"
}, async (_0x4993da, _0x3389c6, _0x12300b) => {
  const {
    repondre: _0x59055b,
    arg: _0x5a2ac9,
    ms: _0x14ed88
  } = _0x12300b;
  try {
    const _0x4a974c = await fetch("https://type.fit/api/quotes");
    const _0x17116c = await _0x4a974c.json();
    const _0x18bd69 = Math.floor(Math.random() * _0x17116c.length);
    const _0x1f4d34 = _0x17116c[_0x18bd69];
    await _0x59055b("*Here is an inspirational quote for you:* \n\"" + _0x1f4d34.text + "\" - " + _0x1f4d34.author);
  } catch (_0x287f8d) {
    console.error("Error:", _0x287f8d.message || "An error occurred");
    _0x59055b("Oops, an error occurred while processing your request");
  }
});
adams({
  'nomCom': "gpt4",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x1e8a2e, _0x3a4c2a, _0x268366) => {
  const {
    repondre: _0x2ab5bf,
    arg: _0x34c39d,
    ms: _0x546d7a
  } = _0x268366;
  try {
    if (!_0x34c39d || _0x34c39d.length === 0) {
      return _0x2ab5bf("Please ask a question.");
    }
    const _0x4ca959 = encodeURIComponent(_0x34c39d.join(" "));
    const _0x18d143 = "https://samirxpikachuio.onrender.com/gpt?content=" + _0x4ca959;
    const _0x202c6c = await axios.get(_0x18d143);
    const _0xa9b3c6 = _0x202c6c.data;
    if (_0xa9b3c6 && _0xa9b3c6.message && _0xa9b3c6.message.content) {
      const _0x1a51df = _0xa9b3c6.message.content;
      const _0x1d796d = _0x1a51df.match(/```([\s\S]*?)```/);
      const _0x433b24 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "FOLLOW CHANNEL",
          'url': "https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h"
        })
      }];
      if (_0x1d796d) {
        const _0x3c7795 = _0x1d796d[1];
        _0x433b24.unshift({
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 COPY RESULTS",
            'id': "copy_code",
            'copy_code': _0x3c7795
          })
        });
      }
      const _0x229faa = generateWAMessageFromContent(_0x1e8a2e, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': _0x1a51df
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *POWERED BY Devibraah*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'title': '',
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': _0x433b24
              })
            })
          }
        }
      }, {});
      await _0x3a4c2a.relayMessage(_0x1e8a2e, _0x229faa.message, {
        'messageId': _0x229faa.key.id
      });
    } else {
      throw new Error("Invalid response format from the GPT API.");
    }
  } catch (_0x255227) {
    console.error("Error getting GPT response:", _0x255227.message, _0x255227.response?.["data"] || "No additional data");
    _0x2ab5bf("Error getting response from GPT.");
  }
});
adams({
  'nomCom': "bard",
  'aliases': ["gptbard"],
  'categorie': 'AI'
}, async (_0x149362, _0x4cc981, _0x5a032a) => {
  const {
    ms: _0x45a681,
    repondre: _0x1f59ec,
    arg: _0x3b2409
  } = _0x5a032a;
  if (!_0x3b2409[0]) {
    _0x1f59ec("Please provide a query for Bard. Example: `bard What is the capital of France?`");
    return;
  }
  try {
    await _0x4cc981.sendMessage(_0x149362, {
      'text': "Interacting with Bard... Please wait a moment."
    }, {
      'quoted': _0x45a681
    });
    const _0x42133f = _0x5a032a.nomAuteurMessage || "defaultUser";
    const _0x35d96d = _0x3b2409.join(" ");
    const _0x20be7b = "https://api.guruapi.tech/ai/gpt4?username=" + _0x42133f + "&query=" + encodeURIComponent(_0x35d96d);
    const _0x2fcae3 = await fetch(_0x20be7b);
    const _0x5b8f6e = await _0x2fcae3.json();
    if (!_0x5b8f6e.msg) {
      _0x1f59ec("No response received from Bard. Please try again later.");
      return;
    }
    const _0xd9f5fc = _0x5b8f6e.msg;
    const _0x2ff780 = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify({
        'display_text': "FOLLOW CHANNEL",
        'url': "https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h"
      })
    }];
    const _0x4cb6b1 = generateWAMessageFromContent(_0x149362, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': _0xd9f5fc
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "> *POWERED BY CARLTECH*"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x2ff780
            })
          })
        }
      }
    }, {});
    await _0x4cc981.relayMessage(_0x149362, _0x4cb6b1.message, {
      'messageId': _0x4cb6b1.key.id
    });
  } catch (_0x510586) {
    _0x1f59ec("A fatal error has occurred... \n " + _0x510586.message);
  }
});
