const axios = require("axios");
const config = require('config');

const obj = {
  subject: "Login Notification",
  heading: "User Logged In",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

let htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <body>
        <h1>${obj.heading}</h1>

        <p>${obj.description}</p>

        </body>
        </html>

`;

module.exports = function(req, res, next) {
  axios({
    method: "post",
    url: "https://api.sendgrid.com/v3/mail/send",
    headers: {
      Authorization:
        `Bearer ${config.get('sgApiKey')}`
    },
    data: {
      personalizations: [
        {
          to: [
            {
              email: "vikasgrowthfile@gmail.com",
              name: "Vikas"
            },
            {
              email: "svikas7529@gmail.com",
              name: "Vikas Kumar"
            }
          ],
          subject: `${obj.subject}`
        }
      ],
      from: {
        email: "svikas641@gmail.com",
        name: "Vikas Kumar"
      },
      content: [{ type: "text/html", value: htmlTemplate }]
    }
  });
  next();
};