
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

export const equalityQuestions: Question[] = [
  {
    id: 'eq1',
    question: 'Qu&apos;est-ce que l&apos;égalité hommes-femmes ?',
    options: [
      'Les hommes et les femmes sont identiques',
      'Les hommes et les femmes ont les mêmes droits et opportunités',
      'Les femmes doivent avoir plus de droits',
      'C&apos;est une question dépassée'
    ],
    correctAnswer: 1,
    explanation: 'L&apos;égalité signifie que tous ont les mêmes droits, opportunités et traitement, indépendamment du genre.'
  },
  {
    id: 'eq2',
    question: 'Quel est l&apos;écart salarial moyen entre hommes et femmes en France ?',
    options: [
      'Il n&apos;y en a plus',
      'Environ 9% à poste égal',
      'Environ 50%',
      'Les femmes gagnent plus'
    ],
    correctAnswer: 1,
    explanation: 'En France, les femmes gagnent en moyenne 9% de moins que les hommes à poste et compétences égales.'
  },
  {
    id: 'eq3',
    question: 'Qu&apos;est-ce que le plafond de verre ?',
    options: [
      'Une décoration moderne',
      'Les barrières invisibles empêchant les femmes d&apos;accéder aux postes de direction',
      'Une loi protégeant les femmes',
      'Un type de discrimination positive'
    ],
    correctAnswer: 1,
    explanation: 'Le plafond de verre désigne les obstacles invisibles qui limitent l&apos;accès des femmes aux postes de pouvoir.'
  },
  {
    id: 'eq4',
    question: 'Le congé parental devrait-il être partagé équitablement ?',
    options: [
      'Non, c&apos;est le rôle de la mère',
      'Oui, pour promouvoir l&apos;égalité et le partage des responsabilités',
      'Seulement si la mère travaille',
      'C&apos;est impossible'
    ],
    correctAnswer: 1,
    explanation: 'Le partage équitable du congé parental favorise l&apos;égalité professionnelle et familiale.'
  },
  {
    id: 'eq5',
    question: 'Qu&apos;est-ce que la charge mentale ?',
    options: [
      'Le stress au travail',
      'La gestion invisible des tâches domestiques et familiales',
      'Une maladie mentale',
      'Le poids des responsabilités professionnelles'
    ],
    correctAnswer: 1,
    explanation: 'La charge mentale désigne le travail invisible de planification et d&apos;organisation du foyer, souvent porté par les femmes.'
  },
  {
    id: 'eq6',
    question: 'Les femmes représentent quel pourcentage des parlementaires dans le monde ?',
    options: [
      '50%',
      'Environ 26%',
      '10%',
      '40%'
    ],
    correctAnswer: 1,
    explanation: 'Les femmes ne représentent qu&apos;environ 26% des parlementaires mondiaux, montrant une sous-représentation politique.'
  },
  {
    id: 'eq7',
    question: 'Qu&apos;est-ce que le sexisme bienveillant ?',
    options: [
      'Ça n&apos;existe pas',
      'Des attitudes apparemment positives mais qui renforcent les stéréotypes',
      'Être gentil avec les femmes',
      'Une forme de féminisme'
    ],
    correctAnswer: 1,
    explanation: 'Le sexisme bienveillant consiste en attitudes apparemment positives mais qui maintiennent les femmes dans des rôles traditionnels.'
  },
  {
    id: 'eq8',
    question: 'Les tâches ménagères sont-elles équitablement réparties ?',
    options: [
      'Oui, aujourd&apos;hui c&apos;est égal',
      'Non, les femmes effectuent encore 2/3 des tâches domestiques',
      'Les hommes en font plus',
      'Ça dépend des couples'
    ],
    correctAnswer: 1,
    explanation: 'Les études montrent que les femmes effectuent encore environ 2/3 des tâches domestiques et familiales.'
  },
  {
    id: 'eq9',
    question: 'Qu&apos;est-ce que l&apos;intersectionnalité ?',
    options: [
      'Un carrefour routier',
      'La prise en compte des multiples discriminations qui se croisent',
      'Une théorie mathématique',
      'Un mouvement politique'
    ],
    correctAnswer: 1,
    explanation: 'L&apos;intersectionnalité reconnaît que les discriminations (genre, race, classe, etc.) se cumulent et s&apos;entrecroisent.'
  },
  {
    id: 'eq10',
    question: 'Les femmes ont-elles le droit de vote en France depuis toujours ?',
    options: [
      'Oui, depuis la Révolution',
      'Non, seulement depuis 1944',
      'Oui, depuis 1900',
      'Non, depuis 1968'
    ],
    correctAnswer: 1,
    explanation: 'Les femmes françaises n&apos;ont obtenu le droit de vote qu&apos;en 1944, bien après les hommes.'
  },
  {
    id: 'eq11',
    question: 'Qu&apos;est-ce que la parité ?',
    options: [
      'Une égalité parfaite en tout',
      'Une représentation équilibrée des hommes et des femmes',
      'Une loi sur les salaires',
      'Un quota obligatoire partout'
    ],
    correctAnswer: 1,
    explanation: 'La parité vise à assurer une représentation équilibrée des hommes et des femmes, notamment en politique.'
  },
  {
    id: 'eq12',
    question: 'Les violences conjugales touchent principalement :',
    options: [
      'Autant les hommes que les femmes',
      'Majoritairement les femmes (86% des victimes)',
      'Surtout les hommes',
      'Personne aujourd&apos;hui'
    ],
    correctAnswer: 1,
    explanation: 'Les femmes représentent 86% des victimes de violences conjugales, un problème majeur d&apos;inégalité.'
  },
  {
    id: 'eq13',
    question: 'Qu&apos;est-ce que le mansplaining ?',
    options: [
      'Expliquer quelque chose clairement',
      'Quand un homme explique à une femme ce qu&apos;elle sait déjà, de façon condescendante',
      'Un terme inventé',
      'Une technique pédagogique'
    ],
    correctAnswer: 1,
    explanation: 'Le mansplaining est l&apos;attitude condescendante d&apos;un homme expliquant à une femme des choses qu&apos;elle connaît déjà.'
  },
  {
    id: 'eq14',
    question: 'Les femmes sont-elles sous-représentées dans les sciences ?',
    options: [
      'Non, c&apos;est égal maintenant',
      'Oui, notamment dans les STEM (sciences, tech, ingénierie, maths)',
      'Non, elles sont majoritaires',
      'Seulement en physique'
    ],
    correctAnswer: 1,
    explanation: 'Les femmes restent sous-représentées dans les domaines STEM, résultat de stéréotypes et de barrières systémiques.'
  },
  {
    id: 'eq15',
    question: 'Qu&apos;est-ce que l&apos;éducation non-sexiste ?',
    options: [
      'Interdire les différences',
      'Élever les enfants sans leur imposer de rôles basés sur leur genre',
      'Traiter tous les enfants de la même façon',
      'Une mode passagère'
    ],
    correctAnswer: 1,
    explanation: 'L&apos;éducation non-sexiste vise à ne pas limiter les enfants par des attentes basées sur leur genre.'
  },
  {
    id: 'eq16',
    question: 'Le harcèlement de rue touche principalement :',
    options: [
      'Tout le monde également',
      'Les femmes (100% en ont déjà été victimes)',
      'Les hommes',
      'Personne'
    ],
    correctAnswer: 1,
    explanation: 'Pratiquement 100% des femmes ont déjà été victimes de harcèlement de rue, un problème d&apos;inégalité majeur.'
  },
  {
    id: 'eq17',
    question: 'Qu&apos;est-ce que le syndrome de l&apos;imposteur ?',
    options: [
      'Une maladie rare',
      'Le sentiment de ne pas mériter son succès, touchant davantage les femmes',
      'Une technique de manipulation',
      'Un trouble psychiatrique'
    ],
    correctAnswer: 1,
    explanation: 'Le syndrome de l&apos;imposteur touche particulièrement les femmes, résultat de stéréotypes intériorisés.'
  },
  {
    id: 'eq18',
    question: 'Les jouets genrés influencent-ils les enfants ?',
    options: [
      'Non, c&apos;est naturel',
      'Oui, ils renforcent les stéréotypes et limitent les aspirations',
      'Seulement un peu',
      'C&apos;est sans importance'
    ],
    correctAnswer: 1,
    explanation: 'Les jouets genrés renforcent les stéréotypes dès l&apos;enfance et peuvent limiter les aspirations futures.'
  },
  {
    id: 'eq19',
    question: 'Qu&apos;est-ce que la double journée ?',
    options: [
      'Travailler deux fois par jour',
      'Cumuler travail professionnel et charge domestique, vécu surtout par les femmes',
      'Faire des heures supplémentaires',
      'Un concept dépassé'
    ],
    correctAnswer: 1,
    explanation: 'La double journée désigne le cumul du travail professionnel et domestique, vécu majoritairement par les femmes.'
  },
  {
    id: 'eq20',
    question: 'L&apos;égalité hommes-femmes bénéficie-t-elle à toute la société ?',
    options: [
      'Non, seulement aux femmes',
      'Oui, elle améliore l&apos;économie, la santé et le bien-être de tous',
      'Non, elle désavantage les hommes',
      'C&apos;est neutre'
    ],
    correctAnswer: 1,
    explanation: 'L&apos;égalité de genre bénéficie à toute la société : économie, santé, éducation, bien-être collectif.'
  }
];

