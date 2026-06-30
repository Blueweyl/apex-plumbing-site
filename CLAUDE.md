# PlumbFlow — Field Management Software for Plumbing Shops

## Project Overview

PlumbFlow is a web + mobile field management platform built specifically for plumbing businesses with 5–25 technicians. It replaces the patchwork of spreadsheets, whiteboards, and disconnected apps that small-to-mid plumbing shops rely on today.

The product sits in the pricing gap between Jobber ($49–$349/month, outgrown at ~8 techs) and ServiceTitan ($3,000–$10,000/month, built for 25+ tech enterprise shops). PlumbFlow targets the most underserved segment: the 5–20 tech plumbing shop generating $500K–$3M/year.

**SaaS pricing:**
- Starter: $199/month (1–3 techs)
- Growth: $399/month (4–10 techs)
- Pro: $699/month (11–25 techs)

---

## Target Users

| Role | Who They Are | How They Use the App |
|---|---|---|
| **Shop Owner / Admin** | Business owner, often also a plumber | Dashboard, reports, billing, team management |
| **Dispatcher / Office Manager** | Runs scheduling and customer calls | Dispatch board, job creation, customer communication |
| **Field Technician** | Plumber in the van | Mobile app: job details, time tracking, invoicing, photos |
| **Customer** | Homeowner or property manager | Receives SMS/email updates, views invoice, pays online |

---

## Core Problems Being Solved

1. **Scheduling chaos** — Emergency calls (70–80% of all calls) blow up the day's planned route. Rerouting happens via phone calls and text messages.
2. **Invoicing delays** — Jobs are completed, invoices are written up days later, payment arrives 30–60 days after that. 50% of plumbing shops have chronic cash flow problems.
3. **Fragmented tools** — Most shops use 3–5 disconnected apps. Data is re-entered manually between them.
4. **No customer retention** — 3 out of 5 customers try a different plumber next time. Zero automated follow-up or maintenance reminders exist.
5. **Estimating guesswork** — Material costs are up 30% since 2020. Price books are outdated or nonexistent, leading to under-quoting and margin erosion.
6. **No visibility** — Owners don't know where techs are, which jobs are billable today, or what cash is coming in this week.

---

## Software Architecture

### System Components

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND (Web)                    │
│         Next.js 14 — Admin / Dispatch Portal         │
│  Dashboard │ Dispatch Board │ Jobs │ Customers │ Reports │
└─────────────────┬───────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────┐
│                  BACKEND API                         │
│            Next.js API Routes (serverless)           │
│  Auth │ Jobs │ Customers │ Invoicing │ Notifications  │
└─────────────────┬───────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
┌───────▼───────┐   ┌───────▼───────┐
│   Supabase    │   │  External APIs │
│  PostgreSQL   │   │  Stripe        │
│  Auth         │   │  Twilio SMS    │
│  Storage      │   │  QuickBooks    │
│  Realtime     │   │  Google Maps   │
└───────────────┘   └───────────────┘
                  │
┌─────────────────▼───────────────────────────────────┐
│              MOBILE APP (Field Techs)                │
│           React Native + Expo (iOS + Android)        │
│   Offline-First │ Job Completion │ Photos │ Payment   │
└─────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| **Frontend** | Next.js 14 + TypeScript | SSR for fast load, API routes built in, great DX |
| **Styling** | Tailwind CSS + shadcn/ui | Fast to build professional UI, consistent components |
| **Mobile** | React Native + Expo | Shared codebase with web logic, offline-first capable |
| **Offline Storage** | WatermelonDB (mobile) | SQLite-based, built for offline-first sync |
| **Database** | Supabase (PostgreSQL) | Managed DB + Auth + Storage + Realtime in one |
| **Auth** | Supabase Auth | JWT-based, row-level security, role support |
| **Payments** | Stripe | Card-on-file, mobile card reader (Stripe Terminal), invoicing |
| **SMS** | Twilio | Tech-on-the-way alerts, invoice links, review requests |
| **Email** | Resend | Transactional emails (invoices, confirmations) |
| **Maps/Routing** | Google Maps API | Dispatch map view, tech location, route optimization |
| **QuickBooks** | QuickBooks Online API | #1 integration request from plumbing shops |
| **File Storage** | Supabase Storage | Job photos, signatures, invoice PDFs |
| **Hosting** | Vercel | Zero-config Next.js deployment, serverless functions |
| **PDF Generation** | React PDF / Puppeteer | Branded invoice and job report PDFs |

