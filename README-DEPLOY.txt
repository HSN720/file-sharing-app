OLOW — PRODUCTION HOSTING EXPORT
=================================

This folder is fully self-contained and ready to upload to any web host
(cPanel / shared hosting, Netlify, Vercel, GitHub Pages, S3, Nginx/Apache, etc.).

HOW TO DEPLOY
-------------
1. Open this "hosting" folder.
2. Select ALL files and folders inside it.
3. Upload them to your web root (e.g. public_html, www, or the site root).
4. Done — visit your domain and index.html loads automatically.

No build step. No dependencies. No external files required to function.
(The only outbound links are your app download URLs — see "REPLACE BEFORE LAUNCH".)

FOLDER STRUCTURE
----------------
hosting/
  index.html                 Home
  features.html              Features
  download.html              Download
  how-it-works.html          How It Works
  about.html                 About
  contact.html               Contact
  privacy-policy.html        Privacy Policy
  terms-of-service.html      Terms of Service
  css/styles.css             All styles (design system + components)
  js/main.js                 All interactivity (nav, reveal, counters, FAQ, form)
  assets/
    fonts/inter-*.woff2      Self-hosted Inter font (no Google Fonts needed)
    site.webmanifest         PWA manifest
  icons/
    favicon.svg              Site favicon / app icon
    logo.svg                 Brand logo (standalone asset)
  images/
    og-cover.svg             Social-share / Open Graph cover image

REPLACE BEFORE LAUNCH (find & replace across all .html files)
-------------------------------------------------------------
  https://play.google.com/store/apps/details?id=your.app.id   -> your real Play Store URL
  https://yourdomain.com/downloads/app-desktop.exe            -> your real installer URL
  https://yourdomain.com/                                     -> your domain (canonical + OG)
  support@olow.io / hello@olow.io / privacy@olow.io / legal@olow.io -> your email addresses
  App versions, sizes, dates in download.html                 -> real release info
  Statistics (data-target values) in index.html / about.html  -> real numbers

NOTE: The contact form (contact.html) shows a success message client-side.
Connect the #contact-form in js/main.js to your backend or a form service
(Formspree, Basin, etc.) to actually receive submissions.
