const accountSid = "ACee6d500ea46713a48853745714ad6dd2";
const authToken = "8db74b91e02569ed69a13143d53f3a88";
const client = require("twilio")(accountSid, authToken);

exports.sendSMS = (req, res) => {
  console.log("req.body ", req.body);
  const { phone, message } = req.body;
  from = "+12028974084";
  client.messages
    .create({ body: message, from: from, to: phone })
    .then(message => {
      console.log(message + "sent");
      res.status(200).send(message);
    })
    .catch(err => res.status(400).send(err));
};
