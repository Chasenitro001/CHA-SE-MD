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
  "{"noiseKey":{"private":{"type":"Buffer","data":"ODI2gcBJFgT8ET6oaimuFNAccArJroUF9kYkRehLVVo="},"public":{"type":"Buffer","data":"XkkHks9c6I7TbI7QLuJ1egdjQ38JUKSrjc73jhHe7lk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"IIoClsvqdo4vLCtU/EYQaTvr6+ixrGAVYnQXJHmBLEg="},"public":{"type":"Buffer","data":"tDZU10w2DvTf1MS5X8R2bARj+kVaDkvlmp54nNXCFw0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GFFO6mASXM4HRtl5qfw8ht8dImtvUkfSqeDLvagvtXg="},"public":{"type":"Buffer","data":"4WoWRFpH6rOIFOeFdcPsWMrg8eUxL/yDYXE2DOw6HR8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"mMeYdHiq7jkkgdk7BtyrtHI7keQ79aZ8ubi0csEdfWg="},"public":{"type":"Buffer","data":"BGQe4UZOXn1yv31doLNVf4t+PcdgXIladlyyMRwXlkk="}},"signature":{"type":"Buffer","data":"e81pI/SgUC7KLFi0U//cShnSsNDA78PgaOiCk6hdsmhjj/UiP0xyBoEuBR8mEad8Xshgfl48quLfK0JMz2BYhQ=="},"keyId":1},"registrationId":124,"advSecretKey":"54njsNUn1OS60wXK/BbiBX3tWk1zaP2jA73uFTU4Dhk=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"058xaibtS1ORs_IOUISjDA","phoneId":"8fecc9dd-433c-44eb-9d5a-18cfd87a6c9b","identityId":{"type":"Buffer","data":"XiRlXfMQQ4/YPaJVMmPuRqH8qHo="},"registered":true,"backupToken":{"type":"Buffer","data":"f3hlO28OVhUwuQcnfmBKSokovj0="},"registration":{},"pairingCode":"M3ASJGQB","me":{"id":"2348133286181:76@s.whatsapp.net","name":"⟩»𝐋𝐨𝐫𝐝\nɴ\n\nᴏ\n\n\nɴ\n\nᴀ\n\nᴍ\n\nᴇ\nˢᴬᴹᴬ«⟨"},"account":{"details":"COPb80kQjeSJtQYYBCAAKAA=","accountSignatureKey":"K6DyEKuHi8X1U4FGibcXtv6e2Ig08qAmu8BF0qo3bGc=","accountSignature":"6AG7OSBjp6ufM1F3BVbBzia98giivG1I9Di9GjJBJMpS6qEglCL0lqPAlOYfFl94PhRLIbF2rm3xVRXtwZnqBg==","deviceSignature":"tiTauZNZ06rI9sTsGRKC9oIwMY68HmU5kwdYjXZfro/DbtS+EZQHE4wtEc7YXmoUeZoeqp/nXShcCVAQgXPviw=="},"signalIdentities":[{"identifier":{"name":"2348133286181:76@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSug8hCrh4vF9VOBRom3F7b+ntiINPKgJrvARdKqN2xn"}}],"platform":"smba","lastAccountSyncTimestamp":1721922075}"
module.exports = {
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
