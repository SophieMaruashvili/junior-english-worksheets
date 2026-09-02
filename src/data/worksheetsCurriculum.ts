import { WorksheetData, PricingPlan } from '../types';

export const allWorksheets: WorksheetData[] = [
  // ================= GRADE 1 (ESL Pre-A1 Starters) =================
  {
    id: 'g1_cvc_rhymes',
    grade: 1,
    category: 'phonics',
    isFree: true,
    titleEn: 'CVC Phonics & 3-Letter Word Families',
    titleKa: 'CVC მოკლე სიტყვები და ფონეტიკა',
    topicEn: 'Short Vowels: -at, -ig, -og, -un Families',
    topicKa: '3-ასოიანი სიტყვები (Cat, Hat, Pig, Dog, Sun)',
    difficulty: 'Easy',
    instructionsEn: 'Read each 3-letter word, trace the dotted letters, and write the word on the line.',
    instructionsKa: 'წაიკითხე სიტყვა, გამოწერე წერტილოვანი ასოები და გადაწერე ხაზზე.',
    icon: 'cat',
    previewArt: 'cat',
    sections: [
      {
        headingEn: 'Section A: The "-AT" Family (Trace & Write)',
        headingKa: 'ჯგუფი A: „-AT“ სიტყვები',
        items: [
          { prompt: '1. c - a - t ➔ cat (says meow!)', trace: 'cat', line: 'c a t' },
          { prompt: '2. h - a - t ➔ hat (wear it on your head)', trace: 'hat', line: 'h a t' },
          { prompt: '3. b - a - t ➔ bat (flies at night)', trace: 'bat', line: 'b a t' },
          { prompt: '4. m - a - t ➔ mat (wipe your shoes)', trace: 'mat', line: 'm a t' }
        ]
      },
      {
        headingEn: 'Section B: The "-IG", "-OG" & "-UN" Families (Trace & Write)',
        headingKa: 'ჯგუფი B: „-IG“, „-OG“ და „-UN“ სიტყვები',
        items: [
          { prompt: '5. p - i - g ➔ pig (farm animal that says oink)', trace: 'pig', line: 'p i g' },
          { prompt: '6. d - i - g ➔ dig (dogs dig in the garden)', trace: 'dig', line: 'd i g' },
          { prompt: '7. d - o - g ➔ dog (says woof-woof!)', trace: 'dog', line: 'd o g' },
          { prompt: '8. l - o - g ➔ log (a piece of tree wood)', trace: 'log', line: 'l o g' },
          { prompt: '9. s - u - n ➔ sun (shines bright in the sky)', trace: 'sun', line: 's u n' }
        ]
      }
    ],
    answerKey: [
      '1. cat', '2. hat', '3. bat', '4. mat',
      '5. pig', '6. dig', '7. dog', '8. log', '9. sun'
    ]
  },
  {
    id: 'g1_seasons_days',
    grade: 1,
    category: 'vocabulary',
    isFree: true,
    titleEn: '4 Seasons & 7 Days of the Week',
    titleKa: '4 სეზონი და კვირის 7 დღე',
    topicEn: 'Calendar Vocabulary: Spring, Summer, Autumn, Winter & Days',
    topicKa: 'სეზონები, ამინდი და დღეები',
    difficulty: 'Easy',
    instructionsEn: 'Trace the seasonal words and write the days of the week in correct order from Monday to Sunday.',
    instructionsKa: 'გამოწერე სეზონები და დაწერე კვირის დღეები თანმიმდევრობით.',
    icon: 'spring',
    previewArt: 'spring',
    sections: [
      {
        headingEn: 'Section A: The 4 Seasons (Trace & Learn)',
        headingKa: 'ნაწილი A: 4 სეზონი',
        items: [
          { prompt: '1. Spring (green leaves and flowers bloom)', trace: 'Spring', line: 'S p r i n g' },
          { prompt: '2. Summer (hot and sunny weather)', trace: 'Summer', line: 'S u m m e r' },
          { prompt: '3. Autumn (golden leaves fall from trees)', trace: 'Autumn', line: 'A u t u m n' },
          { prompt: '4. Winter (cold weather and white snow)', trace: 'Winter', line: 'W i n t e r' }
        ]
      },
      {
        headingEn: 'Section B: Days of the Week (Monday to Sunday)',
        headingKa: 'ნაწილი B: კვირის დღეები',
        items: [
          { prompt: '• Day 1: Monday (start of the school week)', trace: 'Monday', line: 'M o n d a y' },
          { prompt: '• Day 2: Tuesday', trace: 'Tuesday', line: 'T u e s d a y' },
          { prompt: '• Day 3: Wednesday (middle of the week)', trace: 'Wednesday', line: 'W e d n e s d a y' },
          { prompt: '• Day 4: Thursday', trace: 'Thursday', line: 'T h u r s d a y' },
          { prompt: '• Day 5: Friday (last school day)', trace: 'Friday', line: 'F r i d a y' },
          { prompt: '• Day 6: Saturday (weekend playtime)', trace: 'Saturday', line: 'S a t u r d a y' },
          { prompt: '• Day 7: Sunday (family rest day)', trace: 'Sunday', line: 'S u n d a y' }
        ]
      }
    ],
    answerKey: [
      'Spring, Summer, Autumn, Winter',
      'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    ]
  },
  {
    id: 'g1_color_sight_words',
    grade: 1,
    category: 'reading',
    isFree: true,
    titleEn: 'Sight Words & Color Sentences',
    titleKa: 'პირველი საკვანძო სიტყვები (Sight Words)',
    topicEn: 'Basic Sight Words: I see, I have, It is, Look at',
    topicKa: 'მარტივი წინადადებები (I see, It is, I have)',
    difficulty: 'Easy',
    instructionsEn: 'Complete the sentences using words from the Word Bank: [ SEE , HAVE , IS , LIKE , LOOK ].',
    instructionsKa: 'შეავსე წინადადებები მოცემული სიტყვებით.',
    icon: 'rainbow',
    previewArt: 'rainbow',
    sections: [
      {
        headingEn: 'Word Bank: [ SEE , HAVE , IS , LIKE , LOOK ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. I ________ a little yellow duck in the water.', hint: 'Word: see', line: 'see' },
          { sentence: '2. It ________ a sunny warm day today.', hint: 'Word: is', line: 'is' },
          { sentence: '3. I ________ two small dogs at home.', hint: 'Word: have', line: 'have' },
          { sentence: '4. I ________ sweet red apples and bananas.', hint: 'Word: like', line: 'like' },
          { sentence: '5. ________ at the colorful rainbow in the sky!', hint: 'Word: Look', line: 'Look' },
          { sentence: '6. I ________ a big blue school bag.', hint: 'Word: have', line: 'have' }
        ]
      }
    ],
    answerKey: ['1. see', '2. is', '3. have', '4. like', '5. Look', '6. have']
  },

  // ================= GRADE 2 (ESL Pre-A1 to A1 Beginners) =================
  {
    id: 'g2_have_got_has_got',
    grade: 2,
    category: 'grammar',
    isFree: true,
    titleEn: 'Have Got / Has Got (My Toys & Pets)',
    titleKa: 'Have got / Has got (ქონა და ყოლა)',
    topicEn: 'Expressing Possession: I have got / He has got / She has got',
    topicKa: 'have got და has got-ის გარჩევა და გამოყენება',
    difficulty: 'Easy',
    instructionsEn: 'Fill in the blanks with "have got" (for I, You, We, They) or "has got" (for He, She, It).',
    instructionsKa: 'ჩასვი "have got" ან "has got" ნაცვალსახელის მიხედვით.',
    icon: 'cat',
    previewArt: 'cat',
    sections: [
      {
        headingEn: 'Rule: [ I / You / We / They ➔ HAVE GOT ] | [ He / She / It ➔ HAS GOT ]',
        headingKa: 'წესი: I/You/We/They ➔ have got, He/She/It ➔ has got',
        items: [
          { sentence: '1. I ____________________ a new red bicycle.', hint: 'Subject: I', line: 'have got' },
          { sentence: '2. He ____________________ a small white kitten.', hint: 'Subject: He', line: 'has got' },
          { sentence: '3. She ____________________ three blue pencils.', hint: 'Subject: She', line: 'has got' },
          { sentence: '4. We ____________________ a big green garden.', hint: 'Subject: We', line: 'have got' },
          { sentence: '5. They ____________________ two friendly dogs.', hint: 'Subject: They', line: 'have got' },
          { sentence: '6. The cat ____________________ green eyes.', hint: 'Subject: The cat (It)', line: 'has got' },
          { sentence: '7. Anna ____________________ a warm winter jacket.', hint: 'Subject: Anna (She)', line: 'has got' },
          { sentence: '8. You ____________________ an English book.', hint: 'Subject: You', line: 'have got' }
        ]
      }
    ],
    answerKey: [
      '1. have got', '2. has got', '3. has got', '4. have got',
      '5. have got', '6. has got', '7. has got', '8. have got'
    ]
  },
  {
    id: 'g2_can_cant_abilities',
    grade: 2,
    category: 'grammar',
    isFree: true,
    titleEn: 'Can & Can\'t (Action Abilities & Animals)',
    titleKa: 'Can და Can\'t (შესაძლებლობები)',
    topicEn: 'Abilities: What animals and people can / cannot do',
    topicKa: 'can (შეუძლია) და can\'t (არ შეუძლია)',
    difficulty: 'Easy',
    instructionsEn: 'Complete the sentences with "can" (Yes) or "can\'t" (No).',
    instructionsKa: 'შეავსე წინადადებები "can" ან "can\'t"-ით.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Choose: [ CAN (can do) / CAN\'T (cannot do) ]',
        headingKa: 'შეარჩიე: can ან can\'t',
        items: [
          { sentence: '1. A bird ________ fly high in the sky.', hint: 'Yes', line: 'can' },
          { sentence: '2. A fish ________ walk on the road.', hint: 'No', line: 'can\'t' },
          { sentence: '3. A green frog ________ jump over the water.', hint: 'Yes', line: 'can' },
          { sentence: '4. An elephant ________ fly in the air.', hint: 'No', line: 'can\'t' },
          { sentence: '5. A dolphin ________ swim very fast.', hint: 'Yes', line: 'can' },
          { sentence: '6. I ________ read English words.', hint: 'Yes', line: 'can' },
          { sentence: '7. A snake ________ run with shoes.', hint: 'No', line: 'can\'t' },
          { sentence: '8. A monkey ________ climb tall trees.', hint: 'Yes', line: 'can' }
        ]
      }
    ],
    answerKey: [
      '1. can', '2. can\'t', '3. can', '4. can\'t',
      '5. can', '6. can', '7. can\'t', '8. can'
    ]
  },
  {
    id: 'g2_prepositions_place',
    grade: 2,
    category: 'grammar',
    isFree: true,
    titleEn: 'Prepositions of Place: In, On, Under, Next to',
    titleKa: 'წინდებულები: In, On, Under, Next to',
    topicEn: 'Locating objects: In the box, On the table, Under the bed, Next to the door',
    topicKa: 'მდებარეობის წინდებულები (In, On, Under, Next to)',
    difficulty: 'Easy',
    instructionsEn: 'Look at the clues and write the correct preposition: [ IN , ON , UNDER , NEXT TO ].',
    instructionsKa: 'ჩასვი სწორი წინდებული: in (შიგნით), on (ზემოთ), under (ქვეშ), next to (გვერდით).',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Word Bank: [ IN , ON , UNDER , NEXT TO ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. The cat is sleeping ________ the bed.', hint: 'on (ზემოთ)', line: 'on' },
          { sentence: '2. The pencil is ________ the pencil case.', hint: 'in (შიგნით)', line: 'in' },
          { sentence: '3. The dog is sleeping ________ the table.', hint: 'under (ქვეშ)', line: 'under' },
          { sentence: '4. The chair is ________ the desk.', hint: 'next to (გვერდით)', line: 'next to' },
          { sentence: '5. The apples are ________ the fruit basket.', hint: 'in (შიგნით)', line: 'in' },
          { sentence: '6. The storybook is ________ the shelf.', hint: 'on (ზემოთ)', line: 'on' },
          { sentence: '7. My shoes are ________ the chair.', hint: 'under (ქვეშ)', line: 'under' },
          { sentence: '8. Anna sits ________ her friend in class.', hint: 'next to (გვერდით)', line: 'next to' }
        ]
      }
    ],
    answerKey: [
      '1. on', '2. in', '3. under', '4. next to',
      '5. in', '6. on', '7. under', '8. next to'
    ]
  },
  {
    id: 'g2_magic_e_transformer',
    grade: 2,
    category: 'phonics',
    isFree: false,
    titleEn: 'Magic Silent "E" Transformation Lab',
    titleKa: 'ჯადოსნური Silent "E" გარდამქმნელი',
    topicEn: 'Vowel Long Sound Shift (a_e, i_e, o_e, u_e)',
    topicKa: 'გრძელი ხმოვნები და Magic E წესი',
    difficulty: 'Medium',
    instructionsEn: 'Add Magic "E" to the short 3-letter word and write the new long-vowel word.',
    instructionsKa: 'დაამატე Magic E მოკლე სიტყვას და დაწერე ახალი სიტყვა.',
    icon: 'magic_e',
    previewArt: 'magic_e',
    sections: [
      {
        headingEn: 'Add "E" to make a new word:',
        headingKa: 'დაამატე "E":',
        items: [
          { short: 'CAP', magicWord: 'CAPE', sentence: '• cap + e ➔ c a p e (superhero cape)' },
          { short: 'PIN', magicWord: 'PINE', sentence: '• pin + e ➔ p i n e (pine tree)' },
          { short: 'HOP', magicWord: 'HOPE', sentence: '• hop + e ➔ h o p e (hope for good)' },
          { short: 'KIT', magicWord: 'KITE', sentence: '• kit + e ➔ k i t e (fly a kite)' },
          { short: 'TUB', magicWord: 'TUBE', sentence: '• tub + e ➔ t u b e (tube of paint)' },
          { short: 'MAT', magicWord: 'MATE', sentence: '• mat + e ➔ m a t e (team mate)' },
          { short: 'CUT', magicWord: 'CUTE', sentence: '• cut + e ➔ c u t e (cute puppy)' },
          { short: 'NOT', magicWord: 'NOTE', sentence: '• not + e ➔ n o t e (write a note)' }
        ]
      }
    ],
    answerKey: ['cape', 'pine', 'hope', 'kite', 'tube', 'mate', 'cute', 'note']
  },

  // ================= GRADE 3 (ESL A1 Elementary) =================
  {
    id: 'g3_parts_of_speech',
    grade: 3,
    category: 'grammar',
    isFree: true,
    titleEn: 'Parts of Speech: Nouns, Verbs & Adjectives',
    titleKa: 'მეტყველების ნაწილები (Noun, Verb, Adjective)',
    topicEn: 'Nouns (Things/People), Verbs (Actions), Adjectives (Describing)',
    topicKa: 'არსებითი, ზმნა და ზედსართავი სახელი',
    difficulty: 'Medium',
    instructionsEn: 'Write N for Noun (thing/person), V for Verb (action), or A for Adjective (describing word).',
    instructionsKa: 'დაწერე N (არსებითი), V (ზმნა) ან A (ზედსართავი).',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Classify the words: [ N = Noun , V = Verb , A = Adjective ]',
        headingKa: 'განსაზღვრე მეტყველების ნაწილი',
        items: [
          { prompt: '1. Elephant (animal)', type: '[ Noun ]', sentence: 'The big elephant drinks water.' },
          { prompt: '2. Run (action)', type: '[ Verb ]', sentence: 'The children run in the park.' },
          { prompt: '3. Red (color word)', type: '[ Adjective ]', sentence: 'I like red strawberries.' },
          { prompt: '4. School (place)', type: '[ Noun ]', sentence: 'We go to elementary school.' },
          { prompt: '5. Jump (action)', type: '[ Verb ]', sentence: 'Frogs can jump very high.' },
          { prompt: '6. Happy (feeling)', type: '[ Adjective ]', sentence: 'The happy boy smiles.' },
          { prompt: '7. Apple (fruit)', type: '[ Noun ]', sentence: 'Mom bought three apples.' },
          { prompt: '8. Read (action)', type: '[ Verb ]', sentence: 'I read an English storybook.' },
          { prompt: '9. Fast (describing)', type: '[ Adjective ]', sentence: 'The cheetah is a fast runner.' }
        ]
      }
    ],
    answerKey: [
      '1. Noun', '2. Verb', '3. Adjective', '4. Noun', '5. Verb',
      '6. Adjective', '7. Noun', '8. Verb', '9. Adjective'
    ]
  },
  {
    id: 'g3_present_simple_continuous',
    grade: 3,
    category: 'grammar',
    isFree: true,
    titleEn: 'Present Simple vs. Present Continuous (Right Now)',
    titleKa: 'Present Simple vs. Present Continuous',
    topicEn: 'Habits (plays, drinks) vs. Right Now (is playing, is drinking)',
    topicKa: 'ჩვეულებრივი მოქმედება vs ახლა მიმდინარე',
    difficulty: 'Medium',
    instructionsEn: 'Choose the correct form: Present Simple (every day) or Present Continuous (right now).',
    instructionsKa: 'შეარჩიე სწორი დრო (ყოველდღიური მოქმედება თუ ახლა მიმდინარე).',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Complete with the correct verb form:',
        headingKa: 'შეავსე სწორი ფორმით:',
        items: [
          { sentence: '1. Look! The boy (swim) ________________ in the pool right now.', line: 'is swimming' },
          { sentence: '2. She always (drink) ________________ warm milk every morning.', line: 'drinks' },
          { sentence: '3. Listen! The birds (sing) ________________ in the tree right now.', line: 'are singing' },
          { sentence: '4. We (go) ________________ to school from Monday to Friday.', line: 'go' },
          { sentence: '5. Look! Dad (wash) ________________ the car outside.', line: 'is washing' },
          { sentence: '6. Cats (like) ________________ fresh fish and milk.', line: 'like' },
          { sentence: '7. Be quiet! The baby (sleep) ________________ in the bedroom.', line: 'is sleeping' },
          { sentence: '8. My brother usually (play) ________________ soccer on Saturdays.', line: 'plays' }
        ]
      }
    ],
    answerKey: [
      '1. is swimming (now)', '2. drinks (routine)', '3. are singing (listen/now)',
      '4. go (habit)', '5. is washing (look/now)', '6. like (fact)',
      '7. is sleeping (now)', '8. plays (routine)'
    ]
  },
  {
    id: 'g3_reading_detective_treehouse',
    grade: 3,
    category: 'reading',
    isFree: false,
    titleEn: 'Reading Comprehension: My Pet Dog Rusty',
    titleKa: 'ტექსტის გააზრება: ჩემი ძაღლი რასტი',
    topicEn: 'Simple ESL Story, True/False & Short Answers',
    topicKa: 'მარტივი მოთხრობის წაკითხვა და გააზრება',
    difficulty: 'Medium',
    instructionsEn: 'Read the short story and answer the questions below.',
    instructionsKa: 'წაიკითხე მოთხრობა და უპასუხე კითხვებს.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Story Passage: My Pet Dog Rusty',
        headingKa: 'მოთხრობა',
        items: [
          {
            passage: 'My name is Lucas. I have got a golden puppy named Rusty. Rusty has got long soft ears and a happy tail. Every afternoon, we go to the green park together. Rusty loves running after his red ball. When we go home, Rusty drinks clean water and eats his favorite crunchy dog food.',
            questions: [
              { q: '1. What is the boy\'s name?', a: 'Lucas.' },
              { q: '2. What kind of pet has Lucas got?', a: 'A golden puppy named Rusty.' },
              { q: '3. Where do Lucas and Rusty go every afternoon?', a: 'To the green park.' },
              { q: '4. What color is Rusty\'s favorite ball?', a: 'Red.' },
              { q: '5. What does Rusty do when he goes home?', a: 'He drinks water and eats dog food.' }
            ]
          }
        ]
      }
    ],
    answerKey: [
      '1. Lucas', '2. A golden puppy (Rusty)', '3. To the green park',
      '4. Red ball', '5. Drinks water and eats dog food'
    ]
  },

  // ================= GRADE 4 (ESL A1+ to A2 Elementary) =================
  {
    id: 'g4_past_simple_irregulars',
    grade: 4,
    category: 'grammar',
    isFree: true,
    titleEn: 'Past Simple: Common Irregular Verbs',
    titleKa: 'Past Simple წარსული დრო (არაწესიერი ზმნები)',
    topicEn: 'Top ESL Past Verbs: went, saw, ate, had, wrote, bought',
    topicKa: 'ხშირად გამოყენებული არაწესიერი ზმნები',
    difficulty: 'Medium',
    instructionsEn: 'Complete each sentence by putting the verb in the Past Simple tense (Yesterday / Last week).',
    instructionsKa: 'ჩასვი ზმნა Past Simple (წარსულ) დროში.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Present ➔ Past Simple (go -> went, see -> saw, eat -> ate)',
        headingKa: 'აწმყო ➔ წარსული',
        items: [
          { base: 'GO (Infinitive)', line: 'WENT', sentence: '1. Yesterday, our family (go) ________ to the zoo park.' },
          { base: 'SEE (Infinitive)', line: 'SAW', sentence: '2. We (see) ________ two big lions and three playful monkeys.' },
          { base: 'EAT (Infinitive)', line: 'ATE', sentence: '3. At lunchtime, the children (eat) ________ strawberry ice cream.' },
          { base: 'BUY (Infinitive)', line: 'BOUGHT', sentence: '4. Mom (buy) ________ two English storybooks for me.' },
          { base: 'HAVE (Infinitive)', line: 'HAD', sentence: '5. We (have) ________ a wonderful and happy day.' },
          { base: 'WRITE (Infinitive)', line: 'WROTE', sentence: '6. In the evening, Lucas (write) ________ his English homework.' },
          { base: 'DRINK (Infinitive)', line: 'DRANK', sentence: '7. I (drink) ________ a glass of cold orange juice.' },
          { base: 'TAKE (Infinitive)', line: 'TOOK', sentence: '8. Dad (take) ________ ten nice photos with his camera.' }
        ]
      }
    ],
    answerKey: [
      '1. went', '2. saw', '3. ate', '4. bought',
      '5. had', '6. wrote', '7. drank', '8. took'
    ]
  },
  {
    id: 'g4_comparatives_superlatives',
    grade: 4,
    category: 'grammar',
    isFree: true,
    titleEn: 'Comparatives (-er than) & Superlatives (the -est)',
    titleKa: 'ზედსართავი სახელის შედარების ხარისხები',
    topicEn: 'Short Adjectives: taller than / the tallest, bigger than / the biggest',
    topicKa: 'შედარებითი (-er than) და აღმატებითი (the -est) ხარისხები',
    difficulty: 'Medium',
    instructionsEn: 'Fill in the blanks with the comparative (-er than) or superlative (the -est) form.',
    instructionsKa: 'შეავსე შედარებითი ან აღმატებითი ფორმით.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Rule: [ tall ➔ taller than ➔ the tallest ]',
        headingKa: 'წესი: -er than (შედარება) | the -est (აღმატებითი)',
        items: [
          { prompt: '1. Tall ➔ A giraffe is ____________________ a horse.', line: 'taller than' },
          { prompt: '2. Fast ➔ A cheetah is the ____________________ animal on land.', line: 'fastest' },
          { prompt: '3. Big ➔ An elephant is ____________________ a dog.', line: 'bigger than' },
          { prompt: '4. Heavy ➔ The blue whale is the ____________________ mammal on Earth.', line: 'heaviest' },
          { prompt: '5. Small ➔ A mouse is ____________________ a cat.', line: 'smaller than' },
          { prompt: '6. Cold ➔ Winter is the ____________________ season of the year.', line: 'coldest' },
          { prompt: '7. Old ➔ My grandfather is ____________________ my father.', line: 'older than' },
          { prompt: '8. Long ➔ The Nile is the ____________________ river in Africa.', line: 'longest' }
        ]
      }
    ],
    answerKey: [
      '1. taller than', '2. fastest', '3. bigger than', '4. heaviest',
      '5. smaller than', '6. coldest', '7. older than', '8. longest'
    ]
  },
  {
    id: 'g4_wh_questions_mystery',
    grade: 4,
    category: 'reading',
    isFree: false,
    titleEn: 'Question Words: Who, Where, When, Why, What, How',
    titleKa: 'კითხვითი სიტყვები (Who, Where, When, Why, What, How)',
    topicEn: 'Asking & Answering Questions in English',
    topicKa: 'კითხვის დასმა და პასუხის გაცემა',
    difficulty: 'Medium',
    instructionsEn: 'Choose the correct question word: [ WHO , WHERE , WHEN , WHY , WHAT , HOW ].',
    instructionsKa: 'შეარჩიე სწორი კითხვითი სიტყვა.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Word Bank: [ WHO (ვინ) , WHERE (სად) , WHEN (როდის) , WHY (რატომ) , WHAT (რა) , HOW (როგორ) ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. ________ is your English teacher? ➔ Mrs. Davis.', line: 'Who', clue: 'Target: Person' },
          { sentence: '2. ________ do you live? ➔ In Tbilisi, Georgia.', line: 'Where', clue: 'Target: Place' },
          { sentence: '3. ________ does the morning school start? ➔ At 9:00 AM.', line: 'When', clue: 'Target: Time' },
          { sentence: '4. ________ are you smiling? ➔ Because today is my birthday!', line: 'Why', clue: 'Target: Reason' },
          { sentence: '5. ________ is in your school bag? ➔ Three books and a pencil case.', line: 'What', clue: 'Target: Thing' },
          { sentence: '6. ________ do you go to school? ➔ By yellow school bus.', line: 'How', clue: 'Target: Manner' },
          { sentence: '7. ________ is your favorite sport? ➔ Football.', line: 'What', clue: 'Target: Thing' },
          { sentence: '8. ________ is your best friend? ➔ Lucas.', line: 'Who', clue: 'Target: Person' }
        ]
      }
    ],
    answerKey: [
      '1. Who', '2. Where', '3. When', '4. Why',
      '5. What', '6. How', '7. What', '8. Who'
    ]
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'single_grade',
    titleEn: 'Single Grade Pack',
    titleKa: 'ერთი კლასის პაკეტი',
    priceGel: 5.90,
    originalPriceGel: 15.00,
    featuresEn: [
      'Full access to 1 chosen Grade (1, 2, 3, or 4)',
      '35+ Pure English Printable Activity Worksheets',
      'Full Answer Keys for Parents & Teachers',
      'Lifetime Access • Unlimited Home Printing'
    ],
    featuresKa: [
      'წვდომა არჩეულ 1 კლასზე (1, 2, 3 ან მე-4 კლასი)',
      '35+ სუფთა ინგლისურენოვანი დასაბეჭდი სავარჯიშო',
      'სრული პასუხების გასაღები (Answer Keys)',
      'მუდმივი წვდომა • შეუზღუდავი ამობეჭდვა სახლში'
    ]
  },
  {
    id: 'mega_bundle',
    titleEn: 'Mega Bundle (Grades 1 to 4)',
    titleKa: 'სრული მეგა-კრებული (1-4 კლასი)',
    priceGel: 9.90,
    originalPriceGel: 45.00,
    isPopular: true,
    badge: 'ყველაზე პოპულარული 🔥',
    featuresEn: [
      'Instant access to ALL Grades 1, 2, 3, and 4!',
      '150+ Pure English School Worksheets & Tests',
      'ESL-Tailored: Phonics, Have got/Has got, Can/Can\'t, Prepositions, Tenses',
      'Ink-Saver B&W Mode + Full Color Studio Mode',
      'Teacher-Approved Answer Keys for every worksheet',
      'One-Time Payment (9.90 GEL) • Lifetime Future Updates'
    ],
    featuresKa: [
      'მყისიერი წვდომა ყველა 1, 2, 3 და მე-4 კლასზე!',
      '150-ზე მეტი ინგლისურენოვანი სამუშაო ფურცელი',
      'მორგებულია არამშობლიურენოვან (ESL) ბავშვებზე',
      'Have/Has got, Can/Can\'t, წინდებულები, დროები, ლექსიკა',
      'ეკონომიური B&W (Ink Saver) + ფერადი რეჟიმი',
      'პედაგოგების მიერ შედგენილი პასუხების გასაღები',
      'ერთჯერადი გადახდა (9.90 ₾) • მუდმივი წვდომა'
    ]
  },
  {
    id: 'teacher_unlimited',
    titleEn: 'Teacher & Tutor Classroom License',
    titleKa: 'პედაგოგისა და რეპეტიტორის ლიცენზია',
    priceGel: 19.90,
    originalPriceGel: 79.00,
    badge: 'სკოლებისთვის 🏫',
    featuresEn: [
      'Full Commercial & Classroom Multi-Student License',
      'Print unlimited copies for all your private students',
      'All 4 Grade Levels + Homework Assignment Pack',
      'Custom Student Name & Header Customizer',
      'Priority Support & Printable Certificate of Completion'
    ],
    featuresKa: [
      'სრული საკლასო და სადამრიგებლო ლიცენზია',
      'შეუზღუდავი ამობეჭდვა ყველა მოსწავლისთვის',
      'ყველა 4 კლასის სრული სასკოლო პროგრამა',
      'მოსწავლის სახელის და სათაურის მორგება',
      'დასრულების ოფიციალური დასაბეჭდი სერტიფიკატი'
    ]
  }
];

