# Offline PWA support

The Vaelis client precaches the editor, player, runtime, vendor files, and
local assets listed in `/offline-manifest.json` during service-worker
installation. The Android build API is not part of the offline cache because
it is only needed while creating an APK.

1. Serve the client over HTTP(S) and open `/index.html` once while connected.
2. Wait for the first page to finish loading so the service worker can finish
   its precache.
3. Install the PWA from the browser. The editor, player, and local engine can
   then be relaunched without a network connection.

The service worker also handles the `/editor`, `/play`, and `/player` aliases
while offline, preserving the canonical document URL so relative ES-module
imports continue to work. Android APK creation still requires the configured
external API server.