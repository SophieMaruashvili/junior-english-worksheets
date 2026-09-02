import React from 'react';

interface ArtProps {
  name: string;
  size?: number;
  className?: string;
  outlineOnly?: boolean;
}

export const WorkbookArt: React.FC<ArtProps> = ({ name, size = 60, className = '', outlineOnly = false }) => {
  const key = name.toLowerCase().trim();

  // Clean educational workbook line-art illustrations (coloring-book ready, zero emojis)
  switch (key) {
    case 'cat':
    case 'g1_cvc_rhymes':
    case 'g1_cvc_ig_og':
    case 'g1_cvc_un_ed':
    case 'g2_have_got_has_got':
    case 'g2_have_got_questions':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M28 40 L34 16 L48 32 C62 30 72 40 72 56 C72 74 58 84 48 84 C38 84 24 74 24 56 C24 48 26 44 28 40 Z" fill={outlineOnly ? '#FFF' : '#F8FAFC'} />
          <path d="M72 40 L66 16 L52 32" fill={outlineOnly ? '#FFF' : '#F8FAFC'} />
          <circle cx="38" cy="50" r="3.5" fill="#1E293B" />
          <circle cx="58" cy="50" r="3.5" fill="#1E293B" />
          <polygon points="46,58 50,58 48,61" fill="#1E293B" />
          <path d="M44 63 Q48 66 52 63" fill="none" />
          <line x1="20" y1="56" x2="34" y2="58" />
          <line x1="20" y1="62" x2="34" y2="61" />
          <line x1="76" y1="56" x2="62" y2="58" />
          <line x1="76" y1="62" x2="62" y2="61" />
        </svg>
      );

    case 'spring':
    case 'g1_seasons_days':
    case 'g1_months_calendar':
    case 'g1_weather_clothing':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M50 48 Q46 72 50 88" stroke="#15803D" strokeWidth="4" />
          <path d="M48 68 Q30 64 36 54 Q46 58 48 68 Z" fill={outlineOnly ? '#FFF' : '#DCFCE7'} />
          <circle cx="50" cy="30" r="11" fill={outlineOnly ? '#FFF' : '#FCE7F3'} />
          <circle cx="64" cy="40" r="11" fill={outlineOnly ? '#FFF' : '#FCE7F3'} />
          <circle cx="59" cy="55" r="11" fill={outlineOnly ? '#FFF' : '#FCE7F3'} />
          <circle cx="41" cy="55" r="11" fill={outlineOnly ? '#FFF' : '#FCE7F3'} />
          <circle cx="36" cy="40" r="11" fill={outlineOnly ? '#FFF' : '#FCE7F3'} />
          <circle cx="50" cy="44" r="10" fill={outlineOnly ? '#FFF' : '#FEF08A'} stroke="#B45309" strokeWidth="2.5" />
        </svg>
      );

    case 'rainbow':
    case 'g1_color_sight_words':
    case 'g1_colors_shapes':
    case 'g1_animals_numbers':
    case 'g1_classroom_objects':
    case 'g1_family_members':
    case 'g1_feelings_emotions':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M20 74 A30 30 0 0 1 80 74" fill="none" stroke={outlineOnly ? '#1E293B' : '#EF4444'} strokeWidth="5" />
          <path d="M26 74 A24 24 0 0 1 74 74" fill="none" stroke={outlineOnly ? '#1E293B' : '#F59E0B'} strokeWidth="5" />
          <path d="M32 74 A18 18 0 0 1 68 74" fill="none" stroke={outlineOnly ? '#1E293B' : '#10B981'} strokeWidth="5" />
          <path d="M38 74 A12 12 0 0 1 62 74" fill="none" stroke={outlineOnly ? '#1E293B' : '#3A86FF'} strokeWidth="5" />
          <circle cx="20" cy="74" r="10" fill="#FFF" />
          <circle cx="28" cy="70" r="12" fill="#FFF" />
          <circle cx="80" cy="74" r="10" fill="#FFF" />
          <circle cx="72" cy="70" r="12" fill="#FFF" />
        </svg>
      );

    case 'magic_e':
    case 'g2_magic_e_transformer':
    case 'g2_vowels_long_short':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M24 76 L70 30" stroke="#7C3AED" strokeWidth="5" />
          <path d="M70 30 L76 24 L80 28 L74 34 Z" fill={outlineOnly ? '#FFF' : '#FDE047'} stroke="#7C3AED" />
          <path d="M78 14 L80 18 L84 20 L80 22 L78 26 L76 22 L72 20 L76 18 Z" fill={outlineOnly ? '#FFF' : '#F59E0B'} />
          <path d="M48 18 L50 22 L54 24 L50 26 L48 30 L46 26 L42 24 L46 22 Z" fill={outlineOnly ? '#FFF' : '#38BDF8'} />
        </svg>
      );

    case 'shark':
    case 'g2_can_cant_abilities':
    case 'g2_digraphs_ch_sh':
    case 'g2_digraphs_th_wh_ck':
    case 'g2_action_verbs_gym':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 56 Q38 28 72 38 Q86 42 88 52 Q74 54 62 62 Q40 68 18 56 Z" fill={outlineOnly ? '#FFF' : '#E0F2FE'} />
          <path d="M48 33 Q54 14 64 20 Q58 28 54 35 Z" fill={outlineOnly ? '#FFF' : '#BAE6FD'} />
          <path d="M18 56 Q8 46 6 36 Q12 48 18 56 Q10 64 6 76 Q12 64 18 56 Z" fill={outlineOnly ? '#FFF' : '#BAE6FD'} />
          <circle cx="76" cy="44" r="3" fill="#1E293B" />
        </svg>
      );

    case 'treehouse':
    case 'g2_prepositions_place':
    case 'g2_singular_plural_nouns':
    case 'g2_body_parts_clothes':
    case 'g2_food_drinks_likes':
    case 'g3_parts_of_speech':
    case 'g3_present_simple_habits':
    case 'g3_present_simple_questions':
    case 'g3_present_continuous_now':
    case 'g3_present_simple_vs_cont':
    case 'g3_reading_detective_treehouse':
    case 'g3_possessives_pronouns':
    case 'g3_demonstratives_this_that':
    case 'g3_places_in_town':
    case 'g3_daily_routines':
    case 'g3_opposites_synonyms':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M42 90 L42 60 L32 40 M58 90 L58 60 L68 40" stroke="#78350F" strokeWidth="5" />
          <circle cx="50" cy="38" r="32" fill={outlineOnly ? '#FFF' : '#DCFCE7'} stroke="#15803D" strokeWidth="3" />
          <rect x="36" y="36" width="28" height="22" rx="2" fill={outlineOnly ? '#FFF' : '#FEF3C7'} stroke="#B45309" strokeWidth="2.5" />
          <polygon points="34,36 50,22 66,36" fill={outlineOnly ? '#FFF' : '#FDE68A'} stroke="#B45309" strokeWidth="2.5" />
          <rect x="44" y="44" width="8" height="14" fill="#78350F" />
          <rect x="54" y="42" width="6" height="6" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          <line x1="38" y1="58" x2="36" y2="90" stroke="#78350F" strokeWidth="2" />
          <line x1="44" y1="58" x2="42" y2="90" stroke="#78350F" strokeWidth="2" />
        </svg>
      );

    case 'treasure':
    case 'g4_past_simple_irregulars':
    case 'g4_past_simple_regulars':
    case 'g4_past_simple_was_were':
    case 'g4_past_simple_questions':
    case 'g4_comparatives_superlatives':
    case 'g4_superlatives_champions':
    case 'g4_wh_questions_mystery':
    case 'g4_future_plans_going_to':
    case 'g4_adverbs_of_frequency':
    case 'g4_reading_golden_compass':
    case 'g4_story_starter_weekend':
    case 'g4_prepositions_of_time':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M22 48 L78 48 L74 80 L26 80 Z" fill={outlineOnly ? '#FFF' : '#FEF3C7'} stroke="#B45309" strokeWidth="3" />
          <path d="M20 48 Q50 28 80 48 Z" fill={outlineOnly ? '#FFF' : '#FDE047'} stroke="#B45309" strokeWidth="3" />
          <rect x="46" y="46" width="8" height="10" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <circle cx="50" cy="50" r="1.5" fill="#1E293B" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="24" y="16" width="52" height="68" rx="6" fill={outlineOnly ? '#FFF' : '#F8FAFC'} />
          <line x1="34" y1="32" x2="66" y2="32" />
          <line x1="34" y1="44" x2="66" y2="44" />
          <line x1="34" y1="56" x2="56" y2="56" />
        </svg>
      );
  }
};