---

## Database Schema

### users
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
email               text UNIQUE NOT NULL
name                text NOT NULL
phone               text
role                text NOT NULL -- 'admin' | 'dispatcher' | 'tech'
status              text DEFAULT 'active' -- 'active' | 'inactive'
license_number      text
hourly_rate         decimal(10,2)
avatar_url          text
shop_id             uuid REFERENCES shops(id)
created_at          timestamptz DEFAULT now()
updated_at          timestamptz DEFAULT now()
```

### shops (multi-tenant root)
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
name                text NOT NULL
phone               text
email               text
address             text
city                text
state               text
zip                 text
logo_url            text
subscription_tier   text DEFAULT 'starter' -- 'starter' | 'growth' | 'pro'
subscription_status text DEFAULT 'trial'
trial_ends_at       timestamptz
stripe_customer_id  text
quickbooks_realm_id text
tax_rate            decimal(5,4) DEFAULT 0.0
invoice_prefix      text DEFAULT 'INV'
invoice_counter     integer DEFAULT 1000
created_at          timestamptz DEFAULT now()
```

### customers
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
shop_id             uuid REFERENCES shops(id) NOT NULL
name                text NOT NULL
email               text
phone               text NOT NULL
phone_alt           text
address             text
city                text
state               text
zip                 text
type                text DEFAULT 'residential' -- 'residential' | 'commercial'
source              text -- 'phone' | 'referral' | 'google' | 'repeat' | 'online_booking'
notes               text
stripe_customer_id  text
do_not_contact      boolean DEFAULT false
created_at          timestamptz DEFAULT now()
updated_at          timestamptz DEFAULT now()
```

### customer_properties
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
customer_id         uuid REFERENCES customers(id) NOT NULL
shop_id             uuid REFERENCES shops(id) NOT NULL
address             text NOT NULL
city                text
state               text
zip                 text
property_type       text DEFAULT 'residential'
access_notes        text -- gate code, where to park, dog in yard, etc.
notes               text
created_at          timestamptz DEFAULT now()
```

### jobs
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
shop_id             uuid REFERENCES shops(id) NOT NULL
customer_id         uuid REFERENCES customers(id) NOT NULL
property_id         uuid REFERENCES customer_properties(id)
assigned_tech_id    uuid REFERENCES users(id)
created_by_id       uuid REFERENCES users(id)
job_number          text -- auto-generated e.g. "JOB-1042"
title               text NOT NULL
description         text
status              text DEFAULT 'scheduled'
  -- 'unscheduled' | 'scheduled' | 'en_route' | 'on_site'
  -- | 'completed' | 'invoiced' | 'paid' | 'cancelled'
job_type            text DEFAULT 'service_call'
  -- 'service_call' | 'emergency' | 'estimate' | 'maintenance' | 'install'
priority            text DEFAULT 'normal' -- 'normal' | 'urgent' | 'emergency'
scheduled_date      date
scheduled_time_start time
scheduled_time_end   time
actual_start_time   timestamptz
actual_end_time     timestamptz
is_emergency        boolean DEFAULT false
callback_from_job_id uuid REFERENCES jobs(id) -- links callbacks to original job
notes               text -- customer-visible
internal_notes      text -- dispatcher/office only
created_at          timestamptz DEFAULT now()
updated_at          timestamptz DEFAULT now()
```

### job_line_items
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
job_id              uuid REFERENCES jobs(id) NOT NULL
shop_id             uuid REFERENCES shops(id) NOT NULL
pricebook_item_id   uuid REFERENCES pricebook_items(id)
item_type           text NOT NULL -- 'labor' | 'material' | 'flat_rate' | 'fee'
description         text NOT NULL
quantity            decimal(10,3) DEFAULT 1
unit                text -- 'each' | 'hour' | 'linear_ft' | 'flat'
unit_price          decimal(10,2) NOT NULL
total_price         decimal(10,2) GENERATED ALWAYS AS (quantity * unit_price) STORED
created_at          timestamptz DEFAULT now()
```

### pricebook_items
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
shop_id             uuid REFERENCES shops(id) NOT NULL
category            text NOT NULL
  -- 'drain' | 'water_heater' | 'toilet' | 'faucet' | 'pipe'
  -- | 'sewer' | 'emergency_fee' | 'inspection' | 'labor' | 'other'
