const { IntentsBitField, OAuth2Scopes } = require("discord.js");

module.exports = {
  minecraft: {
    host: 'localhost', // minecraft server ip
    username: 'email@example.com', // minecraft username
    auth: 'microsoft' // for offline mode servers, you can set this to 'offline'
    // port: 25565,                // only set if you need a port that isn't 25565
    // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    // password: '12345678'        // set if you want to use password-based auth (may be unreliable)
  },
  bot: {
    token: "", // Enter Bot Token
    appId: "", // Enter Application Id
    guildId: "", // Enter Guild Id if handlerMode Set as "Guild"
    ownerId: "", // Enter Owner discord id
    handlerMode: "Global", // If you want bot work at all guilds set as "Global". If you want only work in single guild set as "Guild"
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildBans,
      IntentsBitField.Flags.GuildEmojisAndStickers,
      IntentsBitField.Flags.GuildIntegrations,
      IntentsBitField.Flags.GuildWebhooks,
      IntentsBitField.Flags.GuildVoiceStates,
      IntentsBitField.Flags.GuildPresences,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.DirectMessages,
      IntentsBitField.Flags.MessageContent,
    ],
    scopes: [OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands],
  },

  colors: {
    // Embed Colors / Embed için renkler
    red: "#B11C25",
    green: "#1bed0c",
    orange: "#e69138",
    blue: "#0f7ccf",
    gray: "#999999",
    white: "#ffffff",
  },
};
