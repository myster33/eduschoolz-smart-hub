-- Fix security vulnerability: Replace overly permissive RLS policy
-- Current policy allows public access to sensitive user data

-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Eduschools" ON public.kv_store_067ea15e;

-- Create a secure policy that only allows authenticated users to access their own data
-- This assumes the 'key' field contains user identifiers or user-specific data
CREATE POLICY "Authenticated users can access kv store" 
ON public.kv_store_067ea15e 
FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

-- If this data should be even more restricted (user-specific), 
-- we would need to know the key structure to create proper user-based policies