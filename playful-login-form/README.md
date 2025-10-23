# Playful Login Form - Nora's UI Gallery Component


An energetic, colorful, and highly animated login form component, designed as part of Nora's UI Gallery – a collection showcasing advanced frontend experiments. This component focuses on creating a fun and engaging user experience using spring physics, dynamic layouts, and interactive background elements.

It reimagines the standard login process as a playful "assembly" of elements.

<br>

## ✨ Key Features

* **Vibrant Gradient Background:** Uses a lively CSS gradient defined in Tailwind CSS configuration.
* **Interactive Mouse Follower:** Features multiple colorful, blurred bubbles (`MouseFollower.jsx`) that follow the mouse cursor at varying speeds and stay within the screen bounds (using Framer Motion `useMotionValue`, `useSpring`, `useTransform`).
* **"Assembly" Entrance Animation:** Form elements (title, inputs, button) fly in from different directions with rotation and spring physics (`staggerChildren`, `variants`, `type: 'spring'`).
* **Bouncy Input Focus:** Input fields slightly bounce and scale up (`whileFocus`, `spring`) when focused (`PlayfulInput.jsx`).
* **Playful Label Animation:** Input labels jump up and shrink with a spring animation when the input is active (`variants`, `spring`).
* **Animated Show/Hide Password:** The eye icon for password visibility transitions smoothly between states (`AnimatePresence`, `@heroicons/react`).
* **Gradient Button with Effects:** The submit button features a gradient background, an expressive tap animation (`whileTap`), and a bouncy loading indicator (`PlayfulLoader.jsx`).

<br>

## 🚀 Tech Stack

* **Core:** React.js
* **Animation:** Framer Motion
* **Styling:** Tailwind CSS
* **Icons:** Heroicons (`@heroicons/react/24/solid`)

<br>

## 🔧 How to Use / View

This component is part of the `nora-ui-gallery` project.

1.  **Ensure the main project is set up:**
    * Clone the `nora-ui-gallery` repository.
    * Install dependencies: `npm install`
    * Make sure Tailwind CSS is configured correctly (including the custom `playful-*` colors in `tailwind.config.js`).

2.  **Navigate to the component's route:**
    * Run the development server: `npm run dev`
    * This component might be displayed on the root route (`/`) or a specific route like `/playful-login`. Check `src/App.jsx` for the exact route configuration.

3.  **Integrate into your own project:**
    * Copy the `PlayfulLoginPage.jsx`, `MouseFollower.jsx`, and `PlayfulInput.jsx` components.
    * Install the required dependencies (`framer-motion`, `@heroicons/react`).
    * Ensure your project has Tailwind CSS set up, and add the necessary custom colors to your `tailwind.config.js`.
    * Adapt the styling and routing as needed.

<br>

---

<div align="center">
  <p>Crafted with fun, by</p>
  <h3>Nora</h3>
</div>
