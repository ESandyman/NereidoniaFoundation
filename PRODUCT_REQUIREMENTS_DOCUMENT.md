# Product Requirements Document (PRD)

**Product:** NereidoniaFoundation.org  
**Platform:** Wix (primary), with potential light external embeds (analytics, forms, commerce)  
**Version:** v1.0 (Foundational Site)

## 1. Overview

### 1.1 Purpose

NereidoniaFoundation.org is the primary digital home of The Nereidonia Foundation, a project that:

- Presents a curated canon of fictional works set in an alternate maritime civilization, via **Nereidonia Press**.
- Directs real-world financial support toward partner cultural and marine organizations, via the **Nereidonian Humanities Initiative (NHI)**.
- Documents the mission, methodology, ethics, and transparency practices of the foundation itself.

This PRD defines the structure, features, content, design, and implementation steps for launching a coherent, production-ready v1 of the site on Wix.

### 1.2 Primary Objectives

- Clearly explain what Nereidonia is and how fiction + real-world impact integrate.
- Provide an accessible catalog of stories and works (Nereidonia Press).
- Showcase partner organizations and how they benefit (NHI).
- Demonstrate financial and operational transparency in a credible way.
- Serve resources to readers, educators, and researchers.
- Provide clear paths for visitors to get involved and/or contact the project.
- Establish a trustworthy, museum-like, yet imaginative brand presence.

### 1.3 Core Messaging

- The stories are fictional.
- The beneficiaries, commitments, and reporting are real.
- Purchasing/engaging with the stories contributes to real-world cultural and marine initiatives.

## 2. Scope

### 2.1 In Scope (v1)

- Full IA with pages for Home, Stories, Partners, Transparency, Resources, About, Blog/News, Get Involved, Press/Media, and Legal.
- Static and CMS-driven pages in Wix.
- Dynamic collections for books and partner organizations.
- Static pages for mission/methodology/how-it-works style content.
- Manually updated transparency figures with future dashboard placeholders.
- Basic filters for books and partners.
- Mobile responsiveness.
- Initial SEO setup and internal linking.
- Core WCAG-informed accessibility practices within Wix constraints.
- Analytics integration (Google Analytics or equivalent).

### 2.2 Out of Scope (v1)

- Fully custom backend applications.
- Fully automated financial dashboards/APIs.
- Advanced interactive tools beyond simple estimate interfaces.
- Deeply bespoke JavaScript/custom Wix app development.

## 3. Target Audiences & Personas

- **Curious Readers:** Understand concept, browse stories, choose what to read/buy.
- **Educators:** Evaluate classroom suitability; need guides/resources/bulk-order paths.
- **Cultural & Marine Organizations:** Understand partnership model, criteria, and fund flows.
- **Donors / Advisors / Philanthropy Professionals:** Need transparency and operational credibility.
- **Researchers / Deep-Context Readers:** Need methodology, worldbuilding docs, bibliography.
- **Press / Reviewers:** Need concise project summary, assets, and clear contact path.

## 4. High-Level Information Architecture

### Primary Navigation

- Home
- Stories
- Partners
- Transparency
- Resources
- About
- Get Involved

### Footer Navigation

- Blog / News
- Press / Media
- Legal (Privacy, Terms, Cookie, Accessibility, Sitemap)

## 5. Functional Requirements by Section

### 5.1 Global / Site-wide

- Sticky or always-visible desktop navigation.
- Mobile hamburger navigation.
- Logo links to home.
- Active page indicator in navigation.
- Footer links to key sections and legal pages.
- Optional email signup in footer.
- Optional site search (recommended in v1.1+).

### 5.2 Home (`/`)

Goals:

- Answer what Nereidonia is, what is fictional vs real, who benefits, and next actions.
- Route users to Stories, NHI/Transparency, and Foundation/About paths.

Requirements:

- Hero with H1/subheadline and two primary CTAs:
  - Start with the stories → `/stories`
  - See how the model works → `/about/how-it-works` or `/transparency`
- Explanatory section with explicit fiction/reality callout:
  - “The stories are fictional. The beneficiaries and financial commitments are real.”
- Three-path card section:
  - Nereidonia Press → `/stories`
  - NHI → `/partners` or `/transparency`
  - Nereidonia Foundation → `/about`
- Recommended secondary highlights:
  - Featured Story
  - Featured Partner
  - Latest Blog/News

### 5.3 Stories (Nereidonia Press) (`/stories`)

Goals:

- Structured canon browsing.
- Filter by time period, culture, genre.
- Link stories to benefitting partners.

Pages:

- `/stories`: landing + quick browse pathways.
- `/stories/all`: CMS list/grid of all titles with filtering/sorting.
- `/stories/time-period`: era cards linking to filtered views.
- `/stories/culture`: culture cards linking to filtered views.
- `/stories/genre`: genre cards linking to filtered views.
- `/stories/anthology`: 15-title narrative anthology list.
- `/stories/exploratory`: experimental/meta works list.
- `/stories/[slug]`: dynamic story detail page.

Story detail fields:

- Title
- Cover image
- Synopsis
- Time period / culture / genre
- Status
- Benefitting partner(s)
- Associated resources
- Purchase/download/preorder links
- Optional excerpt and recommendations

Technical note: Use a Wix CMS collection with dynamic detail pages.

### 5.4 Partners (NHI) (`/partners`)

Goals:

- Show current and past partners.
- Filter by region and status.

Pages:

- `/partners`: overview + filterable cards + link to transparency.
- `/partners/region`: region index.
- `/partners/status`: status index.
- `/partners/[slug]`: dynamic partner detail page.

Partner detail fields:

