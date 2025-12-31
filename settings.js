require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAA1un1viRWo*UQQAAG8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGEUQxYiOWFBBLl7wgpeNfSihwFKgsKoAYcJ*38CenumH3dlenoqsjMyTJ8+p7yAlmCEbVWD0HWQUF5Cj5sirDIER0PIwRBS0QQA5BCNgGKouLbxVN4wPt04yneaForlpNeQaOswmym25pPnJzkWv+waebZDl5xj7vynoFCK8RHLu+5M0NFr9mVLn+FKzjjSpSGu2v*vOrkiGt0UyfwPPpiLEFKfRNLugBFEY26haQUy*Bl+1ncqOJ0sZI15jM5me5mZOyhzNVqdYPXbsqeay4b5Kp+rX4PfvqbUV0*Os36mGcNlRBrvYbMWHx7RjZ4caF*erm+3O+DYbvsNnOEpRYAYo5ZhXX+Z9PPcmZ0VXNh37SvD6PqjJggkJupdCTYJO6V2QNqtVEgnR14Bn1tqhYWmu00r2*U7ZF*kyXjzQrMUEz*JuDqrKsAcN82p+Br6iH1q5*R*e*bl760oCX96ROcjui0CyWHc6Tljv4UvevtJD6B3VXWchfFE221s0vC9VmiSVus5n1imsZgbqC6Tv6tbQPa5pWfl1tajST*Ahz+nvUBJlvN7M+Ho3L9Fh4jinO8bblSq2+uJQWMYVYsvjYuFu+FUXikN9s2TvnNx4hx3S83oOa2zNsaMl9VmXLokfD0mp5Jr79prohiozACPh2QYURZhxCjkmaROT2wAGxQb5FPEXuaB7t20vyuZLqZZ40S37PV3bnhcLLdN6GeOXW8Xg0CKG7rpvoA0ySnzEGApmmHFCqzliDEaIgdGff7VBih78fW1NM1FogxBTxndpnsUEBh87*biEvk*ylG+q1B83B0TBqPsrjDjHacQaFvMUUv+CCzS+QM7AKIQxQz*nQxQFYMRpjn56dkyChva+MJVFY7ACbZC81oEDMAI9Uex3JVGQukN5JAp*sG9lUxZm2bcUcdAG8StN6os9RR70ugNR6klNYhN**gTY1AsQhzhmjW1MbAyO5mxq2aIwJ4ahziN1HKng10Afunhnfh3T3iMWL4G+5nFuVaHKC5*KRlIz3bseh2f9tBBaVwc95m**UASMgNsJ2Z7rO9nTJ4JJjFCsNknqlIQWvUPoFLEyHw8ipVbEzt60W8Jac4RJMFj2xzgRx5pTmoar6KfD8RLI10Ac0DJaTsq3pluACuyjz830pAyQ5W5uhrU2ely5QpLxgkz91c1MXCQE2dHVRDw89*aO6U0qWZ0ILYFme7Gj3pmj23KqZVt*QNKtZUsHgi7e4UOxL8fEP14q*FJTs6rmN8ToZfwUNgv879W9A28U1n22P9X48ZT8ix213Qkq7BRIh*XufDpjPy2ds2i3LhkbaN6xtzIe+20QkkpkW*B8*tUGWQx5SGgCRgCmASU4AG1ASd5I1kxD8rsHVp2bmhtZzeQxZFz9ZYMtThDjMMnASBjIA2HYF7u996wVJdkMsktDgiGpSd5oulKzbMMh*3AVUJtvedqD599QSwECFAMUAAAICAANbp9b4kVqP1EEAABvBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233504314086',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Affu-Coder',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
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
