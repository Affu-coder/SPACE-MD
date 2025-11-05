require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADSOZVu0YNn3VgQAAHAHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGOUiiBEdsdwURBFFBdzYhxJKLJGLVSDghP++QTs9PQ+7s708FVkZmSfPOVnfQZZjiizUgsl3UBB8hyXqjmVbIDABSnU6IQL6IIIlBBOQLIcb2mMLvtGU4yLsKfl4oy*n9wS3oZFM+dlszbrb6toy4Rt49kFRHa84*E1BWjTa9TFbPJJSi7e3OBhOnUXYk6aVgdXVcDkrAoHGmn*P+Dfw7CpCTHAW68UZpYjAq4VaB2LyNfieXqiSeheqIEzXte97qb87I8khkiNEVOfnkuWbc9flvfXX4NuiqW0utg4VVT6u0BLfLRq38aGqEhJPZzUm0dxVm*Vqq7*gUxxnKDIjlJW4bL*MuzWV5*O6jh7T+*SqS4ovaFoN93U8uhVNc7gNLlp+CUxhywZfA17q3p5dq+j0kOHo*KiChwGnXi*kzOn0sV8MUMVgd79ksD*8FbhDPryS*B*ex0tHtw9OYgbFIzpuxMbbZ068Kuyg9WjcWyVhE6cLj8l3u6*Bj11cG0PT8k2DHjfjYMHybjOf0tvYM6qRNFbZOT9wNDtT6k*4sKzI71DOTsxcMEO89WJmXStLm4fkMlhup45*vwcae9Btf1hA*2jxCndkSK3AWeCbdrLa4tvGMdqx23MHsrTNR8He2zblKD1o8tv7RAlqzQhMmGcfEBRjWhJY4jzrYiOpD2B0d1FIUPnOLhhwkJ+dlMOmdlervR02dY+X59ZA228rd6ebNNtKdirw3G39BvqgIHmIKEWRgWmZk3aJKIUxomDy5199kKGmfOnWdeOYPjhhQstdVhXXHEYfon5cwjDMq6x02yxUuwMiYDL8DKOyxFlMOxqrDJLwjO9IPcOSgskJXin6OSAiKAKTklTo59KqedTxfliuuY21Z0AfpO964AhMAMtxLM+MWYEbcROW+YN+q7uysCi+ZagEfXB9pY0FhhMkVhpyAid2iV38+RNgVy9CJcRXCiZAtbQB58iaPhdkQuPZTNZjWY1l8DnQhzFezGs4G0V5sDCVIXfY2bfd+EYrSzS0I5XO4WNgqLRXUbYxvOXbPxQBE0AkaIhn+4YuSyFkUkk0ChNR9Zgu7EL35uLR1g+rR0289m5CnZpDVlmJq0cQ4oM*JuY82etJszts*MBNz3AwLUrlpsRvXbcI3XGIfm1WrZUsixRrGMxShjQXWbX2vYHabMPTrDdodsfhcWwkKsfpzYOpzyXuxeOjGHGy6Vr3wPdEqBtEzNb3Yw9qt4S0ezFRf1j2fWWuP54q*O6mTqru94TR++ZnsBPwv6V7Ae8cNnz2f6nx4y35l31U1nzR8+FMbeXIZvcavDoWWeCqqVnRCfzloKmJQ4hNN8wFPJ9*9UFxheUpJymYAJhFJMcR6AOSV51lzeyU*6aZKpumsn5NfoW0lD*XYItTREuYFmDCiALLCQwnjl9ZDskLA9JzR8KMl9Oq83QrF4VbwvJjq4DcfYZ0A8+*AVBLAQIUAxQAAAgIADSOZVu0YNn3VgQAAHAHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAH4EAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233241826353 and 233504314086',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Affularison',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || '87654321',
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