name                text NOT NULL
description         text
unit_price          decimal(10,2) NOT NULL
unit                text DEFAULT 'each'
is_active           boolean DEFAULT true
created_at          timestamptz DEFAULT now()
updated_at          timestamptz DEFAULT now()
```

### invoices
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
shop_id             uuid REFERENCES shops(id) NOT NULL
job_id              uuid REFERENCES jobs(id) NOT NULL
customer_id         uuid REFERENCES customers(id) NOT NULL
invoice_number      text NOT NULL -- e.g. "INV-1042"
status              text DEFAULT 'draft'
  -- 'draft' | 'sent' | 'viewed' | 'paid' | 'overdue' | 'void'
subtotal            decimal(10,2) NOT NULL
tax_rate            decimal(5,4) DEFAULT 0
tax_amount          decimal(10,2)
total               decimal(10,2) NOT NULL
due_date            date
paid_at             timestamptz
payment_method      text -- 'cash' | 'card' | 'check' | 'online' | 'card_on_file'
stripe_payment_intent_id text
public_token        uuid DEFAULT gen_random_uuid() -- for customer-facing invoice URL
notes               text
created_at          timestamptz DEFAULT now()
sent_at             timestamptz
viewed_at           timestamptz
```

### job_photos
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
job_id              uuid REFERENCES jobs(id) NOT NULL
shop_id             uuid REFERENCES shops(id) NOT NULL
uploaded_by_id      uuid REFERENCES users(id)
storage_path        text NOT NULL -- Supabase storage path
public_url          text NOT NULL
caption             text
photo_type          text DEFAULT 'job' -- 'before' | 'after' | 'issue' | 'signature'
created_at          timestamptz DEFAULT now()
```

### customer_equipment
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
customer_id         uuid REFERENCES customers(id) NOT NULL
property_id         uuid REFERENCES customer_properties(id)
shop_id             uuid REFERENCES shops(id) NOT NULL
installed_by_job_id uuid REFERENCES jobs(id)
equipment_type      text NOT NULL
  -- 'water_heater' | 'sump_pump' | 'garbage_disposal' | 'water_softener'
  -- | 'pressure_regulator' | 'backflow_preventer' | 'other'
brand               text
model               text
serial_number       text
install_date        date
warranty_expiry     date
last_service_date   date
next_service_due    date -- triggers maintenance reminder automation
notes               text
created_at          timestamptz DEFAULT now()
```

### follow_up_tasks
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
shop_id             uuid REFERENCES shops(id) NOT NULL
customer_id         uuid REFERENCES customers(id)
job_id              uuid REFERENCES jobs(id)
equipment_id        uuid REFERENCES customer_equipment(id)
task_type           text NOT NULL
  -- 'maintenance_reminder' | 'estimate_followup' | 'review_request'
  -- | 'unpaid_invoice' | 'callback_check'
scheduled_send_at   timestamptz NOT NULL
message_template    text
status              text DEFAULT 'pending' -- 'pending' | 'sent' | 'skipped' | 'completed'
sent_at             timestamptz
created_at          timestamptz DEFAULT now()
```

### tech_locations
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
user_id             uuid REFERENCES users(id) NOT NULL
shop_id             uuid REFERENCES shops(id) NOT NULL
latitude            decimal(10,7)
longitude           decimal(10,7)
recorded_at         timestamptz DEFAULT now()
```

### notification_log
```sql
id                  uuid PRIMARY KEY DEFAULT gen_random_uuid()
shop_id             uuid REFERENCES shops(id) NOT NULL
customer_id         uuid REFERENCES customers(id)
job_id              uuid REFERENCES jobs(id)
notification_type   text NOT NULL
  -- 'booking_confirmation' | 'tech_en_route' | 'job_complete'
  -- | 'invoice_sent' | 'invoice_paid' | 'review_request' | 'maintenance_reminder'
channel             text NOT NULL -- 'sms' | 'email'
recipient           text NOT NULL -- phone or email
content             text
status              text DEFAULT 'sent' -- 'sent' | 'delivered' | 'failed'
sent_at             timestamptz DEFAULT now()
external_id         text -- Twilio/Resend message ID
```

### Relationships Summary
- One shop → many users, customers, jobs, pricebook_items
- One customer → many properties, jobs, equipment, invoices
- One job → many line_items, photos, one invoice
- One equipment record → many follow_up_tasks (maintenance reminders)
- One job → optional callback link to another job

