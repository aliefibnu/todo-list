import { quotes } from "./data";

export function getRandomQuote(): string {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
export function getAllQuotes(): string[] {
  return quotes;
}
export function getQuoteByIndex(index: number): string | null {
  if (index < 0 || index >= quotes.length) {
    return null;
  }
  return quotes[index];
}
export function getQuoteCount(): number {
  return quotes.length;
}
