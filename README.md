# Baby Panda – Rendes landing (újraindított, kész)

- Pinned 4 fix termék a `public/pinned.json` alapján.
- Dinamikus 4 termék Supabase `products` táblából.
- Kalkulátor beágyazva: `https://nevvarazs.babypanda.hu`
- Social blokk: a zipekből kinyert valós linkek.
  - FB: https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  - IG: https://www.instagram.com/babypanda_hu/
  - TT: https://www.tiktok.com/@babypanda_hu?is_from_webapp=1&sender_device=pc
  - PIN: -
  - IN: -

## Környezet
`.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Futtatás
```
npm i
npm run dev
```