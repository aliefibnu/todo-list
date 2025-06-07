declare module "inspirational-quotes" {
  /**
   * Represents a quote object with text and optional author.
   */
  interface Quote {
    text: string;
    author?: string;
  }

  /**
   * Options for the getQuote function.
   */
  interface QuoteOptions {
    author?: boolean;
  }

  /**
   * Returns a random quote as a string.
   * @deprecated This method will be deprecated soon.
   */
  function getRandomQuote(): string;

  /**
   * Returns a random quote with optional author information.
   * @param options - Configuration options to include or exclude the author.
   */
  function getQuote(options?: QuoteOptions): Quote;

  export { getRandomQuote, getQuote, Quote, QuoteOptions };
}
