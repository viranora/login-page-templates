# Living Login Form - Nora's UI Gallery Component

<br>

<div align="center">
  <p><em>(Add a visual preview here)</em></p>
</div>

<br>

A sophisticated and subtly animated login form component, designed as part of Nora's UI Gallery – a collection showcasing advanced frontend experiments. This component focuses on creating an ambient and interactive user experience using glassmorphism, fluid background animations, and precise micro-interactions.

It demonstrates how standard form elements can be elevated through thoughtful animation and state-driven visual feedback.

<br>

## ✨ Key Features

* **Glassmorphism Card:** A frosted glass effect card using Tailwind CSS (`backdrop-blur`, opacity).
* **Ambient Background:** Soft, animated blobs (`AnimatedBlob.jsx`) that slowly morph and shift in the background using Framer Motion.
* **Reactive Background Colors:** The background blobs subtly change color (`transition-colors`) based on the validity of the email input (using React `useMemo`).
* **Animated Input Labels:** The input labels (`AnimatedInput.jsx`) animate upwards character by character (`staggerChildren`) when the input is focused or has value.
* **Animated Lock Icon:** A lock icon smoothly transitions between `LockClosedIcon` and `LockOpenIcon` (`AnimatePresence`, `@heroicons/react`) based on password field focus.
* **Animated Button State:** The submit button transitions gracefully into a loading spinner (`AnimatePresence`) during the simulated submission process.

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
    * Make sure Tailwind CSS is configured correctly.

2.  **Navigate to the component's route:**
    * Run the development server: `npm run dev`
    * This component is likely displayed on the root route (`/`) of the gallery project. Check `src/App.jsx` for the exact route configuration.

3.  **Integrate into your own project:**
    * Copy the `LivingLoginPage.jsx`, `AnimatedBlob.jsx`, and `AnimatedInput.jsx` components.
    * Install the required dependencies (`framer-motion`, `@heroicons/react`).
    * Ensure your project has Tailwind CSS set up.
    * Adapt the styling and routing as needed.

<br>

---

<div align="center">
  <p>Crafted with care, by</p>
  <h3>Nora</h3>
</div>
