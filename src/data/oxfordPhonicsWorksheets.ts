import { WorksheetData } from '../types';

export const oxfordPhonicsWorksheets: WorksheetData[] = [
  // 1. CH & SH Digraphs
  {
    id: 'g2_oxford_ch_sh',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: Digraphs CH & SH',
    titleKa: 'ასოთშეთანხმებები CH და SH',
    topicEn: 'CH (Chair, Chicken, Beach) vs. SH (Shark, Shell, Shoes, Ship)',
    topicKa: 'CH და SH ბგერები და სიტყვები',
    difficulty: 'Easy',
    instructionsEn: 'Look at the pictures, complete the words with "ch" or "sh", and copy the words.',
    instructionsKa: 'შეავსე სიტყვები "ch" ან "sh"-ით და გადაწერე ხაზზე.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Section A: The "CH" Digraph (/tʃ/ sound)',
        headingKa: 'ჯგუფი A: „CH“ სიტყვები',
        items: [
          { prompt: '1. ___ A I R ➔ chair (sit on it)', trace: 'chair', line: 'c h a i r' },
          { prompt: '2. ___ I C K E N ➔ chicken (farm bird)', trace: 'chicken', line: 'c h i c k e n' },
          { prompt: '3. ___ E E S E ➔ cheese (yellow dairy)', trace: 'cheese', line: 'c h e e s e' },
          { prompt: '4. B E A ___ ➔ beach (sandy ocean coast)', trace: 'beach', line: 'b e a c h' }
        ]
      },
      {
        headingEn: 'Section B: The "SH" Digraph (/ʃ/ sound)',
        headingKa: 'ჯგუფი B: „SH“ სიტყვები',
        items: [
          { prompt: '5. ___ A R K ➔ shark (ocean hunter)', trace: 'shark', line: 's h a r k' },
          { prompt: '6. ___ E L L ➔ shell (seashell on sand)', trace: 'shell', line: 's h e l l' },
          { prompt: '7. ___ O E S ➔ shoes (wear on feet)', trace: 'shoes', line: 's h o e s' },
          { prompt: '8. ___ I P ➔ ship (sails on water)', trace: 'ship', line: 's h i p' }
        ]
      }
    ],
    answerKey: ['1. chair', '2. chicken', '3. cheese', '4. beach', '5. shark', '6. shell', '7. shoes', '8. ship']
  },

  // 2. TH & WH Digraphs
  {
    id: 'g2_oxford_th_wh',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: Digraphs TH & WH',
    titleKa: 'ასოთშეთანხმებები TH და WH',
    topicEn: 'TH (Three, Think, Thumb, Teeth) vs. WH (Whale, White, Wheel, Whistle)',
    topicKa: 'TH და WH ბგერები და სიტყვები',
    difficulty: 'Medium',
    instructionsEn: 'Complete each word with "th" or "wh" and trace.',
    instructionsKa: 'შეავსე სიტყვები "th" ან "wh"-ით.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Section A: The "TH" Digraph',
        headingKa: 'ჯგუფი A: „TH“ სიტყვები',
        items: [
          { prompt: '1. ___ R E E ➔ three (number 3)', trace: 'three', line: 't h r e e' },
          { prompt: '2. ___ U M B ➔ thumb (hand finger)', trace: 'thumb', line: 't h u m b' },
          { prompt: '3. ___ I N K ➔ think (use your brain)', trace: 'think', line: 't h i n k' },
          { prompt: '4. T E E ___ ➔ teeth (brush your teeth)', trace: 'teeth', line: 't e e t h' }
        ]
      },
      {
        headingEn: 'Section B: The "WH" Digraph',
        headingKa: 'ჯგუფი B: „WH“ სიტყვები',
        items: [
          { prompt: '5. ___ A L E ➔ whale (giant blue mammal)', trace: 'whale', line: 'w h a l e' },
          { prompt: '6. ___ I T E ➔ white (white snow)', trace: 'white', line: 'w h i t e' },
          { prompt: '7. ___ E E L ➔ wheel (bicycle wheel)', trace: 'wheel', line: 'w h e e l' },
          { prompt: '8. ___ I S T L E ➔ whistle (makes sound)', trace: 'whistle', line: 'w h i s t l e' }
        ]
      }
    ],
    answerKey: ['1. three', '2. thumb', '3. think', '4. teeth', '5. whale', '6. white', '7. wheel', '8. whistle']
  },

  // 3. PH & CK Digraphs
  {
    id: 'g2_oxford_ph_ck',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: Digraphs PH & CK',
    titleKa: 'ასოთშეთანხმებები PH და CK',
    topicEn: 'PH /f/ (Phone, Dolphin, Photo) vs. CK /k/ (Duck, Clock, Sock, Rock)',
    topicKa: 'PH (ფ) და CK (კ) ბგერები',
    difficulty: 'Medium',
    instructionsEn: 'Fill in the blanks with "ph" (/f/) or "ck" (/k/).',
    instructionsKa: 'შეავსე "ph" ან "ck"-ით.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Section A: The "PH" Digraph (/f/ sound)',
        headingKa: 'ჯგუფი A',
        items: [
          { prompt: '1. ___ O N E ➔ phone (call a friend)', trace: 'phone', line: 'p h o n e' },
          { prompt: '2. D O L ___ I N ➔ dolphin (friendly swimmer)', trace: 'dolphin', line: 'd o l p h i n' },
          { prompt: '3. ___ O T O ➔ photo (camera picture)', trace: 'photo', line: 'p h o t o' },
          { prompt: '4. E L E ___ A N T ➔ elephant (big ears)', trace: 'elephant', line: 'e l e p h a n t' }
        ]
      },
      {
        headingEn: 'Section B: The "CK" Digraph (/k/ sound)',
        headingKa: 'ჯგუფი B',
        items: [
          { prompt: '5. D U ___ ➔ duck (swims and quacks)', trace: 'duck', line: 'd u c k' },
          { prompt: '6. C L O ___ ➔ clock (tells time)', trace: 'clock', line: 'c l o c k' },
          { prompt: '7. S O ___ ➔ sock (wear in shoes)', trace: 'sock', line: 's o c k' },
          { prompt: '8. R O ___ ➔ rock (hard gray stone)', trace: 'rock', line: 'r o c k' }
        ]
      }
    ],
    answerKey: ['1. phone', '2. dolphin', '3. photo', '4. elephant', '5. duck', '6. clock', '7. sock', '8. rock']
  },

  // 4. L-Blends (BL, CL, FL, GL, PL, SL)
  {
    id: 'g2_oxford_l_blends',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: L-Blends (BL, CL, FL, GL, PL, SL)',
    titleKa: 'L-თანხმოვანთა შერწყმა: BL, CL, FL, GL, PL, SL',
    topicEn: 'Blue, Black, Clock, Clown, Flag, Glass, Plate, Slide',
    topicKa: 'BL, CL, FL, GL, PL, SL სიტყვები',
    difficulty: 'Medium',
    instructionsEn: 'Complete the word with the correct L-blend from the Word Bank.',
    instructionsKa: 'შეავსე სწორი L-შეთანხმებით.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Word Bank: [ BL , CL , FL , GL , PL , SL ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { prompt: '1. ___ U E ➔ blue (color of the sky)', line: 'blue', blend: 'BL' },
          { prompt: '2. ___ O C K ➔ clock (on the wall)', line: 'clock', blend: 'CL' },
          { prompt: '3. ___ A G ➔ flag (flying in wind)', line: 'flag', blend: 'FL' },
          { prompt: '4. ___ A S S ➔ glass (drink water)', line: 'glass', blend: 'GL' },
          { prompt: '5. ___ A T E ➔ plate (eat lunch on it)', line: 'plate', blend: 'PL' },
          { prompt: '6. ___ I D E ➔ slide (play in park)', line: 'slide', blend: 'SL' }
        ]
      }
    ],
    answerKey: ['1. BL (blue)', '2. CL (clock)', '3. FL (flag)', '4. GL (glass)', '5. PL (plate)', '6. SL (slide)']
  },

  // 5. R-Blends (BR, CR, DR, FR, GR, TR)
  {
    id: 'g2_oxford_r_blends',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: R-Blends (BR, CR, DR, FR, GR, TR)',
    titleKa: 'R-თანხმოვანთა შერწყმა: BR, CR, DR, FR, GR, TR',
    topicEn: 'Bread, Brown, Crab, Dragon, Frog, Grapes, Tree, Train',
    topicKa: 'BR, CR, DR, FR, GR, TR სიტყვები',
    difficulty: 'Medium',
    instructionsEn: 'Choose the matching R-blend: [ BR , CR , DR , FR , GR , TR ].',
    instructionsKa: 'შეარჩიე სწორი R-შეთანხმება.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Word Bank: [ BR , CR , DR , FR , GR , TR ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { prompt: '1. ___ O W N ➔ brown (color of bear)', line: 'brown', blend: 'BR' },
          { prompt: '2. ___ A B ➔ crab (walks on beach)', line: 'crab', blend: 'CR' },
          { prompt: '3. ___ A G O N ➔ dragon (flies with fire)', line: 'dragon', blend: 'DR' },
          { prompt: '4. ___ O G ➔ frog (jumps in pond)', line: 'frog', blend: 'FR' },
          { prompt: '5. ___ A P E S ➔ grapes (sweet purple fruit)', line: 'grapes', blend: 'GR' },
          { prompt: '6. ___ E E ➔ tree (tall green tree)', line: 'tree', blend: 'TR' }
        ]
      }
    ],
    answerKey: ['1. BR (brown)', '2. CR (crab)', '3. DR (dragon)', '4. FR (frog)', '5. GR (grapes)', '6. TR (tree)']
  },

  // 6. S-Blends (SM, SN, SP, ST, SW)
  {
    id: 'g2_oxford_s_blends',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: S-Blends (SM, SN, SP, ST, SW)',
    titleKa: 'S-თანხმოვანთა შერწყმა: SM, SN, SP, ST, SW',
    topicEn: 'Smile, Snake, Spoon, Spider, Star, Stop, Swim, Sweet',
    topicKa: 'SM, SN, SP, ST, SW სიტყვები',
    difficulty: 'Medium',
    instructionsEn: 'Complete the words with [ SM , SN , SP , ST , SW ].',
    instructionsKa: 'შეავსე [ SM , SN , SP , ST , SW ]-ით.',
    icon: 'shark',
    previewArt: 'shark',
    sections: [
      {
        headingEn: 'Word Bank: [ SM , SN , SP , ST , SW ]',
        headingKa: 'სიტყვათა ბანკი',
        items: [
          { prompt: '1. ___ I L E ➔ smile (happy face)', line: 'smile', blend: 'SM' },
          { prompt: '2. ___ A K E ➔ snake (crawls on grass)', line: 'snake', blend: 'SN' },
          { prompt: '3. ___ O O N ➔ spoon (eat soup)', line: 'spoon', blend: 'SP' },
          { prompt: '4. ___ A R ➔ star (shines at night)', line: 'star', blend: 'ST' },
          { prompt: '5. ___ I M ➔ swim (swim in water)', line: 'swim', blend: 'SW' },
          { prompt: '6. ___ O P ➔ stop (red traffic light)', line: 'stop', blend: 'ST' }
        ]
      }
    ],
    answerKey: ['1. SM (smile)', '2. SN (snake)', '3. SP (spoon)', '4. ST (star)', '5. SW (swim)', '6. ST (stop)']
  },

  // 7. Long Vowel Teams: EE & EA
  {
    id: 'g2_oxford_vowel_ee_ea',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: Long Vowel Teams EE & EA',
    titleKa: 'გრძელი ხმოვანთა შეთანხმება: EE და EA',
    topicEn: 'EE (Tree, Bee, Feet, Green) vs. EA (Leaf, Tea, Read, Meat)',
    topicKa: 'EE და EA ხმოვნები (/i:/ ბგერა)',
    difficulty: 'Medium',
    instructionsEn: 'Complete the words with "ee" or "ea" and trace on lines.',
    instructionsKa: 'შეავსე "ee" ან "ea"-თი და გამოწერე.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Section A: The "EE" Team',
        headingKa: 'ჯგუფი A: „EE“ სიტყვები',
        items: [
          { prompt: '1. T R ___ ___ ➔ tree (tall green tree)', trace: 'tree', line: 't r e e' },
          { prompt: '2. B ___ ___ ➔ bee (makes sweet honey)', trace: 'bee', line: 'b e e' },
          { prompt: '3. F ___ ___ T ➔ feet (walk with two feet)', trace: 'feet', line: 'f e e t' },
          { prompt: '4. G R ___ ___ N ➔ green (color of grass)', trace: 'green', line: 'g r e e n' }
        ]
      },
      {
        headingEn: 'Section B: The "EA" Team',
        headingKa: 'ჯგუფი B: „EA“ სიტყვები',
        items: [
          { prompt: '5. L ___ ___ F ➔ leaf (green autumn leaf)', trace: 'leaf', line: 'l e a f' },
          { prompt: '6. T ___ ___ ➔ tea (warm cup of tea)', trace: 'tea', line: 't e a' },
          { prompt: '7. R ___ ___ D ➔ read (read an English book)', trace: 'read', line: 'r e a d' },
          { prompt: '8. S ___ ___ ➔ sea (blue deep ocean)', trace: 'sea', line: 's e a' }
        ]
      }
    ],
    answerKey: ['1. tree', '2. bee', '3. feet', '4. green', '5. leaf', '6. tea', '7. read', '8. sea']
  },

  // 8. Long Vowel Teams: AI & AY
  {
    id: 'g2_oxford_vowel_ai_ay',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: Long Vowel Teams AI & AY',
    titleKa: 'გრძელი ხმოვანთა შეთანხმება: AI და AY',
    topicEn: 'AI in middle (Rain, Train, Snail, Tail) vs. AY at end (Play, Day, May, Say)',
    topicKa: 'AI (შუაში) და AY (ბოლოში) /eɪ/ ბგერა',
    difficulty: 'Medium',
    instructionsEn: 'Complete words with "ai" (middle) or "ay" (word ending).',
    instructionsKa: 'შეავსე "ai" ან "ay"-თი.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Complete with [ AI (middle) / AY (end) ]',
        headingKa: 'სავარჯიშო',
        items: [
          { prompt: '1. R ___ ___ N ➔ rain (water falls from clouds)', line: 'rain' },
          { prompt: '2. P L ___ ___ ➔ play (play in the park)', line: 'play' },
          { prompt: '3. T R ___ ___ N ➔ train (fast electric train)', line: 'train' },
          { prompt: '4. D ___ ___ ➔ day (sunny warm day)', line: 'day' },
          { prompt: '5. S N ___ ___ L ➔ snail (slow garden animal)', line: 'snail' },
          { prompt: '6. T R ___ ___ ➔ tray (carry food on tray)', line: 'tray' }
        ]
      }
    ],
    answerKey: ['1. rain', '2. play', '3. train', '4. day', '5. snail', '6. tray']
  },

  // 9. Long Vowel Teams: OA & OW
  {
    id: 'g2_oxford_vowel_oa_ow',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: Long Vowel Teams OA & OW',
    titleKa: 'გრძელი ხმოვანთა შეთანხმება: OA და OW',
    topicEn: 'OA (Boat, Coat, Soap, Road) vs. OW (Snow, Window, Yellow, Bowl)',
    topicKa: 'OA და OW /oʊ/ ბგერა',
    difficulty: 'Medium',
    instructionsEn: 'Fill in the blanks with "oa" or "ow" to complete the words.',
    instructionsKa: 'შეავსე "oa" ან "ow"-თი.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Complete with [ OA / OW ]',
        headingKa: 'სავარჯიშო',
        items: [
          { prompt: '1. B ___ ___ T ➔ boat (sails on lake)', line: 'boat' },
          { prompt: '2. C ___ ___ T ➔ coat (warm winter coat)', line: 'coat' },
          { prompt: '3. S N ___ ___ ➔ snow (white cold snow)', line: 'snow' },
          { prompt: '4. S ___ ___ P ➔ soap (wash hands with soap)', line: 'soap' },
          { prompt: '5. Y E L L ___ ___ ➔ yellow (yellow sunshine)', line: 'yellow' },
          { prompt: '6. B ___ ___ L ➔ bowl (bowl of cereal)', line: 'bowl' }
        ]
      }
    ],
    answerKey: ['1. boat', '2. coat', '3. snow', '4. soap', '5. yellow', '6. bowl']
  },

  // 10. Double O Teams (OO Short & Long)
  {
    id: 'g2_oxford_vowel_oo',
    grade: 2,
    category: 'phonics',
    isFree: true,
    titleEn: 'Oxford Phonics: Double "OO" Sounds',
    titleKa: 'ორმაგი OO ბგერები (Moon, Book, Spoon...)',
    topicEn: 'Long /u:/ (Moon, Spoon, Zoo, Pool) vs. Short /ʊ/ (Book, Foot, Wood, Look)',
    topicKa: 'OO მოკლე და გრძელი ბგერები',
    difficulty: 'Medium',
    instructionsEn: 'Complete the words with "oo" and read them aloud.',
    instructionsKa: 'შეავსე "oo"-თი და ხმამაღლა წაიკითხე.',
    icon: 'treehouse',
    previewArt: 'treehouse',
    sections: [
      {
        headingEn: 'Trace and Complete with "OO":',
        headingKa: 'სავარჯიშო',
        items: [
          { prompt: '1. M ___ ___ N ➔ moon (shines in night sky)', trace: 'moon', line: 'm o o n' },
          { prompt: '2. B ___ ___ K ➔ book (read funny story)', trace: 'book', line: 'b o o k' },
          { prompt: '3. S P ___ ___ N ➔ spoon (eat yogurt)', trace: 'spoon', line: 's p o o n' },
          { prompt: '4. F ___ ___ T ➔ foot (stand on one foot)', trace: 'foot', line: 'f o o t' },
          { prompt: '5. Z ___ ___ ➔ zoo (visit wild animals)', trace: 'zoo', line: 'z o o' },
          { prompt: '6. W ___ ___ D ➔ wood (tree wood for fire)', trace: 'wood', line: 'w o o d' }
        ]
      }
    ],
    answerKey: ['1. moon', '2. book', '3. spoon', '4. foot', '5. zoo', '6. wood']
  }
];
