import { Application, Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts"
import { getAllCharacters, getCharacter } from './controllers/characterController.ts'

const app = new Application();

app.static("/", "./public")

app.get('/', async (ctx: Context) => {
  await ctx.file('./public/index.html')
})

app
  .get('/characters', getAllCharacters)
  .get('/characters/:id', getCharacter)

app.start({ port: 3000 })