import { WorksheetData } from '../types';

const alphabetLetters = [
  { char: 'A', name: 'Letter A', word1: 'Apple', word2: 'Ant', word3: 'Airplane', sentence: 'An apple a day keeps the doctor away.' },
  { char: 'B', name: 'Letter B', word1: 'Bear', word2: 'Ball', word3: 'Book', sentence: 'The brown bear reads a big book.' },
  { char: 'C', name: 'Letter C', word1: 'Cat', word2: 'Car', word3: 'Cake', sentence: 'The cute cat sits in the car.' },
  { char: 'D', name: 'Letter D', word1: 'Dog', word2: 'Duck', word3: 'Door', sentence: 'The happy dog barks at the duck.' },
  { char: 'E', name: 'Letter E', word1: 'Elephant', word2: 'Egg', word3: 'Engine', sentence: 'The big elephant eats a green leaf.' },
  { char: 'F', name: 'Letter F', word1: 'Fish', word2: 'Frog', word3: 'Flower', sentence: 'The little fish swims fast in the lake.' },
  { char: 'G', name: 'Letter G', word1: 'Giraffe', word2: 'Garden', word3: 'Gift', sentence: 'The tall giraffe walks in the green garden.' },
  { char: 'H', name: 'Letter H', word1: 'Hat', word2: 'House', word3: 'Horse', sentence: 'The horse wears a funny hat.' },
  { char: 'I', name: 'Letter I', word1: 'Igloo', word2: 'Ice', word3: 'Insect', sentence: 'An igloo is made of cold white ice.' },
  { char: 'J', name: 'Letter J', word1: 'Jacket', word2: 'Jelly', word3: 'Juice', sentence: 'Lucas wears a warm blue jacket.' },
  { char: 'K', name: 'Letter K', word1: 'Kite', word2: 'King', word3: 'Kangaroo', sentence: 'The kangaroo flies a diamond kite.' },
  { char: 'L', name: 'Letter L', word1: 'Lion', word2: 'Lemon', word3: 'Leaf', sentence: 'The brave lion roars in the savannah.' },
  { char: 'M', name: 'Letter M', word1: 'Monkey', word2: 'Moon', word3: 'Milk', sentence: 'The playful monkey drinks cold milk.' },
  { char: 'N', name: 'Letter N', word1: 'Nest', word2: 'Nut', word3: 'Nine', sentence: 'A little bird sits in the warm nest.' },
  { char: 'O', name: 'Letter O', word1: 'Owl', word2: 'Orange', word3: 'Octopus', sentence: 'The wise owl watches the bright moon.' },
  { char: 'P', name: 'Letter P', word1: 'Penguin', word2: 'Pizza', word3: 'Pencil', sentence: 'The penguin eats delicious cheese pizza.' },
  { char: 'Q', name: 'Letter Q', word1: 'Queen', word2: 'Quiet', word3: 'Question', sentence: 'The kind queen wears a shiny gold crown.' },
  { char: 'R', name: 'Letter R', word1: 'Rocket', word2: 'Rainbow', word3: 'Rabbit', sentence: 'The powerful rocket flies to the stars.' },
  { char: 'S', name: 'Letter S', word1: 'Sun', word2: 'Star', word3: 'Shark', sentence: 'The yellow sun shines bright and warm.' },
  { char: 'T', name: 'Letter T', word1: 'Tree', word2: 'Tiger', word3: 'Train', sentence: 'The fast train travels across the bridge.' },
  { char: 'U', name: 'Letter U', word1: 'Umbrella', word2: 'Unicorn', word3: 'Under', sentence: 'Open your umbrella when it rains.' },
  { char: 'V', name: 'Letter V', word1: 'Violin', word2: 'Van', word3: 'Volcano', sentence: 'Sarah plays sweet music on her violin.' },
  { char: 'W', name: 'Letter W', word1: 'Whale', word2: 'Water', word3: 'Watch', sentence: 'The giant blue whale swims in deep water.' },
  { char: 'X', name: 'Letter X', word1: 'Xylophone', word2: 'Fox', word3: 'Box', sentence: 'Play a happy tune on the wooden xylophone.' },
  { char: 'Y', name: 'Letter Y', word1: 'Yacht', word2: 'Yellow', word3: 'Yogurt', sentence: 'The yellow yacht sails on the blue sea.' },
  { char: 'Z', name: 'Letter Z', word1: 'Zebra', word2: 'Zoo', word3: 'Zero', sentence: 'The striped zebra runs fast in the zoo.' }
];

