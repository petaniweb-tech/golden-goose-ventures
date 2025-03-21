# Golden Gate Venture Website Implementation Plan

## Overview
This document outlines the step-by-step plan for implementing the Golden Gate Venture website based on the provided mockups and existing Next.js codebase. The website will focus on showcasing GGV's blockchain and cryptocurrency investment services, portfolio, and company information with a bilingual approach (English/Chinese).

## Phase 1: Setup and Configuration

### 1.1 Color Palette Integration
- Update the existing Tailwind configuration with the new brand colors:
  - Primary: #11222B (dark blue), #7C6240 (brown)
  - Secondary: #D2BB91, #EBDDC0, #F4E9D7 (beige/tan tones)
- Already started by adding brown and tan colors to the `tailwind.config.ts` file

### 1.2 Typography and Font Setup
- Keep the Proxima Nova font family already configured in the template
- Create text style classes based on the design mockups using existing SCSS files in `src/styles/`

### 1.3 Multilingual Configuration
- Keep the i18n setup we've already created with UPPER_SNAKE_CASE translation keys
- Implement language switching using our `LanguageSwitcher` component
- Add language context to the root layout

## Phase 2: Website Structure and Navigation

### 2.1 Main Navigation Structure
- Modify the existing `TopNavOne` component in `src/components/Header/TopNav/` to include:
  - Logo
  - Contact information
  - Language switch (EN/CY)
- Update the `MenuOne` component in `src/components/Header/Menu/` to include:
  - GGV Group
  - About Us (dropdown with existing about pages)
  - Services (dropdown with service options)
  - Portfolio (dropdown with categories)
  - Investor Relations
  - Careers
  - Media
  - Partner Program
  - Contact link

### 2.2 Homepage Implementation
- Leverage the existing homepage structure in `src/app/page.tsx`
- Replace current sections with venture capital specific content:
  1. Replace `SliderOne` hero section with custom GGV branding and messaging
  2. Update `ServiceOne` to display venture capital services using existing component
  3. Modify `CaseStudyOne` to showcase successful investments/portfolio
  4. Adapt `FaqsOne` for venture capital related questions
  5. Keep `FormRequestOne` for contact inquiries
  6. Update `PartnerOne` for partnership program promotion
  7. Retain basic structure but update the content

### 2.3 About Section
- Utilize existing about page structures in `src/app/about/about-one/` and `src/app/about/about-two/`
- Implement additional about pages as needed:
  1. Company overview using existing layouts
  2. Vision, mission, values using appropriate Section components
  3. Corporate structure using existing card/grid layouts
  4. History/milestones using existing components in `src/components/Section/About/`
  5. Team section using `src/components/Section/OurTeam/` components

### 2.4 Services Section
- Utilize existing service page structures in `src/app/service/`
- Create separate pages for main service categories:
  1. Venture Capital services using `ServiceOne` or similar components
  2. OTC Trading services using existing service detail layouts
  3. Market Making services using existing components
  4. Incubation & Advisory using existing components

### 2.5 Portfolio Section
- Create portfolio pages using existing case study and project components:
  1. Main portfolio page with category filters
  2. Individual portfolio item pages based on existing case study templates
  3. Implement content from the JSON data structure

### 2.6 Investor Relations Section
- Create custom Investor Relations pages using existing section components:
  1. Investor Relations home
  2. Corporate profile using about section components
  3. Financial information using appropriate layouts
  4. Newsroom using existing blog components

### 2.7 Careers Section
- Create careers page using existing section components:
  1. Careers overview with vision and culture (reuse appropriate about components)
  2. Job listings using card components or blog-style listings
  3. Application form using existing form components

### 2.8 Media Section
- Implement using existing blog components in `src/components/Blog/` and `src/components/Section/Blog/`
  1. News listing page
  2. Individual news item pages

### 2.9 Partner Program Section
- Create partner program page using existing components:
  1. Overview section using existing about or service components
  2. Benefits section using existing card components
  3. Application process using existing form components

### 2.10 Contact Section
- Utilize existing contact page and form components:
  1. Main contact form using `FormRequestOne` component
  2. Office locations and contact details

## Phase 3: Content Integration

### 3.1 Data Structure Setup
- Utilize existing JSON data structure in `src/data/`:
  - Keep the pattern already started with `about.json`
  - Maintain consistency with the translation key format (UPPER_SNAKE_CASE)
  - Create separate files for each major section

### 3.2 Content Population
- Populate the JSON files with content for:
  1. Services (expanding on existing `service.json`)
  2. Portfolio items (adapting `case-study.json`)
  3. Team members
  4. News/blog items (adapting `blog.json`)
  5. FAQs (expanding `faqs.json`)
  6. Job listings

<!-- ### 3.3 Image Integration (No need for now)
- Update images throughout the site:
  1. Replace existing images in `/public/images/` with GGV specific imagery
  2. Ensure all images are properly optimized
  3. Use appropriate Next.js Image component for performance -->

