// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootRedirect() {
  // Always send "/" to English home
  redirect('/en');
}
