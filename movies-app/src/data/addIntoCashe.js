//function to save data into cache memory
const addIntoCashe = (cacheName, url, response) => {
  const data = new Response(JSON.stringify(response));

  if ("caches" in window) {
    caches.open(cacheName).then((cache) => {
      cache.put(url, data);
    });
  }
};

export default addIntoCashe;
