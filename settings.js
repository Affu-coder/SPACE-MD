require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGaGklvdFvaoUAQAAGcHAAAKAAAAY3JlZHMuanNvbpVU2bKiOhT9l7xitcooVp2qBkTEEVBAvdUPgQREmU4SB06X*34Lz*jQt+tcnkIIe6291tr5Dcoqo3iGGzD8DWqSXSDD7ZI1NQZDoJ+TBBPQAQgyCIYAG0u6XtmreR+NOCXVpZmxm*LnhISXU8k4bybGVbxKXHerPYF7B9TnKM*ivxR0y6VyVZtwilc0nKkHztqdXvSl0K0Kz+8upfEES4SbEzPsPYF7WxFmJCtTsz7gAhOYz3DjwIx8j7656K28vA4RJuPT2pSi0JL3IT0t7U0ZSGtrQuEm7ZvXXbj7Hv1ybNV2cfWK6eCKBJ8TOFrL25FpJZveszlD8n7avyzsIL290adZWmJkI1yyjDXf1j2dHEauF2Bjw8RoxFdBxVaGV1zL4OCZ4vW0HHXdMJlM6v43ic+X9toWYBLyI0zHphkYp7gQFvNb6VUOP1PSYNI9X10vLQZfiTvkPSun*6M7nRKNk2TMlq69sp2E1faxvAXRPrxuFGTcLvZWCxVp1TuJ36Nv6zbK1Xg2QL623h*Vivr+IPOlYtXLam2fa37InS9x7Za7T*qQncnfWErhDXYvc+oWvou8LF4sbX46OhrQGdULr+tedDTT5tvNgURTLqBTJiBk6VqVR4t+Pc6vNyoYi*Oy71knXYz2VvG8fTbcp0dHJ9zYCAz79w4gOM0oI5BlVfnYk*kOgOiyxjHB7CEv2JjJFFVdNZyE+kx8iRb+VK1mCZ7CtClq2vdWjoipDtNMewIdUJMqxpRiNMkoq0izwJTCFFMw*OdXB5T4xl6Na+EGfaEDkoxQ5pfnOq8gerf14yuM4+pcsnVTxka7wAQMe5*bmLGsTGmr5LmEJD5kF2wcIKNgmMCc4o8eMcEIDBk544+5NSrUSq+FuhoKYxd0QPGwJENgCHhBkHqi0Bd7A3mo*qQ*rm1VWNc*SsxAB+SPU6Ik8Kqs8D1FEHlxqP5st+8f9NpqCDOY5RQMgWEblrKzJ6YTHU6LyrI0M9WMVAOf7bwn41V5Lyf8LRcOaOyx*DxtEo1dYiJbxQsdB8fdIBrvl33uOMe3xdMfirSQZuBodLlxjYvvHGTk604mclc4HryMBqkqJczjp*I4kbdaGq4NSStZk*e4XW6ieivy3NipZPFoK16z78oKKZqLuNfSpxYN4UsW469go9m2Mms1LS3s0wVnFWPJl9V94VW540H9aKbUYaWxDoN1PctGtni6bCbXLJ2H1*XqSAVcK1UoFpqhqFGw6qXmaqVr2mtmHzOTv91V2SNNrVHta5Lhx+iXsLXvz5a8021j1bt3vvz5doX8xxjq*h6qdI*EredH+yiLy+s8EmbcoaaKHux4x7qFG5RUjUA34H7*1QF1DllSkQIMASwRqR7gpDq3MbXLpPoLmKEtbN1Np22*OaRM+4z+JiswZbCowbCvyHJPkWV58HrKIVU9gfTQZtYSteLc5rjR6nrNIHsfJaC1z2L7DO7*AlBLAQIUAxQAAAgIAGaGklvdFvaoUAQAAGcHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
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
