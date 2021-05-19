import pino from 'pino';

export const logger = pino({
  prettyPrint: {
    colorize: true,
    ignore: 'pid,hostname',
    translateTime: 'yyyy-mm-dd HH:MM:ss.l',
  },
});
