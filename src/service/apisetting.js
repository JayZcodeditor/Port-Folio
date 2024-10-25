export const apiUrl = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL
  : import.meta.env.VITE_API_URL_PRODUCTION;