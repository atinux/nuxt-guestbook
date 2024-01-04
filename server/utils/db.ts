import { drizzle, LibSQLDatabase } from 'drizzle-orm/libsql'

export * as tables from '~/server/database/schema'

let _db: LibSQLDatabase | null = null

export const useDB = () => {
  if (!_db) {
    // d1 in production
    _db = drizzle(useDatabaseClient())
  }
  return _db
}

