const Database = require('./config')

const initDb = {
  init: async () => {
    const db = await Database()

    await db.exec(
      `CREATE TABLE rooms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pass TEXT
      )`
    )

    await db.exec(
      `CREATE TABLE questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        read INT,
        room.location.replace('/room/<%= roomId %>') INT
      )`
    )

    await db.close()
  }
}

initDb.init()
