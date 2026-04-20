@tailwind base;
@tailwind components;
@tailwind utilities;

/* Definition of the design system. All colors, gradients, fonts, etc should be defined here. 
All colors MUST be HSL.
*/

@layer base {
  :root {
    /* Romantic pastel daisy + plushie palette */
    --background: 340 60% 98%;
    --foreground: 340 30% 22%;

    --card: 0 0% 100%;
    --card-foreground: 340 30% 22%;

    --popover: 0 0% 100%;
    --popover-foreground: 340 30% 22%;

    /* Soft pink primary */
    --primary: 340 80% 70%;
    --primary-foreground: 0 0% 100%;

    /* Lavender secondary */
    --secondary: 280 60% 90%;
    --secondary-foreground: 280 40% 30%;

    --muted: 50 80% 95%;
    --muted-foreground: 340 15% 50%;

    /* Daisy yellow accent */
    --accent: 50 95% 75%;
    --accent-foreground: 340 40% 25%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 340 40% 90%;
    --input: 340 40% 92%;
    --ring: 340 80% 70%;

    --radius: 1.25rem;

    /* Custom romantic tokens */
    --blush: 340 90% 88%;
    --petal: 50 100% 92%;
    --lavender: 280 70% 88%;
    --mint: 150 50% 88%;
    --heart: 350 85% 65%;

    --gradient-romantic: linear-gradient(135deg, hsl(340 90% 95%) 0%, hsl(50 95% 92%) 50%, hsl(280 80% 94%) 100%);
    --gradient-sunset: linear-gradient(180deg, hsl(340 100% 96%) 0%, hsl(50 100% 95%) 100%);
    --gradient-button: linear-gradient(135deg, hsl(340 85% 72%), hsl(350 90% 75%));

    --shadow-soft: 0 10px 40px -10px hsl(340 80% 70% / 0.3);
    --shadow-plush: 0 20px 60px -15px hsl(340 70% 60% / 0.35);
    --shadow-glow: 0 0 60px hsl(50 100% 80% / 0.6);

    --transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    --sidebar-background: 0 0% 98%;

    --sidebar-foreground: 240 5.3% 26.1%;

    --sidebar-primary: 240 5.9% 10%;

    --sidebar-primary-foreground: 0 0% 98%;

    --sidebar-accent: 240 4.8% 95.9%;

    --sidebar-accent-foreground: 240 5.9% 10%;

    --sidebar-border: 220 13% 91%;

    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Quicksand', system-ui, -apple-system, sans-serif;
    background: var(--gradient-romantic);
    background-attachment: fixed;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Pacifico', 'Quicksand', cursive;
  }
}

@layer utilities {
  .font-display { font-family: 'Pacifico', cursive; }
  .font-hand { font-family: 'Caveat', cursive; }
  .shadow-soft { box-shadow: var(--shadow-soft); }
  .shadow-plush { box-shadow: var(--shadow-plush); }
  .shadow-glow { box-shadow: var(--shadow-glow); }
  .bg-gradient-romantic { background: var(--gradient-romantic); }
  .bg-gradient-button { background: var(--gradient-button); }
  .bg-gradient-sunset { background: var(--gradient-sunset); }
  .text-heart { color: hsl(var(--heart)); }
  .bg-blush { background-color: hsl(var(--blush)); }
  .bg-petal { background-color: hsl(var(--petal)); }
  .bg-lavender { background-color: hsl(var(--lavender)); }
}
