const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
🎐 ᴍʏꜱᴛɪᴄ 𝙏𝙄𝙆𝙐  🎀🌷

.✬↬ +917086810603


`;

    await sock.sendMessage(chatId, {
        contacts: { displayName: settings.botOwner, contacts: [{ vcard }] },
    });
}

module.exports = ownerCommand;