export const alphabetWorksheets: WorksheetData[] = alphabetLetters.map((l) => {
  const upper = l.char;
  const lower = l.char.toLowerCase();

  return {
    id: `g1_alphabet_letter_${lower}`,
    grade: 1,
    category: 'alphabet',
    isFree: true,
    letter: upper,
    titleEn: `Letter ${upper}${lower} Handwriting & Phonics`,
    titleKa: `ასო ${upper}${lower} - გამოწერა და ფონეტიკა`,
    topicEn: `Phonics Sound /${lower}/ & Words: ${l.word1}, ${l.word2}, ${l.word3}`,
    topicKa: `ასო ${upper}${lower} გამოწერა და ლექსიკა`,
    difficulty: 'Easy',
    instructionsEn: `Trace the uppercase ${upper} and lowercase ${lower}, circle all ${upper} and ${lower} letters in the word maze, and copy the vocabulary words.`,
    instructionsKa: `გამოწერე დიდი ${upper} და პატარა ${lower} ასოები, შემოხაზე ლაბირინთში და დაწერე სიტყვები.`,
    icon: 'alphabet',
    previewArt: 'alphabet',
    sections: [
      {
        headingEn: `Section 1: Uppercase & Lowercase Tracing (${upper} ${lower})`,
        headingKa: `ნაწილი 1: ასოს გამოწერა`,
        items: [
          { prompt: `• Trace Uppercase [ ${upper} ]:`, trace: `${upper}   ${upper}   ${upper}   ${upper}   ${upper}`, line: `${upper} ${upper} ${upper} ${upper} ${upper}` },
          { prompt: `• Trace Lowercase [ ${lower} ]:`, trace: `${lower}   ${lower}   ${lower}   ${lower}   ${lower}`, line: `${lower} ${lower} ${lower} ${lower} ${lower}` },
          { prompt: `• Trace Pairs [ ${upper}${lower} ]:`, trace: `${upper}${lower}   ${upper}${lower}   ${upper}${lower}   ${upper}${lower}`, line: `${upper}${lower} ${upper}${lower} ${upper}${lower}` }
        ]
      },
      {
        headingEn: `Section 2: Phonics Sound & Vocabulary Words (${upper} is for...)`,
        headingKa: `ნაწილი 2: სიტყვები და ფონეტიკა`,
        items: [
          { prompt: `1. ${upper} is for ➔ ${l.word1}:`, trace: l.word1, line: l.word1 },
          { prompt: `2. ${upper} is for ➔ ${l.word2}:`, trace: l.word2, line: l.word2 },
          { prompt: `3. ${upper} is for ➔ ${l.word3}:`, trace: l.word3, line: l.word3 },
          { sentence: `Story Sentence: "${l.sentence}"` }
        ]
      },
      {
        headingEn: `Section 3: Letter Detection Maze (Find and Circle all "${upper}" and "${lower}")`,
        headingKa: `ნაწილი 3: ასოს პოვნა`,
        items: [
          { prompt: `Maze: [ ${upper}   b   ${lower}   m   ${upper}   t   ${lower}   k   ${upper}   ${lower}   p   ${upper}   s   ${lower} ]` }
        ]
      }
    ],
    answerKey: [
      `Letter ${upper}${lower} tracing completed.`,
      `Words: ${l.word1}, ${l.word2}, ${l.word3}`,
      `Sentence: "${l.sentence}"`
    ]
  };
});
