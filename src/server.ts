import { createServer } from "http";

const server = createServer((req, res) => {
    res.end("Mundo")
})

server.listen(process.env.HTTP_PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.HTTP_PORT}`)
})