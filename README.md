---
permalink: /
image: /merchant-dashboard-agent/architecture.png
---

## Case studies

### [Merchant Dashboard Agent](merchant-dashboard-agent/)

An embedded AI assistant that turns plain-language questions into live dashboard views for a multi-tenant payments platform, with merchant-created Skills, cost limits and tenant isolation.

- **Role:** Lead and sole engineer
- **Timeframe:** About 4 months, 2026
- **Stack:** Python, Django, Anthropic Claude, SSE, PostgreSQL, Playwright
- **Highlights:** ~80 issues · 13/13 E2E tests · 5/5 live merchant requests · cost-capped

[Read the case study →](merchant-dashboard-agent/)

### [Multi-Tenant Access Control for SaaS](multi-tenant-access-control-for-saas/)

Custom roles and section-wise permissions per tenant, a cross-tenant support role and privilege-escalation guardrails for a schema-per-tenant payments SaaS.

- **Role:** Lead engineer for access control and tenant isolation
- **Timeframe:** About 3.5 months, 2026
- **Stack:** Python, Django, django-tenants, PostgreSQL, Next.js, Playwright
- **Highlights:** 47 sections × 5 actions · 1,715 parity checks · 0 high-severity findings after review

[Read the case study →](multi-tenant-access-control-for-saas/)

### [Fuxx (Liquva) SEPA Payment Integration](fuxx-sepa-payment-integration/)

A SEPA Direct Debit provider integrated by API and by CSV batch, with RSA-signed webhooks, polling, daily reconciliation and a full provider mock.

- **Role:** Lead engineer for the Fuxx integration
- **Timeframe:** About 2 months, 2026
- **Stack:** Python, Django, PostgreSQL, Celery, Node.js/TypeScript, Playwright
- **Highlights:** 5 provider endpoints · 10 → 5 status mapping · ~170 automated tests · live-verified in sandbox

[Read the case study →](fuxx-sepa-payment-integration/)

### [Customer Communications, Part 1: Email](customer-communications-email/)

Event-driven transactional email for a multi-tenant SEPA Direct Debit SaaS, sent through each merchant's own mail server, with legally required pre-notifications, unsubscribe and GDPR purging.

- **Role:** Lead and sole engineer
- **Timeframe:** About 3 months, 2026
- **Stack:** Python, Django, Celery, Redis, PostgreSQL, Jinja2, Datadog, Playwright
- **Highlights:** ~37 events in 8 categories · merchant-owned SMTP · 8 tenant-tagged metrics · 76/76 E2E passing

[Read the case study →](customer-communications-email/)

### [Customer Communications, Part 2: Physical Letters](customer-communications-letters/)

Printed and posted letters as a second channel on the same platform, through the Pingen print-and-mail API, with per-country pricing, budgets and delivery tracking.

- **Role:** Lead and sole engineer
- **Timeframe:** About 1 month, 2026
- **Stack:** Python, Django, Celery, PostgreSQL, Gotenberg, Pingen API, Next.js
- **Highlights:** one rule, two channels · signed delivery webhooks · write-once billing · ~190 automated tests

[Read the case study →](customer-communications-letters/)
