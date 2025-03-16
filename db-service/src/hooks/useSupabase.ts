import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { SupabaseClient } from '@supabase/supabase-js'

export function useSupabase(): SupabaseClient {
  const [client] = useState(() => supabase)
  
  return client
} 