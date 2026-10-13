# FOrder BD

Lightweight F-commerce order + inventory + status tracker for Bangladeshi Facebook sellers.

## Supabase Database Setup

1. Create a free project at https://supabase.com
2. Go to SQL Editor and run the table creation SQL from the local README or below.
3. Copy Project URL and anon key into environment variables.

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXTAUTH_SECRET=your-long-random-secret
NEXTAUTH_URL=http://localhost:3000
```

## Demo Login
- Username: `demo`
- Password: `demo123`

## Features

- Real auth (NextAuth)
- Supabase database for products & orders (per seller)
- Chat paste order entry
- Inventory + status tracking
- bKash reminder + courier helper
- Bangla + English

## Run

```bash
npm install
npm run dev
```

Data is stored in Supabase. Create the tables first.
