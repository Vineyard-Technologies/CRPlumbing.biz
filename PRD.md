# CR Plumbing - Local Business Website

A professional online presence for CR Plumbing that builds trust with homeowners and generates service calls through clear service information and easy contact options.

**Experience Qualities**:
1. **Trustworthy** - Clean, professional design that instills confidence in the plumber's expertise and reliability
2. **Accessible** - Simple navigation and clear calls-to-action that make it easy for stressed homeowners to get help quickly
3. **Local** - Emphasizes Seattle eastside service area and community connection to build neighborhood trust

**Complexity Level**: Content Showcase (information-focused)
- Primary goal is to present services, build credibility, and facilitate contact rather than complex functionality

## Essential Features

**Service Overview Display**
- Functionality: Clear listing of all plumbing services offered (emergency repairs, installations, maintenance, etc.)
- Purpose: Helps customers understand what CR Plumbing can help with and establishes expertise
- Trigger: Immediate visibility on homepage
- Progression: Homepage hero → Service categories → Detailed service descriptions → Contact CTA
- Success criteria: Visitors can quickly identify if their plumbing need is covered

**Contact Information & Scheduling**
- Functionality: Prominent phone number, service area map, and contact form
- Purpose: Makes it effortless for customers to reach out when they have plumbing emergencies
- Trigger: Multiple contact buttons throughout site
- Progression: Service interest → Contact section → Phone call or form submission → Business response
- Success criteria: Multiple clear paths to contact, emergency number prominently displayed

**Trust Building Section**
- Functionality: Professional credentials, years of experience, customer testimonials/reviews
- Purpose: Builds confidence for customers choosing a plumber for their home
- Trigger: Natural discovery while browsing services
- Progression: Service interest → Credentials review → Increased confidence → Contact decision
- Success criteria: Clear display of licensing, insurance, and customer satisfaction

**Service Area Coverage**
- Functionality: Clear definition of Seattle eastside coverage area
- Purpose: Sets proper expectations and targets local SEO
- Trigger: Location-based customer questions
- Progression: Location concern → Service area confirmation → Booking confidence
- Success criteria: Customers know immediately if they're in the coverage area

## Edge Case Handling

- **Emergency Situations**: Prominent emergency contact number and 24/7 availability messaging
- **Out of Service Area**: Clear boundary definition with referral suggestions for nearby areas
- **Service Uncertainty**: Comprehensive service list with "call to discuss" options for edge cases
- **Mobile Usage**: Fully responsive design since many plumbing emergencies happen on mobile
- **Offline Contact**: Multiple contact methods (phone, form, email) in case one fails

## Design Direction

The design should feel professional, trustworthy, and approachable - like a reliable neighborhood expert who takes pride in quality work but isn't intimidating to homeowners facing plumbing stress.

## Color Selection

Complementary (opposite colors) - Using blue and warm orange to convey both trust/reliability (blue) and urgency/action (orange) that matches the plumbing industry's need for both dependability and quick response.

- **Primary Color**: Deep Professional Blue `oklch(0.4 0.15 240)` - Communicates trust, reliability, and professionalism
- **Secondary Colors**: Clean whites and light grays for background and text clarity
- **Accent Color**: Warm Orange `oklch(0.65 0.15 45)` - Attention-grabbing for emergency calls and primary CTAs
- **Foreground/Background Pairings**: 
  - Background (Clean White `oklch(0.98 0 0)`): Dark Blue text `oklch(0.2 0.1 240)` - Ratio 8.2:1 ✓
  - Primary Blue: White text `oklch(0.98 0 0)` - Ratio 7.1:1 ✓
  - Accent Orange: White text `oklch(0.98 0 0)` - Ratio 4.9:1 ✓
  - Card backgrounds `oklch(0.96 0 0)`: Dark text `oklch(0.2 0.1 240)` - Ratio 7.8:1 ✓

## Font Selection

Typography should be clean, professional, and highly legible for both desktop research and mobile emergency situations - favoring reliability over personality.

- **Typographic Hierarchy**:
  - H1 (Business Name): Inter Bold/32px/tight letter spacing
  - H2 (Service Categories): Inter Semibold/24px/normal spacing  
  - H3 (Service Items): Inter Medium/20px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Contact Info: Inter Semibold/18px for prominence
  - Emergency Number: Inter Bold/20px for maximum visibility

## Animations

Subtle and professional animations that guide attention without feeling frivolous - respecting that customers may be in stressful plumbing situations.

- **Purposeful Meaning**: Gentle hover effects on contact buttons reinforce interactive elements, subtle page transitions maintain professional feel
- **Hierarchy of Movement**: Emergency contact button gets subtle pulse animation, service cards have gentle hover lift, form validation provides immediate feedback

## Component Selection

- **Components**: 
  - Cards for service categories and testimonials
  - Button variants for primary (emergency contact) and secondary (general inquiry) actions
  - Form components for contact form with proper validation
  - Alert components for emergency messaging
  - Badge components for credentials and certifications
- **Customizations**: Custom hero section with background image, service area map integration, testimonial carousel
- **States**: 
  - Primary buttons: Bold blue with white text, orange hover state for urgency
  - Secondary buttons: Outlined style with blue border
  - Form inputs: Clean styling with blue focus states
  - Cards: Subtle shadow with gentle hover elevation
- **Icon Selection**: Lucide icons for services (wrench, phone, map-pin), simple and professional
- **Spacing**: Generous padding using Tailwind's 6/8/12 scale for breathing room and professional feel
- **Mobile**: Single column layout with enlarged touch targets for phone numbers, collapsible navigation, priority on contact methods