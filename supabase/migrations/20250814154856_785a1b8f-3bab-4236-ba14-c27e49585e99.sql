
-- Create a table to store demo bookings
CREATE TABLE public.demo_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  school_name TEXT NOT NULL,
  position TEXT NOT NULL,
  phone_number TEXT,
  school_type TEXT NOT NULL,
  student_count TEXT NOT NULL,
  current_system TEXT,
  specific_needs TEXT[],
  preferred_contact_method TEXT NOT NULL,
  timeframe TEXT NOT NULL,
  additional_comments TEXT,
  preferred_demo_date TEXT NOT NULL,
  preferred_demo_time TEXT NOT NULL,
  demo_mode TEXT NOT NULL,
  school_address TEXT NOT NULL,
  booking_datetime TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index on booking_datetime for efficient querying of booked slots
CREATE INDEX idx_demo_bookings_datetime ON public.demo_bookings(booking_datetime);

-- Create an index on status for filtering
CREATE INDEX idx_demo_bookings_status ON public.demo_bookings(status);

-- Enable Row Level Security (though for demo bookings, we might want them publicly readable for checking availability)
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to view bookings (needed to check availability)
CREATE POLICY "Anyone can view demo bookings for availability" 
  ON public.demo_bookings 
  FOR SELECT 
  USING (true);

-- Policy to allow anyone to create demo bookings
CREATE POLICY "Anyone can create demo bookings" 
  ON public.demo_bookings 
  FOR INSERT 
  WITH CHECK (true);

-- Create a function to check if a time slot is available
CREATE OR REPLACE FUNCTION public.is_demo_slot_available(
  demo_date DATE,
  demo_time TIME
) RETURNS BOOLEAN
LANGUAGE sql
STABLE
AS $$
  SELECT NOT EXISTS (
    SELECT 1 
    FROM public.demo_bookings 
    WHERE DATE(booking_datetime) = demo_date 
    AND TIME(booking_datetime) = demo_time 
    AND status != 'cancelled'
  );
$$;
