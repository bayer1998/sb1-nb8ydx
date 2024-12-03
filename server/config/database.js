import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DB_PATH = join(__dirname, '../data/visitors.json');

// Ensure data directory exists
if (!fs.existsSync(join(__dirname, '../data'))) {
  fs.mkdirSync(join(__dirname, '../data'));
}

// Initialize empty database if it doesn't exist
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify({ visitors: [] }));
}

export function getVisitorCollection() {
  const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  return data.visitors;
}

export function saveVisitorCollection(visitors) {
  fs.writeFileSync(DB_PATH, JSON.stringify({ visitors }, null, 2));
}

export async function connectDB() {
  console.log('Local JSON database initialized');
  return getVisitorCollection();
}