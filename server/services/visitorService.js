import { getVisitorCollection, saveVisitorCollection } from '../config/database.js';

export async function getVisitorCount() {
  const visitors = getVisitorCollection();
  const total = visitors.length;
  const today = visitors.filter(v => 
    new Date(v.timestamp).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
  ).length;
  const unique = new Set(visitors.map(v => v.sessionId)).size;
  return { total, today, unique };
}

export async function saveVisitor(visitorData, ip) {
  const visitors = getVisitorCollection();
  const newVisitor = {
    ...visitorData,
    ip,
    timestamp: new Date().toISOString()
  };
  visitors.push(newVisitor);
  saveVisitorCollection(visitors);
  return newVisitor;
}