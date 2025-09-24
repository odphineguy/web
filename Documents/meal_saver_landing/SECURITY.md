# Security Configuration

This document outlines the security measures implemented in the Meal Saver Landing Page application.

## Security Headers

The following HTTP security headers have been implemented via the `public/_headers` file, which Vercel uses during deployment:

- **Content-Security-Policy**: Restricts which resources can be loaded, preventing XSS attacks.
  - `default-src 'self'`: Only allows resources from the same origin
  - Specific directives for scripts, styles, images, fonts, etc.
  
- **X-Frame-Options: DENY**: Prevents the site from being embedded in iframes, protecting against clickjacking attacks.

- **X-Content-Type-Options: nosniff**: Prevents browsers from MIME-sniffing a response away from the declared content type, reducing exposure to drive-by download attacks.

- **Referrer-Policy: no-referrer**: Ensures no referrer information is sent along with requests from the page.

- **Permissions-Policy**: Explicitly disables browser features like camera, microphone, and geolocation.

- **Strict-Transport-Security**: Enforces HTTPS connections with a long max-age, including subdomains, and is preload-ready.

## 404 Handling

- The application uses React Router's wildcard route to catch all undefined routes and render the NotFound component.
- The Vercel configuration has been updated to return proper 404 status codes for missing resources.

## Caching and TLS

- **Cache-Control** headers are set for static assets to improve performance and security.
- **TLS 1.2 and 1.3** are supported by Vercel by default.

## Verification

After deployment, verify these security measures using:
- [https://securityheaders.com](https://securityheaders.com)
- [https://observatory.mozilla.org](https://observatory.mozilla.org)

## Additional Notes

- The Content Security Policy is set to be fairly restrictive. If you need to load resources from other domains, you'll need to update the CSP accordingly.
- If you add features requiring additional permissions (like geolocation), update the Permissions-Policy header.
