const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  test("Translate Mangoes are my favorite fruit. to British English", () => {
    const translator = new Translator();
    const text = "Mangoes are my favorite fruit.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate I ate yogurt for breakfast. to British English", () => {
    const translator = new Translator();
    const text = "I ate yogurt for breakfast.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate We had a party at my friend's condo. to British English", () => {
    const translator = new Translator();
    const text = "We had a party at my friend's condo.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'We had a party at my friend\'s <span class="highlight">flat</span>.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate Can you toss this in the trashcan for me? to British English", () => {
    const translator = new Translator();
    const text = "Can you toss this in the trashcan for me?";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'Can you toss this in the <span class="highlight">bin</span> for me?';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate The parking lot was full. to British English", () => {
    const translator = new Translator();
    const text = "The parking lot was full.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'The <span class="highlight">car park</span> was full.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
    const translator = new Translator();
    const text = "Like a high tech Rube Goldberg machine.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'Like a high tech <span class="highlight">Heath Robinson device</span>.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate To play hooky means to skip class or work. to British English", () => {
    const translator = new Translator();
    const text = "To play hooky means to skip class or work.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'To <span class="highlight">bunk off</span> means to skip class or work.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate No Mr. Bond, I expect you to die. to British English", () => {
    const translator = new Translator();
    const text = "No Mr. Bond, I expect you to die.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'No <span class="highlight">Mr</span> Bond, I expect you to die.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate Dr. Grosh will see you now. to British English", () => {
    const translator = new Translator();
    const text = "Dr. Grosh will see you now.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      '<span class="highlight">Dr</span> Grosh will see you now.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate Lunch is at 12:15 today. to British English", () => {
    const translator = new Translator();
    const text = "Lunch is at 12:15 today.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'Lunch is at <span class="highlight">12.15</span> today.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate We watched the footie match for a while. to American English", () => {
    const translator = new Translator();
    const text = "We watched the footie match for a while.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate Paracetamol takes up to an hour to work. to American English", () => {
    const translator = new Translator();
    const text = "Paracetamol takes up to an hour to work.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate First, caramelise the onions. to American English", () => {
    const translator = new Translator();
    const text = "First, caramelise the onions.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'First, <span class="highlight">caramelize</span> the onions.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate I spent the bank holiday at the funfair. to American English", () => {
    const translator = new Translator();
    const text = "I spent the bank holiday at the funfair.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate I had a bicky then went to the chippy. to American English", () => {
    const translator = new Translator();
    const text = "I had a bicky then went to the chippy.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
    const translator = new Translator();
    const text = "I've just got bits and bobs in my bum bag.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
    const translator = new Translator();
    const text = "The car boot sale at Boxted Airfield was called off.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate Have you met Mrs Kalyani? to American English", () => {
    const translator = new Translator();
    const text = "Have you met Mrs Kalyani?";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'Have you met <span class="highlight">Mrs.</span> Kalyani?';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate Prof Joyner of King's College, London. to American English", () => {
    const translator = new Translator();
    const text = "Prof Joyner of King's College, London.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
    const translator = new Translator();
    const text = "Tea time is usually around 4 or 4.30.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Highlight translation in Mangoes are my favorite fruit.", () => {
    const translator = new Translator();
    const text = "Mangoes are my favorite fruit.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Highlight translation in I ate yogurt for breakfast.", () => {
    const translator = new Translator();
    const text = "I ate yogurt for breakfast.";
    const translatedText = translator.translateAmericanToBritish(text);
    const expectedResult =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Highlight translation in We watched the footie match for a while.", () => {
    const translator = new Translator();
    const text = "We watched the footie match for a while.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translatedText.translation, expectedResult);
  });

  test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
    const translator = new Translator();
    const text = "Paracetamol takes up to an hour to work.";
    const translatedText = translator.translateBritishToAmerican(text);
    const expectedResult =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translatedText.translation, expectedResult);
  });
});
