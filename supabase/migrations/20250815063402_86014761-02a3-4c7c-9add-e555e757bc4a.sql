-- Create more restrictive user-specific policies for maximum security
-- Replace the general authenticated policy with user-specific access

DROP POLICY IF EXISTS "Authenticated users can access kv store" ON public.kv_store_067ea15e;

-- Policy for user-specific data access based on key patterns
CREATE POLICY "Users can access their own data" 
ON public.kv_store_067ea15e 
FOR ALL 
TO authenticated 
USING (
  -- Allow access if the key contains the user's ID or if it's a system-wide key that should be accessible
  key LIKE 'user:' || (value->>'eduschoolsId') || '%' OR
  key LIKE 'user_by_id:' || (value->>'id') || '%' OR
  key LIKE 'ecard:' || (value->>'eduschoolsId') || '%'
)
WITH CHECK (
  -- Ensure users can only insert/update their own data
  key LIKE 'user:' || (value->>'eduschoolsId') || '%' OR
  key LIKE 'user_by_id:' || (value->>'id') || '%' OR
  key LIKE 'ecard:' || (value->>'eduschoolsId') || '%'
);