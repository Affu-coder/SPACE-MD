require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFmYklvUs9zPwQQAAMkIAAAKAAAAY3JlZHMuanNvbq2VWY+jOBDHv4tfE024whGppSVACCHkptPJah8MGOJwtm06gVG++4r0NdLOjHql4ckYU*Wrqn+Vv4OixBS5qAGj76Ai+AUy1C1ZUyEwAuM6jhEBfRBBBsEIqMsL3dU7tKKXNWWbVJ6K014gsaCWuMlOXws29HSD7KjFPYBbH1R1kOHwNwZtMu8RF048NyxDIZwfA2XGJihoBLF044NU2K5*ji5PrSE9gFtnEWKCi8SqTihHBGYualYQk6*hc7M0lpz0We5xtjB0D1NrEwgKP4SKtRikMWc7QWtu0unKWn8NX17t5aLdZOcwVofwuYgWDLLCRdxMvMw0r9GC2Hgc7kopf8OnOClQ5ESoYJg1X847XLLd+PE49w*BciCj+RFy+ygQGxLrru7kl6eodbM996zvva+B12Yo8pYrPvcOLdXylkY41lu2tVCj+b1BirytmLLEwZfyR*AVeddK+n*yXk9Sx49OJfYH+eF4FlF11Vecr0xFY0V1Z7k9cGs9r6ZVJn0N37WVkqDsWSkXeHOYuGN+bBqchxeL61rX*MvQOtONMszC9eETH7Ka*I7y0C7ttS*CZDDDMZcE9v44m6ebpsGSxVm7KpyI1cUKFltK0lObY7M3sFvYqrI3bbYMm9okmQvxclPgPa86WnDgY3ecPNwjSlHjRGDE3*qAoARTRiDDZXHfE7U+gNHLFoUEsXt6AR6Uj*RpMDz0wr3Ya5uWehqs1*ozO650ye2dsX3M8mI4pvQB9EFFyhBRiqIppqwkjYcohQmiYPT3vVJd0ATlJUMzHIEREERxyEkiL3Gq*Bf9djlBRmFVfSsQA30QkzL3EBjFMKOoD+5*6IbAGZo11DVdkyxprGqGYlljiRvymmBJ4w4CEoZDXMGCgREAXUwRQZTiIvHKqEt4VXSpyF*hdjhHlMG8AiNekWVOlYYKf+v*MV5OMCVFkiaGxk1M3jCGqmoZhmVYvCZZ5p*i*acPCnRlr33RVVPlxT6IMaHML+oqK2H03jUfX2EYlnXBtk0RGt0CETDiP7cRY7hIaJeDuoAkPOEXZHQRv0X4ISFEUARGjNToYywar+AbRVUXY3MFOvrO0H+yOOJ*ksjsfkwaioImKwKniJIgdQe7*dsHYGcvQgzijIIRMBxoKwdnai3cOA1L29atRDcSHXwG9N56r9LeZES4ZuIpmmxYVs+aWGcvIZHtvKWTx*NBDSbHBd87z9HVe*iJETAC57mKa1N5iS4L9TTkw0pwHpv1DPpyeKVMnBiVvA1rUz1d0FleZ8eTvDWz+UoNdlWuZcXZfZk3h2nvtDemdYRRc90PZqb+0HmL0AsO0Y*OvL1ZmokfoGSZ1tXksSerfjLJ6A4dZdflFXdbN27lL4kx5*eD9Op4rmRMcjmKD+vWL9LZY+xgztuJsJV2sl+66jgd669D4T6UsrfLAL+1K76*xhjdZ2sBuwL+oibvvJ2yuFv*h1*fhvQvBt3YP0KNHiPpaeMHxwCHxWUeiG7vVFFl*HgQVvZ1v4vishHpDtw6jVcZZHFJ8u4qKiJS3p2Tsu6U6hRx+Rtnhu4543Uy6wLOIGX6p*p*0lKy+npqRcpqCumpk60t6XndSbnRq2rLIHvvJqB3j8k34PYvUEsBAhQDFAAACAgAWZiSW9Sz3M*BBAAAyQgAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAA6QQAAAAA',
  
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
