# Changelog

All notable changes to the "Stop Last But Not Least" website.

## [Unreleased]

### Added
- **Title Header**: Added prominent "Stop Last But Not Least" title above the cat image with glowing red effect
- **Custom Favicon**: Created custom SVG favicon with red stop symbol matching the site theme
- **Grouped Interaction Design**: Button and counter now visually grouped in a unified card-style container
- **Extended Quote Collection**: Expanded from 7 to 22 snarky quotes for more variety
- **Smooth Quote Transitions**: Added fade-in/fade-out animation when changing quotes
- **Counter Pulse Animation**: Counter number now pulses and glows when incrementing
- **Interactive Cat Image**:
  - Hover effect removes grayscale and shows full color
  - Zoom effect on hover (scales to 1.05x)
  - Red glow effect on hover
  - Enhanced multi-layered shadows for depth
  - Increased border-radius for modern rounded corners (4px → 12px)
- **Celebration Animation at 100 Clicks**:
  - Full-screen overlay with achievement message
  - 200 confetti particles with glowing effects
  - Confetti falls for 5-8 seconds with staggered timing
  - Confetti appears in front of overlay (z-index: 1001)
  - Modal with bouncing entrance animation
  - Pulsing "ACHIEVEMENT UNLOCKED!" title
- **Replay Celebration Feature**:
  - Button to replay celebration animation
  - Only visible after reaching 100 clicks
  - Persists across page reloads using localStorage
- **Meta Tags**: Added Open Graph and Twitter Card meta tags for better social sharing
- **Meta Description**: Added SEO-friendly meta description

### Changed
- **Responsive Design**: Optimized layout to fit MacBook Pro screen without scrolling
  - Reduced cat image size (450px → 280px)
  - Reduced title size (3.5rem → 2.5rem)
  - Reduced quote text size (1.6rem → 1.1rem)
  - Tightened spacing throughout
- **Counter Display**: Increased counter number size and prominence (2.5rem → 1.8rem with glow)
- **Image Border**: Reduced from 4px to 3px for cleaner look
- **Mobile Responsive**: Enhanced mobile breakpoints for better small screen experience

### Technical Improvements
- **Code Refactoring**: Removed repetition by extracting quote prefix into constant
- **Configurable Threshold**: Extracted celebration trigger value (100) into `celebrationThreshold` variable
- **Dynamic Message**: Celebration message dynamically uses threshold variable
- **Type Safety**: Added `parseInt()` to counter initialization for proper number handling
- **Performance**: Optimized confetti cleanup with proper timeouts

### Design System
- **Color Palette**: Consistent red accent color (#ff4d4d) throughout
- **Typography**: Monospace font (Courier New) for tech-snarky aesthetic
- **Shadows**: Multi-layered shadow system for depth
- **Animations**: Smooth 0.3-0.5s transitions for all interactive elements
- **Dark Theme**: Dark background (#121212) optimized for long viewing sessions

---

*Website URL: https://laurent-clouet.fr/stop-last-but-not-least/*
