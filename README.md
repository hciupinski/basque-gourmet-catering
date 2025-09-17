# Basque Gourmet Catering

## Dev

npm install
npm run dev

## Build (for S3)

npm run build  # runs next build && next export → ./out

## Deploy

Merging to `main` triggers GitHub Actions to upload ./out to S3 and invalidate CloudFront.

## Notes for S3 hosting

- `next.config.js` uses `output: 'export'` and `images.unoptimized`. Avoid server-only features and dynamic routes that need SSR.
- Use `trailingSlash: true` to simplify S3 directory indexing.
- If you later need a backend, add API Gateway + Lambda + SES, and swap the Formspree URL in the contact page.