- Organization name
- Logo (if allowed)
- Images (licensed/permitted)
- Region and type
- Mission summary
- External website/donation links
- Related books/works
- Manual disbursement summary
- Fiction/reality disclaimer where needed

Technical note: Use Wix CMS collection for partner organizations.

### 5.5 Transparency (`/transparency`)

Goals:

- Explain financial model credibly.
- Provide baseline figures and report structure.

Pages:

- `/transparency`: model explanation + simple flow diagram.
- `/transparency/dashboard`: static/manual figures with future chart placeholders.
- `/transparency/disbursements`: historical disbursement table.
- `/transparency/operations`: operating vs disbursement breakdown.
- `/transparency/impact-calculator`: simple estimate input/output UI.
- `/transparency/reports`: downloadable report index.
- `/transparency/api`: planned API philosophy/status page.

### 5.6 About (`/about`)

Goals:

- Explain mission, origin, team, and common questions.

Pages:

- `/about`: section landing.
- `/about/mission`
- `/about/how-it-works`
- `/about/story`
- `/about/team`
- `/about/faq`

### 5.7 Resources (`/resources`)

Goals:

- Provide structured resources by audience.

Pages:

- `/resources`: landing
- `/resources/readers`
- `/resources/educators`
- `/resources/researchers`
- `/resources/documents`

### 5.8 Blog / News (`/blog`)

- Blog index with title, category, date, excerpt.
- Categories: Impact Updates, Cultural Deep Dives, Behind the Curtain, Announcements.
- Individual posts with shareable URLs and related posts.
- Implement via Wix Blog module.

### 5.9 Get Involved (`/get-involved`)

Pages:

- `/get-involved`
- `/get-involved/readers`
- `/get-involved/educators`
- `/get-involved/cultural-orgs`
- `/get-involved/advisors`
- `/get-involved/contact`

Requirements: audience-specific forms and participation paths.

### 5.10 Press / Media (`/press`)

- Press kit page with project overview, bios, approved assets.
- Media assets list (covers, logos, imagery).
- Press releases list.
- Review copy instructions.
- Press contact method.

### 5.11 Legal (`/legal`)

Subpages:

- Privacy Policy
- Terms of Service
- Cookie Policy
- Accessibility Statement
- Sitemap

## 6. Design & UX Requirements

### 6.1 Visual Style

- Tone: museum-educational, archival maritime, imaginative but grounded.
- Palette: deep ocean blues/teals, parchment neutrals, brass/gold accents.
- Imagery: archival nautical textures + real-world partner visuals with rights.
- Typography: serif headings + clean sans body.

### 6.2 Layout

- Responsive desktop/tablet/mobile.
- Reusable page patterns (hero → explanation → CTA).
- Repeated card/grid systems for stories/partners/resources.
- Consistent CTA hierarchy.

### 6.3 Accessibility

- Adequate color contrast.
- Keyboard navigability.
- Appropriate alt text.
- Clear focus styles.
- Semantic structure where Wix allows.

## 7. Technical & Integration Requirements

- Platform: Wix.
- CMS collections: Stories, Partners, optional Resources/Documents.
- Forms: contact + inquiry forms per audience segment.
- Analytics: GA (or equivalent) + key event tracking.
- Email/newsletter: Wix-native or embed provider.
- SEO: editable metadata, clean URLs, heading structure, sitemap.

## 8. Content Requirements (Launch)

- Home: hero + core explainer + three-path card copy.
- Stories: metadata for all v1 works + covers/placeholders.
- Partners: descriptions, status, region, permitted imagery.
- Transparency: model text + baseline figures + at least one report structure.
- About: mission, how-it-works narrative, project story, team, FAQ.
- Resources: 1–2 reading pathways, discussion guide example, methodology/bibliography outlines.
- Get Involved: segment-specific invitation copy.
- Press/Legal: overview and baseline policy pages.

## 9. SEO & Analytics Requirements

- Clear descriptive page titles and meta descriptions.
- Messaging should emphasize fictional canon + real-world beneficiaries.
- Schema markup where feasible (Books, Organization).
- Track visits, key path clicks from Home, form submissions, outbound partner links.

## 10. Implementation Plan

### Phase 1: Foundation Setup

- Wix project setup.
- Global design system (colors, type, buttons, nav/footer).
- CMS collections for stories/partners/documents.
- Base page templates.

### Phase 2: Core Pages & Content

- Build Home.
- Build Stories section with dynamic templates.
- Build Partners section with dynamic templates.
- Build About/Resources skeleton pages.
- Populate CMS and upload core resource files.

### Phase 3: Transparency, Get Involved, Blog, Press

- Build transparency pages and stubs.
- Build get-involved pages and forms.
- Enable and seed blog.
- Add press kit/media/legal pages.

### Phase 4: QA, Polish, Launch

- Content QA (terminology consistency, disclaimers).
- Responsive/UI QA.
- Functional QA (forms, filters, links).
- SEO/analytics setup.
- Soft launch feedback loop.
- Public launch.

## 11. Acceptance Criteria (v1)

v1 is complete when:

- Home clearly communicates fiction vs reality and user next steps in under 30 seconds.
- Stories list all v1 titles and include at least 3 fully fleshed-out book pages.
- Partners list initial orgs with individual pages and outbound links.
- Transparency explains model and includes baseline figures or estimates.
- About includes mission, story, and FAQ with non-placeholder content.
- Resources include at least one reading pathway, one discussion guide, and one methodology/bibliography page.
- Get Involved forms are functioning for all key audience groups.
- Press/Media and Legal are accessible from footer.
- Site works on common desktop/mobile sizes.
- Basic analytics is configured.