export const equalitySituations: Situation[] = [
  {
    id: 'es1',
    title: 'La réunion',
    scenario: 'En réunion, une femme propose une idée qui est ignorée. 10 minutes plus tard, un homme propose la même idée et est félicité.',
    question: 'Que devrait faire l&apos;équipe ?',
    options: [
      'Rien, c&apos;est normal',
      'Reconnaître que l&apos;idée venait de la femme et s&apos;excuser',
      'Dire que c&apos;est une coïncidence',
      'Ignorer la situation'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un exemple de sexisme ordinaire. Il faut reconnaître l&apos;origine de l&apos;idée et être plus attentif à l&apos;avenir.'
  },
  {
    id: 'es2',
    title: 'L&apos;entretien d&apos;embauche',
    scenario: 'Lors d&apos;un entretien, on demande à une candidate si elle prévoit d&apos;avoir des enfants bientôt.',
    question: 'Cette question est-elle appropriée ?',
    options: [
      'Oui, c&apos;est important pour l&apos;employeur',
      'Non, c&apos;est discriminatoire et illégal',
      'Oui, si c&apos;est posé gentiment',
      'Ça dépend du poste'
    ],
    correctAnswer: 1,
    explanation: 'Cette question est discriminatoire et illégale. Elle ne devrait jamais être posée en entretien.'
  },
  {
    id: 'es3',
    title: 'Le partage des tâches',
    scenario: 'Dans un couple, la femme travaille à temps plein mais effectue 80% des tâches ménagères.',
    question: 'Cette situation est-elle équitable ?',
    options: [
      'Oui, c&apos;est naturel',
      'Non, les tâches devraient être partagées équitablement',
      'Oui, si elle le fait bien',
      'Ça dépend de qui gagne le plus'
    ],
    correctAnswer: 1,
    explanation: 'Quand les deux travaillent, les tâches domestiques devraient être partagées équitablement.'
  },
  {
    id: 'es4',
    title: 'La promotion',
    scenario: 'Un homme et une femme avec les mêmes qualifications postulent pour une promotion. L&apos;homme est choisi car "il a une famille à nourrir".',
    question: 'Cette décision est-elle juste ?',
    options: [
      'Oui, c&apos;est logique',
      'Non, c&apos;est de la discrimination basée sur le genre',
      'Oui, si c&apos;est vrai',
      'Ça dépend des situations familiales'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est de la discrimination. Les décisions professionnelles doivent être basées sur les compétences, pas sur le genre.'
  },
  {
    id: 'es5',
    title: 'Le jouet',
    scenario: 'Un garçon de 5 ans veut une poupée mais ses parents lui disent que "c&apos;est pour les filles".',
    question: 'Cette réaction est-elle appropriée ?',
    options: [
      'Oui, il faut respecter les normes',
      'Non, tous les enfants devraient pouvoir jouer avec ce qu&apos;ils veulent',
      'Oui, pour éviter les moqueries',
      'Ça dépend de l&apos;éducation'
    ],
    correctAnswer: 1,
    explanation: 'Limiter les jouets selon le genre renforce les stéréotypes. Tous les enfants devraient pouvoir jouer librement.'
  },
  {
    id: 'es6',
    title: 'Le compliment',
    scenario: 'Un manager dit à une employée : "Tu es trop jolie pour être ingénieure".',
    question: 'Est-ce un compliment acceptable ?',
    options: [
      'Oui, c&apos;est gentil',
      'Non, c&apos;est sexiste et inapproprié',
      'Ça dépend du ton',
      'Oui, si elle sourit'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est du sexisme qui sous-entend que l&apos;apparence et l&apos;intelligence sont incompatibles. C&apos;est inapproprié.'
  },
  {
    id: 'es7',
    title: 'Le congé parental',
    scenario: 'Un père veut prendre un congé parental mais ses collègues se moquent de lui.',
    question: 'Cette réaction est-elle acceptable ?',
    options: [
      'Oui, c&apos;est inhabituel',
      'Non, c&apos;est du sexisme qui affecte aussi les hommes',
      'Oui, c&apos;est juste de l&apos;humour',
      'Ça dépend du contexte'
    ],
    correctAnswer: 1,
    explanation: 'Se moquer d&apos;un père qui prend un congé parental est du sexisme qui nuit à l&apos;égalité pour tous.'
  },
  {
    id: 'es8',
    title: 'La prise de parole',
    scenario: 'En cours, le professeur interroge systématiquement plus les garçons que les filles.',
    question: 'Est-ce problématique ?',
    options: [
      'Non, les garçons participent plus',
      'Oui, cela renforce l&apos;inégalité et limite les filles',
      'Non, c&apos;est inconscient',
      'Ça dépend de la matière'
    ],
    correctAnswer: 1,
    explanation: 'Même inconscient, ce comportement renforce les inégalités et limite la confiance des filles.'
  },
  {
    id: 'es9',
    title: 'Le salaire',
    scenario: 'Une femme découvre qu&apos;elle gagne 15% de moins qu&apos;un collègue masculin au même poste.',
    question: 'Que devrait-elle faire ?',
    options: [
      'Accepter, c&apos;est normal',
      'Demander une explication et réclamer l&apos;égalité salariale',
      'Chercher un autre emploi sans rien dire',
      'Négocier discrètement'
    ],
    correctAnswer: 1,
    explanation: 'L&apos;inégalité salariale est illégale. Elle devrait la signaler et demander une correction.'
  },
  {
    id: 'es10',
    title: 'Le sport',
    scenario: 'Une fille veut jouer au football mais on lui dit que "c&apos;est un sport de garçons".',
    question: 'Cette affirmation est-elle justifiée ?',
    options: [
      'Oui, c&apos;est physique',
      'Non, tous les sports sont pour tous',
      'Oui, pour sa sécurité',
      'Ça dépend de son niveau'
    ],
    correctAnswer: 1,
    explanation: 'Aucun sport n&apos;est réservé à un genre. Tous devraient pouvoir pratiquer ce qu&apos;ils aiment.'
  },
  {
    id: 'es11',
    title: 'La carrière scientifique',
    scenario: 'Une lycéenne excellente en maths est découragée par son conseiller d&apos;orientation de poursuivre en ingénierie.',
    question: 'Est-ce acceptable ?',
    options: [
      'Oui, c&apos;est difficile pour les femmes',
      'Non, c&apos;est du sexisme qui limite ses opportunités',
      'Oui, pour la protéger',
      'Ça dépend de ses notes'
    ],
    correctAnswer: 1,
    explanation: 'Décourager une fille talentueuse à cause de son genre est du sexisme qui perpétue les inégalités.'
  },
  {
    id: 'es12',
    title: 'Le leadership',
    scenario: 'Une femme manager est qualifiée de "autoritaire" alors qu&apos;un homme avec le même style est "un leader fort".',
    question: 'Y a-t-il un double standard ?',
    options: [
      'Non, c&apos;est différent',
      'Oui, c&apos;est un biais sexiste dans l&apos;évaluation du leadership',
      'Non, les femmes sont plus dures',
      'Ça dépend des personnes'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est un double standard sexiste. Les mêmes comportements sont jugés différemment selon le genre.'
  },
  {
    id: 'es13',
    title: 'La charge mentale',
    scenario: 'Dans un couple, l&apos;homme "aide" aux tâches ménagères quand on lui demande.',
    question: 'Est-ce une répartition équitable ?',
    options: [
      'Oui, il aide',
      'Non, il devrait être aussi responsable sans qu&apos;on lui demande',
      'Oui, c&apos;est déjà bien',
      'Ça dépend de qui travaille'
    ],
    correctAnswer: 1,
    explanation: '"Aider" implique que c&apos;est la responsabilité de l&apos;autre. Les deux devraient être également responsables.'
  },
  {
    id: 'es14',
    title: 'L&apos;apparence professionnelle',
    scenario: 'Une entreprise exige que les femmes portent des talons et du maquillage, mais pas d&apos;exigence similaire pour les hommes.',
    question: 'Cette politique est-elle équitable ?',
    options: [
      'Oui, c&apos;est professionnel',
      'Non, c&apos;est discriminatoire',
      'Oui, c&apos;est la tradition',
      'Ça dépend du secteur'
    ],
    correctAnswer: 1,
    explanation: 'Imposer des codes vestimentaires différents selon le genre est discriminatoire.'
  },
  {
    id: 'es15',
    title: 'La répartition du temps',
    scenario: 'Une mère travaille à temps partiel pour s&apos;occuper des enfants, réduisant ses perspectives de carrière.',
    question: 'Est-ce un choix libre ?',
    options: [
      'Oui, c&apos;est son choix',
      'Souvent non, c&apos;est le résultat de pressions sociales et d&apos;inégalités',
      'Oui, c&apos;est naturel',
      'Ça dépend de la famille'
    ],
    correctAnswer: 1,
    explanation: 'Ce "choix" est souvent contraint par les inégalités salariales, les stéréotypes et le manque de soutien.'
  },
  {
    id: 'es16',
    title: 'Le harcèlement de rue',
    scenario: 'Une femme se fait siffler dans la rue. Quand elle proteste, on lui dit de "prendre ça comme un compliment".',
    question: 'Cette réponse est-elle appropriée ?',
    options: [
      'Oui, c&apos;est un compliment',
      'Non, c&apos;est du harcèlement et elle a le droit de se sentir mal à l&apos;aise',
      'Oui, c&apos;est inoffensif',
      'Ça dépend de comment c&apos;est fait'
    ],
    correctAnswer: 1,
    explanation: 'Le harcèlement de rue n&apos;est pas un compliment. Chacun a le droit de se déplacer sans être importuné.'
  },
  {
    id: 'es17',
    title: 'La représentation médiatique',
    scenario: 'Dans un film, tous les scientifiques sont des hommes et toutes les infirmières sont des femmes.',
    question: 'Est-ce problématique ?',
    options: [
      'Non, c&apos;est réaliste',
      'Oui, cela renforce les stéréotypes de genre',
      'Non, c&apos;est juste un film',
      'Ça dépend du genre du film'
    ],
    correctAnswer: 1,
    explanation: 'La représentation médiatique influence les perceptions. Montrer uniquement des rôles stéréotypés renforce les inégalités.'
  },
  {
    id: 'es18',
    title: 'L&apos;interruption',
    scenario: 'En réunion, les femmes sont interrompues 3 fois plus souvent que les hommes.',
    question: 'Est-ce un problème d&apos;égalité ?',
    options: [
      'Non, c&apos;est juste de la dynamique de groupe',
      'Oui, c&apos;est du sexisme qui limite la participation des femmes',
      'Non, elles parlent peut-être trop',
      'Ça dépend du sujet'
    ],
    correctAnswer: 1,
    explanation: 'Interrompre systématiquement les femmes est une forme de sexisme qui limite leur influence et participation.'
  },
  {
    id: 'es19',
    title: 'Le nom de famille',
    scenario: 'On suppose automatiquement qu&apos;une femme mariée a pris le nom de son mari.',
    question: 'Cette supposition est-elle problématique ?',
    options: [
      'Non, c&apos;est la tradition',
      'Oui, cela reflète une vision patriarcale où l&apos;identité de la femme dépend de l&apos;homme',
      'Non, c&apos;est pratique',
      'Ça dépend des cultures'
    ],
    correctAnswer: 1,
    explanation: 'Cette supposition reflète une tradition patriarcale. Chacun devrait pouvoir choisir son nom librement.'
  },
  {
    id: 'es20',
    title: 'L&apos;émotion au travail',
    scenario: 'Une femme qui exprime sa frustration au travail est qualifiée d&apos;"émotive" ou "hystérique".',
    question: 'Est-ce un jugement équitable ?',
    options: [
      'Oui, les femmes sont plus émotives',
      'Non, c&apos;est un stéréotype sexiste',
      'Ça dépend de la situation',
      'Oui, si elle crie'
    ],
    correctAnswer: 1,
    explanation: 'Qualifier les femmes d&apos;"émotives" pour des comportements acceptés chez les hommes est un stéréotype sexiste.'
  }
];

export const equalityGames: GameQuestion[] = [
  {
    id: 'eg1',
    statement: 'Les femmes gagnent en moyenne autant que les hommes à poste égal',
    isTrue: false,
    explanation: 'Faux ! Il existe encore un écart salarial d&apos;environ 9% en France à poste et compétences égales.'
  },
  {
    id: 'eg2',
    statement: 'Le congé parental devrait être partagé équitablement entre les parents',
    isTrue: true,
    explanation: 'Vrai ! Le partage équitable favorise l&apos;égalité professionnelle et familiale pour tous.'
  },
  {
    id: 'eg3',
    statement: 'Les tâches ménagères sont naturellement mieux faites par les femmes',
    isTrue: false,
    explanation: 'Faux ! C&apos;est un stéréotype. Les compétences domestiques s&apos;apprennent et ne dépendent pas du genre.'
  },
  {
    id: 'eg4',
    statement: 'Les femmes ont obtenu le droit de vote en France en 1944',
    isTrue: true,
    explanation: 'Vrai ! Les femmes françaises n&apos;ont pu voter qu&apos;à partir de 1944, bien après les hommes.'
  },
  {
    id: 'eg5',
    statement: 'Le plafond de verre n&apos;existe plus aujourd&apos;hui',
    isTrue: false,
    explanation: 'Faux ! Les femmes restent sous-représentées dans les postes de direction malgré leurs compétences.'
  },
  {
    id: 'eg6',
    statement: 'Les jouets genrés influencent les aspirations futures des enfants',
    isTrue: true,
    explanation: 'Vrai ! Les jouets genrés renforcent les stéréotypes et peuvent limiter les aspirations professionnelles.'
  },
  {
    id: 'eg7',
    statement: 'Demander à une candidate si elle veut des enfants est illégal',
    isTrue: true,
    explanation: 'Vrai ! Cette question est discriminatoire et interdite lors d&apos;un entretien d&apos;embauche.'
  },
  {
    id: 'eg8',
    statement: 'La charge mentale touche autant les hommes que les femmes',
    isTrue: false,
    explanation: 'Faux ! Les femmes portent majoritairement la charge mentale de l&apos;organisation domestique et familiale.'
  },
  {
    id: 'eg9',
    statement: 'L&apos;égalité hommes-femmes bénéficie à toute la société',
    isTrue: true,
    explanation: 'Vrai ! L&apos;égalité améliore l&apos;économie, la santé, l&apos;éducation et le bien-être de tous.'
  },
  {
    id: 'eg10',
    statement: 'Les femmes sont sous-représentées dans les sciences et technologies',
    isTrue: true,
    explanation: 'Vrai ! Les femmes restent minoritaires dans les STEM, résultat de stéréotypes et de barrières systémiques.'
  },
  {
    id: 'eg11',
    statement: 'Le sexisme bienveillant est inoffensif',
    isTrue: false,
    explanation: 'Faux ! Même s&apos;il semble positif, il renforce les stéréotypes et maintient les inégalités.'
  },
  {
    id: 'eg12',
    statement: 'Les violences conjugales touchent majoritairement les femmes',
    isTrue: true,
    explanation: 'Vrai ! 86% des victimes de violences conjugales sont des femmes.'
  },
  {
    id: 'eg13',
    statement: 'Un homme qui prend un congé parental est aussi légitime qu&apos;une femme',
    isTrue: true,
    explanation: 'Vrai ! Les deux parents ont le même droit et la même légitimité à s&apos;occuper de leurs enfants.'
  },
  {
    id: 'eg14',
    statement: 'Les femmes sont naturellement moins compétentes en mathématiques',
    isTrue: false,
    explanation: 'Faux ! C&apos;est un stéréotype sans fondement scientifique qui décourage les filles des carrières scientifiques.'
  },
  {
    id: 'eg15',
    statement: 'Le harcèlement de rue est un compliment',
    isTrue: false,
    explanation: 'Faux ! Le harcèlement de rue est une forme de violence qui porte atteinte à la liberté de circulation.'
  },
  {
    id: 'eg16',
    statement: 'Les femmes effectuent environ 2/3 des tâches domestiques',
    isTrue: true,
    explanation: 'Vrai ! Malgré le travail professionnel, les femmes assument encore la majorité des tâches domestiques.'
  },
  {
    id: 'eg17',
    statement: 'Tous les métiers devraient être accessibles à tous les genres',
    isTrue: true,
    explanation: 'Vrai ! Aucun métier ne devrait être réservé à un genre particulier.'
  },
  {
    id: 'eg18',
    statement: 'Le mansplaining est une forme de sexisme',
    isTrue: true,
    explanation: 'Vrai ! Expliquer de façon condescendante à une femme ce qu&apos;elle sait déjà est une forme de sexisme.'
  },
  {
    id: 'eg19',
    statement: 'Les femmes sont aussi capables de leadership que les hommes',
    isTrue: true,
    explanation: 'Vrai ! Le leadership n&apos;a rien à voir avec le genre mais avec les compétences et l&apos;expérience.'
  },
  {
    id: 'eg20',
    statement: 'L&apos;éducation non-sexiste limite les enfants',
    isTrue: false,
    explanation: 'Faux ! Au contraire, elle leur permet d&apos;explorer tous leurs intérêts sans être limités par des stéréotypes.'
  }
];
