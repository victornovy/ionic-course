import { Quote } from '../data/quote.interface';

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((favQuote: Quote) => {
            return favQuote.id === quote.id;
        });

        this.favoriteQuotes.slice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }
}
