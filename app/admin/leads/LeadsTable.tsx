'use client'

import { useState, useTransition } from 'react'
import { updateLeadStatus, updateLeadNotes } from './actions'
import { Phone, Mail, ChevronDown, ChevronUp, Send } from 'lucide-react'

type Lead = {
  id: string
  name: string
  phone: string
  email: string | null
  service: string
  urgency: string
  message: string | null
  status: string
  notes: string | null
  created_at: string
}

const STATUS_OPTIONS = [
  { value: 'new', label: 'New', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  { value: 'contacted', label: 'Contacted', color: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  { value: 'quoted', label: 'Quoted', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  { value: 'booked', label: 'Booked ✓', color: 'bg-green-500/15 text-green-400 border-green-500/30' },
  { value: 'closed', label: 'Closed', color: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30' },
]

const URGENCY_STYLES: Record<string, string> = {
  emergency: 'bg-red-500/15 text-red-400 border-red-500/30',
  today: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  this_week: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  scheduling: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30',
}

const URGENCY_LABELS: Record<string, string> = {
  emergency: '🚨 Emergency',
  today: '⚡ Today',
  this_week: '📅 This week',
  scheduling: '🗓 Planning',
}

function timeAgo(date: string) {
  const diff = Date.now() - new Date(date).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return `${days}d ago`
}

function buildQuoteEmailLink(lead: Lead): string {
  const subject = encodeURIComponent(`Your Plumbing Estimate — ${lead.service}`)
  const body = encodeURIComponent(
    `Hi ${lead.name},\n\nThank you for reaching out to GrowBridge Plumbing!\n\nBased on your request for ${lead.service}, here is our estimate:\n\nService: ${lead.service}\nEstimated Cost: $[PRICE]\nTimeline: [TIMELINE]\n\n[ADD ANY ADDITIONAL NOTES HERE]\n\nTo schedule, please call us at (555) 247-8629 or reply to this email.\n\nBest regards,\nGrowBridge Plumbing Team\n(555) 247-8629`
  )
  return `mailto:${lead.email || ''}?subject=${subject}&body=${body}`
}

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_OPTIONS.find((o) => o.value === status) ?? STATUS_OPTIONS[0]
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${s.color}`}>
      {s.label}
    </span>
  )
}

function LeadRow({ lead }: { lead: Lead }) {
  const [expanded, setExpanded] = useState(false)
  const [notes, setNotes] = useState(lead.notes ?? '')
  const [, startTransition] = useTransition()

  const handleStatusChange = (newStatus: string) => {
    startTransition(() => updateLeadStatus(lead.id, newStatus))
  }

  const handleNotesSave = () => {
    startTransition(() => updateLeadNotes(lead.id, notes))
  }

  return (
    <>
      <tr
        className="border-b border-zinc-800 hover:bg-zinc-800/50 cursor-pointer transition-colors"
        onClick={() => setExpanded((e) => !e)}
      >
        <td className="px-4 py-4">
          <div className="flex items-center gap-2 text-zinc-400 text-[12px]">
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {timeAgo(lead.created_at)}
          </div>
        </td>
        <td className="px-4 py-4">
          <p className="text-white font-semibold text-[14px]">{lead.name}</p>
          <a
            href={`tel:${lead.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="text-zinc-400 text-[12px] hover:text-apple-blue transition-colors flex items-center gap-1 mt-0.5"
          >
            <Phone size={11} /> {lead.phone}
          </a>
        </td>
        <td className="px-4 py-4">
          <p className="text-zinc-200 text-[13px]">{lead.service}</p>
        </td>
        <td className="px-4 py-4">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${URGENCY_STYLES[lead.urgency] ?? ''}`}>
            {URGENCY_LABELS[lead.urgency] ?? lead.urgency}
          </span>
        </td>
        <td className="px-4 py-4">
          <p className="text-zinc-400 text-[12px] max-w-[140px] truncate">{lead.message ?? '—'}</p>
        </td>
        <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
          <select
            value={lead.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 text-zinc-200 text-[12px] rounded-lg px-2 py-1.5 outline-none focus:border-apple-blue cursor-pointer"
          >
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </td>
        <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
          {lead.email ? (
            <a
              href={buildQuoteEmailLink(lead)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-apple-blue/15 hover:bg-apple-blue/25 border border-apple-blue/30 text-apple-blue text-[12px] font-semibold rounded-lg transition-colors"
            >
              <Send size={11} /> Send Quote
            </a>
          ) : (
            <span className="text-zinc-600 text-[12px]">No email</span>
          )}
        </td>
      </tr>

      {expanded && (
        <tr className="border-b border-zinc-800 bg-zinc-900/60">
          <td colSpan={7} className="px-6 py-5">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <p className="text-zinc-500 text-[11px] uppercase tracking-widest mb-1">Contact</p>
                  <div className="flex items-center gap-2">
                    <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 text-white text-[14px] hover:text-apple-blue transition-colors">
                      <Phone size={13} className="text-apple-blue" /> {lead.phone}
                    </a>
                  </div>
                  {lead.email && (
                    <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 text-zinc-300 text-[13px] hover:text-apple-blue transition-colors mt-1">
                      <Mail size={13} className="text-apple-blue" /> {lead.email}
                    </a>
                  )}
                </div>
                <div>
                  <p className="text-zinc-500 text-[11px] uppercase tracking-widest mb-1">Message</p>
                  <p className="text-zinc-200 text-[14px] leading-relaxed">{lead.message || 'No message provided.'}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-[11px] uppercase tracking-widest mb-1">Submitted</p>
                  <p className="text-zinc-300 text-[13px]">{new Date(lead.created_at).toLocaleString()}</p>
                </div>
              </div>

              <div>
                <p className="text-zinc-500 text-[11px] uppercase tracking-widest mb-2">Your Notes</p>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  onBlur={handleNotesSave}
                  rows={4}
                  placeholder="Add notes about this lead — quoted price, follow-up date, etc."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 text-[13px] placeholder:text-zinc-600 outline-none focus:border-apple-blue resize-none transition-colors"
                />
                <p className="text-zinc-600 text-[11px] mt-1">Auto-saves when you click away</p>

                {lead.email && (
                  <a
                    href={buildQuoteEmailLink(lead)}
                    className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 text-white text-[13px] font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #0071E3 0%, #7B61FF 100%)' }}
                  >
                    <Send size={13} /> Open Quote Email
                  </a>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = statusFilter === 'all' ? leads : leads.filter((l) => l.status === statusFilter)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {['all', 'new', 'contacted', 'quoted', 'booked', 'closed'].map((f) => (
          <button
            key={f}
            onClick={() => setStatusFilter(f)}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors capitalize ${
              statusFilter === f
                ? 'bg-apple-blue text-white'
                : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
            }`}
          >
            {f === 'all' ? `All (${leads.length})` : `${f} (${leads.filter((l) => l.status === f).length})`}
          </button>
        ))}
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-16 text-center">
          <p className="text-zinc-500 text-[17px] mb-2">No leads yet</p>
          <p className="text-zinc-600 text-[14px]">Form submissions will appear here.</p>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800 text-left">
                {['Time', 'Customer', 'Service', 'Urgency', 'Message', 'Status', 'Action'].map((h) => (
                  <th key={h} className="px-4 py-3 text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <LeadRow key={lead.id} lead={lead} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
