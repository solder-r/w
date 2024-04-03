const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage = 'level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up level up <@&1225054167027028089> <@&1225054128179511357> <@&1225054205828403371> <@&1225054239877890148>';
const intervalMilliseconds = 5000;

const tokens = [
    process.env.token
];
const channelIds = [
    '1225052504278958143',
    '1225052536839471246',
    '1225052596734136430',
    '1225052637179674655',
    '1225052674823557181',
    '1225052707195457547',
    '1225052737092456590',
    '1225052770130989107',
    '1225052801411973150',
    '1225052831803768863'
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