export const fullCurriculumSyllabus = [
  {
    grade: 1,
    titleKa: '1-ლი კლასი (Grade 1 • Starters)',
    topics: [
      'Alphabet Letters A-Z & Sound Blending Phonics Guides',
      'CVC Word Families (-at, -an, -ig, -og, -un, -ed, -op)',
      'Basic Sight Words & Simple Sentence Tracing (I see, It is, I have)',
      '4 Seasons (Spring, Summer, Autumn, Winter) & Weather Associations',
      '7 Days of the Week & 12 Months Calendar Sequences',
      'Animals Safari & Counting Practice (1 to 20)',
      'Color Words & Classroom Objects (Pencil, Bag, Book, Ruler)'
    ]
  },
  {
    grade: 2,
    titleKa: 'მე-2 კლასი (Grade 2 • Beginners)',
    topics: [
      'Have Got & Has Got (My Toys, Pets & Family Members)',
      'Can & Can’t Abilities (What Animals and People Can/Cannot Do)',
      'Prepositions of Place (In, On, Under, Next to)',
      'Magic Silent "E" Long Vowels (cap->cape, pin->pine, hop->hope, kit->kite)',
      'Consonant Digraphs Sorting (CH, SH, TH, WH, CK)',
      'Singular & Plural Nouns (Cat -> Cats, Box -> Boxes)',
      'Body Parts & My School Clothes Identification'
    ]
  },
  {
    grade: 3,
    titleKa: 'მე-3 კლასი (Grade 3 • Elementary)',
    topics: [
      'Parts of Speech: Nouns, Action Verbs, Describing Adjectives',
      'Present Simple (Everyday Habits: likes, drinks, plays) with Subject-Verb Agreement',
      'Present Continuous for Actions Happening Right Now (is swimming, are singing)',
      'ESL Reading Comprehension Stories with Direct Factual Questions',
      'Possessives (\'s) & Object Pronouns (me, him, her, us, them)',
      'Food & Meals, My House & Daily Routine Vocabulary',
      'Demonstratives: This, That, These, Those'
    ]
  },
  {
    grade: 4,
    titleKa: 'მე-4 კლასი (Grade 4 • Pre-Intermediate)',
    topics: [
      'Past Simple: Common Irregular Verbs (went, saw, ate, bought, had, wrote)',
      'Past Simple: Regular Verbs with -ed (played, visited, cooked, walked)',
      'Comparatives (-er than) & Superlatives (the -est / more / most)',
      'Wh- Questions Mastery (Who, Where, When, Why, What, How)',
      'Future Plans with "Going to" and "Will"',
      'Multi-Paragraph Reading Comprehension & Detective Mysteries',
      'Short Paragraph Writing Templates & Guided Story Starters'
    ]
  }
];
