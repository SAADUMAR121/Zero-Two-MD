const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'ZEROTWO=5u9yEagb#8ja4fxVUpCgxVNkTbeU3SExn_jmprDVo-AnM8vIULyE',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'youre POSTGRESQL url',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 200,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  'Mr Bot',
LOGO: process.env.LOGO || `https://graph.org/file/56c0fb63b1eb1b2ca789c.jpg` 
};
