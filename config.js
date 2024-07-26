//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || ""; 
global.email = "adamsandra8056@gmail.com";
global.location = "Ogun state, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Chasenitro001/CHA-SE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/6cad0ed0565f1edfc94c0.jpg";
global.devs = "2347080541298";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348140825959";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/eQcIiKT.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "{"noiseKey":{"private":{"type":"Buffer","data":"uNUQBL1YAdtLzTSTzo3fiWzQa6w/JBVaUrouVWVN8l0="},"public":{"type":"Buffer","data":"dO3iWx+1MZvlob0TLsA0cShEITFHYkcqEAhVBylkIWg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"iJy60j0+g8FrhwalB4iWfXTeCzQDjaN+gNBzApmVT3w="},"public":{"type":"Buffer","data":"Kavo1JSYMvywj+2PMQFyTcVfSS8xZKXhzCeb+Mr3IEc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"oISTo5aPtVYfQHQ8tVFzb58+1ebiurekzjSQj0pHyHw="},"public":{"type":"Buffer","data":"6BjQ5zzwbqTPzTjnnn+d8Hwik88v0H1dFmbyUkYL+lg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UIAuzL9ggFf8qE73WZyr10jo8is7ExWC6S7Dj5R1M1A="},"public":{"type":"Buffer","data":"ZuKfwkd3OGYo1+MSOCMF0oQS3NmjNYPRKYxgtCdEK08="}},"signature":{"type":"Buffer","data":"3hO0Fh50FzzTkgTRZMYAZWmsJghTtqt/i46R8o8BXgZL5fJkFjpCvhGB2SpdX2LZDxHdN03mdOOXukr5wR83gA=="},"keyId":1},"registrationId":223,"advSecretKey":"3TZljoU96ICMWoJluFePC+zlQJXzx/AO8LQ8D9paNdI=","processedHistoryMessages":[{"key":{"remoteJid":"2348084374365@s.whatsapp.net","fromMe":true,"id":"3AE1E8980BDC9EDEE7AE"},"messageTimestamp":1721987210},{"key":{"remoteJid":"2348084374365@s.whatsapp.net","fromMe":true,"id":"3A14DFB55A2CD35607FD"},"messageTimestamp":1721987212}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"ZlO7fxswQx66idPJ_BGwCA","phoneId":"65073dc1-b42c-46e0-9ea8-6b49640a990b","identityId":{"type":"Buffer","data":"LVxO2UFpqMh5ANXBqdsFj3uXU/U="},"registered":true,"backupToken":{"type":"Buffer","data":"sIm4M9t+T0JzlEIysj/z7hkh7yk="},"registration":{},"pairingCode":"YEXXXK5M","me":{"id":"2348084374365:6@s.whatsapp.net","name":"Martin Kelvin"},"account":{"details":"CMHj8sYHEPvgjbUGGAMgACgA","accountSignatureKey":"rHPkXjxUgtuWKErn6FqTfIbzPM+C/2Qrp2FjRf2exjk=","accountSignature":"f2pwrx6osOLvJfhYxpMURyGqlaMBdbGWR7WfbVXn0lwviiILw2emS66dN8E5c1JCMZ1sd8Be+qhzzJu7FzNWCw==","deviceSignature":"XapRX9GWnlqyn7idNiYPsnzBWD+ZvU6EQAQGW279hehUI6UuHv5cw2IR9oODN1PSSwb28eBXQ0yQOqz6mFlRgQ=="},"signalIdentities":[{"identifier":{"name":"2348084374365:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Baxz5F48VILblihK5+hak3yG8zzPgv9kK6dhY0X9nsY5"}}],"platform":"iphone","lastAccountSyncTimestamp":1721987208,"myAppStateKeyId":"AAAAAKYB"}"
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`CHA_SE-MD™`",
  author: process.env.PACK_AUTHER || "CHA_SE-MD",
  packname: process.env.PACK_NAME || "C H A S E",
  botname: process.env.BOT_NAME || "CHA_SE-MD",
  ownername: process.env.OWNER_NAME || "BADBOI 🕷🪳",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "C-H-A-S-E").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
