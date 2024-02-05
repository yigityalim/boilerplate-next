import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { env } from '@/env.mjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  input: string | number,
  locale: 'tr_TR' | 'en_US',
): string {
  return new Date(input).toLocaleDateString(locale ?? 'tr_TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}
