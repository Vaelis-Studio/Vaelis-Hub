# Showing the Vaelis icon on `.vs` project files

A `.vs` file is a ZIP archive with Vaelis's own extension. Which icon a file
shows is decided by your operating system from the extension, so a web app
can't change it directly. There are two ways to get the Vaelis icon:

## 1. Install Vaelis as an app (recommended, nothing to configure)

`manifest.webmanifest` declares a **file handler** for `.vs` with the
document-style Vaelis icon (`icons/vs-file-*.png`). When someone installs
Vaelis from Chrome or Edge ("Install app"), the browser registers the type
with the OS:

- `.vs` files get the Vaelis file icon (Windows, ChromeOS and Linux Chromium
  browsers; support elsewhere depends on the browser version).
- Double-clicking a `.vs` file, or "Open with → Vaelis", opens the editor
  with that project loaded. The file is opened as an unsaved session; use
  File → Save Project to write changes back out.

macOS and mobile browsers do not currently show web-app file icons; there the
file keeps a generic icon. That is an OS limitation, not something the app
can fix.

## 2. Manual association (optional, untested)

For machines where the app is not installed. Neither file below opens
Vaelis; they only set the icon and file type name.

- **Windows:** edit the path inside `vaelis-windows.reg`, double-click it,
  then restart Explorer. Uses `vaelis-project.ico`.
- **Linux (GNOME/KDE):** run `./install-linux.sh`. Registers the
  `application/x-vaelis-project` type and its icon.

I could not test these two on real Windows/Linux desktops here; treat them as
a starting point.
