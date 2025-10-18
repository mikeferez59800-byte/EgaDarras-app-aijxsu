
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Situation {
  id: string;
  title: string;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GameQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export const stereotypesQuestions: Question[] = [
  {
    id: 'st1',
    question: 'Qu&apos;est-ce qu&apos;un stéréotype de genre ?',
    options: [
      'Une vérité scientifique',
      'Une croyance simplifiée et généralisée sur les caractéristiques des hommes et des femmes',
      'Une préférence personnelle',
      'Une loi naturelle'
    ],
    correctAnswer: 1,
    explanation: 'Un stéréotype de genre est une croyance simplifiée et souvent fausse sur ce que sont ou devraient être les hommes et les femmes.'
  },
  {
    id: 'st2',
    question: 'Les stéréotypes de genre sont-ils innés ?',
    options: [
      'Oui, c&apos;est biologique',
      'Non, ils sont appris et construits socialement',
      'Partiellement innés',
      'Ça dépend des cultures'
    ],
    correctAnswer: 1,
    explanation: 'Les stéréotypes de genre sont appris dès l&apos;enfance à travers la socialisation, pas innés.'
  },
  {
    id: 'st3',
    question: 'Quel est l&apos;impact des stéréotypes sur les choix de carrière ?',
    options: [
      'Aucun impact',
      'Ils limitent les aspirations et orientent vers des métiers "typiques"',
      'Ils aident à choisir',
      'Impact minimal'
    ],
    correctAnswer: 1,
    explanation: 'Les stéréotypes limitent les choix de carrière en orientant vers des métiers considérés comme "appropriés" pour chaque genre.'
  },
  {
    id: 'st4',
    question: 'Le rose est-il naturellement une couleur féminine ?',
    options: [
      'Oui, depuis toujours',
      'Non, c&apos;est une construction sociale récente (XXe siècle)',
      'Oui, biologiquement',
      'Ça dépend des pays'
    ],
    correctAnswer: 1,
    explanation: 'L&apos;association rose-filles et bleu-garçons est une construction sociale du XXe siècle, pas une réalité naturelle.'
  },
  {
    id: 'st5',
    question: 'Les garçons sont-ils naturellement meilleurs en mathématiques ?',
    options: [
      'Oui, c&apos;est prouvé',
      'Non, c&apos;est un stéréotype sans fondement scientifique',
      'Oui, en moyenne',
      'Ça dépend des individus uniquement'
    ],
    correctAnswer: 1,
    explanation: 'Aucune différence biologique n&apos;explique une meilleure performance en maths. C&apos;est un stéréotype nuisible.'
  },
  {
    id: 'st6',
    question: 'Les filles sont-elles naturellement plus émotives ?',
    options: [
      'Oui, c&apos;est hormonal',
      'Non, c&apos;est un stéréotype. On autorise plus les filles à exprimer leurs émotions',
      'Oui, c&apos;est évident',
      'Partiellement vrai'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un stéréotype. Les différences viennent de la socialisation qui encourage ou décourage l&apos;expression émotionnelle.'
  },
  {
    id: 'st7',
    question: 'Qu&apos;est-ce que la menace du stéréotype ?',
    options: [
      'Une théorie du complot',
      'L&apos;anxiété qui nuit à la performance quand on craint de confirmer un stéréotype',
      'Une forme de discrimination',
      'Un concept psychologique dépassé'
    ],
    correctAnswer: 1,
    explanation: 'La menace du stéréotype est l&apos;anxiété qui peut nuire à la performance quand on craint de confirmer un stéréotype négatif.'
  },
  {
    id: 'st8',
    question: 'Les hommes sont-ils moins capables de s&apos;occuper des enfants ?',
    options: [
      'Oui, c&apos;est maternel',
      'Non, c&apos;est un stéréotype. Les compétences parentales s&apos;apprennent',
      'Oui, naturellement',
      'Ça dépend de l&apos;homme'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un stéréotype. Les compétences parentales s&apos;apprennent et ne dépendent pas du genre.'
  },
  {
    id: 'st9',
    question: 'Les stéréotypes affectent-ils l&apos;estime de soi ?',
    options: [
      'Non, on peut les ignorer',
      'Oui, ils peuvent réduire la confiance et l&apos;estime de soi',
      'Seulement chez les enfants',
      'Très rarement'
    ],
    correctAnswer: 1,
    explanation: 'Les stéréotypes intériorisés peuvent significativement affecter l&apos;estime de soi et la confiance en ses capacités.'
  },
  {
    id: 'st10',
    question: 'Qu&apos;est-ce que le biais de confirmation ?',
    options: [
      'Confirmer ses rendez-vous',
      'La tendance à chercher des informations qui confirment nos stéréotypes',
      'Une technique scientifique',
      'Un type de discrimination'
    ],
    correctAnswer: 1,
    explanation: 'Le biais de confirmation nous pousse à remarquer les exemples qui confirment nos stéréotypes et ignorer ceux qui les contredisent.'
  },
  {
    id: 'st11',
    question: 'Les femmes sont-elles moins compétitives que les hommes ?',
    options: [
      'Oui, naturellement',
      'Non, c&apos;est un stéréotype. La compétitivité dépend de l&apos;éducation et du contexte',
      'Oui, biologiquement',
      'Généralement oui'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un stéréotype. La compétitivité dépend de l&apos;éducation, du contexte et de la personnalité, pas du genre.'
  },
  {
    id: 'st12',
    question: 'Les hommes qui montrent leurs émotions sont-ils faibles ?',
    options: [
      'Oui, c&apos;est pas viril',
      'Non, c&apos;est un stéréotype toxique. Exprimer ses émotions est sain',
      'Ça dépend des émotions',
      'Oui, dans certaines cultures'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un stéréotype toxique. Exprimer ses émotions est sain et n&apos;a rien à voir avec la force ou la faiblesse.'
  },
  {
    id: 'st13',
    question: 'Les stéréotypes de genre nuisent-ils aussi aux hommes ?',
    options: [
      'Non, ils avantagent les hommes',
      'Oui, ils limitent aussi les hommes (expression émotionnelle, choix de carrière, etc.)',
      'Très rarement',
      'Seulement dans certains cas'
    ],
    correctAnswer: 1,
    explanation: 'Les stéréotypes nuisent à tous en limitant les possibilités et en imposant des attentes rigides.'
  },
  {
    id: 'st14',
    question: 'Peut-on déconstruire ses propres stéréotypes ?',
    options: [
      'Non, ils sont trop ancrés',
      'Oui, par la prise de conscience, l&apos;éducation et l&apos;exposition à la diversité',
      'Seulement en thérapie',
      'C&apos;est très difficile'
    ],
    correctAnswer: 1,
    explanation: 'Oui ! La prise de conscience, l&apos;éducation et l&apos;exposition à la diversité aident à déconstruire les stéréotypes.'
  },
  {
    id: 'st15',
    question: 'Les médias renforcent-ils les stéréotypes de genre ?',
    options: [
      'Non, ils reflètent la réalité',
      'Oui, par la représentation limitée et stéréotypée des genres',
      'Seulement les vieux médias',
      'Très rarement'
    ],
    correctAnswer: 1,
    explanation: 'Les médias renforcent souvent les stéréotypes par des représentations limitées et répétitives des rôles de genre.'
  },
  {
    id: 'st16',
    question: 'Qu&apos;est-ce que la masculinité toxique ?',
    options: [
      'Tous les hommes sont toxiques',
      'Les normes rigides de masculinité qui nuisent aux hommes et aux autres',
      'Un terme féministe extrême',
      'Une maladie mentale'
    ],
    correctAnswer: 1,
    explanation: 'La masculinité toxique désigne les normes rigides de masculinité qui limitent les hommes et peuvent nuire à tous.'
  },
  {
    id: 'st17',
    question: 'Les filles sont-elles naturellement plus calmes que les garçons ?',
    options: [
      'Oui, c&apos;est évident',
      'Non, c&apos;est un stéréotype. On attend et encourage plus de calme chez les filles',
      'Oui, biologiquement',
      'Généralement oui'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un stéréotype. Les attentes et l&apos;éducation différenciées créent ces différences de comportement.'
  },
  {
    id: 'st18',
    question: 'Les stéréotypes sont-ils toujours négatifs ?',
    options: [
      'Non, certains sont positifs',
      'Même "positifs", ils limitent et enferment les individus dans des cases',
      'Ça dépend du contexte',
      'Non, ils sont utiles'
    ],
    correctAnswer: 1,
    explanation: 'Même les stéréotypes apparemment positifs sont limitants car ils enferment les individus dans des attentes rigides.'
  },
  {
    id: 'st19',
    question: 'À quel âge les enfants intériorisent-ils les stéréotypes de genre ?',
    options: [
      'À l&apos;adolescence',
      'Dès 2-3 ans',
      'À l&apos;école primaire',
      'Jamais vraiment'
    ],
    correctAnswer: 1,
    explanation: 'Les enfants commencent à intérioriser les stéréotypes de genre dès 2-3 ans, d&apos;où l&apos;importance d&apos;une éducation non-sexiste.'
  },
  {
    id: 'st20',
    question: 'Comment combattre les stéréotypes de genre ?',
    options: [
      'On ne peut pas',
      'Par l&apos;éducation, la représentation diverse et la remise en question constante',
      'En les ignorant',
      'C&apos;est trop compliqué'
    ],
    correctAnswer: 1,
    explanation: 'On combat les stéréotypes par l&apos;éducation, une représentation diverse dans les médias et une remise en question constante.'
  }
];

export const stereotypesSituations: Situation[] = [
  {
    id: 'ss1',
    title: 'Le cadeau d&apos;anniversaire',
    scenario: 'Pour l&apos;anniversaire d&apos;un enfant de 4 ans, quelqu&apos;un offre une voiture pour un garçon et une poupée pour une fille.',
    question: 'Cette distinction est-elle nécessaire ?',
    options: [
      'Oui, c&apos;est naturel',
      'Non, tous les enfants devraient pouvoir jouer avec tous les jouets',
      'Oui, pour éviter la confusion',
      'Ça dépend de l&apos;enfant'
    ],
    correctAnswer: 1,
    explanation: 'Limiter les jouets selon le genre renforce les stéréotypes dès l&apos;enfance. Tous les jouets développent des compétences utiles.'
  },
  {
    id: 'ss2',
    title: 'Les larmes',
    scenario: 'Un garçon de 6 ans pleure après être tombé. Son père lui dit : "Les garçons ne pleurent pas".',
    question: 'Cette réaction est-elle appropriée ?',
    options: [
      'Oui, il faut qu&apos;il soit fort',
      'Non, tous les enfants ont le droit d&apos;exprimer leurs émotions',
      'Oui, pour le préparer à la vie',
      'Ça dépend de la gravité'
    ],
    correctAnswer: 1,
    explanation: 'Interdire aux garçons d&apos;exprimer leurs émotions est un stéréotype toxique qui nuit à leur santé mentale.'
  },
  {
    id: 'ss3',
    title: 'Le choix de carrière',
    scenario: 'Une fille dit vouloir devenir mécanicienne. On lui répond : "C&apos;est un métier d&apos;homme".',
    question: 'Cette affirmation est-elle justifiée ?',
    options: [
      'Oui, c&apos;est physique',
      'Non, tous les métiers sont accessibles à tous',
      'Oui, pour son bien',
      'Ça dépend de sa force'
    ],
    correctAnswer: 1,
    explanation: 'Aucun métier n&apos;est réservé à un genre. Cette affirmation est un stéréotype limitant.'
  },
  {
    id: 'ss4',
    title: 'La couleur',
    scenario: 'Un garçon veut un sac à dos rose mais ses parents refusent car "le rose c&apos;est pour les filles".',
    question: 'Cette restriction est-elle nécessaire ?',
    options: [
      'Oui, pour éviter les moqueries',
      'Non, les couleurs n&apos;ont pas de genre',
      'Oui, c&apos;est la norme',
      'Ça dépend de l&apos;âge'
    ],
    correctAnswer: 1,
    explanation: 'Les couleurs n&apos;ont pas de genre. Cette restriction renforce des stéréotypes arbitraires.'
  },
  {
    id: 'ss5',
    title: 'Le compliment',
    scenario: 'On dit à une fille : "Tu es si jolie !" et à un garçon : "Tu es si intelligent !"',
    question: 'Y a-t-il un problème avec ces compliments ?',
    options: [
      'Non, c&apos;est gentil',
      'Oui, ils renforcent le stéréotype que l&apos;apparence compte pour les filles et l&apos;intelligence pour les garçons',
      'Non, c&apos;est juste des compliments',
      'Ça dépend du contexte'
    ],
    correctAnswer: 1,
    explanation: 'Ces compliments différenciés renforcent les stéréotypes sur ce qui est valorisé selon le genre.'
  },
  {
    id: 'ss6',
    title: 'Le sport',
    scenario: 'En cours de sport, on propose automatiquement le football aux garçons et la danse aux filles.',
    question: 'Cette répartition est-elle appropriée ?',
    options: [
      'Oui, selon les préférences naturelles',
      'Non, on devrait proposer tous les sports à tous',
      'Oui, c&apos;est plus simple',
      'Ça dépend des enfants'
    ],
    correctAnswer: 1,
    explanation: 'Proposer des activités différentes selon le genre renforce les stéréotypes et limite les opportunités.'
  },
  {
    id: 'ss7',
    title: 'L&apos;aide à la maison',
    scenario: 'On demande à la fille de mettre la table et au garçon de sortir les poubelles.',
    question: 'Cette répartition pose-t-elle problème ?',
    options: [
      'Non, c&apos;est logique',
      'Oui, elle renforce les stéréotypes de rôles domestiques',
      'Non, c&apos;est équitable',
      'Ça dépend des familles'
    ],
    correctAnswer: 1,
    explanation: 'Assigner des tâches selon le genre renforce les stéréotypes. Tous devraient apprendre toutes les tâches.'
  },
  {
    id: 'ss8',
    title: 'La sensibilité',
    scenario: 'Un garçon aime lire de la poésie. Ses camarades se moquent de lui en disant que "c&apos;est pour les filles".',
    question: 'Cette moquerie est-elle justifiée ?',
    options: [
      'Un peu, c&apos;est inhabituel',
      'Non, les intérêts n&apos;ont pas de genre',
      'Oui, c&apos;est juste de l&apos;humour',
      'Ça dépend du type de poésie'
    ],
    correctAnswer: 1,
    explanation: 'Les intérêts culturels n&apos;ont pas de genre. Cette moquerie renforce des stéréotypes limitants.'
  },
  {
    id: 'ss9',
    title: 'Le leadership',
    scenario: 'Pour un projet de groupe, on choisit automatiquement un garçon comme chef "parce que les garçons sont de meilleurs leaders".',
    question: 'Ce raisonnement est-il valable ?',
    options: [
      'Oui, généralement',
      'Non, c&apos;est un stéréotype sans fondement',
      'Ça dépend du projet',
      'Oui, statistiquement'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un stéréotype. Le leadership dépend des compétences individuelles, pas du genre.'
  },
  {
    id: 'ss10',
    title: 'L&apos;apparence',
    scenario: 'On dit à une fille qu&apos;elle doit toujours être "présentable" et "féminine".',
    question: 'Cette attente est-elle problématique ?',
    options: [
      'Non, c&apos;est important',
      'Oui, elle impose des standards d&apos;apparence basés sur le genre',
      'Non, c&apos;est de l&apos;éducation',
      'Ça dépend du contexte'
    ],
    correctAnswer: 1,
    explanation: 'Imposer des standards d&apos;apparence différents selon le genre est un stéréotype qui limite la liberté d&apos;expression.'
  },
  {
    id: 'ss11',
    title: 'La force',
    scenario: 'On demande toujours aux garçons de porter les objets lourds car "les garçons sont plus forts".',
    question: 'Cette pratique est-elle justifiée ?',
    options: [
      'Oui, c&apos;est biologique',
      'Non, la force varie selon les individus, pas le genre',
      'Oui, c&apos;est pratique',
      'Généralement oui'
    ],
    correctAnswer: 1,
    explanation: 'La force physique varie selon les individus. Présumer selon le genre est un stéréotype.'
  },
  {
    id: 'ss12',
    title: 'Les sciences',
    scenario: 'Un professeur encourage moins les filles en cours de physique car "elles auront du mal".',
    question: 'Cette attitude est-elle acceptable ?',
    options: [
      'Oui, c&apos;est réaliste',
      'Non, c&apos;est un stéréotype qui crée une prophétie auto-réalisatrice',
      'Ça dépend des élèves',
      'Oui, statistiquement'
    ],
    correctAnswer: 1,
    explanation: 'Ce stéréotype décourage les filles et crée une prophétie auto-réalisatrice. C&apos;est discriminatoire.'
  },
  {
    id: 'ss13',
    title: 'L&apos;expression',
    scenario: 'On dit à un garçon qu&apos;il doit être "viril" et "ne pas agir comme une fille".',
    question: 'Ce message est-il sain ?',
    options: [
      'Oui, pour son développement',
      'Non, il impose des normes rigides et dévalorise le féminin',
      'Ça dépend de l&apos;âge',
      'Oui, dans certaines cultures'
    ],
    correctAnswer: 1,
    explanation: 'Ce message impose des normes rigides de masculinité et dévalorise tout ce qui est considéré comme féminin.'
  },
  {
    id: 'ss14',
    title: 'Le jeu vidéo',
    scenario: 'On suppose qu&apos;une fille qui joue aux jeux vidéo est "pas comme les autres filles".',
    question: 'Cette remarque est-elle problématique ?',
    options: [
      'Non, c&apos;est un compliment',
      'Oui, elle renforce le stéréotype que les jeux vidéo sont masculins',
      'Non, c&apos;est juste une observation',
      'Ça dépend du ton'
    ],
    correctAnswer: 1,
    explanation: 'Cette remarque renforce le stéréotype que les jeux vidéo sont masculins et dévalorise les autres filles.'
  },
  {
    id: 'ss15',
    title: 'La cuisine',
    scenario: 'On dit qu&apos;un homme qui cuisine est "moderne" mais c&apos;est "normal" pour une femme.',
    question: 'Y a-t-il un double standard ?',
    options: [
      'Non, c&apos;est juste un constat',
      'Oui, cela renforce le stéréotype que la cuisine est féminine',
      'Non, c&apos;est la réalité',
      'Ça dépend des générations'
    ],
    correctAnswer: 1,
    explanation: 'Ce double standard renforce le stéréotype que la cuisine est une responsabilité féminine.'
  },
  {
    id: 'ss16',
    title: 'L&apos;ambition',
    scenario: 'Une fille ambitieuse est qualifiée de "trop agressive" alors qu&apos;un garçon ambitieux est "déterminé".',
    question: 'Est-ce un jugement équitable ?',
    options: [
      'Oui, les filles sont différentes',
      'Non, c&apos;est un double standard sexiste',
      'Ça dépend du comportement',
      'Généralement oui'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un double standard qui pénalise les femmes ambitieuses en utilisant des termes négatifs.'
  },
  {
    id: 'ss17',
    title: 'Le babysitting',
    scenario: 'On suppose qu&apos;une adolescente sera meilleure baby-sitter qu&apos;un adolescent.',
    question: 'Cette supposition est-elle fondée ?',
    options: [
      'Oui, c&apos;est naturel',
      'Non, c&apos;est un stéréotype. Les compétences dépendent de l&apos;individu',
      'Généralement oui',
      'Ça dépend de l&apos;expérience'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un stéréotype. Les compétences avec les enfants dépendent de l&apos;individu, pas du genre.'
  },
  {
    id: 'ss18',
    title: 'La technologie',
    scenario: 'Dans un magasin d&apos;électronique, le vendeur s&apos;adresse au mari plutôt qu&apos;à la femme pour les questions techniques.',
    question: 'Ce comportement est-il approprié ?',
    options: [
      'Oui, les hommes s&apos;y connaissent mieux',
      'Non, c&apos;est un stéréotype sexiste',
      'Ça dépend du produit',
      'Généralement oui'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un stéréotype sexiste qui présume que les hommes sont plus compétents en technologie.'
  },
  {
    id: 'ss19',
    title: 'Le risque',
    scenario: 'On décourage une fille de faire de l&apos;escalade car "c&apos;est dangereux" mais on encourage un garçon.',
    question: 'Cette différence de traitement est-elle justifiée ?',
    options: [
      'Oui, pour protéger les filles',
      'Non, c&apos;est un stéréotype qui limite les filles',
      'Oui, les filles sont plus fragiles',
      'Ça dépend de l&apos;enfant'
    ],
    correctAnswer: 1,
    explanation: 'Ce stéréotype limite les filles en les considérant comme plus fragiles, ce qui n&apos;est pas fondé.'
  },
  {
    id: 'ss20',
    title: 'L&apos;empathie',
    scenario: 'On dit qu&apos;un garçon sensible et empathique est "trop sensible" mais c&apos;est "normal" pour une fille.',
    question: 'Ce jugement est-il équitable ?',
    options: [
      'Oui, les filles sont plus sensibles',
      'Non, c&apos;est un stéréotype qui limite l&apos;expression émotionnelle des garçons',
      'Généralement oui',
      'Ça dépend du degré'
    ],
    correctAnswer: 1,
    explanation: 'Ce stéréotype décourage les garçons d&apos;être empathiques et sensibles, des qualités humaines importantes.'
  }
];

export const stereotypesGames: GameQuestion[] = [
  {
    id: 'sg1',
    statement: 'Les stéréotypes de genre sont innés et biologiques',
    isTrue: false,
    explanation: 'Faux ! Les stéréotypes sont appris et construits socialement, pas innés.'
  },
  {
    id: 'sg2',
    statement: 'Le rose était historiquement considéré comme une couleur masculine',
    isTrue: true,
    explanation: 'Vrai ! Avant le XXe siècle, le rose était souvent associé aux garçons et le bleu aux filles.'
  },
  {
    id: 'sg3',
    statement: 'Les garçons sont naturellement meilleurs en mathématiques',
    isTrue: false,
    explanation: 'Faux ! C&apos;est un stéréotype sans fondement scientifique qui décourage les filles.'
  },
  {
    id: 'sg4',
    statement: 'Les stéréotypes peuvent affecter les performances (menace du stéréotype)',
    isTrue: true,
    explanation: 'Vrai ! L&apos;anxiété liée aux stéréotypes peut réellement nuire aux performances.'
  },
  {
    id: 'sg5',
    statement: 'Les filles sont naturellement plus calmes que les garçons',
    isTrue: false,
    explanation: 'Faux ! C&apos;est un stéréotype. Les différences viennent de l&apos;éducation et des attentes sociales.'
  },
  {
    id: 'sg6',
    statement: 'Les hommes sont naturellement moins capables de s&apos;occuper des enfants',
    isTrue: false,
    explanation: 'Faux ! Les compétences parentales s&apos;apprennent et ne dépendent pas du genre.'
  },
  {
    id: 'sg7',
    statement: 'Les stéréotypes limitent les choix de carrière',
    isTrue: true,
    explanation: 'Vrai ! Les stéréotypes orientent vers des métiers "typiques" et limitent les aspirations.'
  },
  {
    id: 'sg8',
    statement: 'Dire "les garçons ne pleurent pas" est un stéréotype toxique',
    isTrue: true,
    explanation: 'Vrai ! Ce stéréotype nuit à la santé mentale en interdisant l&apos;expression émotionnelle.'
  },
  {
    id: 'sg9',
    statement: 'Les stéréotypes "positifs" sont inoffensifs',
    isTrue: false,
    explanation: 'Faux ! Même positifs, ils enferment les individus dans des attentes rigides et limitantes.'
  },
  {
    id: 'sg10',
    statement: 'Les enfants intériorisent les stéréotypes dès 2-3 ans',
    isTrue: true,
    explanation: 'Vrai ! Les stéréotypes de genre sont intériorisés très tôt, d&apos;où l&apos;importance d&apos;une éducation non-sexiste.'
  },
  {
    id: 'sg11',
    statement: 'Les médias renforcent les stéréotypes de genre',
    isTrue: true,
    explanation: 'Vrai ! Les représentations limitées et répétitives dans les médias renforcent les stéréotypes.'
  },
  {
    id: 'sg12',
    statement: 'La masculinité toxique affecte négativement les hommes',
    isTrue: true,
    explanation: 'Vrai ! Les normes rigides de masculinité limitent les hommes et nuisent à leur bien-être.'
  },
  {
    id: 'sg13',
    statement: 'Les filles sont naturellement plus intéressées par les poupées',
    isTrue: false,
    explanation: 'Faux ! Les préférences de jeux sont largement influencées par la socialisation, pas la biologie.'
  },
  {
    id: 'sg14',
    statement: 'On peut déconstruire ses propres stéréotypes',
    isTrue: true,
    explanation: 'Vrai ! Par la prise de conscience, l&apos;éducation et l&apos;exposition à la diversité.'
  },
  {
    id: 'sg15',
    statement: 'Les couleurs ont un genre naturel',
    isTrue: false,
    explanation: 'Faux ! L&apos;association de couleurs aux genres est une construction sociale récente.'
  },
  {
    id: 'sg16',
    statement: 'Les stéréotypes nuisent aussi aux hommes',
    isTrue: true,
    explanation: 'Vrai ! Les stéréotypes limitent tous les individus en imposant des attentes rigides.'
  },
  {
    id: 'sg17',
    statement: 'Les femmes sont naturellement moins compétitives',
    isTrue: false,
    explanation: 'Faux ! La compétitivité dépend de l&apos;éducation, du contexte et de la personnalité, pas du genre.'
  },
  {
    id: 'sg18',
    statement: 'Les jouets genrés influencent le développement des enfants',
    isTrue: true,
    explanation: 'Vrai ! Les jouets genrés renforcent les stéréotypes et peuvent limiter le développement de certaines compétences.'
  },
  {
    id: 'sg19',
    statement: 'Tous les métiers devraient être accessibles sans distinction de genre',
    isTrue: true,
    explanation: 'Vrai ! Aucun métier ne devrait être réservé ou découragé selon le genre.'
  },
  {
    id: 'sg20',
    statement: 'Les stéréotypes sont impossibles à changer',
    isTrue: false,
    explanation: 'Faux ! L&apos;éducation, la représentation diverse et la remise en question constante peuvent changer les stéréotypes.'
  }
];
