// <reference path="https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js" />

"use strict";

self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.routing.setDefaultHandler(
    new workbox.strategies.StaleWhileRevalidate()
  );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}