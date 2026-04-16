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
| `LIVEKIT_API_KEY` | APIS5NtuNZ6Jm8L |
| `LIVEKIT_API_SECRET` | fgLe46fsfe1vWK9EdOp46ZIcGyJEx63Oee9xZ8nyEnfb |
| `LIVEKIT_URL` | wss://chatterbox-62tuqlm7.livekit.cloud |

4. Click Deploy → done!

## Step 3 — Share the link

Vercel gives you a URL like `https://chatterbox-xxx.vercel.app` — send it to your friends.

---

Note: Remember to regenerate your LiveKit secret key since it was shared in chat.
Go to LiveKit Dashboard → Settings → Keys → delete + recreate, then update the Vercel env var.
