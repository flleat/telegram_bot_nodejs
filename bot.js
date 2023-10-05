import TelegramBot from 'node-telegram-bot-api';
import { db_data as data } from './db_data.js';


const timeoutToDelete = 1000;
const bot = new TelegramBot("6629165134:AAFQjmVDOjN2sZ3V3Nu_bX9yoG-qGEK32xg", { polling: true });


bot.onText(/\hello/, msg => {
    bot.sendMessage(msg.chat.id, 'hello', { reply_to_message_id: msg.message_id });
});

bot.onText(/\everyone/, msg => {
    const users = data['all_members'].map(el => el['tg_username'] ?? '');
    bot.sendMessage(msg.chat.id, users.join(' ')).then((msg) => {
        deleteMessage(msg, timeoutToDelete);
    });
});

function deleteMessage(msg, delay) {
    setTimeout(() => {
        bot.deleteMessage(msg.chat.id, msg.message_id);
    }, delay);
}