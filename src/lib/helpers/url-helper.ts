export const href = (path: string = ''): string => {
  const base = import.meta.env.VITE_PUBLIC_BASE_URL ?? '';
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
};
