import { createAdminClient } from '@/lib/supabase-admin'
import LeadsTable from './LeadsTable'

export const dynamic = 'force-dynamic'

export default async function LeadsPage() {
  let leads: any[] = []
  let dbError = false

  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    leads = data ?? []
  } catch {
    dbError = true
  }

  const stats = {
    total: leads.length,
    newCount: leads.filter((l) => l.status === 'new').length,
    quoted: leads.filter((l) => l.status === 'quoted').length,
    booked: leads.filter((l) => l.status === 'booked').length,
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-apple-blue flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C10 2 4 6 4 11C4 14.314 6.686 17 10 17C13.314 17 16 14.314 16 11C16 6 10 2 10 2Z" fill="white" />
                <circle cx="10" cy="11" r="2.5" fill="#0071E3" />
              </svg>
            </div>
            <div>
              <h1 className="text-[20px] font-bold text-white leading-tight">Lead Inbox</h1>
              <p className="text-zinc-500 text-[12px]">GrowBridge Plumbing — contact form submissions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-zinc-500 hover:text-white text-[13px] transition-colors">← Back to site</a>
            <form action="/api/admin/logout" method="POST">
              <button className="text-zinc-500 hover:text-red-400 text-[13px] transition-colors">Sign out</button>
            </form>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total leads', value: stats.total, color: 'text-white' },
            { label: 'New', value: stats.newCount, color: 'text-blue-400' },
            { label: 'Quoted', value: stats.quoted, color: 'text-purple-400' },
            { label: 'Booked', value: stats.booked, color: 'text-green-400' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <p className={`text-3xl font-black ${color} mb-1`}>{value}</p>
              <p className="text-zinc-500 text-[13px]">{label}</p>
            </div>
          ))}
        </div>

        {/* DB error banner */}
        {dbError && (
          <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-5 mb-6">
            <p className="text-red-400 font-semibold text-[14px] mb-1">Database not connected</p>
            <p className="text-red-300/70 text-[13px]">
              Set <code className="bg-red-950/60 px-1.5 py-0.5 rounded text-red-300">NEXT_PUBLIC_SUPABASE_URL</code>,{' '}
              <code className="bg-red-950/60 px-1.5 py-0.5 rounded text-red-300">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, and{' '}
              <code className="bg-red-950/60 px-1.5 py-0.5 rounded text-red-300">SUPABASE_SERVICE_ROLE_KEY</code>{' '}
              in your environment variables, then run the SQL in <code className="bg-red-950/60 px-1.5 py-0.5 rounded text-red-300">supabase/leads.sql</code>.
            </p>
          </div>
        )}

        {/* Leads table */}
        <LeadsTable leads={leads} />
      </div>
    </div>
  )
}
