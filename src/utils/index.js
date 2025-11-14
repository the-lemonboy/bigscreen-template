export function getCurrentFormattedTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export const logger = {
  info(...args) {
    if (import.meta.env.DEV) {
      console.info('[INFO]', getCurrentFormattedTime(), ...args)
    }
  },
  warn(...args) {
    if (import.meta.env.DEV) {
      console.warn('[WARN]', getCurrentFormattedTime(), ...args)
    }
  },
  error(...args) {
    console.error('[ERROR]', getCurrentFormattedTime(), ...args)
  },
}
