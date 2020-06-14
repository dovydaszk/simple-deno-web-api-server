import { Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts"


export const getAllCharacters = async (ctx: Context) => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()

  return ctx.json(data, 200)
}

export const getCharacter = async (ctx: Context) => {

  const { id  } = ctx.params

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await res.json()

  if(data) {
    return ctx.json(data, 200)
  }

  return ctx.string('could not find a character with a given id', 404)
}