---

## Feature Breakdown

### MVP — Phase 1 (Must-have for first paying customer)
**Estimated build time: 60–80 hours | 3–4 weeks**

#### 1. Authentication & Multi-tenant Setup
- Email/password login via Supabase Auth
- Role-based access: admin, dispatcher, tech
- Shop-isolated data via Row Level Security (RLS)
- Invite team members by email

#### 2. Customer & Property Management
- Add/edit/delete customers with full contact info
- Multiple properties per customer (common for property managers)
- Access notes field (gate codes, parking, dog alert)
- Customer job history view

#### 3. Job Management (Core)
- Create jobs: assign customer, property, tech, date/time, job type
- Job status pipeline: Unscheduled → Scheduled → En Route → On Site → Completed
- Emergency flag that bumps priority visually on dispatch board
- Internal notes (dispatcher-only) vs customer-visible notes
- Callback tracking: link a return visit to the original job

#### 4. Dispatch Board (Web — Office View)
- Drag-and-drop daily calendar showing all techs as columns
- Jobs as cards draggable between techs and time slots
- Color-coded by status (green=scheduled, red=emergency, yellow=en route, gray=complete)
- Unassigned jobs queue on the left sidebar
- Real-time updates when techs update job status from mobile

#### 5. Mobile App for Techs (React Native + Expo)
- Login and see today's assigned jobs
- View job details: customer info, property address, notes, history
- One-tap status updates: En Route → On Site → Completed
- Add line items from the pricebook (search by name or category)
- Photo capture: before/after/issue — works offline, syncs when connected
- Customer signature capture on-screen
- Offline-first: full functionality with no signal (basement, crawl spaces)

#### 6. Flat-Rate Price Book
- Pre-loaded with ~150 common plumbing tasks and materials
- Categories: Drain, Water Heater, Toilet, Faucet, Pipe/Fitting, Sewer, Emergency Fee, Labor
- Admin can add/edit/delete items and adjust pricing
- Techs search and add items to jobs from mobile

#### 7. Invoicing & Payment Collection
- Auto-generate invoice from job line items
- On-site card collection via Stripe Terminal (physical card reader for van)
- Online invoice link (customer pays via browser, no app needed)
- Invoice PDF generation with shop logo and branding
- Invoice status tracking: Draft → Sent → Viewed → Paid → Overdue
- Cash/check payment recording

#### 8. Basic Dashboard (Admin/Dispatcher)
- Today's jobs: count by status
- Unpaid invoices total (dollars outstanding)
- Revenue this week vs last week
- Jobs completed today
- Techs currently on-site (live status)

#### 9. Customer Notifications (SMS via Twilio)
- Booking confirmation: "Hi [Name], your plumber is scheduled for [date] between [time window]."
- Tech en-route alert: "Your technician [Name] is on the way — estimated arrival in ~20 minutes."
- Job complete + invoice: "Your service is complete. View and pay your invoice here: [link]"

---

### Phase 2 — Enhanced Functionality
**Estimated build time: 30–40 hours | 2 weeks**

#### 10. QuickBooks Online Integration
- OAuth connection to customer's QuickBooks account
- Sync paid invoices automatically to QuickBooks
- Sync customers (avoid duplicate data entry)
- Map PlumbFlow invoice line items to QB accounts
- This is the #1 objection remover for decision-makers

#### 11. Customer Equipment Tracking
- Log installed equipment per property: water heater, sump pump, PRV, etc.
- Brand, model, serial number, install date, warranty expiry
- Set next_service_due date — triggers automated maintenance reminder
- Equipment history shows all service jobs for that unit

#### 12. Automated Follow-Up Engine
- Maintenance reminders: "Your water heater installed in [month/year] is due for service."
- Review request: Sent 24 hours after job marked Paid — "How did we do? Leave us a review: [Google link]"
- Unpaid invoice nudge: Auto-SMS 7 days after invoice sent with no payment
- Estimate follow-up: "Did you have any questions about the estimate we sent?"
- Admin controls which automations are on/off and timing

#### 13. GPS Tech Location (Dispatch Map View)
- Live map showing all techs' current locations
- Helps dispatcher assign nearest tech to emergency calls
- Mobile app pings location every 3 minutes while app is open
- No creepy always-on tracking — location only active during work hours

