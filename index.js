class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically once during initialization
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let result = [];
    let prefix = "";

    for (let i = 0; i < searchWord.length; i++) {
      prefix += searchWord[i];
      let suggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
        }
        if (suggestions.length === 3) break;
      }

      result.push(suggestions);
    }

    return result;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
const output = system.getSuggestions(searchWord);

console.log(output);
