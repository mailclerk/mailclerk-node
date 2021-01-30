const fetch = require("node-fetch");

const DEFAULT_API_URL = "https://api.mailclerk.app";
const VERSION = require("../package.json").version;
const VERSION_LABEL = "Mailclerk Node " + VERSION;

class MailclerkError extends Error {}

const checkStatus = (response, json) => {
  if (response.ok) {
    return response;
  } else {
    let message = "HTTP Error " + response.status;
    if (json.message) {
      message += " " + json.message;
    }
    throw new MailclerkError(message);
  }
};

function Mailclerk(apiKey, apiURL) {
  if (!(this instanceof Mailclerk)) {
    return new Mailclerk(apiKey, apiURL);
  }

  apiKey = apiKey || process.env.MAILCLERK_API_KEY;
  apiURL = apiURL || process.env.MAILCLERK_API_URL || DEFAULT_API_URL;

  if (!apiKey) {
    throw new MailclerkError(
      "No Mailclerk API Key provided. Pass as first argument"
    );
  }

  if (!apiURL) {
    throw new MailclerkError("Mailclerk API URL empty");
  }

  this.deliver = (template, recipient, data = {}, options = {}) => {
    const url = apiURL + "/deliver";

    const token = Buffer.from(apiKey + ":").toString("base64");

    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        template: template,
        recipient: recipient,
        data: data,
        options: options,
      }),
      headers: {
        "X-Client-Version": VERSION_LABEL,
        "Content-Type": "application/json",
        Authorization: "Basic " + token,
      },
    }).then((response) => {
      return response.json().then((json) => {
        // Will raise a Mailclerk error for 4xx/5xx errors
        checkStatus(response, json);
        return json;
      });
    });
  };

  this.MailclerkError = MailclerkError;
}

module.exports = Mailclerk;
