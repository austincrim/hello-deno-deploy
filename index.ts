import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();
const PORT = 1234;

router.get('/', (ctx) => {
    // const page = Deno.readFileSync('./public/index.html')
    ctx.response.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          display: grid;
          place-content: center;
          height: 100vh;
          width: 100vw;
          animation: pulse 3s ease-out infinite;
          transition: transform, color;
        }
    
        @keyframes pulse {
          0% {
            color: black;
            transform: scale(1)
          }
    
          50% {
            color: goldenrod;
            transform: scale(1.1)
          }
    
          100% {
            color: black;
            transform: scale(1)
          }
        }
    
      </style>
    </head>
    <body>
      <h1>Hello deno server!!!</h1>
    </body>
    </html>`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
console.log(`listening on port ${PORT}`);
