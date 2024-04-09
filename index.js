const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage ='# !ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk @everyone (اعدائي)';
const intervalMilliseconds = 2500;

const tokens = [
    process.env.token
];
const channelIds = [
    '1226624420810850416',
    '1226947502914404392',
    '1227170308709154826',
    '1222003205483921468'
    
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
