export const prerender = import.meta.url.includes('chrome-ext');

console.log({filename : import.meta.url, prerender});
 
export const load = (() => {
  return {
    magic: 42,
  };
});