import type { LibSQLDatabase } from 'drizzle-orm/libsql'
import { migrate } from 'drizzle-orm/libsql/migrator'

export default defineNitroPlugin(async () => {
  if (process.dev) {
    migrate(useDB() as LibSQLDatabase, { migrationsFolder: 'server/database/migrations' })
  }
})