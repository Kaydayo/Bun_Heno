import { Hono } from "hono";
import { serveStatic } from 'hono/serve-static.bun';
import {bearerAuth} from 'hono/bearer-auth'

const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));

const home = app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});



app.use('/auth/*', bearerAuth({ token: Bun.env.secretKey }))

app.get('/auth/page', (c) => {
  return c.text('authenticated')
})

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch
};