## Phase 4: Design Implementation

### 4.1 Color Scheme Application
- Apply the GGV color scheme throughout the site:
  1. Update primary colors in all components
  2. Create appropriate color variations for different UI elements
  3. Ensure sufficient contrast for readability

### 4.2 Layout Adjustments
- Fine-tune existing layouts to match the design mockups:
  1. Adjust spacing and margins
  2. Implement proper component alignment
  3. Ensure responsive behavior matches design requirements

### 4.3 Typography Implementation
- Apply consistent typography throughout:
  1. Heading styles for different sections
  2. Body text styles
  3. Navigation and button text

## Phase 5: Multilingual Support

### 5.1 Translation Integration
- Leverage the UPPER_SNAKE_CASE translation system we've set up:
  1. Add Chinese translations when available
  2. Update the language switcher component
  3. Test language switching functionality

### 5.2 Language-Specific Adjustments
- Make necessary adjustments for Chinese content:
  1. Address any layout issues with longer/shorter text
  2. Ensure proper font rendering
  3. Test all interactive elements with Chinese content

## Phase 6: Testing and Optimization

### 6.1 Responsive Testing
- Test all pages on different device sizes:
  1. Mobile (320px - 576px)
  2. Tablet (577px - 991px)
  3. Desktop (992px+)
  4. Verify all components adapt properly

### 6.2 Functionality Testing
- Test all interactive elements:
  1. Navigation and dropdowns
  2. Form submissions
  3. Filters and search functionality
  4. Language switching

### 6.3 Performance Optimization
- Address any performance issues:
  1. Image optimization
  2. Lazy loading for off-screen components
  3. Code splitting for larger pages
  4. Address accessibility concerns

## Implementation Strategy

### Component Reuse
- **Header**: Adapt `TopNavOne` and `MenuOne` for the GGV navigation
- **Hero Sections**: Modify `SliderOne` with appropriate branding
- **Service Displays**: Use `ServiceOne` and related components
- **Case Studies/Portfolio**: Leverage `CaseStudyOne` and project components
- **Team Section**: Use `OurTeam` components
- **Testimonials**: Adapt `TestimonialOne` components
- **Forms**: Utilize `FormRequestOne` for contact and application forms
- **Footer**: Adapt existing `Footer` component

### Page Structure
- Maintain the existing page structure pattern:
```tsx
// Example page structure (based on current template)
<div className="overflow-x-hidden">
  <header id="header">
    <TopNavOne />
    <MenuOne />
  </header>
  <main className="content">
    <Breadcrumb pageTitle="Page Title" />
    {/* Page specific sections */}
    <SectionComponent data={sectionData} />
  </main>
  <footer id="footer">
    <Footer />
  </footer>
</div>
```

### Data Structure
- Use the existing pattern of JSON data files in `src/data/` folder:
```json
// Example for portfolio-items.json
{
  "items": [
    {
      "id": "item-1",
      "title": "Project Name",
      "category": "Category",
      "description": "Description",
      "image": "/images/portfolio/image.jpg"
    }
  ]
}
```

### Translation Strategy
- Continue using the UPPER_SNAKE_CASE format already implemented in translation files
- Access translations using the existing context: `t("SECTION.SUBSECTION.KEY")` 

## Implementation Status (Updated)

### Current Navigation and Page Implementation Status

The following pages are referenced in the navigation (MenuOne.tsx) but have not yet been implemented:

1. **Portfolio Pages**
   - Portfolio main page: `[locale]/portfolio`
   - Category-specific pages: 
     - `[locale]/portfolio/blockchain`
     - `[locale]/portfolio/cryptocurrency` 
     - `[locale]/portfolio/defi`
     - `[locale]/portfolio/web3`

2. **Investor Relations**
   - Main page: `[locale]/investor-relations`

3. **Careers**
   - Main page: `[locale]/careers`

4. **Media**
   - Main page: `[locale]/media`

5. **Partner Program**
   - Main page: `[locale]/partner-program`

6. **GGV Group Pages**
   - Main page links to homepage
   - Sub-pages:
     - `[locale]/ggv-group/venture-capital`
     - `[locale]/ggv-group/otc-trading`
     - `[locale]/ggv-group/market-making`

7. **About Pages**
   - Sub-pages referenced in navigation but not implemented:
     - `[locale]/about/overview`
     - `[locale]/about/mission-values`
     - `[locale]/about/structure`
     - `[locale]/about/team`
   - Template pages exist (about-one, about-two) but specific pages need to be created

### Next Implementation Steps

Following Phase 2 of the original plan, these pages need to be created in priority order:

1. About section pages (using existing templates)
2. Portfolio main page and category pages
3. Services detail pages 
4. Investor Relations pages
5. Careers page
6. Media page
7. Partner Program page

For each missing page, create the appropriate folder and page.tsx file in the corresponding [locale] directory path. 