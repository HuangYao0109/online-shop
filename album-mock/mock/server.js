let Koa = require('koa');
let app = new Koa();


let Router = require('koa-router');
let router = new Router();


let mailData = require('./mail-data');

for (let key in mailData) {
    router.get(`/api/${key}`, async (ctx) => {
        ctx.body = mailData[key];
    });
}

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);