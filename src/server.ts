import express from "express"
import payload from "payload"

import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"

require("dotenv").config()
const app = express()

const swaggerDocument = YAML.load("./src/swagger.yaml")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get("/", (_, res) => {
  res.redirect("/admin")
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(process.env.PORT)
}

start()
