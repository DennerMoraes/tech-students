# Project Next.js - Teach Students

https://teach-students.netlify.app/

## Pre requisites
Before you begin, make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

## Instructions to Run

### 1. Clone the Repository

Open the terminal and run the following command to clone the repository:

```bash
git clone https://github.com/DennerMoraes/tech-students.git
```

### 2. Navigate to the Project Directory
After the repository is cloned, navigate to the project directory:

```bash
cd teach-students
```

### 3. Install Dependencies
Install all the necessary dependencies using npm.

```bash
npm install
```

### 4. Run the Project
After installing the dependencies, you can start the development server.

```bash
npm run dev
```

### 5. Access the Application
Open your browser and go to:

```bash
http://localhost:3000
```

The React application should be running and accessible from this address.

### Project Structure

- public/ - Static public files, images.
- src/ -  Source code files for React, including components, styles, and tests.
- package.json - Contains project metadata and a list of dependencies.

---

# Component Overview Documentation

This document provides a high-level summary of the components in the project. It outlines their responsibilities and key features.

---

### Button.tsx

A reusable button component used throughout the app. It supports:
- Variants (e.g., primary, secondary) for consistent styling.
- Optional icons.
- Customizable appearance via props.

**Purpose:**  
To provide a standardized way to trigger actions or navigate.

---

### Carousel.tsx

Implements a responsive image carousel with:
- Pagination using Swiper.js.
- Image optimization via `next/image`.
- Flexible layout for different screen sizes.

**Purpose:**  
To display a scrollable set of items or promotional content.

---

### Counter.tsx

A numeric counter display that uses animation to count up from 0 to a target value.

**Purpose:**  
Useful for stats, KPIs, or any dynamic number display.

---

### CounterAnimation.tsx

A utility component that leverages `framer-motion` and `react-intersection-observer` to animate numeric counters when they come into view.

**Purpose:**  
To power animated statistics that are only triggered when visible in the viewport.

---

### FadeInWhenVisible.tsx

A wrapper component that applies a fade-in animation to its children when they become visible in the viewport.

**Purpose:**  
To create engaging scroll-based animations for any content block.

---

### Footer.tsx

A responsive site footer including:
- Company branding.
- Multiple link sections (Products, Solutions, etc.).
- Secondary links (Terms, Privacy, etc.).
- Language and accessibility controls.

**Purpose:**  
Provides navigation, brand presence, and compliance links at the bottom of pages.

---

### Header.tsx

The main navigation bar at the top of the page. It includes:
- Brand logo.
- Navigation links.
- Call-to-action buttons (like Login or Sign up).
- Mobile-responsive menu toggled with a hamburger icon.

**Purpose:**  
To facilitate primary navigation and reinforce brand identity.

---

### Icon.tsx

A utility component to render SVG icons by name, from a predefined icon set.

**Purpose:**  
Enables easy and consistent use of custom icons across the app.

---

### TeaserButton.tsx

A full-width teaser section with:
- Title and description text.
- A CTA button styled for emphasis.
- Background color and centered layout.

**Purpose:**  
To draw attention to important calls to action.

---

### TeaserHero.tsx

A large promotional hero section that includes:
- Title, subtitle, and one or two CTA buttons.
- Responsive layout with a focus on typography.
- Emphasis on visual hierarchy.

**Purpose:**  
To introduce the page or product with strong messaging and a clear action.

---

### TeaserMessage.tsx

A call-to-action section with a message and contact form. It includes:
- A title and description centered on an orange background.
- An email + message form with input validation and accessibility labels.
- A styled submit button using consistent design tokens.

**Purpose:**  
Used to collect contact or feedback information from users in a visually prominent way.

---

### TeaserYellow.tsx

A visually engaging promotional section with:
- A title and description over a yellow background.
- A prominent CTA button (reusing the shared `Button` component).
- Responsive decorative imagery (desktop and mobile variants) positioned absolutely for visual balance.

**Purpose:**  
Ideal for highlighting features or inviting users to take action, with brand-themed visuals.
