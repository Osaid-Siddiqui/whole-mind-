# WholeMind Behavioral Health & Wellness

A modern, single-page scrolling website for WholeMind Behavioral Health & Wellness, featuring an animated gradient background, glassmorphism design, and comprehensive sections for services, providers, testimonials, and referrals.

## Features

- **Animated Gradient Background**: Subtle, flowing gradient animation throughout the site
- **Glassmorphism Design**: Modern glass-effect panels for content sections
- **Smooth Scrolling Navigation**: Sticky navbar with smooth scroll-to-section functionality
- **Responsive Design**: Fully responsive across all device sizes
- **Accessible**: ARIA labels, keyboard navigation, and reduced motion support
- **Interactive Components**:
  - Provider profile modals
  - Testimonial carousel
  - FAQ accordion
  - Dual-tab referral form (patient & provider)

## Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About Us** - Mission statement and core values
3. **Services** - 6 service cards with icons
4. **Providers** - 3 provider profiles with expandable modals
5. **Testimonials** - Carousel with client testimonials
6. **FAQ** - Accordion with 10 common questions
7. **Referral Form** - Comprehensive form with patient/provider tabs
8. **Contact/Footer** - Contact information and quick links

## Customization

### Color Palette

Edit `app/globals.css` to customize the color scheme:

\`\`\`css
:root {
  --cream: #FEFAEF;
  --teal: #1D4C44;
  --sage: #B5C8C1;
  --gray-green: #99A199;
}
\`\`\`

### Logo

Replace `public/logo.png` with your own logo image.

### Content

- **Services**: Edit `components/services.tsx`
- **Providers**: Edit `components/providers.tsx`
- **Testimonials**: Edit `components/testimonials.tsx`
- **FAQs**: Edit `components/faq.tsx`

### Adding/Removing Sections

1. Create/remove component in `components/` directory
2. Import/remove in `app/page.tsx`
3. Add/remove navigation link in `components/navbar.tsx`

## API Integration

The referral form currently posts to `/api/referral` (stub). To integrate with your practice management system:

1. Edit `app/api/referral/route.ts`
2. Add database connection
3. Implement email notifications
4. Add validation and error handling

## Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Deploy to Vercel with one click or use the Vercel CLI:

\`\`\`bash
vercel
\`\`\`

## Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Reduced motion support for animations
- Proper color contrast ratios

## License

© 2025 WholeMind Behavioral Health & Wellness. All rights reserved.
