OLOWSHARE — PRODUCTION HOSTING EXPORT
=====================================

This folder is fully self-contained and ready to upload to any web host
(cPanel / shared hosting, Netlify, Vercel, GitHub Pages, S3, Nginx/Apache, etc.).

The site is a single-page experience: index.html has all CSS and JS inlined,
so it renders correctly even if opened on its own. The two legal pages share
css/styles.css and js/main.js.

HOW TO DEPLOY
-------------
1. Open this "hosting" folder.
2. Select ALL files and folders inside it.
3. Upload them to your web root (e.g. public_html, www, or the site root).
4. Done — visit your domain and index.html loads automatically.

No build step. No dependencies. Just static files — zip the folder, upload, done.

FOLDER STRUCTURE
----------------
hosting/
  index.html                 The whole site (one page; CSS + JS inlined)
  privacy-policy.html        Privacy Policy
  terms-of-service.html      Terms of Service
  css/styles.css             Styles for the legal pages
  js/main.js                 Interactivity for the legal pages
  assets/
    fonts/inter-*.woff2      Self-hosted Inter font (no Google Fonts needed)
    site.webmanifest         PWA manifest
  public/                    All site media (every image/icon lives here)
    herosection/             herosection1/2/3.png — the rotating hero banner slides
    how-it-works/            Walkthrough screenshots, by flow:
      send-files/            "Send Files" walkthrough (7 images)
      receiver/              "Receiver" walkthrough (12 images)
      webshare-wifi/         "WebShare — WiFi Mode" walkthrough (9 images)
      webshare-hotspot/      "WebShare — Hotspot Mode" walkthrough (11 images)
    features/                Screenshots embedded in the Features bento cards
    icons/
      logo.png               Brand logo (nav, footer, favicon, apple-touch-icon)
      logo.svg               Brand logo (vector)
      favicon.svg            Site favicon (legal pages + PWA)
    images/
      screens/               Real app screenshots in the "look inside" gallery (5 images)
      og-cover.svg           Social-share / Open Graph cover image

EVERY referenced file is inside this folder — nothing is loaded from outside the
project. Verified: all 53 asset references resolve, all paths are case-exact
(safe on case-sensitive Linux hosting), no missing files, no broken images.

REPLACE BEFORE LAUNCH (find & replace in index.html)
----------------------------------------------------
  https://play.google.com/store/apps/details?id=your.app.id  -> your real Play Store URL
  https://yourdomain.com/                                    -> your domain (canonical + OG)
  support@olow.io / hello@olow.io / privacy@olow.io / legal@olow.io -> your email addresses
  App version / size / "Requires" in the Download section    -> real release info
  Statistics (data-target values)                            -> real numbers

NOTE: The contact form shows a success message client-side only. Connect
#contact-form in the inlined script to a backend or form service (Formspree,
Basin, etc.) to actually receive submissions.

DOWNLOAD: Android only — every download button points to Google Play.
