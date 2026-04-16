# Chatterbox — Deploy Guide

## Step 1 — Push to GitHub

1. Go to github.com → New repository → name it `chatterbox` → Create
2. Open Terminal and run:

```bash
cd chatterbox
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/chatterbox.git
git push -u origin main
```

## Step 2 — Deploy on Vercel

1. Go to vercel.com → sign in with GitHub → Add New Project
2. Import your `chatterbox` repo
3. Add these Environment Variables before deploying:

| Name | Value |
|------|-------|
| `LIVEKIT_API_KEY` | your LiveKit API key |
| `LIVEKIT_API_SECRET` | your LiveKit API secret |
| `LIVEKIT_URL` | wss://your-project.livekit.cloud |
| `SUPABASE_URL` | your Supabase project URL |
| `SUPABASE_ANON_KEY` | your Supabase anon key |

4. Click Deploy → done!

## Step 3 — Share the link

Vercel gives you a URL like `https://chatterbox-xxx.vercel.app` — send it to your friends.
