# Design Guidelines: Professional Quotation System for Metrology Services

## Design Approach

**Selected Approach**: Design System Approach (Material Design principles)
**Justification**: This B2B utility application prioritizes efficiency, accuracy, and professional credibility over visual experimentation. The information-dense nature (forms, tables, calculations) and need for stability make a systematic approach ideal.

**Reference Inspiration**: Modern SaaS business tools (Stripe Dashboard, QuickBooks, FreshBooks) for clean financial interfaces and professional data presentation.

**Key Design Principles**:
- Professional trustworthiness for client-facing documents
- Clear information hierarchy for complex form workflows
- Bilingual design consistency (Thai/English)
- Print-optimized layouts for PDF generation

## Core Design Elements

### A. Color Palette

**Primary Colors (Professional Blue-Gray)**
- Light Mode: Primary `215 25% 27%` (Deep professional blue), Surface `210 20% 98%`
- Dark Mode: Primary `215 30% 65%` (Lighter blue), Surface `215 25% 12%`

**Semantic Colors**
- Success (calculations/totals): `142 71% 45%`
- Warning (validation): `38 92% 50%`
- Neutral (borders/dividers): Light `215 15% 85%`, Dark `215 15% 25%`

**Accent** (minimal use): `215 100% 50%` for CTAs only

### B. Typography

**Font Families** (Google Fonts):
- Primary: 'Inter' (400, 500, 600) - UI, forms, tables
- Display: 'IBM Plex Sans Thai' (500, 600) - Thai language support, headings

**Hierarchy**:
- Page Headers: text-2xl font-semibold (Inter/IBM Plex Sans Thai)
- Section Titles: text-lg font-medium
- Form Labels: text-sm font-medium text-gray-700 dark:text-gray-300
- Body/Inputs: text-base font-normal
- Table Headers: text-sm font-semibold uppercase tracking-wide
- Calculations/Totals: text-lg font-semibold

### C. Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16
- Form field spacing: gap-6
- Section padding: p-6 to p-8
- Card padding: p-6
- Table cell padding: px-4 py-3
- Button padding: px-6 py-2.5

**Container Strategy**:
- Main application: max-w-7xl mx-auto
- Form sections: max-w-4xl for optimal readability
- Full-width tables: w-full with horizontal scroll on mobile

### D. Component Library

**Navigation & Header**
- Sticky top navigation with language toggle (Thai/English flag icons)
- Company logo placement (left), action buttons (right)
- Breadcrumb for multi-step flows if needed

**Forms**
- Grouped sections in white cards (light) / dark cards (dark mode)
- Clear visual separation between company, customer, and line items
- Label-above-input pattern for bilingual support
- Input fields: border-2, rounded-lg, focus:ring-2 focus:ring-primary
- Consistent height: h-10 for all text inputs

**Tables (Line Items)**
- Zebra striping for row distinction (subtle: bg-gray-50/bg-gray-800)
- Fixed header row with sticky positioning during scroll
- Editable cells with inline input fields
- Column widths: Item# (w-20), Description (flex-1), ISO checkbox (w-24), Qty (w-24), Unit Price (w-32), Discount (w-24), Amount (w-32)
- Add/remove row buttons: icon-only with tooltips

**Calculation Display**
- Right-aligned summary panel (sticky on larger screens)
- Clear visual hierarchy: Subtotal (text-base), VAT (text-base text-gray-600), Grand Total (text-xl font-bold with bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg)
- Number formatting: Thai Baht symbol, comma separators, 2 decimal places

**Action Buttons**
- Primary CTA (Generate PDF): bg-primary text-white px-8 py-3 rounded-lg font-medium shadow-sm
- Secondary actions (Save Draft, Clear): variant-outline with subtle borders
- Destructive (Delete row): text-red-600 hover:bg-red-50

**Terms & Conditions**
- Expandable/collapsible sections with icon indicators
- Text area inputs for custom terms (h-24 min-height)
- Checkbox list for standard conditions with custom input option

**PDF Preview/Generation**
- Modal preview before download with A4 aspect ratio simulation
- Print styles: Remove navigation, optimize margins, ensure page breaks work correctly
- Include: Company letterhead area (logo + details), formal table layout, signature fields (2 columns), footer with page numbers

### E. Responsive Behavior

**Desktop (lg+)**: Two-column layout where appropriate (company info left, customer info right)
**Tablet (md)**: Single column forms, horizontal scroll for wide tables
**Mobile**: Stacked forms, collapsible table columns (show essential: description, qty, amount)

### F. Animations

**Minimal & Purposeful**:
- Input focus transitions: transition-colors duration-150
- Row addition: subtle fade-in (opacity-0 to opacity-100)
- Calculation updates: number counter animation for totals (150ms)
- NO scroll animations, parallax, or decorative motion

## Accessibility & Dark Mode

- Maintain WCAG AA contrast ratios across both modes
- Dark mode: Consistent implementation in forms, tables, inputs, modals
- Input fields in dark mode: bg-gray-800 border-gray-600 text-white
- Focus indicators: 2px ring in primary color
- Keyboard navigation: Tab order follows logical flow (company → customer → line items → terms → actions)

## Professional Touches

- Formal typography with generous line-height (1.6 for body text)
- Clean borders and subtle shadows for depth (shadow-sm, shadow-md)
- Professional icons (Heroicons) for: Edit, Delete, Add, Download PDF, Print, Language toggle
- Bilingual labels side-by-side or toggle-based (not stacked)
- Thai Baht (฿) and English ($) currency support with proper formatting