addEventListener('fetch', (event) => {
    const response = new Response(
        `<!DOCTYPE html>
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
      <h1>Hello Deno Deploy 🦕!!!</h1>
    </body>
    </html>`,
        { headers: { 'content-type': 'text/html' } }
    );
    event.respondWith(response);
});
