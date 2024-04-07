const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage ='# !ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk @everyone (اعدائي)';
const intervalMilliseconds = 1000;

const tokens = [
    process.env.token
];
const channelIds = [
    '1215412385486082068'
];

async function sendMessages() {
    const promises = [];
    for (const token of tokens) {
        for (const channelId of channelIds) {
            promises.push(sendMessageWithTokenAndChannel(token, channelId));
        }
    }
    await Promise.all(promises);
}

async function sendMessageWithTokenAndChannel(token, channelId) {
    const headers = { authorization: token };
    const data = { content: reminderMessage };

    try {
        await axios.post(`https://discord.com/api/v8/channels/${channelId}/messages`, data, { headers });
    } catch (error) {
        console.error(`Error sending message to channel ${channelId} with token ${token}: ${error}`);
    }
}

function startSendingMessages() {
    setInterval(() => {
        sendMessages();
    }, intervalMilliseconds);
}

startSendingMessages();
