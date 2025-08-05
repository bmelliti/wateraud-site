// src/components/layout/SkipLink.tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link fixed -left-[9999px] top-4 z-50 bg-primary-600 text-white
                 px-4 py-2 rounded-lg focus:left-4 focus:outline-none
                 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
