import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/react-app/index.css";
import App from "@/react-app/App.tsx";
import { ThemeProvider } from "@/react-app/components/ThemeProvider";

// CSS variables for prose styling
const style = document.createElement('style');
style.textContent = `
  .prose {
    max-width: none;
  }

  .prose h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .prose h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .prose p {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    line-height: 1.7;
  }

  .prose ul {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  .prose li {
    margin-top: 0.5rem;
    line-height: 1.7;
  }

  .prose a {
    color: hsl(var(--primary));
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .prose a:hover {
    text-decoration: none;
  }

  .prose code {
    background: hsl(var(--muted));
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
  }

  .prose-neutral {
    --tw-prose-body: hsl(var(--foreground));
    --tw-prose-headings: hsl(var(--foreground));
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="rnr-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
