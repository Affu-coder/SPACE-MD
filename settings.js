require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFKJj1uecmpMVAQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGOSORHTEIKAi2iqiLW7MQ0EVWnLtokBxwn*fwO6enofd2V6eiqyKzJPnnMyfIC9IhV3cAv0nKClpIMPdkbUlBjoY1XGMKegDBBkEOmin7MUiu0OUokms+lVu3V5HbSEWKIPYTeXSXU3WGmpbQXoC9z4o6zAl0R8Srk8LyXa35+bVJ2RwMNHwEo84VjsjYbTIeNoTk61cOi84jZ7AvcsICSX50S5POMMUpi5uV5DQr8FfLILtaZ9wauPxa4JtJbTgIHn27Dm*9QKbzvDoVcZxA+3qa*CXpZwtWDBvZHU*5jZutOwpNpdMXeS78+01G+*o8*l80VTfeINfkWOOkYNwzghrv8y7YUxlA26OrcofE2pSbtDW82FSQqGxaq7uNcPYTwdnCU6OXwN+WQ2t0vSom0O*rZXpfByaRpvg+VKdJFsnnJxXW6PNpJfN+nfgK*rhleT*8E7mV60ZWOz55ba8csfaWmqeGDeEomEgGzeB+lDZBddeM0m+Br9Yzgtxd2s8CvHUPzc+d5ish4SECqIvI59z7J3pDSH0HkK+w4espn9CyXEb4XDa8LxPi9v0VGoEC6aZsEUYqi0*WGF1NXKu0TSZQXplJ5VLF4h6iay65eXQorXjz19Y7bcbfxtbTphKOOLNy9OjowS3DgI6f+8Dio+kYhQyUuRdTND6AKJmgyOK2YNdgI0iGItGVN1m9diDk3qcjpajZTaEYWmdtZglOTLL5hZrwRPog5IWEa4qjKakYgVtF7iq4BFXQP*rRx*k+MredHsgUAS5D2JCK7bN6zItIPqQ9fMaRlFR52zT5pHZHTAF+uAzjBkj+bHqqKxzSKMTabB5gqwCegzTCv9qElOMgM5ojX8Nrlmgjvtgu*IMy96BPsgemhAEdCCIojyQRF4aaIqufK++XbqssCy*5ZiBPkgfryRZFIaKKgxUURIkXfnehe+*4HXZEGaQpBXQgbkSxmrgTG3HNY9RMZkY9tEwjwb4bOfDGm*ceykVrql4QmOPpfWsjQ3WRFSZZLdqvDsHWjg+PPO98xxfF0**kKRbCoeckwir9rOREYfR3ulhhzRu6AbLkivT3D3Yjnl0p3ErJYWN1odkfHmWn4WTWjcX5er3TNWwPMHKnL3aS9MbP7wF1vqpq4ZwQyL8e7FX7dWSr+i8vbSaXWPjTBC*L0*iMgxm+*Q626+o5zk+2S1aZTbm9vPXfJgxrVmNL4lTl+l+UyhD2V0Z8gXOREkg5GIb76Z9DE36vqzIw0+dUN1vTPBj9nPYyfefwr3h7gw2uPd*S*G+TP5lIEfbAxxWByTtvW14CEmUX+ah6PZOZaWOdoGwmlxffBQXrVj54H7*0QdlCllc0AzoAOaIFgSBPqBF3fnVyePiD8VMY+GM1sdZ13gKK2Z8zoBPMlwxmJVA51VF1nhNEaW3VytalFNYnToOJpKR1Z2hW6MsNwyyj6ECRvc5hQLufwNQSwECFAMUAAAICABSiY9bnnJqTFQEAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB8BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233504314086',
  
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
