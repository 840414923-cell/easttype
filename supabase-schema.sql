-- ============================================
-- EastType Training Camp Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Table: camp_enrollments
-- Tracks user enrollment in a camp
-- ============================================
CREATE TABLE IF NOT EXISTS camp_enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  camp_slug TEXT NOT NULL DEFAULT 'energy-recovery',
  body_type TEXT NOT NULL,
  start_date DATE,
  status TEXT DEFAULT 'prep' CHECK (status IN ('prep', 'active', 'completed', 'cancelled')),
  current_day INT DEFAULT 0,
  plan_type TEXT DEFAULT 'with_quiz' CHECK (plan_type IN ('with_quiz', 'without_quiz')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, camp_slug)
);

-- ============================================
-- Table: daily_checkins
-- Daily check-in records for camp participants
-- ============================================
CREATE TABLE IF NOT EXISTS daily_checkins (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  camp_slug TEXT NOT NULL DEFAULT 'energy-recovery',
  day_number INT NOT NULL CHECK (day_number >= 1 AND day_number <= 30),
  checkin_date DATE NOT NULL,
  breakfast BOOLEAN DEFAULT false,
  lunch BOOLEAN DEFAULT false,
  dinner BOOLEAN DEFAULT false,
  tea BOOLEAN DEFAULT false,
  lifestyle BOOLEAN DEFAULT false,
  journal TEXT,
  mood TEXT CHECK (mood IN ('great', 'good', 'okay', 'low', 'bad')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, camp_slug, day_number)
);

-- ============================================
-- Indexes for performance
-- ============================================
CREATE INDEX idx_enrollments_user ON camp_enrollments(user_id);
CREATE INDEX idx_enrollments_camp ON camp_enrollments(camp_slug);
CREATE INDEX idx_checkins_user_camp ON daily_checkins(user_id, camp_slug);
CREATE INDEX idx_checkins_day ON daily_checkins(day_number);

-- ============================================
-- Row Level Security (RLS)
-- Users can only access their own data
-- ============================================
ALTER TABLE camp_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_checkins ENABLE ROW LEVEL SECURITY;

-- Enrollment policies
CREATE POLICY "Users view own enrollments"
  ON camp_enrollments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own enrollments"
  ON camp_enrollments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own enrollments"
  ON camp_enrollments FOR UPDATE
  USING (auth.uid() = user_id);

-- Check-in policies
CREATE POLICY "Users view own checkins"
  ON daily_checkins FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own checkins"
  ON daily_checkins FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own checkins"
  ON daily_checkins FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- Auto-update updated_at timestamps
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_enrollment_time
  BEFORE UPDATE ON camp_enrollments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_checkin_time
  BEFORE UPDATE ON daily_checkins
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
