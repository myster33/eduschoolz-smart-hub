-- Fix function search path security warning
DROP FUNCTION IF EXISTS public.get_booked_slots();

CREATE OR REPLACE FUNCTION public.get_booked_slots()
RETURNS TABLE(booking_datetime timestamp with time zone)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
  SELECT public.demo_bookings.booking_datetime 
  FROM public.demo_bookings 
  WHERE public.demo_bookings.status != 'cancelled';
$$;