#### 14. Reporting & Analytics
- Revenue by tech (who's the most productive?)
- Revenue by job type (what's most profitable?)
- Callback rate (which jobs or techs have the most returns?)
- Average invoice collection time
- Jobs completed per day/week/month
- Exportable to CSV

#### 15. Online Booking Widget
- Embeddable form for shop's website or Google Business profile
- Customer selects service type, preferred date/time, describes issue
- Creates "unscheduled" job in PlumbFlow for dispatcher to confirm
- Auto-sends confirmation SMS to customer

---

### Phase 3 — Nice-to-Haves
**Estimated build time: 20–25 hours | 1–2 weeks**

#### 16. Customer Portal
- Customers log in with just their phone number (magic link SMS)
- View all past and upcoming jobs
- Download invoice PDFs
- View installed equipment and next service dates
- Request a new service call

#### 17. Route Optimization
- For shops doing scheduled maintenance or multi-stop days
- Optimize tech's daily route to minimize drive time
- Powered by Google Maps Directions API
- Dispatcher can reorder stops with one click

#### 18. Recurring Jobs & Maintenance Plans
- Schedule recurring service visits (monthly, quarterly, annual)
- Auto-create jobs X days before scheduled date
- Useful for commercial accounts with maintenance contracts

#### 19. Estimate Builder (Pre-Job Quoting)
- Create formal estimates from pricebook before job is scheduled
- Customer approves online (digital signature)
- Approved estimate converts to a job in one click
- Track estimate-to-job conversion rate

#### 20. Stripe Subscription Billing (for shop's own maintenance plan customers)
- Shop can sell monthly/annual maintenance plans to their customers
- PlumbFlow handles recurring billing via Stripe subscriptions
- Separate from PlumbFlow's own subscription billing

---

## Step-by-Step Implementation Plan

### Week 1 — Foundation & Auth

**Task 1: Project setup**
```
Create a Next.js 14 project with TypeScript, Tailwind CSS, and shadcn/ui.
Set up the folder structure:
/app (Next.js App Router)
/components/ui (shadcn components)
/components/shared (custom shared components)
/lib (supabase client, utils, types)
/types (TypeScript interfaces)
/hooks (custom React hooks)
Configure ESLint and Prettier.
```

**Task 2: Supabase setup**
```
Initialize Supabase project. Create all database tables from the schema in CLAUDE.md.
Enable Row Level Security on all tables.
Write RLS policies so users can only read/write data belonging to their shop_id.
Set up Supabase Storage bucket named "job-photos" with public read access.
```

**Task 3: Authentication**
```
Implement Supabase email/password auth.
Create /login page with email + password form.
After login, redirect to /dashboard.
Create middleware that protects all routes under /app/* and redirects unauthenticated users to /login.
Store user role and shop_id in JWT metadata.
Create a useUser() hook that returns the current user's profile including role and shop_id.
```

**Task 4: Shop onboarding**
```
Create /onboarding multi-step form:
Step 1: Shop name, phone, email, address
Step 2: Invite first team member (optional)
Step 3: Upload logo (stored in Supabase Storage)
After completion, redirect to /dashboard.
```

---

### Week 2 — Customer & Job Management

**Task 5: Customer management**
```
Create /customers page with a searchable table of all customers.
Build CustomerForm component (create + edit) with fields: name, email, phone, phone_alt, address, type (residential/commercial), source, notes.
Add delete with confirmation dialog.
Customer detail page /customers/[id] showing: contact info, all properties, full job history.
PropertyForm component for adding/editing properties with access_notes field.
```

**Task 6: Job creation**
```
Create /jobs/new page with:
- Customer search/select (autocomplete)
- Property select (filtered by customer)
- Job type dropdown (service_call, emergency, estimate, maintenance, install)
- Priority toggle (normal / urgent / emergency)
- Assigned tech dropdown (active techs from users table)
- Scheduled date and time window picker
- Description and internal notes fields
On save: create job record, send booking confirmation SMS to customer via Twilio.
```

**Task 7: Job list & detail**
```
Create /jobs page with filterable list: filter by status, tech, date range, job type.
Job detail page /jobs/[id] showing all job info, status timeline, assigned tech, photos, line items, invoice status.
Status update buttons visible based on current status (e.g., "Mark En Route", "Mark Complete").
When status changes to "En Route" — trigger Twilio SMS to customer automatically.
```

---

### Week 3 — Dispatch Board & Pricebook

**Task 8: Dispatch board**
```
Create /dispatch page.
Layout: Left sidebar with unassigned jobs. Main area is a day-view calendar grid.
Columns = each active tech. Rows = time slots (30-min increments, 7am–8pm).
Jobs appear as draggable cards showing: customer name, address, job type, priority color.
Implement drag-and-drop using @dnd-kit/core.
Dropping a job onto a tech column + time slot updates assigned_tech_id, scheduled_date, scheduled_time_start in the database.
Emergency jobs show with red border and sort to top of unassigned queue.
Use Supabase Realtime to subscribe to job status changes — dispatch board updates live without refresh.
Date navigation arrows to move forward/backward by day.
```

**Task 9: Pricebook**
```
Create /pricebook page (admin only).
Seed database with 150 common plumbing pricebook items across categories:
  Drain: Drain cleaning (standard), Drain cleaning (main line), Hydro jetting
  Water Heater: Water heater replacement (40gal), Water heater replacement (50gal), Expansion tank install, Anode rod replacement
  Toilet: Toilet replacement, Flapper replacement, Fill valve replacement, Wax ring replacement
  Faucet: Faucet replacement (kitchen), Faucet replacement (bathroom), Cartridge replacement
  Pipe: Copper pipe repair (per foot), PVC repair, Shutoff valve replacement
  Sewer: Camera inspection, Sewer line repair, Cleanout installation
  Emergency Fee: After-hours dispatch fee, Weekend dispatch fee
  Labor: Diagnostic fee, Hourly labor rate
Pricebook list page with search, category filter, add/edit/deactivate.
```

---

### Week 4 — Invoicing & Payments

**Task 10: Invoice generation**
```
Create invoice from job line items.
Auto-assign invoice number using shop's invoice_prefix + invoice_counter (increment atomically).
InvoicePDF component using @react-pdf/renderer:
  - Shop logo, name, address, phone
  - Customer info
  - Job description
  - Line items table (description, qty, unit price, total)
  - Subtotal, tax, total
  - Payment instructions
  - "Thank you" footer
Store PDF in Supabase Storage. Link on invoice record.
```

**Task 11: Customer-facing invoice page**
```
Create public route /invoice/[public_token] — no login required.
Shows invoice details, line items, total due.
"Pay Now" button opens Stripe payment form (card entry).
On successful payment: update invoice status to 'paid', record payment_method and stripe_payment_intent_id, send confirmation SMS to customer.
Mark job status as 'paid'.
```

**Task 12: Stripe Terminal (in-van card reader)**
```
Integrate Stripe Terminal SDK for React Native.
In mobile app: "Collect Payment" button on completed job screen.
Connects to Stripe Reader M2 via Bluetooth.
On successful swipe/tap: invoice marked paid, receipt SMS sent to customer.
Fallback: manual cash/check recording with dropdown.
```

---

### Week 5 — Mobile App (Tech-Facing)

**Task 13: React Native app setup**
```
Initialize Expo project with TypeScript.
Configure WatermelonDB for offline-first local SQLite storage.
Create sync engine: pull jobs assigned to current tech from Supabase, store locally. Push status updates and line items when connection available.
Implement background sync every 5 minutes when app is foregrounded.
```

**Task 14: Mobile job list + detail**
```
Home screen: list of today's jobs sorted by scheduled time. Shows customer name, address, job type, status badge.
Job detail screen: full job info, customer phone (tap to call), property address (tap to open Google Maps navigation), description, internal notes.
Status update buttons contextual to current status.
```

**Task 15: Mobile line items + pricebook**
```
On job detail screen: "Add Item" button.
Search pricebook by name or browse by category.
Tap item to add — shows quantity input.
Custom item option: description + price (for items not in pricebook).
Line items list shows running total.
```

**Task 16: Photo capture + signature**
```
Photo capture screen: camera opens, tech can take unlimited photos per job.
Label each photo: Before / After / Issue.
Photos stored locally (WatermelonDB attachment) and synced to Supabase Storage when connected.
Signature screen: finger-draw on canvas. Saved as PNG, uploaded as job_photo with type='signature'.
```

---

### Week 6 — Dashboard, Notifications & Polish

**Task 17: Admin dashboard**
```
/dashboard page showing:
  - Revenue today / this week / this month (bar chart using recharts)
  - Unpaid invoices: total count + dollar amount (click to see list)
  - Jobs today by status (donut chart)
  - Live tech status cards: each tech with current job or "Available"
  - Overdue invoices alert (invoices past due_date with no payment)
  - Recent activity feed (last 10 job status changes)
```

**Task 18: Notification system**
```
Create /api/notifications/send endpoint.
Implement Twilio SMS sending with templates for each notification_type.
Trigger points:
  - Job created → booking_confirmation SMS
  - Job status → en_route → tech_en_route SMS  
  - Job status → completed + invoice created → invoice_sent SMS with public link
  - Invoice paid → invoice_paid confirmation SMS
Log all sends to notification_log table.
Admin page /settings/notifications to toggle each notification type on/off.
```

**Task 19: Settings & team management**
```
/settings page with tabs: Shop Info, Team, Notifications, Integrations, Subscription.
Team tab: list all users, invite new user by email (Supabase magic link), change role, deactivate.
Shop info: edit name, phone, logo, tax rate, invoice prefix.
```

**Task 20: Polish & error handling**
```
Add loading skeletons to all data-fetching pages.
Add error boundaries with friendly error states.
Empty states for all list views (e.g., "No jobs scheduled today — create one").
Confirm dialogs for all destructive actions (delete customer, void invoice).
Toast notifications for all success/error actions using sonner.
Mobile app: pull-to-refresh on job list.
Responsive design audit: all web pages must work on tablet (dispatchers often use iPads).
```

---

### Week 7 — QuickBooks Integration & Testing

**Task 21: QuickBooks Online OAuth**
```
Create /settings/integrations/quickbooks page.
"Connect QuickBooks" button initiates OAuth 2.0 flow with Intuit.
Store realm_id and tokens in shops table.
Display connection status: connected / disconnected.
```

**Task 22: QuickBooks sync**
```
On invoice marked 'paid' in PlumbFlow:
  - Create corresponding Invoice in QuickBooks via API
  - Map customer to QB Customer (create if not exists)
  - Map line items to QB Items
  - Record payment against invoice
Manual "Sync Now" button for bulk back-sync.
Sync error log in UI so admin can see what failed and why.
```

**Task 23: End-to-end testing**
```
Test full workflow: Create customer → Create job → Dispatch → Tech updates status on mobile → Invoice generated → Customer pays online → QB synced.
Test offline scenario: put mobile device in airplane mode, complete a job, add photos, take signature, restore connection, verify all data synced correctly.
Test RLS: log in as tech from Shop A, verify no data from Shop B is accessible.
Test all SMS triggers fire correctly with correct content.
Load test dispatch board with 20 techs and 80 jobs simultaneously.
```

---

## Deployment Strategy

### Infrastructure

| Service | Plan | Monthly Cost |
|---|---|---|
| Vercel (frontend + API) | Pro | $20 |
| Supabase | Pro | $25 |
| Twilio SMS | Pay-as-you-go | ~$10–30 (volume-based) |
| Resend (email) | Free tier | $0 |
| Google Maps API | Pay-as-you-go | ~$10–20 |
| Stripe | 2.9% + 30¢ per transaction | Variable |
| **Total infrastructure** | | **~$65–95/month** |

### Deployment Steps

1. Push all code to GitHub private repository
2. Connect Vercel to GitHub repo — auto-deploys on push to `main`
3. Configure environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY`
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_PHONE_NUMBER`
   - `RESEND_API_KEY`
   - `GOOGLE_MAPS_API_KEY`
   - `QUICKBOOKS_CLIENT_ID`
   - `QUICKBOOKS_CLIENT_SECRET`
4. Set up custom domain: `app.plumbflow.com` via Vercel
5. Configure Supabase production database with connection pooling
6. Submit React Native app to App Store and Google Play

### Mobile App Distribution (Before App Store Approval)
- Use Expo Go for beta testing with first customers
- TestFlight for iOS beta
- Production apps submitted to App Store + Google Play (takes 1–7 days for approval)

---

## ROI Justification (for Sales Conversations)

| Problem Solved | Annual Value to Shop |
|---|---|
| Collect payment on-site vs 30-day wait | $10,000–$30,000 in faster cash flow |
| Eliminate one callback per week × $250 avg | $13,000/year saved |
| Stop losing one invoice per month | $3,000–$15,000/year recovered |
| Tech spends 30 min less on paperwork/day × 5 techs | 1,250 hours recovered annually |
| One bad Google review prevented per month | Incalculable reputation value |
| **Total annual value** | **$26,000–$58,000+** |
| **Software cost at Growth tier** | **$4,788/year** |
| **ROI** | **5x–12x in year one** |

---

## Pre-Launch Checklist

### Security
- [ ] Row Level Security enabled on all tables — verified no cross-shop data leaks
- [ ] API routes validate shop_id on every mutating request
- [ ] Stripe webhooks verified with signature checking
- [ ] Customer invoice public_token is UUID (unguessable)
- [ ] No secrets in client-side code
- [ ] HTTPS enforced on all routes

### Functionality
- [ ] Full job lifecycle tested end-to-end (create → dispatch → mobile → invoice → payment)
- [ ] Offline mobile workflow tested in airplane mode
- [ ] SMS notifications tested with real phone numbers
- [ ] PDF invoice renders correctly with logo and all line items
- [ ] QuickBooks sync tested with sandbox account
- [ ] Drag-and-drop dispatch board tested with 15+ jobs

### UX
- [ ] All forms have validation with clear error messages
- [ ] Loading states on all async actions
- [ ] Empty states on all list views
- [ ] Mobile app works on iOS 15+ and Android 10+
- [ ] Dispatch board usable on 1280px wide screen minimum
- [ ] Dark mode not required — clean light mode sufficient

---

## Project Timeline

| Phase | Work | Timeline |
|---|---|---|
| MVP (Phase 1) | All core features | 7 weeks |
| Phase 2 | QB, equipment tracking, automations, analytics | +2 weeks |
| Phase 3 | Portal, routing, estimates, recurring | +2 weeks |
| **Total** | **Full product** | **~11 weeks** |

**First paying customer target:** End of Week 7 (MVP complete)

---

## Pricing to Sell This Build (if building for a client)

| Scope | Price |
|---|---|
| MVP only (Phase 1) | $18,000–$22,000 |
| MVP + Phase 2 | $24,000–$30,000 |
| Full build (all phases) | $32,000–$42,000 |
| Monthly maintenance retainer | $1,200–$2,000/month |

**Alternatively: Build it as your own SaaS product.**
- 100 shops × $399/month average = **$39,900 MRR** ($478,800 ARR)
- Infrastructure cost at that scale: ~$500–$800/month
- Net margin: **~98%**

---

## Key Files & Folder Structure

```
/app
  /dashboard          → Admin overview
  /dispatch           → Drag-and-drop dispatch board
  /jobs               → Job list + create + detail
  /customers          → Customer list + create + detail
  /pricebook          → Pricebook management
  /invoices           → Invoice list + detail
  /settings           → Shop settings, team, integrations
  /invoice/[token]    → Public customer invoice page (no auth)
  /onboarding         → New shop setup wizard
  /api
    /jobs             → CRUD + status updates
    /invoices         → Generate, send, record payment
    /notifications    → Twilio SMS sending
    /webhooks/stripe  → Payment confirmation webhooks
    /quickbooks       → OAuth + sync endpoints

/mobile (Expo app)
  /screens
    /JobList          → Today's jobs
    /JobDetail        → Job info + status updates
    /AddLineItems     → Pricebook search + item adding
    /PhotoCapture     → Camera + photo labeling
    /SignatureCapture → Customer signature
    /CollectPayment   → Stripe Terminal

/lib
  /supabase.ts        → Supabase client
  /stripe.ts          → Stripe client + helpers
  /twilio.ts          → SMS sending helpers
  /quickbooks.ts      → QB API client
  /pdf.ts             → Invoice PDF generation

/types
  /database.ts        → TypeScript types matching DB schema
  /api.ts             → API request/response types
```

---

## Notes for Claude Code

- Always use `shop_id` from the authenticated user's JWT — never trust `shop_id` from request body
- WatermelonDB sync: pull runs before push; conflicts resolve in favor of server data except for job status (mobile status updates always win)
- Stripe Terminal requires physical device — mock it in development using `stripe.terminal.readers.presentPaymentMethod` in test mode
- Twilio: use Messaging Services (not raw phone numbers) for better deliverability and carrier compliance
- QuickBooks sandbox: create developer account at developer.intuit.com — full sandbox environment available
- Pricebook seed data: create a `/scripts/seed-pricebook.ts` file with all 150 items and run it once per new shop signup
- Invoice public_token: generate at invoice creation time, never regenerate (breaks existing customer links)
- RLS policy pattern: `USING (shop_id = (SELECT shop_id FROM users WHERE id = auth.uid()))`
