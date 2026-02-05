#!/bin/bash
# Deploy to Netlify (different limits than Vercel)

echo "🚀 Deploying to Netlify..."

# Deploy command
netlify deploy --dir=. --prod 2>&1 | head -30
