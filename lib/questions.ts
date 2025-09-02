
export interface Question {
  id: string;
  category: string;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const categories = {
  unternehmer_mindset: 'Unternehmer-Mindset',
  risikobereitschaft: 'Risikobereitschaft',
  technische_affinitaet: 'Technische Affinität',
  ai_bereitschaft: 'AI-Bereitschaft',
  finanzielle_situation: 'Finanzielle Situation',
  work_life_balance: 'Work-Life-Balance',
  lernbereitschaft: 'Lernbereitschaft',
  netzwerk_marketing: 'Netzwerk & Marketing'
};

export const questions: Question[] = [
  // Unternehmer-Mindset (2 Fragen)
  {
    id: 'um1',
    category: 'unternehmer_mindset',
    text: 'Wie gehst du mit Unsicherheit und unvorhersehbaren Situationen um?',
    options: [
      { text: 'Ich vermeide sie und bevorzuge klare Strukturen', score: 1 },
      { text: 'Sie stressen mich, aber ich schaffe es irgendwie', score: 2 },
      { text: 'Ich plane gut vor und minimiere Risiken', score: 3 },
      { text: 'Ich sehe sie als Chancen und reagiere flexibel', score: 4 },
      { text: 'Ich liebe die Herausforderung und improvisiere gerne', score: 5 }
    ]
  },
  {
    id: 'um2',
    category: 'unternehmer_mindset',
    text: 'Stell dir vor, dein Business-Plan funktioniert nicht. Wie reagierst du?',
    options: [
      { text: 'Ich würde wahrscheinlich aufgeben und zurück zur Anstellung', score: 1 },
      { text: 'Sehr frustriert, brauche lange um mich zu erholen', score: 2 },
      { text: 'Analysieren was schiefging und Plan B entwickeln', score: 3 },
      { text: 'Schnell pivot und neue Strategie ausprobieren', score: 4 },
      { text: 'Das ist Teil des Spiels - sofort nächste Iteration starten', score: 5 }
    ]
  },

  // Risikobereitschaft (2 Fragen)
  {
    id: 'r1',
    category: 'risikobereitschaft',
    text: 'Wie stehst du dazu, deine finanzielle Sicherheit für ein eigenes Business zu riskieren?',
    options: [
      { text: 'Niemals, Sicherheit geht vor', score: 1 },
      { text: 'Nur mit mehreren Jahren Rücklagen', score: 2 },
      { text: 'Mit 1-2 Jahren finanzieller Absicherung', score: 3 },
      { text: '6 Monate Puffer reichen mir', score: 4 },
      { text: 'Manchmal muss man aufs Ganze gehen', score: 5 }
    ]
  },
  {
    id: 'r2',
    category: 'risikobereitschaft',
    text: 'Wie würdest du reagieren, wenn Freunde/Familie dein Business-Vorhaben kritisieren?',
    options: [
      { text: 'Ich würde es wahrscheinlich sein lassen', score: 1 },
      { text: 'Sehr verunsichert, würde alles nochmal überdenken', score: 2 },
      { text: 'Ihre Meinung ist wichtig, aber ich entscheide selbst', score: 3 },
      { text: 'Ich höre zu, aber verfolge meinen Weg', score: 4 },
      { text: 'Ihre Zweifel motivieren mich noch mehr', score: 5 }
    ]
  },

  // Technische Affinität (2 Fragen)
  {
    id: 't1',
    category: 'technische_affinitaet',
    text: 'Wie gehst du mit neuen digitalen Tools und Software um?',
    options: [
      { text: 'Ich vermeide sie und bleibe bei bewährten Methoden', score: 1 },
      { text: 'Schwierig für mich, brauche viel Hilfe', score: 2 },
      { text: 'Mit Anleitungen schaffe ich es meistens', score: 3 },
      { text: 'Ich lerne gerne dazu und probiere aus', score: 4 },
      { text: 'Ich liebe neue Tech und bin oft Early Adopter', score: 5 }
    ]
  },
  {
    id: 't2',
    category: 'technische_affinitaet',
    text: 'Wie schätzt du deine Online-Marketing Fähigkeiten ein?',
    options: [
      { text: 'Keine Ahnung, das ist mir völlig fremd', score: 1 },
      { text: 'Sehr basic, Instagram und Facebook privat', score: 2 },
      { text: 'Grundlagen da, aber unsicher bei Business-Anwendung', score: 3 },
      { text: 'Gute Kenntnisse, kann selbständig arbeiten', score: 4 },
      { text: 'Profi-Level, SEO, Ads, Analytics kenne ich gut', score: 5 }
    ]
  },

  // AI-Bereitschaft (2 Fragen)
  {
    id: 'ai1',
    category: 'ai_bereitschaft',
    text: 'Wie stehst du zu Künstlicher Intelligenz im Business-Kontext?',
    options: [
      { text: 'Skeptisch, vertraue lieber auf menschliche Arbeit', score: 1 },
      { text: 'Unsicher, kenne mich nicht gut aus', score: 2 },
      { text: 'Interessiert, aber noch nicht aktiv genutzt', score: 3 },
      { text: 'Nutze bereits einige AI-Tools privat/beruflich', score: 4 },
      { text: 'AI ist die Zukunft, ich will Vorreiter sein', score: 5 }
    ]
  },
  {
    id: 'ai2',
    category: 'ai_bereitschaft',
    text: 'Stell dir vor, ein AI-Tool könnte 70% deiner Routine-Arbeit übernehmen. Deine Reaktion?',
    options: [
      { text: 'Beängstigend, dann bin ich überflüssig', score: 1 },
      { text: 'Skeptisch, mache lieber alles selbst', score: 2 },
      { text: 'Interessant, würde es vorsichtig testen', score: 3 },
      { text: 'Großartig, mehr Zeit für strategische Arbeit', score: 4 },
      { text: 'Perfekt! Automation ist der Schlüssel zum Erfolg', score: 5 }
    ]
  },

  // Finanzielle Situation (2 Fragen)
  {
    id: 'f1',
    category: 'finanzielle_situation',
    text: 'Wie ist deine aktuelle finanzielle Lage für eine Selbständigkeit?',
    options: [
      { text: 'Sehr angespannt, lebe von Gehalt zu Gehalt', score: 1 },
      { text: 'Knapp, wenig Spielraum für Investitionen', score: 2 },
      { text: 'Solide, habe einige Rücklagen', score: 3 },
      { text: 'Gut, kann Business-Investitionen stemmen', score: 4 },
      { text: 'Sehr gut, Geld ist kein limitierender Faktor', score: 5 }
    ]
  },
  {
    id: 'f2',
    category: 'finanzielle_situation',
    text: 'Wie gehst du mit Business-Ausgaben und Investitionen um?',
    options: [
      { text: 'Sehr sparsam, investiere nur wenn unbedingt nötig', score: 1 },
      { text: 'Vorsichtig, überlege jeden Euro dreimal', score: 2 },
      { text: 'Durchdacht, investiere gezielt nach Plan', score: 3 },
      { text: 'Mutig, sehe Investitionen als notwendig an', score: 4 },
      { text: 'Strategisch aggressiv, man muss Geld ausgeben um welches zu verdienen', score: 5 }
    ]
  },

  // Work-Life-Balance (2 Fragen)
  {
    id: 'wl1',
    category: 'work_life_balance',
    text: 'Wie stehst du zu 60+ Stunden Arbeitswochen in der Startphase?',
    options: [
      { text: 'Unmöglich, Work-Life-Balance ist mir heilig', score: 1 },
      { text: 'Schwierig, Familie/Hobbys sind sehr wichtig', score: 2 },
      { text: 'Temporär okay, aber nicht dauerhaft', score: 3 },
      { text: 'Kein Problem wenn es dem Ziel dient', score: 4 },
      { text: 'Hustle-Mode an! Success requires sacrifice', score: 5 }
    ]
  },
  {
    id: 'wl2',
    category: 'work_life_balance',
    text: 'Wie würde deine Familie/Partner auf deine Selbständigkeitspläne reagieren?',
    options: [
      { text: 'Sehr skeptisch bis ablehnend', score: 1 },
      { text: 'Besorgt wegen der Unsicherheit', score: 2 },
      { text: 'Neutral, solange Finanzen stimmen', score: 3 },
      { text: 'Unterstützend, wenn Plan durchdacht ist', score: 4 },
      { text: 'Vollste Unterstützung, team effort', score: 5 }
    ]
  },

  // Lernbereitschaft (1 Frage)
  {
    id: 'l1',
    category: 'lernbereitschaft',
    text: 'Wie gehst du damit um, dass du mit 40+ in vielen Business-Bereichen wieder Anfänger bist?',
    options: [
      { text: 'Frustrierend, ich sollte schon alles können', score: 1 },
      { text: 'Schwierig, aber notwendig', score: 2 },
      { text: 'Herausfordernd, aber machbar', score: 3 },
      { text: 'Spannend, ich lerne gerne dazu', score: 4 },
      { text: 'Perfekt! Lebenslanges Lernen hält jung', score: 5 }
    ]
  },

  // Netzwerk & Marketing (2 Fragen)
  {
    id: 'nm1',
    category: 'netzwerk_marketing',
    text: 'Wie fühlst du dich dabei, dich und dein Business aktiv zu vermarkten?',
    options: [
      { text: 'Sehr unangenehm, das liegt mir nicht', score: 1 },
      { text: 'Schwierig, fühlt sich wie Aufschneiderei an', score: 2 },
      { text: 'Okay, wenn es sachlich und ehrlich ist', score: 3 },
      { text: 'Gerne, ich bin stolz auf meine Arbeit', score: 4 },
      { text: 'Ich liebe es! Marketing ist Teil des Erfolgs', score: 5 }
    ]
  },
  {
    id: 'nm2',
    category: 'netzwerk_marketing',
    text: 'Wie groß ist dein berufliches Netzwerk für potentielle Kunden/Partner?',
    options: [
      { text: 'Sehr klein, kenne wenige Geschäftskontakte', score: 1 },
      { text: 'Begrenzt, hauptsächlich ehemalige Kollegen', score: 2 },
      { text: 'Solide Basis in meiner Branche', score: 3 },
      { text: 'Gut vernetzt, auch branchenübergreifend', score: 4 },
      { text: 'Exzellentes Netzwerk, viele potentielle Opportunities', score: 5 }
    ]
  }
];

export const getResultType = (totalScore: number): string => {
  // Total possible score: 15 questions * 5 points = 75 points
  if (totalScore >= 60) return 'Ready for Business!';
  if (totalScore >= 45) return 'Fast bereit';
  if (totalScore >= 30) return 'Vorbereitung nötig';
  return 'Noch nicht soweit';
};

export const getResultDetails = (resultType: string) => {
  const results = {
    'Ready for Business!': {
      title: 'Ready for Business! 🚀',
      description: 'Glückwunsch! Du bringst alle wichtigen Eigenschaften für ein erfolgreiches Business mit 40+ mit. Dein Mindset, deine Risikobereitschaft und deine Fähigkeiten sind optimal für die Selbständigkeit.',
      color: 'text-green-600'
    },
    'Fast bereit': {
      title: 'Fast bereit! 💪',
      description: 'Du hast sehr gute Grundvoraussetzungen für die Selbständigkeit! Mit gezielter Vorbereitung in einigen Bereichen kannst du erfolgreich dein eigenes Business starten.',
      color: 'text-blue-600'
    },
    'Vorbereitung nötig': {
      title: 'Vorbereitung nötig 📚',
      description: 'Du hast Potential, aber es gibt noch wichtige Bereiche zu entwickeln. Investiere Zeit in Weiterbildung und den Aufbau der nötigen Skills - dann steht deinem Business nichts im Weg!',
      color: 'text-yellow-600'
    },
    'Noch nicht soweit': {
      title: 'Noch nicht soweit 🎯',
      description: 'Eine Anstellung ist momentan wahrscheinlich die bessere Wahl für dich. Nutze die Zeit, um gezielt an deinen unternehmerischen Fähigkeiten zu arbeiten - der richtige Zeitpunkt kommt!',
      color: 'text-red-600'
    }
  };
  return results[resultType as keyof typeof results];
};

export const getRecommendations = (categoryScores: Record<string, number>): string[] => {
  const recommendations: string[] = [];
  
  Object.entries(categoryScores).forEach(([category, score]) => {
    if (score < 3.5) {
      switch (category) {
        case 'unternehmer_mindset':
          recommendations.push('🧠 Stärke dein Unternehmer-Mindset: Lies Business-Bücher, höre Entrepreneur-Podcasts und tausche dich mit selbständigen Menschen aus. Übe dich in strategischem Denken und Problemlösung.');
          break;
        case 'risikobereitschaft':
          recommendations.push('🎯 Erhöhe deine Risikobereitschaft: Beginne mit kleinen Business-Experimenten (Side Hustles) und baue Vertrauen in deine unternehmerischen Fähigkeiten auf. Kalkulierte Risiken sind der Schlüssel zum Erfolg.');
          break;
        case 'technische_affinitaet':
          recommendations.push('💻 Verbessere deine Tech-Skills: Investiere Zeit in digitale Weiterbildung - Online-Kurse, YouTube-Tutorials oder lokale Workshops. Fange mit den Basics an: Website, Social Media, einfache Tools.');
          break;
        case 'ai_bereitschaft':
          recommendations.push('🤖 Embrace AI: Probiere ChatGPT, Canva AI oder andere Tools aus. AI wird dein Business-Vorteil sein! Starte mit einfachen Anwendungen wie Texterstellung oder Bildbearbeitung.');
          break;
        case 'finanzielle_situation':
          recommendations.push('💰 Optimiere deine Finanzen: Erstelle einen Business-Sparplan, reduziere unnötige Ausgaben und baue systematisch Kapital für dein Business auf. Eventuell erst nebenberuflich starten?');
          break;
        case 'work_life_balance':
          recommendations.push('⚖️ Bereite Familie/Partner vor: Kommuniziere offen über deine Pläne und hole sie ins Boot. Business-Start bedeutet zunächst mehr Arbeit - aber für ein gemeinsames Ziel.');
          break;
        case 'lernbereitschaft':
          recommendations.push('📚 Entwickle Lernlust: Sieh jeden Tag als Chance zu wachsen! Online-Kurse, Masterminds, Business-Events - investiere bewusst in deine Weiterentwicklung. Learning never stops!');
          break;
        case 'netzwerk_marketing':
          recommendations.push('🌐 Baue dein Netzwerk auf: LinkedIn aktivieren, Business-Events besuchen, authentische Beziehungen knüpfen. Dein Netzwerk ist dein Net Worth - auch mit 40+ kann man große Circles aufbauen!');
          break;
      }
    }
  });
  
  // Add positive recommendations for high scores
  Object.entries(categoryScores).forEach(([category, score]) => {
    if (score >= 4.5) {
      switch (category) {
        case 'unternehmer_mindset':
          recommendations.push('✅ Dein Unternehmer-Mindset ist ausgezeichnet - du denkst bereits wie ein erfolgreicher Business-Owner!');
          break;
        case 'ai_bereitschaft':
          recommendations.push('🚀 Deine AI-Affinität ist hervorragend - nutze das als Wettbewerbsvorteil in deinem Business!');
          break;
        case 'technische_affinitaet':
          recommendations.push('🌟 Deine Tech-Skills sind top - du wirst im digitalen Business erfolgreich sein!');
          break;
        case 'netzwerk_marketing':
          recommendations.push('💫 Dein Netzwerk und Marketing-Mindset sind perfekt - das wird dein Business-Turbo!');
          break;
      }
    }
  });
  
  if (recommendations.length === 0) {
    recommendations.push('🎉 Du bist bereits sehr ausgewogen aufgestellt! Nutze deine Stärken und starte mit Vertrauen in dein Business-Abenteuer. Du hast das Zeug zum Erfolg!');
  }
  
  return recommendations;
};
