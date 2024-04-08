'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;

      if (text === undefined || locale === undefined) {
        return res.json({ error: 'Required field(s) missing' });
      }

      if (text.trim() === '') {
        return res.status(200).json({ error: 'No text to translate' });
      }

      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' });
      }

      let translatedText;
      if (locale === 'american-to-british') {
        translatedText = translator.translateAmericanToBritish(text);
      } else {
        translatedText = translator.translateBritishToAmerican(text);
      }

      console.log("text is", text)
      console.log('tranlatedText is', translatedText)

      if (translatedText.translation === text) {
        return res.status(200).json({text, translation: 'Everything looks good to me!' });
      }

      return res.json({text, translation: translatedText.translation });
    });
};
