
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

export const consentQuestions: Question[] = [
  {
    id: 'c1',
    question: 'Qu&apos;est-ce que le consentement ?',
    options: [
      'Un accord donné une fois pour toutes',
      'Un accord libre, éclairé et révocable à tout moment',
      'Un accord implicite dans une relation',
      'Un accord qui ne peut pas être retiré'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement doit être libre, éclairé, spécifique et révocable à tout moment. Il ne peut jamais être présumé.'
  },
  {
    id: 'c2',
    question: 'Le silence signifie-t-il consentement ?',
    options: [
      'Oui, toujours',
      'Non, jamais',
      'Parfois, selon le contexte',
      'Seulement dans une relation établie'
    ],
    correctAnswer: 1,
    explanation: 'Le silence n&apos;est jamais un consentement. Le consentement doit être exprimé clairement et activement.'
  },
  {
    id: 'c3',
    question: 'Peut-on retirer son consentement après l&apos;avoir donné ?',
    options: [
      'Non, c&apos;est trop tard',
      'Oui, à tout moment',
      'Seulement avant que ça commence',
      'Non, sauf circonstances exceptionnelles'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement peut être retiré à tout moment, même après avoir été donné initialement.'
  },
  {
    id: 'c4',
    question: 'Une personne en état d&apos;ébriété peut-elle donner son consentement ?',
    options: [
      'Oui, si elle dit oui',
      'Non, son jugement est altéré',
      'Oui, si elle n&apos;est pas complètement ivre',
      'Ça dépend de la situation'
    ],
    correctAnswer: 1,
    explanation: 'Une personne dont le jugement est altéré par l&apos;alcool ou les drogues ne peut pas donner un consentement valide.'
  },
  {
    id: 'c5',
    question: 'Le consentement à une activité implique-t-il le consentement à toutes les activités ?',
    options: [
      'Oui, c&apos;est logique',
      'Non, chaque activité nécessite un consentement spécifique',
      'Oui, dans une relation de confiance',
      'Ça dépend des personnes'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement doit être spécifique à chaque activité. Consentir à une chose ne signifie pas consentir à tout.'
  },
  {
    id: 'c6',
    question: 'Qu&apos;est-ce qu&apos;un consentement éclairé ?',
    options: [
      'Un consentement donné en plein jour',
      'Un consentement donné avec toutes les informations nécessaires',
      'Un consentement donné par une personne intelligente',
      'Un consentement donné après réflexion'
    ],
    correctAnswer: 1,
    explanation: 'Un consentement éclairé signifie que la personne a toutes les informations nécessaires pour prendre sa décision.'
  },
  {
    id: 'c7',
    question: 'La pression ou la manipulation invalident-elles le consentement ?',
    options: [
      'Non, si la personne dit oui',
      'Oui, le consentement doit être libre',
      'Ça dépend du type de pression',
      'Non, c&apos;est de la persuasion normale'
    ],
    correctAnswer: 1,
    explanation: 'Toute forme de pression, manipulation ou coercition invalide le consentement qui doit être donné librement.'
  },
  {
    id: 'c8',
    question: 'Le consentement dans une relation de couple est-il automatique ?',
    options: [
      'Oui, c&apos;est implicite',
      'Non, il doit toujours être demandé',
      'Oui, après un certain temps ensemble',
      'Ça dépend du couple'
    ],
    correctAnswer: 1,
    explanation: 'Être en couple ne signifie pas un consentement automatique. Le consentement doit toujours être demandé et donné.'
  },
  {
    id: 'c9',
    question: 'Qu&apos;est-ce qu&apos;un consentement enthousiaste ?',
    options: [
      'Un consentement donné avec joie',
      'Un consentement actif et positif, pas juste l&apos;absence de "non"',
      'Un consentement donné rapidement',
      'Un consentement donné plusieurs fois'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement enthousiaste est un "oui" clair et positif, pas simplement l&apos;absence d&apos;un "non".'
  },
  {
    id: 'c10',
    question: 'Qui est responsable d&apos;obtenir le consentement ?',
    options: [
      'La personne qui initie l&apos;activité',
      'Les deux personnes également',
      'La personne la plus âgée',
      'Personne, c&apos;est implicite'
    ],
    correctAnswer: 0,
    explanation: 'La personne qui initie une activité est responsable de s&apos;assurer qu&apos;elle a le consentement clair de l&apos;autre.'
  },
  {
    id: 'c11',
    question: 'Le consentement peut-il être donné à l&apos;avance pour des situations futures ?',
    options: [
      'Oui, pour simplifier',
      'Non, il doit être donné au moment présent',
      'Oui, dans une relation stable',
      'Oui, si c&apos;est écrit'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement doit être donné au moment présent et peut être retiré à tout moment, même s&apos;il a été donné à l&apos;avance.'
  },
  {
    id: 'c12',
    question: 'Comment savoir si quelqu&apos;un consent vraiment ?',
    options: [
      'En devinant',
      'En demandant clairement et en écoutant la réponse',
      'En observant le langage corporel uniquement',
      'En supposant que oui si pas de refus'
    ],
    correctAnswer: 1,
    explanation: 'La seule façon de savoir est de demander clairement et d&apos;écouter attentivement la réponse verbale et non-verbale.'
  },
  {
    id: 'c13',
    question: 'Qu&apos;est-ce que la culture du consentement ?',
    options: [
      'Une mode passagère',
      'Un ensemble de pratiques valorisant le respect mutuel et la communication',
      'Une règle légale uniquement',
      'Un concept théorique sans application pratique'
    ],
    correctAnswer: 1,
    explanation: 'La culture du consentement promeut le respect, la communication claire et la reconnaissance de l&apos;autonomie de chacun.'
  },
  {
    id: 'c14',
    question: 'Le consentement s&apos;applique-t-il uniquement aux relations sexuelles ?',
    options: [
      'Oui, c&apos;est son seul contexte',
      'Non, il s&apos;applique à toutes les interactions physiques et personnelles',
      'Principalement aux relations sexuelles',
      'Ça dépend des cultures'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement s&apos;applique à toutes les formes d&apos;interactions : physiques, émotionnelles, personnelles, etc.'
  },
  {
    id: 'c15',
    question: 'Que faire si on n&apos;est pas sûr d&apos;avoir le consentement ?',
    options: [
      'Continuer prudemment',
      'S&apos;arrêter et demander clairement',
      'Interpréter les signaux',
      'Supposer que c&apos;est oui'
    ],
    correctAnswer: 1,
    explanation: 'En cas de doute, il faut toujours s&apos;arrêter et demander clairement. Le doute signifie l&apos;absence de consentement clair.'
  },
  {
    id: 'c16',
    question: 'Le consentement donné par peur est-il valide ?',
    options: [
      'Oui, si la personne dit oui',
      'Non, le consentement doit être libre de toute contrainte',
      'Ça dépend du niveau de peur',
      'Oui, si la peur n&apos;est pas justifiée'
    ],
    correctAnswer: 1,
    explanation: 'Un consentement donné par peur, menace ou intimidation n&apos;est pas un vrai consentement.'
  },
  {
    id: 'c17',
    question: 'Peut-on présumer le consentement basé sur des expériences passées ?',
    options: [
      'Oui, c&apos;est logique',
      'Non, chaque situation nécessite un nouveau consentement',
      'Oui, dans une relation établie',
      'Parfois, selon la proximité'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement passé ne garantit pas le consentement futur. Chaque situation nécessite un consentement nouveau.'
  },
  {
    id: 'c18',
    question: 'Qu&apos;est-ce que le consentement affirmatif ?',
    options: [
      'Un consentement donné par écrit',
      'Un "oui" clair et sans ambiguïté',
      'Un consentement donné plusieurs fois',
      'Un consentement légalement enregistré'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement affirmatif est un "oui" clair, conscient et volontaire, pas simplement l&apos;absence d&apos;un "non".'
  },
  {
    id: 'c19',
    question: 'Le langage corporel seul suffit-il pour établir le consentement ?',
    options: [
      'Oui, c&apos;est suffisant',
      'Non, une communication verbale claire est nécessaire',
      'Oui, si c&apos;est évident',
      'Ça dépend de la situation'
    ],
    correctAnswer: 1,
    explanation: 'Le langage corporel peut être ambigu. Une communication verbale claire est toujours préférable pour établir le consentement.'
  },
  {
    id: 'c20',
    question: 'Que signifie "non c&apos;est non" ?',
    options: [
      'Qu&apos;il faut insister poliment',
      'Qu&apos;un refus doit être respecté immédiatement et sans question',
      'Qu&apos;on peut demander une explication',
      'Que c&apos;est négociable'
    ],
    correctAnswer: 1,
    explanation: '"Non c&apos;est non" signifie qu&apos;un refus doit être respecté immédiatement, sans pression ni négociation.'
  }
];

export const consentSituations: Situation[] = [
  {
    id: 's1',
    title: 'La soirée',
    scenario: 'Lors d&apos;une soirée, Alex remarque que Jordan a beaucoup bu. Jordan semble intéressé(e) par Alex et fait des avances.',
    question: 'Que devrait faire Alex ?',
    options: [
      'Profiter de la situation',
      'Refuser poliment et s&apos;assurer que Jordan rentre en sécurité',
      'Demander à Jordan si ça va vraiment',
      'Accepter car Jordan a fait le premier pas'
    ],
    correctAnswer: 1,
    explanation: 'Une personne en état d&apos;ébriété ne peut pas donner un consentement valide. Alex doit refuser et s&apos;assurer de la sécurité de Jordan.'
  },
  {
    id: 's2',
    title: 'Le rendez-vous',
    scenario: 'Sam et Morgan sont à leur troisième rendez-vous. Sam a payé un dîner coûteux et s&apos;attend à ce que la soirée se poursuive chez Morgan.',
    question: 'Morgan doit-il/elle accepter par politesse ?',
    options: [
      'Oui, Sam a payé le dîner',
      'Non, Morgan n&apos;a aucune obligation',
      'Oui, c&apos;est le troisième rendez-vous',
      'Ça dépend du coût du dîner'
    ],
    correctAnswer: 1,
    explanation: 'Personne n&apos;a d&apos;obligation envers qui que ce soit, peu importe qui a payé. Le consentement ne s&apos;achète pas.'
  },
  {
    id: 's3',
    title: 'Le couple',
    scenario: 'Dans un couple établi depuis 2 ans, Chris veut être intime mais son/sa partenaire Taylor dit être fatigué(e) ce soir.',
    question: 'Que devrait faire Chris ?',
    options: [
      'Insister gentiment',
      'Respecter le refus sans poser de questions',
      'Bouder pour montrer sa déception',
      'Rappeler que ça fait longtemps'
    ],
    correctAnswer: 1,
    explanation: 'Dans une relation, chaque partenaire a le droit de refuser à tout moment. Le refus doit être respecté sans pression.'
  },
  {
    id: 's4',
    title: 'Le message ambigu',
    scenario: 'Riley envoie des messages flirteurs à Casey, qui répond par des emojis souriants mais sans vraiment s&apos;engager dans la conversation.',
    question: 'Riley devrait-il/elle interpréter cela comme un consentement ?',
    options: [
      'Oui, les emojis sont un signe positif',
      'Non, Riley devrait demander clairement les intentions de Casey',
      'Oui, Casey aurait arrêté de répondre sinon',
      'Oui, c&apos;est suffisamment clair'
    ],
    correctAnswer: 1,
    explanation: 'Les signaux ambigus ne sont pas un consentement. Une communication claire et directe est toujours nécessaire.'
  },
  {
    id: 's5',
    title: 'La pression des pairs',
    scenario: 'Dans un groupe d&apos;amis, tout le monde encourage Max à embrasser quelqu&apos;un lors d&apos;un jeu. La personne semble hésitante.',
    question: 'Que devrait faire Max ?',
    options: [
      'Y aller, c&apos;est juste un jeu',
      'Refuser et ne pas forcer la personne',
      'Demander devant tout le monde',
      'Faire un bisou sur la joue à la place'
    ],
    correctAnswer: 1,
    explanation: 'La pression du groupe ne justifie jamais d&apos;ignorer le consentement. Max devrait refuser de participer.'
  },
  {
    id: 's6',
    title: 'Le changement d&apos;avis',
    scenario: 'Alex et Jordan ont commencé à être intimes, mais Jordan dit soudainement qu&apos;il/elle veut s&apos;arrêter.',
    question: 'Que devrait faire Alex ?',
    options: [
      'Demander pourquoi et essayer de convaincre',
      'S&apos;arrêter immédiatement sans poser de questions',
      'Continuer encore un peu puis s&apos;arrêter',
      'Être frustré(e) et le montrer'
    ],
    correctAnswer: 1,
    explanation: 'Le consentement peut être retiré à tout moment. Alex doit s&apos;arrêter immédiatement et respecter la décision de Jordan.'
  },
  {
    id: 's7',
    title: 'La relation professionnelle',
    scenario: 'Un manager invite régulièrement un(e) employé(e) à dîner et fait des compliments sur son apparence physique.',
    question: 'Est-ce approprié ?',
    options: [
      'Oui, ce sont des compliments',
      'Non, c&apos;est du harcèlement et un abus de pouvoir',
      'Ça dépend si l&apos;employé(e) apprécie',
      'Oui, si c&apos;est en dehors du travail'
    ],
    correctAnswer: 1,
    explanation: 'Dans une relation hiérarchique, ce comportement constitue du harcèlement et un abus de pouvoir, même si l&apos;employé(e) semble accepter.'
  },
  {
    id: 's8',
    title: 'Le silence',
    scenario: 'Sam fait des avances à Morgan qui ne dit rien et ne bouge pas.',
    question: 'Sam devrait-il/elle interpréter cela comme un consentement ?',
    options: [
      'Oui, Morgan n&apos;a pas dit non',
      'Non, le silence n&apos;est jamais un consentement',
      'Ça dépend du contexte',
      'Oui, si Morgan sourit'
    ],
    correctAnswer: 1,
    explanation: 'Le silence ou l&apos;absence de résistance ne sont jamais un consentement. Un "oui" clair est nécessaire.'
  },
  {
    id: 's9',
    title: 'Les vêtements',
    scenario: 'Quelqu&apos;un porte des vêtements révélateurs lors d&apos;une soirée.',
    question: 'Cela signifie-t-il qu&apos;il/elle consent à des avances ?',
    options: [
      'Oui, c&apos;est un signal',
      'Non, les vêtements ne sont jamais un consentement',
      'Ça dépend du type de soirée',
      'Probablement oui'
    ],
    correctAnswer: 1,
    explanation: 'Les vêtements ne sont jamais une invitation ou un consentement. Chacun a le droit de s&apos;habiller comme il/elle le souhaite.'
  },
  {
    id: 's10',
    title: 'La surprise',
    scenario: 'Pour l&apos;anniversaire de son/sa partenaire, Chris planifie une surprise romantique intime sans en parler avant.',
    question: 'Est-ce une bonne idée ?',
    options: [
      'Oui, c&apos;est romantique',
      'Non, il faut toujours communiquer sur les attentes intimes',
      'Oui, dans un couple c&apos;est normal',
      'Ça dépend de la surprise'
    ],
    correctAnswer: 1,
    explanation: 'Même dans un couple, il est important de communiquer sur les attentes intimes plutôt que de présumer.'
  },
  {
    id: 's11',
    title: 'L&apos;insistance',
    scenario: 'Après un refus, quelqu&apos;un continue à demander "juste un bisou" plusieurs fois.',
    question: 'Ce comportement est-il acceptable ?',
    options: [
      'Oui, c&apos;est de la persévérance',
      'Non, c&apos;est du harcèlement',
      'Ça dépend du ton utilisé',
      'Oui, si c&apos;est dit gentiment'
    ],
    correctAnswer: 1,
    explanation: 'Insister après un refus est du harcèlement. Un "non" doit être respecté immédiatement.'
  },
  {
    id: 's12',
    title: 'Le chantage émotionnel',
    scenario: 'Quelqu&apos;un dit : "Si tu m&apos;aimais vraiment, tu accepterais".',
    question: 'Est-ce une forme de manipulation ?',
    options: [
      'Non, c&apos;est juste de l&apos;expression',
      'Oui, c&apos;est du chantage émotionnel qui invalide le consentement',
      'Ça dépend de la relation',
      'Non, c&apos;est une question légitime'
    ],
    correctAnswer: 1,
    explanation: 'C&apos;est du chantage émotionnel qui vise à manipuler. Le vrai amour respecte les limites de l&apos;autre.'
  },
  {
    id: 's13',
    title: 'Le réveil',
    scenario: 'Dans un couple, une personne réveille son/sa partenaire endormi(e) avec des caresses intimes.',
    question: 'Est-ce approprié sans accord préalable ?',
    options: [
      'Oui, dans un couple c&apos;est normal',
      'Non, une personne endormie ne peut pas consentir',
      'Ça dépend de la relation',
      'Oui, si c&apos;est fait doucement'
    ],
    correctAnswer: 1,
    explanation: 'Une personne endormie ne peut pas donner son consentement. Cela nécessite une discussion et un accord préalable explicite.'
  },
  {
    id: 's14',
    title: 'La photo',
    scenario: 'Quelqu&apos;un veut prendre une photo intime de son/sa partenaire "juste pour lui/elle".',
    question: 'Le/la partenaire doit-il/elle accepter ?',
    options: [
      'Oui, si c&apos;est dans le couple',
      'Seulement si il/elle est vraiment à l&apos;aise et consent librement',
      'Oui, si la personne promet de ne pas la partager',
      'Oui, pour faire plaisir'
    ],
    correctAnswer: 1,
    explanation: 'Personne ne doit accepter quelque chose qui le/la met mal à l&apos;aise. Le consentement doit être libre et enthousiaste.'
  },
  {
    id: 's15',
    title: 'L&apos;excuse de l&apos;alcool',
    scenario: 'Après avoir fait quelque chose sans consentement, quelqu&apos;un dit : "J&apos;étais ivre, je ne savais pas ce que je faisais".',
    question: 'Est-ce une excuse valable ?',
    options: [
      'Oui, l&apos;alcool change le comportement',
      'Non, l&apos;alcool n&apos;excuse pas le non-respect du consentement',
      'Ça dépend du niveau d&apos;ébriété',
      'Oui, si c&apos;est la première fois'
    ],
    correctAnswer: 1,
    explanation: 'L&apos;alcool n&apos;est jamais une excuse pour ne pas respecter le consentement. Chacun est responsable de ses actes.'
  },
  {
    id: 's16',
    title: 'Le flirt au travail',
    scenario: 'Un collègue fait régulièrement des commentaires sur l&apos;apparence physique d&apos;un(e) autre collègue.',
    question: 'Est-ce acceptable ?',
    options: [
      'Oui, ce sont des compliments',
      'Non, c&apos;est inapproprié en milieu professionnel',
      'Ça dépend si la personne sourit',
      'Oui, si c&apos;est positif'
    ],
    correctAnswer: 1,
    explanation: 'Les commentaires répétés sur l&apos;apparence physique en milieu professionnel sont inappropriés et peuvent constituer du harcèlement.'
  },
  {
    id: 's17',
    title: 'Le consentement par SMS',
    scenario: 'Quelqu&apos;un envoie des messages à caractère sexuel sans avoir vérifié si l&apos;autre personne est intéressée.',
    question: 'Est-ce approprié ?',
    options: [
      'Oui, c&apos;est juste des messages',
      'Non, il faut d&apos;abord établir que ce type de communication est bienvenu',
      'Ça dépend de la relation',
      'Oui, la personne peut ne pas répondre'
    ],
    correctAnswer: 1,
    explanation: 'Même par message, il faut s&apos;assurer que ce type de communication est bienvenu avant de l&apos;initier.'
  },
  {
    id: 's18',
    title: 'La jalousie',
    scenario: 'Dans un couple, une personne vérifie constamment le téléphone de son/sa partenaire et contrôle ses sorties.',
    question: 'Est-ce un signe d&apos;amour ?',
    options: [
      'Oui, ça montre qu&apos;il/elle tient à l&apos;autre',
      'Non, c&apos;est du contrôle abusif qui ne respecte pas l&apos;autonomie',
      'Ça dépend des raisons',
      'Oui, si l&apos;autre a déjà menti'
    ],
    correctAnswer: 1,
    explanation: 'Le contrôle et la surveillance ne sont pas de l&apos;amour mais du comportement abusif qui ne respecte pas l&apos;autonomie de l&apos;autre.'
  },
  {
    id: 's19',
    title: 'Le premier rendez-vous',
    scenario: 'Lors d&apos;un premier rendez-vous, quelqu&apos;un essaie d&apos;embrasser l&apos;autre sans demander.',
    question: 'Aurait-il/elle dû demander d&apos;abord ?',
    options: [
      'Non, ça gâche le moment',
      'Oui, demander rend le moment plus respectueux et consensuel',
      'Ça dépend de l&apos;ambiance',
      'Non, c&apos;est évident si l&apos;autre est intéressé(e)'
    ],
    correctAnswer: 1,
    explanation: 'Demander le consentement, même pour un baiser, montre du respect et rend le moment plus agréable pour les deux.'
  },
  {
    id: 's20',
    title: 'La rupture',
    scenario: 'Après une rupture, quelqu&apos;un continue à envoyer des messages et à se présenter aux endroits fréquentés par son/sa ex.',
    question: 'Ce comportement est-il acceptable ?',
    options: [
      'Oui, pour essayer de reconquérir',
      'Non, c&apos;est du harcèlement',
      'Ça dépend de la raison de la rupture',
      'Oui, si c&apos;est fait avec amour'
    ],
    correctAnswer: 1,
    explanation: 'Continuer à contacter quelqu&apos;un qui a exprimé le souhait de ne plus avoir de contact est du harcèlement.'
  }
];

export const consentGames: GameQuestion[] = [
  {
    id: 'g1',
    statement: 'Le consentement peut être retiré à tout moment',
    isTrue: true,
    explanation: 'Vrai ! Le consentement est révocable à tout moment, même après avoir été donné.'
  },
  {
    id: 'g2',
    statement: 'Si quelqu&apos;un ne dit pas "non", cela signifie "oui"',
    isTrue: false,
    explanation: 'Faux ! Le silence ou l&apos;absence de "non" ne signifie pas consentement. Il faut un "oui" clair.'
  },
  {
    id: 'g3',
    statement: 'Dans un couple, le consentement est automatique',
    isTrue: false,
    explanation: 'Faux ! Même dans un couple, le consentement doit toujours être demandé et donné pour chaque situation.'
  },
  {
    id: 'g4',
    statement: 'Une personne ivre peut donner un consentement valide',
    isTrue: false,
    explanation: 'Faux ! Une personne dont le jugement est altéré ne peut pas donner un consentement valide.'
  },
  {
    id: 'g5',
    statement: 'Le consentement doit être libre, éclairé et spécifique',
    isTrue: true,
    explanation: 'Vrai ! Ce sont les trois caractéristiques essentielles d&apos;un consentement valide.'
  },
  {
    id: 'g6',
    statement: 'Les vêtements d&apos;une personne indiquent son consentement',
    isTrue: false,
    explanation: 'Faux ! Les vêtements ne sont jamais une indication de consentement. Chacun s&apos;habille comme il le souhaite.'
  },
  {
    id: 'g7',
    statement: 'Demander le consentement gâche le moment romantique',
    isTrue: false,
    explanation: 'Faux ! Demander le consentement montre du respect et peut même renforcer l&apos;intimité et la confiance.'
  },
  {
    id: 'g8',
    statement: 'Le consentement s&apos;applique à toutes les interactions, pas seulement sexuelles',
    isTrue: true,
    explanation: 'Vrai ! Le consentement s&apos;applique à toutes les formes d&apos;interactions physiques et personnelles.'
  },
  {
    id: 'g9',
    statement: 'Si quelqu&apos;un a consenti une fois, il consent pour toujours',
    isTrue: false,
    explanation: 'Faux ! Le consentement passé ne garantit pas le consentement futur. Chaque situation nécessite un nouveau consentement.'
  },
  {
    id: 'g10',
    statement: 'La pression ou la manipulation invalident le consentement',
    isTrue: true,
    explanation: 'Vrai ! Le consentement doit être donné librement, sans pression, manipulation ou coercition.'
  },
  {
    id: 'g11',
    statement: 'On peut présumer le consentement dans une relation établie',
    isTrue: false,
    explanation: 'Faux ! Même dans une relation établie, le consentement ne doit jamais être présumé.'
  },
  {
    id: 'g12',
    statement: 'Le langage corporel seul suffit pour établir le consentement',
    isTrue: false,
    explanation: 'Faux ! Le langage corporel peut être ambigu. Une communication verbale claire est toujours préférable.'
  },
  {
    id: 'g13',
    statement: 'Insister après un refus est du harcèlement',
    isTrue: true,
    explanation: 'Vrai ! Continuer à insister après un "non" constitue du harcèlement.'
  },
  {
    id: 'g14',
    statement: 'L&apos;alcool excuse le non-respect du consentement',
    isTrue: false,
    explanation: 'Faux ! L&apos;alcool n&apos;est jamais une excuse. Chacun est responsable de respecter le consentement.'
  },
  {
    id: 'g15',
    statement: 'Le consentement enthousiaste est un "oui" clair et positif',
    isTrue: true,
    explanation: 'Vrai ! Le consentement enthousiaste est un "oui" actif et positif, pas juste l&apos;absence de "non".'
  },
  {
    id: 'g16',
    statement: 'Payer un dîner crée une obligation de consentement',
    isTrue: false,
    explanation: 'Faux ! Le consentement ne s&apos;achète pas. Personne n&apos;a d&apos;obligation envers qui que ce soit.'
  },
  {
    id: 'g17',
    statement: 'Une personne endormie peut consentir',
    isTrue: false,
    explanation: 'Faux ! Une personne endormie ne peut pas donner son consentement.'
  },
  {
    id: 'g18',
    statement: 'Le consentement doit être donné au moment présent',
    isTrue: true,
    explanation: 'Vrai ! Le consentement doit être donné au moment de l&apos;action, pas à l&apos;avance.'
  },
  {
    id: 'g19',
    statement: 'Les compliments répétés au travail sont toujours appropriés',
    isTrue: false,
    explanation: 'Faux ! Les commentaires répétés sur l&apos;apparence en milieu professionnel peuvent constituer du harcèlement.'
  },
  {
    id: 'g20',
    statement: 'Chacun a le droit de définir ses propres limites',
    isTrue: true,
    explanation: 'Vrai ! Chaque personne a le droit absolu de définir ses limites et elles doivent être respectées.'
  }
];
