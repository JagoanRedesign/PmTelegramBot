const {Bot} = require('grammy');
const {run} = require('@grammyjs/runner');

const bot = new Bot(process.env.BOT_TOKEN);
const own_id = process.env.OWNER_ID;

bot.command('start', async ctx => {
    return await ctx.reply('Silahkan langsung chat aja kak');
});

bot.on('message', async ctx => {
    const from_id = ctx.msg.from.id;
    if (from_id == own_id){
        ;
    } else {
        const msg_id = ctx.msg.message_id;
        await ctx.api.forwardMessage(own_id, from_id, msg_id);
    }
    const reply_msg = ctx.update.message.reply_to_message
    const reply_msg_user_id = reply_msg.forward_from.id
    const own_msg = ctx.update.message.text
    if (reply_msg){
        await ctx.api.sendMessage(reply_msg_user_id, own_msg)
    }
})

run(bot);
