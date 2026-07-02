'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin/leads')
    } else {
      setError('Wrong password. Try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="w-10 h-10 rounded-xl bg-apple-blue flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C10 2 4 6 4 11C4 14.314 6.686 17 10 17C13.314 17 16 14.314 16 11C16 6 10 2 10 2Z" fill="white" />
              <circle cx="10" cy="11" r="2.5" fill="#0071E3" />
            </svg>
          </div>
          <span className="text-white text-[17px] font-semibold">GrowBridge Admin</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-800 mx-auto mb-5">
            <Lock size={24} className="text-zinc-400" />
          </div>
          <h1 className="text-[20px] font-bold text-white text-center mb-1">Lead Inbox</h1>
          <p className="text-zinc-500 text-[14px] text-center mb-6">Enter your admin password to continue</p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            autoFocus
            className="w-full px-4 py-3.5 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 text-[15px] outline-none focus:border-apple-blue transition-colors mb-4"
          />

          {error && (
            <p className="text-red-400 text-[13px] mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3.5 bg-apple-blue text-white text-[15px] font-semibold rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="text-zinc-600 text-[12px] text-center mt-6">
          <a href="/" className="hover:text-zinc-400 transition-colors">← Back to website</a>
        </p>
      </div>
    </div>
  )
}
