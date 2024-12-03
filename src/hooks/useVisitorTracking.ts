import { useState, useEffect } from 'react';
import { UAParser } from 'ua-parser-js';
import { io } from 'socket.io-client';
import type { VisitorCount } from '../types/visitor';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';

export const useVisitorTracking = () => {
  const [visitorCount, setVisitorCount] = useState<VisitorCount>({
    total: 0,
    unique: 0,
    today: 0
  });
  const [sessionId] = useState(() => crypto.randomUUID());

  useEffect(() => {
    const socket = io(SOCKET_URL);
    const parser = new UAParser();
    const result = parser.getResult();

    const visitorData = {
      sessionId,
      userAgent: {
        browser: `${result.browser.name} ${result.browser.version}`,
        os: `${result.os.name} ${result.os.version}`,
        device: result.device.type || 'desktop'
      },
      timestamp: Date.now()
    };

    socket.on('connect', () => {
      socket.emit('newVisitor', visitorData);
    });

    socket.on('visitorCount', (counts: VisitorCount) => {
      setVisitorCount(counts);
    });

    return () => {
      socket.disconnect();
    };
  }, [sessionId]);

  return { visitorCount };
};