require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIALiZj1vVyyWPVgQAAG4HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGhAUkKquGkAExBa1VZSteQgQbnIzCdD0lP99i+7p7nnYne3lKSSpc77zXfITlFVKkI16IP8ENU5bSNGwpH2NgAzUJooQBmMQQgqBDK6G6z2NlNut82dW14U3u77clG6flJNFAs25Vi59dm45V055APcxqBs*T4M*FNQXQTazYatrt3i*WGidjnFKmI23Yx4daPoC6XqG5ZWnl+4B3IeKMMVpGet1ggqEYW6jfgtT*DX4hcZP6mIyauyVnmFDsYPpnDMn7VLJqHvLhE2lntzTXAtK*Wvwg4rxAm13DX03UfatXpvi5sVa1W0SEc1Um4DP7J22vJHTL*gkjUsUWiEqaUr7L*OOFpFUb9aHQ0yUZg1LFl*ODJ5PG4V1GRrt+tNhvrtAb3ZlvwY8zop9vsL0yEy5m+Z3hT+bqOyt5JL98zKWDCa+SGG1KZw0*h34Fr975fp*eGfX7Xl*Wh+c4zXz1a55nLOZEiriRWjhyHuqJoZ2W4m10xvW1+AfLHet5LZoEdXau3ZwvAgXz60E7TBndnbKmL1nS6vEdQz9Ez6kDf4TysPa2Xa0UJ5RbZy0SKJ5LrqHxomVSVupbVFlwm3O5EnPhHxks3iW8jZz7n2XiY+bvdY+zdZtu59olRtlm4nIr*26i+OH14muqLdCIE*uY4BRnBKKIU2rctjjxgCG7RMKMKKv5IIaZ22Sby5mV1XqzpZ2j8aLp1dVDFNWvAVXys1Yrlc9MZEewBjUuAoQISg0U0Ir3D8iQmCMCJD*+jEGJXqmb7INzaQJPwZRigk9lk2dVzB8F*XjFAZB1ZT0qS8DbVggDGT2cxtRmpYxGXhsSoiDJG2RlkBKgBzBnKCPCRFGIZApbtBHarUqHIi*HLd7ZaGfwBgUr4KkIZABx*MzdspPpqwkyOJ38q0bqsK6*lYiCsYgf701nfHcXBA5VuSn3FQWvw*b9w94Q7UQUZjmBMhA2wpL8WKZumOLcVAZhqLHihYr4HOcd1+8Mb*PMfec80m43NO8WfWRQtsAC0bxQpan7CL5S28zGWVr9Pz48A9FgAxmzu3RI+u2EyJjsxHiLbGujdebjVFjMspWRWzRFyGwHTwLd9e0nZ1Wrnt2tGY0aV2V2SY3axdr0rQ+4plyLcOjY5tq9zB0C1GbBuj3Zm50PK9x1NZmpeMKGuYLY+eXXrSiTDqX0wVOrNFZ49c+jZerk56eem4hTb2CSM663Gkhx9btSV8Q8VlHRcmpReQosfLm2NfE5L9eqvTVTYNQw2+Uotfgl3CQ7z+Fe8M9+Iu9j38r8esl+Zc0qkcPzokXTs*7o+*5aVB2a5+3R0lNRPV04bbGs3sIo6rnyQHc7z*GoM4hjSpcABnAMsRVGoIxwFUz+NUqo+oPzTTl0VJ38WoYPIeEKp8ZOKQFIhQWNZAnojCTOIHlpm+3triqTUiSgQNjqhTNYOheqesnCul7poAyfGa9Bfe*AVBLAQIUAxQAAAgIALiZj1vVyyWPVgQAAG4HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAH4EAAAAAA==',
  
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
