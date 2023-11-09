import { migrate } from 'drizzle-orm/better-sqlite3/migrator'

export default defineNitroPlugin(async () => {
  if (process.dev) {
    migrate(useDB(), { migrationsFolder: 'server/db/migrations' })
  }
})