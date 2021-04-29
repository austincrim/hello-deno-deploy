import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();
const PORT = 1234;

router.get('/', (ctx) => {
    const page = Deno.readFileSync('./public/index.html')
    ctx.response.body = page
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
console.log(`listening on port ${PORT}`)
