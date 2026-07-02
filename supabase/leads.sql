-- Run this in your Supabase SQL Editor at supabase.com
-- Dashboard → SQL Editor → New query → paste this → Run

CREATE TABLE IF NOT EXISTS leads (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name        text NOT NULL,
  phone       text NOT NULL,
  email       text,
  service     text NOT NULL,
  urgency     text NOT NULL CHECK (urgency IN ('emergency', 'today', 'this_week', 'scheduling')),
  message     text,
  status      text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'booked', 'closed')),
  notes       text,
  ip          text,
  created_at  timestamptz DEFAULT now()
);

-- Index for fast ordering
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

-- Disable RLS so the service role can read/write freely
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;
