# Security Checklist for sixnathan.com

## Part 1: Checks for Claude Code (paste results back here)

Run these commands in Claude Code or your terminal and paste the output back into this chat.

### 1.1 HTTP Security Headers

```bash
curl -sI https://sixnathan.com | grep -iE "^(strict-transport|x-frame|x-content-type|content-security|referrer-policy|permissions-policy|x-xss|cross-origin)" || echo "No security headers found"
```

### 1.2 Full Response Headers (for analysis)

```bash
curl -sI https://sixnathan.com
```

### 1.3 SSL/TLS Configuration

```bash
# Check TLS version and cipher
curl -sI https://sixnathan.com -w "TLS: %{ssl_version}\nCipher: %{ssl_cipher}\n" -o /dev/null
```

### 1.4 Check for Mixed Content / HTTP Redirects

```bash
# Should redirect HTTP to HTTPS
curl -sI http://sixnathan.com | head -5
```

### 1.5 DNS Security (DNSSEC)

```bash
dig +short sixnathan.com DS
dig +dnssec sixnathan.com | grep -E "(RRSIG|flags)"
```

### 1.6 Check robots.txt and security.txt

```bash
curl -s https://sixnathan.com/robots.txt
curl -s https://sixnathan.com/.well-known/security.txt
```

### 1.7 Check for Sensitive File Exposure

```bash
# These should all return 404
curl -sI https://sixnathan.com/.git/config | head -1
curl -sI https://sixnathan.com/.env | head -1
curl -sI https://sixnathan.com/wp-config.php | head -1
curl -sI https://sixnathan.com/.htaccess | head -1
```

### 1.8 Cookie Security (if any cookies are set)

```bash
curl -sI https://sixnathan.com | grep -i "set-cookie"
```

---

## Part 2: Manual Checks (do these in your browser)

### 2.1 External Scanners

Visit these URLs and paste/screenshot the results:

| Tool | URL | What to Look For |
|------|-----|------------------|
| Security Headers | https://securityheaders.com/?q=sixnathan.com | Grade A or higher |
| SSL Labs | https://www.ssllabs.com/ssltest/analyze.html?d=sixnathan.com | Grade A or higher |
| Mozilla Observatory | https://observatory.mozilla.org/analyze/sixnathan.com | Grade B+ or higher |
| PageSpeed (has security hints) | https://pagespeed.web.dev/analysis?url=https://sixnathan.com | Check for issues |

### 2.2 Cloudflare Dashboard Checks

Log into Cloudflare and verify these settings:

#### SSL/TLS Section
- [ ] SSL/TLS encryption mode: **Full (strict)**
- [ ] Edge Certificates → Always Use HTTPS: **Enabled**
- [ ] Edge Certificates → HSTS: **Enabled** (with max-age ≥ 31536000)
- [ ] Edge Certificates → Minimum TLS Version: **TLS 1.2**
- [ ] Edge Certificates → TLS 1.3: **Enabled**

#### Security Section
- [ ] Security Level: **Medium** or higher
- [ ] Bot Fight Mode: **Enabled**
- [ ] Browser Integrity Check: **Enabled**

#### Caching / Rules
- [ ] Check Transform Rules for response headers (or `_headers` file if using Pages)

### 2.3 Browser DevTools Check

1. Open https://sixnathan.com in Chrome/Firefox
2. Open DevTools (F12) → Network tab
3. Refresh the page
4. Click the main document request
5. Check the Response Headers section
6. Screenshot or copy the headers

Also check:
- Console tab for any CSP violations or mixed content warnings
- Security tab (Chrome) for certificate details

---

## Part 3: Recommended Fixes

### 3.1 Add Security Headers

If using **Cloudflare Pages**, create a `_headers` file in your output directory:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

If using **Cloudflare Transform Rules**:

1. Go to Rules → Transform Rules → Modify Response Header
2. Create a rule for each header with:
   - When: All incoming requests
   - Then: Set static header

### 3.2 Enable HSTS via Cloudflare

1. SSL/TLS → Edge Certificates → HTTP Strict Transport Security (HSTS)
2. Enable with:
   - Max Age: 12 months (31536000 seconds)
   - Include subdomains: Yes (if you control all subdomains)
   - Preload: Yes (only if committed to HTTPS permanently)
   - No-Sniff: Yes

### 3.3 Add security.txt

Create `/.well-known/security.txt`:

```
Contact: mailto:security@sixnathan.com
Expires: 2026-12-31T23:59:00.000Z
Preferred-Languages: en
```

---

## Summary Checklist

After completing all checks, you should have:

- [ ] All security headers present (X-Frame-Options, CSP, etc.)
- [ ] HSTS enabled with long max-age
- [ ] SSL Labs grade A or A+
- [ ] Security Headers grade A or A+
- [ ] HTTP redirects to HTTPS
- [ ] No sensitive files exposed
- [ ] TLS 1.2+ only
- [ ] Cloudflare security features enabled
