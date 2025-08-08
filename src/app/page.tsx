// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootRedirect() {
  redirect('/en'); // change to '/fr' if you want FR as default
}
