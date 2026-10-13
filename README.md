# FOrder BD

Lightweight F-commerce order + inventory + status tracker for Bangladeshi Facebook sellers.

## Features (MVP)

- Paste Messenger chat to create order (basic parsing)
- Inventory tracking (add products, stock, price)
- Order status tracking (Pending → Confirmed → Booked → Delivered)
- bKash payment reminder (copy message)
- Courier booking helper (copy details for Pathao / Steadfast / RedX)
- Bangla + English toggle
- Data persists in browser localStorage

## Multi-seller login

Not included in this MVP (coming next). Currently single-user local demo.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Connect this repo to Vercel and deploy.

## Next steps

- Real bKash / Nagad integration
- Pathao / Steadfast API
- Auth + multi-seller
- Better Bangla AI parsing of chats
