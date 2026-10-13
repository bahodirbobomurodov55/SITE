/* Dayloom offline shell. Only our own cache prefix is pruned. */
'use strict';
const CACHE='dayloom-v2-702cc8c27c';
const ASSETS=['./','./index.html','./manifest.json','./icon.svg','./icon-192.png','./icon-512.png','./maskable-512.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('dayloom-v2-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).then(response=>{
   if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put('./index.html',copy)));}
   return response;
  }).catch(async()=>await (await caches.open(CACHE)).match('./index.html')||new Response('Dayloom offline nusxasi topilmadi. Internet bilan bir marta oching.',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}})));
 }else{
  event.respondWith(caches.open(CACHE).then(cache=>cache.match(request)).then(cached=>cached||fetch(request).catch(()=>new Response('Offline',{status:503}))));
 }
});
