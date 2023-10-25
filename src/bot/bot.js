import { Telegraf } from "telegraf";
const TOKEN = "6905488873:AAFbwRsKUtTcTTHfAB5ljeMCUtAe2c51bDM";
const bot = new Telegraf(TOKEN);

const web_link = "https://cosinus.uz/";

bot.telegram.sendMessage(ctx.chat.id, { message_thread_id: topic });
