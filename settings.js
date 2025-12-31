require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAARqn1uTUqQRUgQAAG8HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGrnIRaq6ahBREUEUuxG25iFCgDRXQ1Bwyv++Rff0zDzszvbyFJLUOd*5LvkOygo3yEQ9UL6DmuArpGhY0r5GQAHzNo4RAWMQQQqBAsxFepf3DRNtZFTOQnO945f8vVuQMshM5mBGKxY5XkuzwnoCjzGo23OOwz8UlEdJahY3O7*GerTiX1eZMGXEgpk7fO4Il84SUHQNhSrMqifwGCpCTHCZ6HWKCkRgbqLegZh8Dr6xGHEvxqywR*pmJPGsp5OKDdaeSKcLX5o0WSA+72e9v+OMz8E3l4hZSSEMEnsxR8m61+ac6avHaa7rB2t9SQJnUpd8ZK2Md*gNTkoUGREqKab9p3kPHcxAkbbdq+Fk80W6TaRuQQR2r92aVtRCLpItJ+gwXSWfA25UHHsOuawKjqoWjLAAfc0meS+t9LW87rqtwXvLqyObBfM7cId8eCX7P7ybFuttLiSLT5HRxtTzNHgi5UHvd2uqe*3UEpe1W8jbtPgk7xPSuro2JX5La7o7XBb7Q3Gkk5NkTcx9vL0fPH4rMhLnF7*xDmlL*oRS36UHZ8NdrFom0W4q+v7WIeK6S2uTud4ahuT1qCl6+5KaQnx2j7e7tXM3z9HUHtmT6e1St0thys1qeabhK+PNLNEyF8nT20QZ6o0IKOxjDAhKcEMJpLgqhz2OZ8cARlcXhQTRN3pB23DHnDsVXcVJbnCeTsvJbLXxqyt9udGm3ppc*nqyWnydhU9gDGpShahpULTGDa1Ib6GmgQlqgPLXtzEoUUffhRvaDd1iTBr6XLZ1XsHoQ9WPQxiGVVtSty9DbVggAhTm1zaiFJdJM*DYlpCEKb4iLYW0AUoM8wb9nBARFAGFkhb9TK1WRQPxe111VXsZgDEo3gTBEVAAx*PCdCbPBIabKsLX5sttqArr+kuJKBiD*O0WK8izGSvxojyTJJZVhK*D*uMnvqFchCjEeQMUoFkul2byfnaJn*vE99VeVU1VHTj7mOfDGO*E29vI1NP51vKgvZ2RF3vXqmT7rMt7x27uQZS15vEsFhgumX8qAhRw2K9PztnNWST0L+u2Dg+2n2GaZrnfns6oMtRXSmSLtnEWYIFmptafguzk0dHzRhJ3lWfGjcQcYlYXNMj3Xt0enYX6NHSL0BWH6PdmHa+FYmrm5QvTJS3uGrJJq9JmrsHEe4lwXx8nvMTahW*f7hNJf1ncD+epU1TnjhqC0GwLzeqscmtsclnvY07ajNaVpr5b9i0y+Y+nCr+ZaVBq+I0xekt+CQf9*lO5d9yDv5jH+LcSP56Sf4nj*Ojybmrs3fuyeHUnkD0eSWL27NzRF*ezxZ2CLc64UV0VaQQej29jUOeQxhUpgAJgGZEKR2AMSNUOhjXKuPpDM021DD1JlsPgOWyo+isER1yghsKiBgoriRIr87wovt9ySFWvYZMOHDisn8aDo3u1rl0K6UemgDp8m2sJHn8DUEsBAhQDFAAACAgABGqfW5NSpBFSBAAAbwcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233549895024,233504314086',
  
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
