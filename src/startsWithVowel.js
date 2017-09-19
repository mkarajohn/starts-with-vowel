const en = ['a', 'e', 'i', 'o', 'u', 'y', 'x-'];

function startsWithVowel(word, vowels = en) {
  const normalisedWord = word.toLowerCase();
  return vowels.some(vowel => normalisedWord.startsWith(vowel));
}

export function startsWithVowelEnglish(word) {
  return startsWithVowel(word, en);
}

export default startsWithVowel;
