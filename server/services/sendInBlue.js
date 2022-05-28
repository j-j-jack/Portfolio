// you must create an account at https://www.sendinblue.com/ 
// create an api key and store it in a .env file to use this feature
module.exports = async (senderName, senderEmail, subject, body) => {
  var SibApiV3Sdk = require('sib-api-v3-sdk');
  SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SIB_API_KEY;

  const emailBuilder = new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
    {
      'subject': 'You were contacted from your portfolio',
      'sender' : {'email':'api@sendinblue.com', 'name':'Sendinblue'},
      'replyTo' : {'email':senderEmail, 'name': senderName},
      'to' : [{'name': 'Jack O\'Sullivan', 'email':'jackosullivan541@gmail.com'}],
      'htmlContent' : 
          `<html>
              <body>
                  <h1>{{ params.subject }}</h1>
                  <p>{{ params.body}}</p>
                  <p>This message was sent from your portfolio by {{params.senderName}}</p>
                  <p>Contactable at: {{params.senderEmail}}</p>
              </body>
          </html>`,
      'params' : {
          'senderName': senderName,
          'senderEmail': senderEmail,
          'subject': subject,
          'body': body
      }
    }
  ).then(function(data) {
    return(data);
  }, function(error) {
    return(error);
  });
  return emailBuilder;
};
