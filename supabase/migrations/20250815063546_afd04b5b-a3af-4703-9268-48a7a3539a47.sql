-- Fix security vulnerability: Remove public access to sensitive customer data
-- Keep slot availability checking while protecting customer information

-- Remove the overly permissive SELECT policy
DROP POLICY IF EXISTS "Anyone can view demo bookings" ON public.demo_bookings;

-- Create a secure function for checking slot availability (public use)
-- This only returns booking times without sensitive customer data
CREATE OR REPLACE FUNCTION public.get_booked_slots()
RETURNS TABLE(booking_datetime timestamp with time zone)
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT demo_bookings.booking_datetime 
  FROM public.demo_bookings 
  WHERE status != 'cancelled';
$$;

-- Create admin-only policy for full access to demo bookings
-- This requires implementing an admin role system
CREATE POLICY "Admins can view all demo bookings" 
ON public.demo_bookings 
FOR SELECT 
TO authenticated 
USING (
  -- For now, restrict to authenticated users only
  -- TODO: Replace with proper admin role check when user roles are implemented
  auth.role() = 'authenticated'
);

-- Grant execute permission on the slot checking function to anonymous users
GRANT EXECUTE ON FUNCTION public.get_booked_slots() TO anon;
GRANT EXECUTE ON FUNCTION public.get_booked_slots() TO authenticated;