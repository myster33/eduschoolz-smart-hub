
-- Create the demo_bookings table for storing demo booking requests
CREATE TABLE IF NOT EXISTS public.demo_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  school_name TEXT NOT NULL,
  position TEXT NOT NULL,
  phone_number TEXT,
  school_type TEXT NOT NULL,
  student_count TEXT NOT NULL,
  current_system TEXT,
  specific_needs TEXT[] DEFAULT '{}',
  preferred_contact_method TEXT NOT NULL,
  timeframe TEXT NOT NULL,
  additional_comments TEXT,
  preferred_demo_date TEXT NOT NULL,
  preferred_demo_time TEXT NOT NULL,
  demo_mode TEXT NOT NULL,
  school_address TEXT NOT NULL,
  booking_datetime TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to the table
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert demo booking requests (public form)
CREATE POLICY "Anyone can create demo bookings" 
  ON public.demo_bookings 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow anyone to read demo bookings (for slot availability checking)
CREATE POLICY "Anyone can view demo bookings" 
  ON public.demo_bookings 
  FOR SELECT 
  USING (true);

-- Create index on booking_datetime for efficient querying of time slots
CREATE INDEX IF NOT EXISTS idx_demo_bookings_datetime ON public.demo_bookings(booking_datetime);

-- Create index on status for efficient filtering
CREATE INDEX IF NOT EXISTS idx_demo_bookings_status ON public.demo_bookings(status);
