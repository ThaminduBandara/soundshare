const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST || '127.0.0.1',
  port: Number(process.env.PGPORT || 5432),
  user: process.env.PGUSER || 'thamindubandara',
  password: process.env.PGPASSWORD || undefined,
  database: process.env.PGDATABASE || 'soundshare',
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,
});

const initDatabase = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      name TEXT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      profile_picture TEXT,
      bio TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title TEXT,
      caption TEXT,
      creator TEXT,
      selected_m_file TEXT,
      selected_p_file TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
};

const toUser = (row) => ({
  _id: String(row.id),
  id: row.id,
  username: row.username,
  name: row.name || row.username,
  email: row.email,
  password: row.password,
  profilePicture: row.profile_picture,
  bio: row.bio,
});

const toPost = (row) => ({
  _id: String(row.id),
  id: row.id,
  title: row.title,
  caption: row.caption,
  creator: row.creator,
  selectedMFile: row.selected_m_file,
  selectedPFile: row.selected_p_file,
});

module.exports = { pool, initDatabase, toUser, toPost };