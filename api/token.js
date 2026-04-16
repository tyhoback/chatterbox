import { AccessToken } from 'livekit-server-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, room } = req.body;
  if (!username || !room) {
    return res.status(400).json({ error: 'username and room are required' });
  }

  const safeUsername = String(username).trim().slice(0, 32).replace(/[^a-zA-Z0-9_\- ]/g, '');
  const safeRoom     = String(room).trim().slice(0, 64).replace(/[^a-zA-Z0-9_\-]/g, '');

  if (!safeUsername || !safeRoom) {
    return res.status(400).json({ error: 'Invalid username or room name' });
  }

  const apiKey    = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  try {
    const at = new AccessToken(apiKey, apiSecret, {
      identity: safeUsername,
      ttl: '4h',
    });

    at.addGrant({
      roomJoin: true,
      room: safeRoom,
      canPublish: true,
      canSubscribe: true,
    });

    const token = await at.toJwt();

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ token, url: process.env.LIVEKIT_URL });
  } catch (err) {
    console.error('Token generation failed:', err);
    return res.status(500).json({ error: 'Failed to generate token' });
  }
}
