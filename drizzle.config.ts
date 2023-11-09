import type { Config } from 'drizzle-kit'
 
export default {
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  breakpoints: true,
} satisfies Config