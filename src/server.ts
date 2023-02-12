import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'


const app = Fastify()
const prisma = new PrismaClient()
/**
 * Methods HTTP: Get (search), Post(create), Put(update), Patch(especific update), Delete
 */

app.register(cors)

app.get('/home', async () => {
  const habits = await prisma.habit.findMany()
  return habits
})

app.listen({
  port: 3333,
}).then(() => {
  console.log("Server Running")
})