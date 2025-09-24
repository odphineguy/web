# Security Verification Steps

After deploying the Meal Saver Landing Page application, follow these steps to verify that the security measures have been properly implemented.

## 1. Security Headers Verification

Use these tools to check that all security headers are correctly configured:

### Security Headers Check

1. Visit [https://securityheaders.com](https://securityheaders.com)
2. Enter your website URL and click "Scan"
3. Verify that you receive an "A" or "A+" rating
4. Check that all the following headers are present and correctly configured:
   - Content-Security-Policy
   - X-Frame-Options
   - X-Content-Type-Options
   - Referrer-Policy
   - Permissions-Policy
   - Strict-Transport-Security

### Mozilla Observatory Check

1. Visit [https://observatory.mozilla.org](https://observatory.mozilla.org)
2. Enter your website URL and click "Scan"
3. Aim for a minimum score of 90/100
4. Review any recommendations for further improvements

## 2. 404 Response Verification

1. Visit a non-existent page on your website (e.g., `https://yourdomain.com/this-page-does-not-exist`)
2. Open your browser's developer tools (F12 or Ctrl+Shift+I)
3. Go to the Network tab
4. Refresh the page
5. Verify that the response status code is 404 (Not Found)
6. Confirm that the custom 404 page is displayed correctly

## 3. TLS Configuration Check

1. Visit [https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/)
2. Enter your website URL and click "Submit"
3. Verify that your site supports TLS 1.2 and TLS 1.3
4. Aim for an "A" or "A+" rating

## 4. Cache Control Headers Check

1. Open your browser's developer tools (F12 or Ctrl+Shift+I)
2. Go to the Network tab
3. Reload your website
4. Click on static assets (JS, CSS, images)
5. Check the Response Headers section for each asset
6. Verify that `Cache-Control` headers are set correctly with appropriate max-age values

## 5. Content Security Policy Test

1. Open your browser's developer tools (F12 or Ctrl+Shift+I)
2. Go to the Console tab
3. Check for any CSP violation errors
4. If errors are found, review and adjust the CSP in the `_headers` file as needed

## Troubleshooting Common Issues

### CSP Blocking Legitimate Resources

If your CSP is blocking legitimate resources, you'll need to update it to allow those resources. Add the domain to the appropriate directive in the `_headers` file.

### Missing Cache-Control Headers

If cache-control headers are not being applied, check that:
1. The `_headers` file is correctly formatted
2. The file paths in the headers configuration match your actual file structure
3. The Vercel deployment has picked up the latest changes

### 404 Page Not Returning Correct Status Code

If your 404 page is not returning a 404 status code:
1. Check the Vercel configuration to ensure the catch-all route is properly configured
2. Verify that the NotFound component is being correctly rendered for undefined routes
