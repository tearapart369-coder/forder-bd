# FOrder BD

Lightweight F-commerce order + inventory + status tracker for Bangladeshi Facebook sellers.

## Supabase Auth + Database (Full)

1. Create free project at https://supabase.com
2. Enable Email provider in Authentication → Providers
3. Run this SQL:

```sql
create table products (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  name text not null,
  name_bn text,
  stock integer default 0,
  price numeric default 0,
  created_at timestamptz default now()
);

create table orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  customer_name text,
  phone text,
  product text,
  qty integer default 1,
  amount numeric default 0,
  status text default 'pending',
  note text,
  created_at timestamptz default now()
);

alter table products enable row level security;
alter table orders enable row level security;

create policy "Users manage own products" on products for all using (auth.uid() = user_id);
create policy "Users manage own orders" on orders for all using (auth.uid() = user_id);
```

4. Environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Features

- Full Supabase Auth (email + password signup/login)
- Real database with RLS
- Chat paste, inventory, status, bKash, courier
- Bangla + English

## Run

```bash
npm install
npm run dev
```

Register with any email. Data is private per user.
