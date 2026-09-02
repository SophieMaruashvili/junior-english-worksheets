import { WorksheetData } from '../types';

export const allWorksheets: WorksheetData[] = [
  // ==========================================
  // GRADE 1 (ESL Pre-A1 Starters)
  // ==========================================
  {
    id: 'g1_cvc_rhymes',
    grade: 1,
    category: 'phonics',
    isFree: true,
    titleEn: 'CVC Phonics: -AT & -AN Families',
    titleKa: 'CVC მოკლე სიტყვები: -AT და -AN',
    topicEn: 'Short Vowel "a" Word Families (Cat, Hat, Bat, Mat, Fan, Pan)',
    topicKa: '3-ასოიანი სიტყვები და რითმები',
    difficulty: 'Easy',
    instructionsEn: 'Read each 3-letter word, trace the letters, and copy on the handwriting line.',
    instructionsKa: 'წაიკითხე სიტყვა, გამოწერე ასოები და გადაწერე ხაზზე.',
    icon: 'cat',
    previewArt: 'cat',
    sections: [
      {
        headingEn: 'Section A: The "-AT" Family',
        headingKa: 'ჯგუფი A: „-AT“ სიტყვები',
        items: [
          { prompt: '1. c - a - t ➔ cat (says meow!)', trace: 'cat', line: 'c a t' },
          { prompt: '2. h - a - t ➔ hat (wear on head)', trace: 'hat', line: 'h a t' },
          { prompt: '3. b - a - t ➔ bat (flies at night)', trace: 'bat', line: 'b a t' },
          { prompt: '4. m - a - t ➔ mat (wipe shoes)', trace: 'mat', line: 'm a t' }
        ]
      },
      {
        headingEn: 'Section B: The "-AN" Family',
        headingKa: 'ჯგუფი B: „-AN“ სიტყვები',
        items: [
          { prompt: '5. f - a - n ➔ fan (cools the room)', trace: 'fan', line: 'f a n' },
          { prompt: '6. p - a - n ➔ pan (cook food)', trace: 'pan', line: 'p a n' },
          { prompt: '7. m - a - n ➔ man (tall man)', trace: 'man', line: 'm a n' },
          { prompt: '8. v - a - n ➔ van (big car)', trace: 'van', line: 'v a n' }
        ]
      }
    ],
    answerKey: ['1. cat', '2. hat', '3. bat', '4. mat', '5. fan', '6. pan', '7. man', '8. van']
  },
  {
    id: 'g1_cvc_ig_og',
    grade: 1,
    category: 'phonics',
    isFree: true,
    titleEn: 'CVC Phonics: -IG & -OG Families',
    titleKa: 'CVC მოკლე სიტყვები: -IG და -OG',
    topicEn: 'Short Vowels "i" & "o" (Pig, Dig, Big, Dog, Log, Fog)',
    topicKa: 'მოკლე i და o ხმოვნები',
    difficulty: 'Easy',
    instructionsEn: 'Trace the words and write the missing letters.',
    instructionsKa: 'გამოწერე სიტყვები და ჩასვი გამოტოვებული ასოები.',
    icon: 'cat',
    previewArt: 'cat',
    sections: [
      {
        headingEn: 'Section A: The "-IG" Family',
        headingKa: 'ჯგუფი A',
        items: [
          { prompt: '1. p - i - g ➔ pig (farm animal)', trace: 'pig', line: 'p i g' },
          { prompt: '2. d - i - g ➔ dig (dig a hole)', trace: 'dig', line: 'd i g' },
          { prompt: '3. b - i - g ➔ big (giant elephant)', trace: 'big', line: 'b i g' },
          { prompt: '4. w - i - g ➔ wig (costume hair)', trace: 'wig', line: 'w i g' }
        ]
      },
      {
        headingEn: 'Section B: The "-OG" Family',
        headingKa: 'ჯგუფი B',
        items: [
          { prompt: '5. d - o - g ➔ dog (says woof-woof!)', trace: 'dog', line: 'd o g' },
          { prompt: '6. l - o - g ➔ log (wooden log)', trace: 'log', line: 'l o g' },
          { prompt: '7. f - o - g ➔ fog (mist in morning)', trace: 'fog', line: 'f o g' },
          { prompt: '8. j - o - g ➔ jog (run slowly)', trace: 'jog', line: 'j o g' }
        ]
      }
    ],
    answerKey: ['1. pig', '2. dig', '3. big', '4. wig', '5. dog', '6. log', '7. fog', '8. jog']
  },
  {
    id: 'g1_seasons_days',
    grade: 1,
    category: 'vocabulary',
    isFree: true,
    titleEn: '4 Seasons & 7 Days of the Week',
    titleKa: '4 სეზონი და კვირის 7 დღე',
    topicEn: 'Spring, Summer, Autumn, Winter & Days 1 to 7',
    topicKa: 'სეზონები, ამინდი და დღეები',
    difficulty: 'Easy',
    instructionsEn: 'Trace the seasonal words and write the days in correct order.',
    instructionsKa: 'გამოწერე სეზონები და დაალაგე დღეები.',
    icon: 'spring',
    previewArt: 'spring',
    sections: [
      {
        headingEn: 'The 4 Seasons',
        headingKa: '4 სეზონი',
        items: [
          { prompt: '1. Spring (flowers bloom)', trace: 'Spring', line: 'S p r i n g' },
          { prompt: '2. Summer (hot and sunny)', trace: 'Summer', line: 'S u m m e r' },
          { prompt: '3. Autumn (leaves fall)', trace: 'Autumn', line: 'A u t u m n' },
          { prompt: '4. Winter (cold and snow)', trace: 'Winter', line: 'W i n t e r' }
        ]
      },
      {
        headingEn: 'Days of the Week (Order 1 to 7)',
        headingKa: 'კვირის დღეები',
        items: [
          { prompt: '• Monday ➔ Day 1', trace: 'Monday', line: 'M o n d a y' },
          { prompt: '• Tuesday ➔ Day 2', trace: 'Tuesday', line: 'T u e s d a y' },
          { prompt: '• Wednesday ➔ Day 3', trace: 'Wednesday', line: 'W e d n e s d a y' },
          { prompt: '• Thursday ➔ Day 4', trace: 'Thursday', line: 'T h u r s d a y' },
          { prompt: '• Friday ➔ Day 5', trace: 'Friday', line: 'F r i d a y' },
          { prompt: '• Saturday ➔ Day 6', trace: 'Saturday', line: 'S a t u r d a y' },
          { prompt: '• Sunday ➔ Day 7', trace: 'Sunday', line: 'S u n d a y' }
        ]
      }
    ],
    answerKey: ['Spring, Summer, Autumn, Winter', 'Monday to Sunday (1 to 7)']
  },
  {
    id: 'g1_color_sight_words',
    grade: 1,
    category: 'reading',
    isFree: true,
    titleEn: 'Sight Words & Color Sentences',
    titleKa: 'პირველი საკვანძო სიტყვები (Sight Words)',
    topicEn: 'I see, I have, It is, Look at, Like',
    topicKa: 'მარტივი წინადადებები',
    difficulty: 'Easy',
    instructionsEn: 'Complete sentences using the Word Bank: [ SEE , HAVE , IS , LIKE , LOOK ].',
    instructionsKa: 'შეავსე წინადადებები მოცემული სიტყვებით.',
    icon: 'rainbow',
    previewArt: 'rainbow',
    sections: [
      {
        headingEn: 'Word Bank: [ SEE , HAVE , IS , LIKE , LOOK ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. I ________ a little yellow duck.', hint: 'Word: see', line: 'see' },
          { sentence: '2. It ________ a sunny warm day.', hint: 'Word: is', line: 'is' },
          { sentence: '3. I ________ two small dogs.', hint: 'Word: have', line: 'have' },
          { sentence: '4. I ________ sweet red apples.', hint: 'Word: like', line: 'like' },
          { sentence: '5. ________ at the rainbow in the sky!', hint: 'Word: Look', line: 'Look' },
          { sentence: '6. I ________ a blue school bag.', hint: 'Word: have', line: 'have' }
        ]
      }
    ],
    answerKey: ['1. see', '2. is', '3. have', '4. like', '5. Look', '6. have']
  },
  {
    id: 'g1_animals_numbers',
    grade: 1,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Animal Safari & Number Counting (1 to 10)',
    titleKa: 'ცხოველები და ციფრები 1-დან 10-მდე',
    topicEn: 'Count and Name: Dog, Cat, Lion, Elephant, Bird, Duck',
    topicKa: 'დათვლა და ცხოველთა სახელები',
    difficulty: 'Easy',
    instructionsEn: 'Count the animals, write the number word (one to ten), and trace.',
    instructionsKa: 'დაითვალე ცხოველები და დაწერე ციფრი სიტყვიერად.',
    icon: 'rainbow',
    previewArt: 'rainbow',
    sections: [
      {
        headingEn: 'Count & Write (One to Ten)',
        headingKa: 'დაითვალე და დაწერე',
        items: [
          { prompt: '1. [ 1 ] dog ➔ one dog', trace: 'one', line: 'o n e' },
          { prompt: '2. [ 2 ] cats ➔ two cats', trace: 'two', line: 't w o' },
          { prompt: '3. [ 3 ] birds ➔ three birds', trace: 'three', line: 't h r e e' },
          { prompt: '4. [ 4 ] frogs ➔ four frogs', trace: 'four', line: 'f o u r' },
          { prompt: '5. [ 5 ] ducks ➔ five ducks', trace: 'five', line: 'f i v e' }
        ]
      }
    ],
    answerKey: ['one, two, three, four, five']
  },
  {
    id: 'g1_classroom_objects',
    grade: 1,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Classroom Objects & "This is a..."',
    titleKa: 'სასკოლო ნივთები (Pencil, Book, Bag...)',
    topicEn: 'Pencil, Book, Bag, Ruler, Eraser, Desk',
    topicKa: 'სასკოლო ლექსიკა',
    difficulty: 'Easy',
    instructionsEn: 'Complete the sentence with the correct school object from the Word Bank.',
    instructionsKa: 'ჩასვი შესაბამისი სასკოლო ნივთი.',
    icon: 'rainbow',
    previewArt: 'rainbow',
    sections: [
      {
        headingEn: 'Word Bank: [ PENCIL , BOOK , BAG , RULER , ERASER ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. I write my name with a ________.', line: 'pencil' },
          { sentence: '2. I read an English story in my ________.', line: 'book' },
          { sentence: '3. I put all my school things in my ________.', line: 'bag' },
          { sentence: '4. I draw straight lines with a ________.', line: 'ruler' },
          { sentence: '5. I clean pencil marks with an ________.', line: 'eraser' }
        ]
      }
    ],
    answerKey: ['1. pencil', '2. book', '3. bag', '4. ruler', '5. eraser']
  },

  // ==========================================
  // GRADE 2 (ESL Pre-A1 to A1 Beginners)
  // ==========================================
  {
    id: 'g2_have_got_has_got',
    grade: 2,
    category: 'grammar',
    isFree: true,
    titleEn: 'Have Got / Has Got (My Toys & Pets)',
    titleKa: 'Have got / Has got (ქონა და ყოლა)',
    topicEn: 'Possession: I have got / He has got / She has got',
    topicKa: 'have got და has got-ის წესები',
    difficulty: 'Easy',
    instructionsEn: 'Fill in the blanks with "have got" (I/You/We/They) or "has got" (He/She/It).',
    instructionsKa: 'ჩასვი have got ან has got.',
    icon: 'cat',
    previewArt: 'cat',
    sections: [
      {
        headingEn: 'Rule: [ I / You / We / They ➔ HAVE GOT ] | [ He / She / It ➔ HAS GOT ]',
        headingKa: 'წესი',
        items: [
          { sentence: '1. I ____________________ a new red bicycle.', line: 'have got' },
          { sentence: '2. He ____________________ a small white kitten.', line: 'has got' },
          { sentence: '3. She ____________________ three blue pencils.', line: 'has got' },
          { sentence: '4. We ____________________ a big green garden.', line: 'have got' },
          { sentence: '5. They ____________________ two friendly dogs.', line: 'have got' },
          { sentence: '6. The cat ____________________ green eyes.', line: 'has got' }
        ]
      }
    ],
    answerKey: ['1. have got', '2. has got', '3. has got', '4. have got', '5. have got', '6. has got']
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
    instructionsKa: 'ჩასვი can ან can\'t.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Choose: [ CAN (can do) / CAN\'T (cannot do) ]',
        headingKa: 'შეარჩიე',
        items: [
          { sentence: '1. A bird ________ fly high in the sky.', line: 'can' },
          { sentence: '2. A fish ________ walk on the road.', line: 'can\'t' },
          { sentence: '3. A green frog ________ jump over the water.', line: 'can' },
          { sentence: '4. An elephant ________ fly in the air.', line: 'can\'t' },
          { sentence: '5. A dolphin ________ swim very fast.', line: 'can' },
          { sentence: '6. A monkey ________ climb tall trees.', line: 'can' }
        ]
      }
    ],
    answerKey: ['1. can', '2. can\'t', '3. can', '4. can\'t', '5. can', '6. can']
  },
  {
    id: 'g2_prepositions_place',
    grade: 2,
    category: 'grammar',
    isFree: true,
    titleEn: 'Prepositions of Place: In, On, Under, Next to',
    titleKa: 'წინდებულები: In, On, Under, Next to',
    topicEn: 'Where is it? In the box, On the table, Under the bed, Next to the chair',
    topicKa: 'მდებარეობის წინდებულები',
    difficulty: 'Easy',
    instructionsEn: 'Write the correct preposition: [ IN , ON , UNDER , NEXT TO ].',
    instructionsKa: 'ჩასვი სწორი წინდებული.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Word Bank: [ IN (შიგნით) , ON (ზემოთ) , UNDER (ქვეშ) , NEXT TO (გვერდით) ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. The cat is sleeping ________ the bed.', line: 'on' },
          { sentence: '2. The pencil is ________ the pencil case.', line: 'in' },
          { sentence: '3. The dog is sleeping ________ the table.', line: 'under' },
          { sentence: '4. The chair is ________ the desk.', line: 'next to' },
          { sentence: '5. The apples are ________ the fruit basket.', line: 'in' },
          { sentence: '6. The book is ________ the shelf.', line: 'on' }
        ]
      }
    ],
    answerKey: ['1. on', '2. in', '3. under', '4. next to', '5. in', '6. on']
  },
  {
    id: 'g2_magic_e_transformer',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Magic Silent "E" Transformation Lab',
    titleKa: 'ჯადოსნური Silent "E" გარდამქმნელი',
    topicEn: 'Long Vowels: cap->cape, pin->pine, hop->hope, kit->kite, cut->cute',
    topicKa: 'გრძელი ხმოვნები და Magic E',
    difficulty: 'Medium',
    instructionsEn: 'Add Magic "E" to the short word and write the new word.',
    instructionsKa: 'დაამატე Magic E და დაწერე ახალი სიტყვა.',
    icon: 'magic_e',
    previewArt: 'magic_e',
    sections: [
      {
        headingEn: 'Add "E" to make long vowel words:',
        headingKa: 'გარდაქმნის სავარჯიშო',
        items: [
          { short: 'CAP', magicWord: 'CAPE', sentence: '• cap + e ➔ c a p e (superhero cape)' },
          { short: 'PIN', magicWord: 'PINE', sentence: '• pin + e ➔ p i n e (pine tree)' },
          { short: 'HOP', magicWord: 'HOPE', sentence: '• hop + e ➔ h o p e (hope for best)' },
          { short: 'KIT', magicWord: 'KITE', sentence: '• kit + e ➔ k i t e (fly a kite)' },
          { short: 'TUB', magicWord: 'TUBE', sentence: '• tub + e ➔ t u b e (tube of paint)' },
          { short: 'CUT', magicWord: 'CUTE', sentence: '• cut + e ➔ c u t e (cute puppy)' }
        ]
      }
    ],
    answerKey: ['cape, pine, hope, kite, tube, cute']
  },
  {
    id: 'g2_digraphs_ch_sh',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Consonant Digraphs: CH, SH, TH, WH, CK',
    titleKa: 'ასოთა შეთანხმებები (CH, SH, TH, WH, CK)',
    topicEn: 'Shark, Cheese, Three, Whale, Clock, Chair, Duck',
    topicKa: 'ასოთშეთანხმებების წესები',
    difficulty: 'Medium',
    instructionsEn: 'Fill in the blanks with [ CH , SH , TH , WH , CK ].',
    instructionsKa: 'შეავსე [ CH , SH , TH , WH , CK ]-ით.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Word Clues: Complete the Digraphs',
        headingKa: 'სავარჯიშო',
        items: [
          { clue: '1. Ocean animal with fins: ___ A R K', line: 'SHARK' },
          { clue: '2. Yummy yellow food: ___ E E S E', line: 'CHEESE' },
          { clue: '3. Number after two: ___ R E E', line: 'THREE' },
          { clue: '4. Giant sea mammal: ___ A L E', line: 'WHALE' },
          { clue: '5. Yellow bird that quacks: D U ___', line: 'DUCK' },
          { clue: '6. Seat with four legs: ___ A I R', line: 'CHAIR' }
        ]
      }
    ],
    answerKey: ['1. SH (Shark)', '2. CH (Cheese)', '3. TH (Three)', '4. WH (Whale)', '5. CK (Duck)', '6. CH (Chair)']
  },
  {
    id: 'g2_singular_plural_nouns',
    grade: 2,
    category: 'grammar',
    isFree: true,
    titleEn: 'Singular & Plural Nouns (-s and -es)',
    titleKa: 'მხოლობითი და მრავლობითი რიცხვი (-s, -es)',
    topicEn: 'One cat -> Two cats, One box -> Two boxes, One bus -> Two buses',
    topicKa: 'მრავლობითი რიცხვის დაბოლოებები',
    difficulty: 'Medium',
    instructionsEn: 'Convert the singular word into its plural form by adding -s or -es.',
    instructionsKa: 'გადაიყვანე მრავლობითში (-s ან -es-ით).',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Add -s or -es to make plurals:',
        headingKa: 'სავარჯიშო',
        items: [
          { prompt: '1. One book ➔ Two: ________', line: 'books' },
          { prompt: '2. One cat ➔ Three: ________', line: 'cats' },
          { prompt: '3. One box ➔ Four: ________', line: 'boxes' },
          { prompt: '4. One bus ➔ Two: ________', line: 'buses' },
          { prompt: '5. One apple ➔ Five: ________', line: 'apples' },
          { prompt: '6. One watch ➔ Two: ________', line: 'watches' }
        ]
      }
    ],
    answerKey: ['1. books', '2. cats', '3. boxes', '4. buses', '5. apples', '6. watches']
  },

  // ==========================================
  // GRADE 3 (ESL A1 Elementary)
  // ==========================================
  {
    id: 'g3_parts_of_speech',
    grade: 3,
    category: 'grammar',
    isFree: true,
    titleEn: 'Parts of Speech: Nouns, Verbs & Adjectives',
    titleKa: 'მეტყველების ნაწილები (Noun, Verb, Adjective)',
    topicEn: 'Nouns (Things/People), Verbs (Actions), Adjectives (Describing Words)',
    topicKa: 'არსებითი, ზმნა და ზედსართავი',
    difficulty: 'Medium',
    instructionsEn: 'Write N for Noun, V for Verb, or A for Adjective.',
    instructionsKa: 'განსაზღვრე მეტყველების ნაწილი (N, V, A).',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Classify: [ N = Noun , V = Verb , A = Adjective ]',
        headingKa: 'სავარჯიშო',
        items: [
          { prompt: '1. Elephant (animal)', line: 'Noun' },
          { prompt: '2. Run (action)', line: 'Verb' },
          { prompt: '3. Red (color)', line: 'Adjective' },
          { prompt: '4. School (place)', line: 'Noun' },
          { prompt: '5. Jump (action)', line: 'Verb' },
          { prompt: '6. Happy (feeling)', line: 'Adjective' },
          { prompt: '7. Apple (fruit)', line: 'Noun' },
          { prompt: '8. Read (action)', line: 'Verb' }
        ]
      }
    ],
    answerKey: ['1. Noun', '2. Verb', '3. Adjective', '4. Noun', '5. Verb', '6. Adjective', '7. Noun', '8. Verb']
  },
  {
    id: 'g3_present_simple_continuous',
    grade: 3,
    category: 'grammar',
    isFree: true,
    titleEn: 'Present Simple vs. Present Continuous (Right Now)',
    titleKa: 'Present Simple vs. Present Continuous',
    topicEn: 'Habits (plays, drinks) vs. Right Now (is swimming, is singing)',
    topicKa: 'ყოველდღიური vs მიმდინარე დრო',
    difficulty: 'Medium',
    instructionsEn: 'Complete the sentence with the correct form of the verb.',
    instructionsKa: 'ჩასვი ზმნა სწორ დროში.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Choose: Simple (Everyday) vs Continuous (Now)',
        headingKa: 'სავარჯიშო',
        items: [
          { sentence: '1. Look! The boy (swim) ________________ in the pool right now.', line: 'is swimming' },
          { sentence: '2. She always (drink) ________________ warm milk every morning.', line: 'drinks' },
          { sentence: '3. Listen! The birds (sing) ________________ in the tree.', line: 'are singing' },
          { sentence: '4. We (go) ________________ to school from Monday to Friday.', line: 'go' },
          { sentence: '5. Look! Dad (wash) ________________ the car outside.', line: 'is washing' },
          { sentence: '6. Cats (like) ________________ milk and fish.', line: 'like' }
        ]
      }
    ],
    answerKey: ['1. is swimming', '2. drinks', '3. are singing', '4. go', '5. is washing', '6. like']
  },
  {
    id: 'g3_reading_detective_treehouse',
    grade: 3,
    category: 'reading',
    isFree: true,
    titleEn: 'Reading Comprehension: My Pet Dog Rusty',
    titleKa: 'ტექსტის გააზრება: ჩემი ძაღლი რასტი',
    topicEn: 'Story Analysis & Answering 5 Direct Questions',
    topicKa: 'ტექსტის წაკითხვა და კითხვებზე პასუხი',
    difficulty: 'Medium',
    instructionsEn: 'Read the short narrative passage and answer all questions in full sentences.',
    instructionsKa: 'წაიკითხე მოთხრობა და უპასუხე კითხვებს.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Story Passage',
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
    answerKey: ['1. Lucas', '2. Golden puppy (Rusty)', '3. To the green park', '4. Red', '5. Drinks water and eats dog food']
  },
  {
    id: 'g3_demonstratives_this_that',
    grade: 3,
    category: 'grammar',
    isFree: true,
    titleEn: 'Demonstratives: This, That, These, Those',
    titleKa: 'ჩვენებითი ნაცვალსახელები (This, That, These, Those)',
    topicEn: 'Near (This / These) vs Far (That / Those)',
    topicKa: 'This, That, These, Those-ის გამოყენება',
    difficulty: 'Medium',
    instructionsEn: 'Choose the correct demonstrative pronoun: [ THIS , THAT , THESE , THOSE ].',
    instructionsKa: 'შეარჩიე სწორი ნაცვალსახელი.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Near vs Far Pointer Exercise',
        headingKa: 'სავარჯიშო',
        items: [
          { sentence: '1. ________ is my pencil in my hand (Near, Singular).', line: 'This' },
          { sentence: '2. ________ is an airplane high in the sky (Far, Singular).', line: 'That' },
          { sentence: '3. ________ are my new books on my desk (Near, Plural).', line: 'These' },
          { sentence: '4. ________ are white clouds over the mountain (Far, Plural).', line: 'Those' },
          { sentence: '5. Look here! ________ is a cute little kitten (Near).', line: 'This' }
        ]
      }
    ],
    answerKey: ['1. This', '2. That', '3. These', '4. Those', '5. This']
  },

  // ==========================================
  // GRADE 4 (ESL A1+ to A2 Elementary)
  // ==========================================
  {
    id: 'g4_past_simple_irregulars',
    grade: 4,
    category: 'grammar',
    isFree: true,
    titleEn: 'Past Simple: Common Irregular Verbs',
    titleKa: 'Past Simple წარსული დრო (არაწესიერი ზმნები)',
    topicEn: 'Top ESL Verbs: went, saw, ate, had, wrote, bought, drank, took',
    topicKa: 'არაწესიერი ზმნების ფორმები',
    difficulty: 'Medium',
    instructionsEn: 'Change the base verb into Past Simple (Yesterday / Last week).',
    instructionsKa: 'ჩასვი ზმნა Past Simple ფორმაში.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Present ➔ Past Simple (go -> went, see -> saw)',
        headingKa: 'სავარჯიშო',
        items: [
          { base: 'GO (Infinitive)', line: 'WENT', sentence: '1. Yesterday, our family (go) ________ to the zoo park.' },
          { base: 'SEE (Infinitive)', line: 'SAW', sentence: '2. We (see) ________ two big lions and three playful monkeys.' },
          { base: 'EAT (Infinitive)', line: 'ATE', sentence: '3. At lunchtime, the children (eat) ________ strawberry ice cream.' },
          { base: 'BUY (Infinitive)', line: 'BOUGHT', sentence: '4. Mom (buy) ________ two English storybooks for me.' },
          { base: 'HAVE (Infinitive)', line: 'HAD', sentence: '5. We (have) ________ a wonderful day.' },
          { base: 'WRITE (Infinitive)', line: 'WROTE', sentence: '6. In the evening, Lucas (write) ________ his homework.' }
        ]
      }
    ],
    answerKey: ['1. went', '2. saw', '3. ate', '4. bought', '5. had', '6. wrote']
  },
  {
    id: 'g4_past_simple_regulars',
    grade: 4,
    category: 'grammar',
    isFree: true,
    titleEn: 'Past Simple: Regular Verbs with -ed',
    titleKa: 'Past Simple: წესიერი ზმნები (-ed დაბოლოებით)',
    topicEn: 'Play -> Played, Visit -> Visited, Watch -> Watched, Clean -> Cleaned',
    topicKa: 'წესიერი ზმნების წესები',
    difficulty: 'Medium',
    instructionsEn: 'Add -ed to the regular verbs to complete the past sentences.',
    instructionsKa: 'დაამატე -ed ზმნებს და შეავსე წინადადებები.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Regular -ed Verb Tasks',
        headingKa: 'სავარჯიშო',
        items: [
          { prompt: '1. play ➔ Yesterday, we (play) ________________ football in the yard.', line: 'played' },
          { prompt: '2. visit ➔ Last Sunday, Sarah (visit) ________________ her grandmother.', line: 'visited' },
          { prompt: '3. watch ➔ In the evening, they (watch) ________________ a cartoon movie.', line: 'watched' },
          { prompt: '4. clean ➔ Lucas (clean) ________________ his bedroom yesterday.', line: 'cleaned' },
          { prompt: '5. listen ➔ We (listen) ________________ to nice music in English class.', line: 'listened' }
        ]
      }
    ],
    answerKey: ['1. played', '2. visited', '3. watched', '4. cleaned', '5. listened']
  },
  {
    id: 'g4_comparatives_superlatives',
    grade: 4,
    category: 'grammar',
    isFree: true,
    titleEn: 'Comparatives (-er than) & Superlatives (the -est)',
    titleKa: 'ზედსართავი სახელის შედარების ხარისხები',
    topicEn: 'Taller than / The tallest, Bigger than / The biggest, Faster than / The fastest',
    topicKa: 'შედარებითი და აღმატებითი ხარისხები',
    difficulty: 'Medium',
    instructionsEn: 'Fill in the blanks with the comparative (-er than) or superlative (the -est) form.',
    instructionsKa: 'შეავსე შედარებითი (-er than) ან აღმატებითი (the -est) ფორმით.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Fill in Comparative vs Superlative:',
        headingKa: 'სავარჯიშო',
        items: [
          { prompt: '1. Tall ➔ A giraffe is ____________________ a horse.', line: 'taller than' },
          { prompt: '2. Fast ➔ A cheetah is the ____________________ animal on land.', line: 'fastest' },
          { prompt: '3. Big ➔ An elephant is ____________________ a dog.', line: 'bigger than' },
          { prompt: '4. Heavy ➔ The blue whale is the ____________________ mammal on Earth.', line: 'heaviest' },
          { prompt: '5. Small ➔ A mouse is ____________________ a cat.', line: 'smaller than' },
          { prompt: '6. Cold ➔ Winter is the ____________________ season of the year.', line: 'coldest' }
        ]
      }
    ],
    answerKey: ['1. taller than', '2. fastest', '3. bigger than', '4. heaviest', '5. smaller than', '6. coldest']
  },
  {
    id: 'g4_wh_questions_mystery',
    grade: 4,
    category: 'reading',
    isFree: true,
    titleEn: 'Question Words: Who, Where, When, Why, What, How',
    titleKa: 'კითხვითი სიტყვები (Who, Where, When, Why, What, How)',
    topicEn: 'Question Formation & Answering',
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
          { sentence: '1. ________ is your English teacher? ➔ Mrs. Davis.', line: 'Who' },
          { sentence: '2. ________ do you live? ➔ In Tbilisi, Georgia.', line: 'Where' },
          { sentence: '3. ________ does morning school start? ➔ At 9:00 AM.', line: 'When' },
          { sentence: '4. ________ are you smiling? ➔ Because today is my birthday!', line: 'Why' },
          { sentence: '5. ________ is in your school bag? ➔ Three books and a pencil case.', line: 'What' },
          { sentence: '6. ________ do you go to school? ➔ By yellow school bus.', line: 'How' }
        ]
      }
    ],
    answerKey: ['1. Who', '2. Where', '3. When', '4. Why', '5. What', '6. How']
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
      'Demonstratives: This, That, These, Those Pointer Practice'
    ]
  },
  {
    grade: 4,
    titleKa: 'მე-4 კლასი (Grade 4 • Pre-Intermediate)',
    topics: [
      'Past Simple: Common Irregular Verbs (went, saw, ate, bought, had, wrote)',
      'Past Simple: Regular Verbs with -ed (played, visited, watched, cleaned)',
      'Comparatives (-er than) & Superlatives (the -est / more / most)',
      'Wh- Questions Mastery (Who, Where, When, Why, What, How)',
      'Future Plans with "Going to" and "Will"',
      'Multi-Paragraph Reading Comprehension & Detective Mysteries'
    ]
  }
];

import { alphabetWorksheets } from './alphabetWorksheets';

export const allWorksheetsWithAlphabet: WorksheetData[] = [
  ...alphabetWorksheets,
  ...allWorksheets
];
