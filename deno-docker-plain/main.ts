import { serve } from "https://deno.land/std@v0.51.0/http/server.ts";
const s = serve({ port: 8080 });
console.log('listening :8080')
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
