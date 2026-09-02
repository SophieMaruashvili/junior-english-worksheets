import { WorksheetData } from '../types';

export const vocabularyWorksheets: WorksheetData[] = [
  // ================= GRADE 1 VOCABULARY =================
  {
    id: 'g1_vocab_colors_shapes',
    grade: 1,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Colors & Basic Shapes Explorer',
    titleKa: 'ფერები და ძირითადი გეომეტრიული ფიგურები',
    topicEn: 'Colors: Red, Blue, Green, Yellow, Orange, Purple & Shapes: Circle, Square, Triangle, Star',
    topicKa: 'ფერები და ფიგურები',
    difficulty: 'Easy',
    instructionsEn: 'Trace the color words and write the correct shape name next to each description.',
    instructionsKa: 'გამოწერე ფერები და დაწერე ფიგურების სახელები.',
    icon: 'rainbow',
    previewArt: 'rainbow',
    sections: [
      {
        headingEn: 'Section A: Rainbow Colors (Trace & Match)',
        headingKa: 'ჯგუფი A: ფერები',
        items: [
          { prompt: '1. R E D ➔ Red (color of ripe apples)', trace: 'Red', line: 'r e d' },
          { prompt: '2. B L U E ➔ Blue (color of clear sky)', trace: 'Blue', line: 'b l u e' },
          { prompt: '3. G R E E N ➔ Green (color of fresh grass)', trace: 'Green', line: 'g r e e n' },
          { prompt: '4. Y E L L O W ➔ Yellow (color of bright sun)', trace: 'Yellow', line: 'y e l l o w' }
        ]
      },
      {
        headingEn: 'Section B: Shapes (Circle, Square, Triangle, Star)',
        headingKa: 'ჯგუფი B: ფიგურები',
        items: [
          { prompt: '• Round like a ball ➔ [ Circle ]', trace: 'Circle', line: 'C i r c l e' },
          { prompt: '• 4 equal sides ➔ [ Square ]', trace: 'Square', line: 'S q u a r e' },
          { prompt: '• 3 corners and 3 sides ➔ [ Triangle ]', trace: 'Triangle', line: 'T r i a n g l e' },
          { prompt: '• Shines in night sky ➔ [ Star ]', trace: 'Star', line: 'S t a r' }
        ]
      }
    ],
    answerKey: ['Red, Blue, Green, Yellow', 'Circle, Square, Triangle, Star']
  },
  {
    id: 'g1_vocab_my_family',
    grade: 1,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'My Family Members & "This is my..."',
    titleKa: 'ჩემი ოჯახის წევრები',
    topicEn: 'Mother, Father, Brother, Sister, Baby, Grandfather, Grandmother',
    topicKa: 'ოჯახის წევრების ლექსიკა',
    difficulty: 'Easy',
    instructionsEn: 'Complete the family introduction sentences with the Word Bank: [ MOTHER , FATHER , BROTHER , SISTER , BABY ].',
    instructionsKa: 'შეავსე წინადადებები ოჯახის წევრების სიტყვებით.',
    icon: 'rainbow',
    previewArt: 'rainbow',
    sections: [
      {
        headingEn: 'Word Bank: [ MOTHER , FATHER , BROTHER , SISTER , BABY ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. This is my loving ________. She cooks delicious food.', line: 'mother' },
          { sentence: '2. This is my kind ________. He drives the car.', line: 'father' },
          { sentence: '3. This is my big ________. We play football together.', line: 'brother' },
          { sentence: '4. This is my sweet ________. She loves drawing pictures.', line: 'sister' },
          { sentence: '5. This is our little ________. He sleeps in the crib.', line: 'baby' }
        ]
      }
    ],
    answerKey: ['1. mother', '2. father', '3. brother', '4. sister', '5. baby']
  },
  {
    id: 'g1_vocab_feelings',
    grade: 1,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Feelings & Emotions (I am happy / sad)',
    titleKa: 'გრძნობები და ემოციები',
    topicEn: 'Happy, Sad, Angry, Sleepy, Excited, Hungry',
    topicKa: 'ემოციების გამოხატვა',
    difficulty: 'Easy',
    instructionsEn: 'Write the correct emotion word: [ HAPPY , SAD , SLEEPY , HUNGRY , EXCITED ].',
    instructionsKa: 'შეარჩიე სწორი ემოცია.',
    icon: 'rainbow',
    previewArt: 'rainbow',
    sections: [
      {
        headingEn: 'Emotion Sentences',
        headingKa: 'სავარჯიშო',
        items: [
          { sentence: '1. I got 100% on my English quiz! I feel so ________.', line: 'happy' },
          { sentence: '2. I lost my favorite blue toy car. I feel ________.', line: 'sad' },
          { sentence: '3. It is 10:00 PM at night and I am yawning. I am ________.', line: 'sleepy' },
          { sentence: '4. My stomach is rumbling for lunchtime pizza. I am ________.', line: 'hungry' },
          { sentence: '5. Tomorrow is my birthday party! I am so ________.', line: 'excited' }
        ]
      }
    ],
    answerKey: ['1. happy', '2. sad', '3. sleepy', '4. hungry', '5. excited']
  },

  // ================= GRADE 2 VOCABULARY =================
  {
    id: 'g2_vocab_food_drinks',
    grade: 2,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Yummy Foods & Healthy Drinks',
    titleKa: 'საჭმელები და სასმელები',
    topicEn: 'Bread, Milk, Cheese, Pizza, Banana, Apple, Juice, Egg, Water',
    topicKa: 'კვების ლექსიკა (I like / I don\'t like)',
    difficulty: 'Easy',
    instructionsEn: 'Categorize each item and complete the sentences with "I like" or "I don\'t like".',
    instructionsKa: 'შეავსე წინადადებები საჭმელების სახელებით.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Word Bank: [ MILK , CHEESE , BANANA , PIZZA , WATER , BREAD ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. Drink a glass of cold fresh ________ every morning.', line: 'milk' },
          { sentence: '2. Yellow dairy snack that mice love: ________.', line: 'cheese' },
          { sentence: '3. Sweet yellow fruit that monkeys eat: ________.', line: 'banana' },
          { sentence: '4. Warm baked lunch with tomatoes and cheese: ________.', line: 'pizza' },
          { sentence: '5. Clean healthy drink to stay hydrated: ________.', line: 'water' },
          { sentence: '6. Warm morning toast: ________.', line: 'bread' }
        ]
      }
    ],
    answerKey: ['1. milk', '2. cheese', '3. banana', '4. pizza', '5. water', '6. bread']
  },
  {
    id: 'g2_vocab_clothes_uniform',
    grade: 2,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'My Clothes & School Uniform',
    titleKa: 'ტანსაცმელი და სასკოლო ფორმა',
    topicEn: 'T-shirt, Jacket, Dress, Pants, Shoes, Socks, Hat, Scarf',
    topicKa: 'ტანსაცმლის ლექსიკა (I am wearing...)',
    difficulty: 'Easy',
    instructionsEn: 'Complete the sentences using the Clothing Word Bank.',
    instructionsKa: 'ჩასვი სწორი ტანსაცმლის სიტყვა.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Word Bank: [ T-SHIRT , JACKET , DRESS , SHOES , SOCKS , HAT ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. On sunny summer days, I wear a cotton ________.', line: 'T-shirt' },
          { sentence: '2. When it is cold and windy outside, put on a warm ________.', line: 'jacket' },
          { sentence: '3. Anna wears a beautiful pink ________ to the party.', line: 'dress' },
          { sentence: '4. Put on your clean white ________ before your shoes.', line: 'socks' },
          { sentence: '5. Tie your running ________ before going to PE gym class.', line: 'shoes' },
          { sentence: '6. Protect your head in the sun with a baseball ________.', line: 'hat' }
        ]
      }
    ],
    answerKey: ['1. T-shirt', '2. jacket', '3. dress', '4. socks', '5. shoes', '6. hat']
  },
  {
    id: 'g2_vocab_body_parts',
    grade: 2,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Human Body Parts & The 5 Senses',
    titleKa: 'სხეულის ნაწილები და 5 გრძნობა',
    topicEn: 'Head, Eyes (see), Ears (hear), Nose (smell), Mouth (taste), Hands (touch)',
    topicKa: 'სხეულის ნაწილები და გრძნობები',
    difficulty: 'Easy',
    instructionsEn: 'Match each body part with its function.',
    instructionsKa: 'შეუსაბამე სხეულის ნაწილი მის დანიშნულებას.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Body Parts & Senses Matching',
        headingKa: 'სავარჯიშო',
        items: [
          { sentence: '1. I see beautiful colors with my two ________.', line: 'eyes' },
          { sentence: '2. I listen to English songs with my two ________.', line: 'ears' },
          { sentence: '3. I smell sweet spring flowers with my ________.', line: 'nose' },
          { sentence: '4. I taste yummy ice cream with my ________.', line: 'mouth' },
          { sentence: '5. I clap and hold my pencil with my ________.', line: 'hands' },
          { sentence: '6. I run and jump fast with my two ________.', line: 'legs' }
        ]
      }
    ],
    answerKey: ['1. eyes', '2. ears', '3. nose', '4. mouth', '5. hands', '6. legs']
  },
  {
    id: 'g2_vocab_house_rooms',
    grade: 2,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'My Cozy House: Rooms & Furniture',
    titleKa: 'ჩემი სახლი: ოთახები და ავეჯი',
    topicEn: 'Living Room, Bedroom, Kitchen, Bathroom, Garden, Sofa, Bed, Table',
    topicKa: 'სახლის ოთახები და ავეჯი',
    difficulty: 'Easy',
    instructionsEn: 'Complete the sentences with the correct room of the house.',
    instructionsKa: 'შეავსე ოთახების სახელებით.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Word Bank: [ KITCHEN , BEDROOM , LIVING ROOM , BATHROOM , GARDEN ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. Mom cooks lunch and bakes cookies in the ________.', line: 'kitchen' },
          { sentence: '2. I sleep in my cozy bed at night in my ________.', line: 'bedroom' },
          { sentence: '3. Our family watches evening movies together in the ________.', line: 'living room' },
          { sentence: '4. I wash my hands and brush my teeth in the ________.', line: 'bathroom' },
          { sentence: '5. Green grass and pretty flowers grow in our backyard ________.', line: 'garden' }
        ]
      }
    ],
    answerKey: ['1. kitchen', '2. bedroom', '3. living room', '4. bathroom', '5. garden']
  },

  // ================= GRADE 3 VOCABULARY =================
  {
    id: 'g3_vocab_places_in_town',
    grade: 3,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Places in My Town & City Map',
    titleKa: 'ადგილები ქალაქში (School, Hospital, Library...)',
    topicEn: 'School, Hospital, Library, Supermarket, Park, Cinema, Bakery, Police Station',
    topicKa: 'ქალაქის ობიექტების ლექსიკა',
    difficulty: 'Medium',
    instructionsEn: 'Read each clue and write the correct town place.',
    instructionsKa: 'წაიკითხე მინიშნება და დაწერე ქალაქის ობიექტი.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Word Bank: [ HOSPITAL , LIBRARY , SUPERMARKET , CINEMA , BAKERY , PARK ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. Where doctors and nurses help sick people: ________.', line: 'hospital' },
          { sentence: '2. A quiet building where you borrow and read books: ________.', line: 'library' },
          { sentence: '3. A large store where you buy groceries and fruit: ________.', line: 'supermarket' },
          { sentence: '4. A theatre where you watch movies on a big screen: ________.', line: 'cinema' },
          { sentence: '5. A shop where you buy fresh warm bread and cakes: ________.', line: 'bakery' },
          { sentence: '6. An outdoor green area with trees, swings and slides: ________.', line: 'park' }
        ]
      }
    ],
    answerKey: ['1. hospital', '2. library', '3. supermarket', '4. cinema', '5. bakery', '6. park']
  },
  {
    id: 'g3_vocab_jobs_professions',
    grade: 3,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Jobs & Community Helpers',
    titleKa: 'პროფესიები და სამუშაოები',
    topicEn: 'Teacher, Doctor, Firefighter, Pilot, Chef, Police Officer, Artist',
    topicKa: 'პროფესიების ლექსიკა',
    difficulty: 'Medium',
    instructionsEn: 'Complete the sentences with the correct profession.',
    instructionsKa: 'შეავსე პროფესიის დასახელებით.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Word Bank: [ TEACHER , DOCTOR , FIREFIGHTER , PILOT , CHEF , ARTIST ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. A person who teaches English to students at school: ________.', line: 'teacher' },
          { sentence: '2. A brave person who puts out fires and rescues kittens: ________.', line: 'firefighter' },
          { sentence: '3. A skilled person who flies airplanes across the sky: ________.', line: 'pilot' },
          { sentence: '4. A culinary expert who cooks delicious dishes in a restaurant: ________.', line: 'chef' },
          { sentence: '5. A creative person who paints beautiful colorful pictures: ________.', line: 'artist' },
          { sentence: '6. A medical professional who cures illness: ________.', line: 'doctor' }
        ]
      }
    ],
    answerKey: ['1. teacher', '2. firefighter', '3. pilot', '4. chef', '5. artist', '6. doctor']
  },
  {
    id: 'g3_vocab_hobbies_sports',
    grade: 3,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Hobbies, Sports & Free Time Activities',
    titleKa: 'ჰობი, სპორტი და თავისუფალი დრო',
    topicEn: 'Football, Basketball, Swimming, Drawing, Reading, Cycling, Dancing',
    topicKa: 'სპორტისა და ჰობის ლექსიკა',
    difficulty: 'Medium',
    instructionsEn: 'Fill in the blanks with the correct sport or hobby verb.',
    instructionsKa: 'შეავსე სპორტის ან ჰობის სიტყვებით.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Word Bank: [ FOOTBALL , SWIMMING , DRAWING , CYCLING , DANCING ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. Kicking a ball into the goal net with 11 players: ________.', line: 'football' },
          { sentence: '2. Moving through cool water in a pool: ________.', line: 'swimming' },
          { sentence: '3. Making colorful pictures with pencils and crayons: ________.', line: 'drawing' },
          { sentence: '4. Riding your two-wheeled bicycle in the park: ________.', line: 'cycling' },
          { sentence: '5. Moving your body to happy rhythm and music: ________.', line: 'dancing' }
        ]
      }
    ],
    answerKey: ['1. football', '2. swimming', '3. drawing', '4. cycling', '5. dancing']
  },

  // ================= GRADE 4 VOCABULARY =================
  {
    id: 'g4_vocab_countries_nationalities',
    grade: 4,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Countries & Nationalities World Explorer',
    titleKa: 'ქვეყნები და ეროვნებები',
    topicEn: 'Georgia/Georgian, UK/British, USA/American, France/French, Italy/Italian, Japan/Japanese',
    topicKa: 'ქვეყნებისა და ეროვნებების ლექსიკა',
    difficulty: 'Medium',
    instructionsEn: 'Complete the country and nationality pairs.',
    instructionsKa: 'შეავსე ქვეყნებისა და ეროვნებების წყვილები.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Country ➔ Nationality Matching',
        headingKa: 'სავარჯიშო',
        items: [
          { sentence: '1. Lucas lives in Georgia. He is ________.', line: 'Georgian' },
          { sentence: '2. Emma lives in the United Kingdom. She is ________.', line: 'British' },
          { sentence: '3. Noah lives in the United States. He is ________.', line: 'American' },
          { sentence: '4. Pierre lives in France. He is ________.', line: 'French' },
          { sentence: '5. Marco lives in Italy. He is ________.', line: 'Italian' },
          { sentence: '6. Kenji lives in Japan. He is ________.', line: 'Japanese' }
        ]
      }
    ],
    answerKey: ['1. Georgian', '2. British', '3. American', '4. French', '5. Italian', '6. Japanese']
  },
  {
    id: 'g4_vocab_nature_geography',
    grade: 4,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Nature, Landscapes & Planet Earth',
    titleKa: 'ბუნება, გეოგრაფია და ლანდშაფტები',
    topicEn: 'Mountain, River, Ocean, Forest, Island, Desert, Waterfall, Valley',
    topicKa: 'გეოგრაფიული ლექსიკა',
    difficulty: 'Medium',
    instructionsEn: 'Complete the geographical descriptions using the Word Bank.',
    instructionsKa: 'შეავსე ბუნების ლექსიკის სიტყვებით.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Word Bank: [ MOUNTAIN , OCEAN , DESERT , ISLAND , WATERFALL , FOREST ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. A huge natural elevation of rock reaching high into clouds: ________.', line: 'mountain' },
          { sentence: '2. A vast body of salty blue water covering most of Earth: ________.', line: 'ocean' },
          { sentence: '3. A dry, hot, sandy region with very little rain: ________.', line: 'desert' },
          { sentence: '4. A piece of land completely surrounded by water: ________.', line: 'island' },
          { sentence: '5. A cascade where river water drops steeply over cliffs: ________.', line: 'waterfall' },
          { sentence: '6. A large area covered with tall green trees and wildlife: ________.', line: 'forest' }
        ]
      }
    ],
    answerKey: ['1. mountain', '2. ocean', '3. desert', '4. island', '5. waterfall', '6. forest']
  },
  {
    id: 'g4_vocab_space_planets',
    grade: 4,
    category: 'vocabulary',
    isFree: true,
    titleEn: 'Outer Space & The Solar System',
    titleKa: 'კოსმოსი და მზის სისტემა',
    topicEn: 'Astronaut, Rocket, Telescope, Sun, Moon, Earth, Mars, Stars',
    topicKa: 'ასტრონომიისა და კოსმოსის ლექსიკა',
    difficulty: 'Medium',
    instructionsEn: 'Read the astronomy clues and write the correct space word.',
    instructionsKa: 'შეავსე კოსმოსის ლექსიკის სიტყვებით.',
    icon: 'treasure',
    previewArt: 'treasure',
    sections: [
      {
        headingEn: 'Word Bank: [ ASTRONAUT , ROCKET , TELESCOPE , EARTH , SUN , MOON ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { sentence: '1. A brave person trained to travel and work in outer space: ________.', line: 'astronaut' },
          { sentence: '2. A powerful vehicle that launches spacecraft into space: ________.', line: 'rocket' },
          { sentence: '3. An optical instrument used to view distant planets and stars: ________.', line: 'telescope' },
          { sentence: '4. Our home planet with oceans, continents and life: ________.', line: 'Earth' },
          { sentence: '5. The giant glowing star at the center of our solar system: ________.', line: 'Sun' },
          { sentence: '6. Earth\'s natural satellite that lights up the night sky: ________.', line: 'Moon' }
        ]
      }
    ],
    answerKey: ['1. astronaut', '2. rocket', '3. telescope', '4. Earth', '5. Sun', '6. Moon']
  }
];
