'use server'

import { createAdminClient } from '@/lib/supabase-admin'
import { revalidatePath } from 'next/cache'

export async function updateLeadStatus(id: string, status: string) {
  const supabase = createAdminClient()
  await supabase.from('leads').update({ status }).eq('id', id)
  revalidatePath('/admin/leads')
}

export async function updateLeadNotes(id: string, notes: string) {
  const supabase = createAdminClient()
  await supabase.from('leads').update({ notes }).eq('id', id)
  revalidatePath('/admin/leads')
}
