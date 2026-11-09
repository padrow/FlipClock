# Flip Clock app for iPhone

A home-screen app: split-flap clock with a live departures board. No ESP32 needed.

## Put it online (one time, free) with GitHub Pages

1. Create a free account at github.com.
2. Click **New repository**, name it `flipclock`, set it to **Public**, and create it.
3. Click **uploading an existing file**, drag in all the files from this folder, and click **Commit changes**.
4. Open **Settings → Pages**. Under "Branch" choose **main** and **/ (root)**, then click **Save**.
5. After a minute or two the app is live at `https://YOUR-USERNAME.github.io/flipclock/`.

Your AeroDataBox key is not in these files. You type it in the app, and it stays on your iPhone.

## Install it on the iPhone

1. Open the link in **Safari**.
2. Tap the **Share** button, then **Add to Home Screen**, then **Add**.
3. Open Flip Clock from the home screen. It runs full-screen, like an app.

## Using it

| Tap | Does |
|---|---|
| swipe left / right | go through the layouts: flip clock → clock & calendar → clock & weather |
| the date | theme: Auto / Dark / Light |
| the hours | next step: 12-hour → 24-hour → time only (24h) → time only (12h) → back. Time only = no date, seconds or flight |
| the seconds | hide them (the clock grows); tap the minutes to bring them back |
| the colon (landscape) | pulse on / steady |
| the flight board | settings: AeroDataBox key and airport |
| the month name (clock & calendar) or the city (clock & weather) | theme: Auto / Dark / Light |

- **Time:** the iPhone's own time and time zone.
- **Flights:** with a key, the app downloads the next 12 hours of flights for the nearest
  airport (or the one you set) about twice a day, roughly 65 calls a month. The board shows
  the flight scheduled closest to the current time. Without a key it shows random cities.
- **Weather:** from Open-Meteo (free, no key), for your location, with animated Meteocons icons; it updates every 15 minutes
  while that layout is showing.
- **Offline:** once opened, the app works without internet (the last saved flights are kept).
- **Screen on:** the app asks iOS to keep the screen awake after your first tap. If the screen
  still dims, set **Settings → Display & Brightness → Auto-Lock** to Never while it's on a stand.

## Updating the app later

Upload the changed files to the same GitHub repository. The app picks up the new version
the next time it opens with internet.

## Credits

- Weather icons: [Meteocons](https://github.com/basmilius/weather-icons) by Bas Milius, v2.0.0 (MIT License, see `wx/meteocons-LICENSE.txt`).
- Font: [Inter](https://github.com/rsms/inter) (SIL Open Font License, see `inter-LICENSE.txt`).
