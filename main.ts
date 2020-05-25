import { serve } from "https://deno.land/std/http/server.ts"
import * as flags from "https://deno.land/std/flags/mod.ts"

const DEFAULT_PORT = 8050
const argPort = flags.parse(Deno.args).port
const port = argPort ? Number(argPort) : DEFAULT_PORT

if ( isNaN(port) ) {
  console.error("Port is not a number.")
  Deno.exit(1)
}

// Your code goes here
const body = "Hello Universe..."
const s = serve( { port: port, hostname: '0.0.0.0' } )
console.log("Server running on http://localhost:" + port)

for await (const req of s) {
  req.respond( { body } )
}
