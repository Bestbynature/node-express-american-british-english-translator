const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translateAmericanToBritish(text) {
    let translatedText = text;

    Object.entries(americanOnly).forEach(([key, value]) => {
      const regex = new RegExp(`\\b${key}\\b`, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${value}</span>`
      );
    });

    Object.entries(americanToBritishSpelling).forEach(([key, value]) => {
      const regex = new RegExp(`\\b${key}\\b`, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${value}</span>`
      );
    });

    translatedText = translatedText.replace(
      /\b(\d{1,2}):(\d{2})\b/g,
      (match, p1, p2) => {
        return `<span class="highlight">${p1}.${p2}</span>`;
      }
    );

    const words = translatedText.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
      if (americanToBritishTitles.hasOwnProperty(words[i].toLowerCase())) {
        const britishTitle = americanToBritishTitles[words[i].toLowerCase()];
        words[i] = `<span class="highlight">${britishTitle
          .charAt(0)
          .toUpperCase()}${britishTitle.slice(1)}</span>`;
      }
    }
    translatedText = words.join(" ");

    console.log(translatedText);
    return { text, translation: translatedText };
  }

  translateBritishToAmerican(text) {
    let translatedText = text;

    const replacementKeys = Object.keys(britishOnly).sort(
      (a, b) => b.length - a.length
    );

    replacementKeys.forEach((key) => {
      const regex = new RegExp(`\\b${key}\\b`, "gi");
      const value = britishOnly[key];
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${value}</span>`
      );
    });

    Object.entries(americanToBritishSpelling).forEach(([key, value]) => {
      const regex = new RegExp(`\\b${value}\\b`, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${key}</span>`
      );
    });

    translatedText = translatedText.replace(
      /\b(\d{1,2})\.(\d{2})\b/g,
      (match, p1, p2) => {
        return `<span class="highlight">${p1}:${p2}</span>`;
      }
    );

    const words = translatedText.split(/\s+/);
    const britishTitles = Object.entries(americanToBritishTitles);
    for (let i = 0; i < words.length; i++) {
      britishTitles.forEach(([key, value]) => {
        if (words[i].toLowerCase() === value.toLowerCase()) {
          words[i] = `<span class="highlight">${key
            .charAt(0)
            .toUpperCase()}${key.slice(1)}</span>`;
        }
      });
    }
    translatedText = words.join(" ");

    console.log(translatedText);
    return { text, translation: translatedText };
  }
}

module.exports = Translator;
