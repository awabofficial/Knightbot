const settings = require('../settings');
const fs = require('fs');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || 'WhatsApp Bot'}*  
   by ${settings.botOwner || 'Unknown Owner'}
   insta : @awabofficial
╚═══════════════════╝

*Available Commands:*

╔═══════════════════╗
🌐 *المطور*:
║ ➤ .help or .menu
║ ➤ .tts 
║ ➤ .sticker or .s
║ ➤ .owner
║ ➤ .joke
║ ➤ .quote
║ ➤ .fact
║ ➤ .weather 
║ ➤ .news
║ ➤ .meme
║ ➤ .simage
║ ➤ .attp 
║ ➤ .lyrics <song_title>
║ ➤ .8ball 
╚═══════════════════╝

╔═══════════════════╗
🛠️ *أوامر أدمن قروب*:
║ ➤ .ban @user
║ ➤ .promote 
║ ➤ .demote 
║ ➤ .mute 
║ ➤ .unmute
║ ➤ .delete or .del
║ ➤ .kick 
║ ➤ .warnings 
║ ➤ .warn 
║ ➤ .antilink
║ ➤ .clear
╚═══════════════════╝

╔═══════════════════╗
🎮 *ألعاب قروب*:
║ ➤ .tictactoe @user
║ ➤ .move 
║ ➤ .hangman
║ ➤ .guess
║ ➤ .trivia
║ ➤ .answer 
║ ➤ .dare
║ ➤ .truth
╚═══════════════════╝

╔═══════════════════╗
👥 *أوامر القروب*:
║ ➤ .tagall
║ ➤ .tag <message>
╚═══════════════════╝

╔═══════════════════╗
🎉 *مضحك*:
║ ➤ .compliment @user
║ ➤ .insult @user
╚═══════════════════╝

╔═══════════════════╗
🏆 *مزيد*:
║ ➤ .topmembers
╚═══════════════════╝

${channelLink ? `🔗 *وكالة البرجوازي للسفر و السياحة* 
https://chat.whatsapp.com/D62QihOxN1q2LhaKtDV6Xg` : 'No channel link available'}

@${settings.botName || 'KnightBot'} 2024 v${settings.version || '1.0.0'}
`;

    try {
        const imagePath = 'https://i.imgur.com/6flL3f2.jpeg';
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, { 
                image: imageBuffer, 
                caption: helpMessage 
            });
        } else {
            await sock.sendMessage(chatId, { text: helpMessage });
        }

    } catch (error) {
        await sock.sendMessage(chatId, { text: 'مشكلةةة😂.' });
    }
}

module.exports = helpCommand;
