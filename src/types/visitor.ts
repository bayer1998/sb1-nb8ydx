export interface Visitor {
  sessionId: string;
  userAgent: {
    browser: string;
    os: string;
    device: string;
  };
  timestamp: number;
  ip?: string;
}

export interface VisitorCount {
  total: number;
  unique: number;
  today: number;
}