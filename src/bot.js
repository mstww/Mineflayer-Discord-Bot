const { mineflayer: mineflayerViewer } = require("prismarine-viewer");
const mineflayer = require("mineflayer");
const inventoryViewer = require("mineflayer-web-inventory");
const { pathfinder, Movements, goals } = require("mineflayer-pathfinder");
const { GoalNear } = goals;
const config = require("../config");

const bot = mineflayer.createBot(config.minecraft);
bot.loadPlugin(pathfinder);
inventoryViewer(bot);
bot.on("chat", (username, message) => {
  if (username === bot.username) return;
  console.log(username);
  bot.chat(message);
});

bot.once("spawn", () => {
  const defaultMove = new Movements(bot);
  mineflayerViewer(bot, { port: 3001, firstPerson: false });
  bot.on("chat", function (username, message) {
    if (username === bot.username) return;

    const target = bot.players[username] ? bot.players[username].entity : null;
    if (message === "come") {
      if (!target) {
        bot.chat("I don't see you !");
        return;
      }
      const p = target.position;

      bot.pathfinder.setMovements(defaultMove);
      bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1));
    }
  });
});
function lookAtNearestPlayer() {
  const playerFilter = (entity) => entity.type === "player";
  const playerEntity = bot.nearestEntity(playerFilter);

  if (!playerEntity) return;

  const pos = playerEntity.position.offset(0, playerEntity.height, 0);
  bot.lookAt(pos);
}
bot.on("death", () =>
  console.log(`${bot.username} has died and was respawned`)
);
bot.on("physicTick", lookAtNearestPlayer);
// Log errors and kick reasons:
bot.on("kicked", console.log);
bot.on("error", console.log);
