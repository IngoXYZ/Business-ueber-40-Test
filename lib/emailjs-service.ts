
// EmailJS Service für direktes E-Mail-Versenden
import emailjs from '@emailjs/browser';

// EmailJS Konfiguration aus Environment Variables
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_auswanderer',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_quiz_results',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key_here'
};

export interface QuizSubmission {
  name: string;
  email: string;
  totalScore: number;
  maxScore: number;
  resultType: string;
  categoryScores: Record<string, number>;
  recommendations: string[];
  timestamp: string;
}

export async function sendQuizResults(submission: QuizSubmission): Promise<boolean> {
  try {
    console.log('🚀 Starting email send process...');
    console.log('📊 Submission data:', {
      name: submission.name,
      email: submission.email,
      score: submission.totalScore,
      type: submission.resultType
    });
    
    // Check configuration first
    console.log('🔧 Checking EmailJS configuration...');
    console.log('Service ID:', EMAILJS_CONFIG.serviceId);
    console.log('Template ID:', EMAILJS_CONFIG.templateId);
    console.log('Public Key:', EMAILJS_CONFIG.publicKey ? 'Set (hidden)' : 'Not set');
    
    if (!EMAILJS_CONFIG.serviceId || EMAILJS_CONFIG.serviceId === 'service_auswanderer') {
      console.error('❌ EmailJS Service ID not configured properly - still using old default');
      return false;
    }
    if (!EMAILJS_CONFIG.templateId || EMAILJS_CONFIG.templateId === 'template_quiz_results') {
      console.error('❌ EmailJS Template ID not configured properly - still using old default');  
      return false;
    }
    if (!EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === 'your_public_key_here') {
      console.error('❌ EmailJS Public Key not configured properly - still using placeholder');
      return false;
    }
    
    // Template Parameters - ALLE Business Test 40+ Parameter
    const templateParams = {
      user_name: submission.name,
      user_email: submission.email,
      total_score: submission.totalScore.toString(),
      max_score: submission.maxScore.toString(),
      result_type: submission.resultType,
      submission_date: submission.timestamp,
      // Kategorie-Scores für Business Test 40+
      unternehmer_mindset_score: (submission.categoryScores.unternehmer_mindset || 0).toFixed(1),
      risikobereitschaft_score: (submission.categoryScores.risikobereitschaft || 0).toFixed(1),
      technische_affinitaet_score: (submission.categoryScores.technische_affinitaet || 0).toFixed(1),
      ai_bereitschaft_score: (submission.categoryScores.ai_bereitschaft || 0).toFixed(1),
      finanzielle_situation_score: (submission.categoryScores.finanzielle_situation || 0).toFixed(1),
      work_life_balance_score: (submission.categoryScores.work_life_balance || 0).toFixed(1),
      lernbereitschaft_score: (submission.categoryScores.lernbereitschaft || 0).toFixed(1),
      netzwerk_marketing_score: (submission.categoryScores.netzwerk_marketing || 0).toFixed(1),
      // Empfehlungen
      recommendations: submission.recommendations.join('\n• '),
      // Fallback Message
      message: `Business Test 40+ - Teilnehmer: ${submission.name}, E-Mail: ${submission.email}, Score: ${submission.totalScore}/${submission.maxScore}, Ergebnis: ${submission.resultType}`
    };
    
    console.log('📧 Template parameters prepared:', templateParams);

    console.log('📧 Sending email via EmailJS...');
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('✅ Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('❌ EmailJS send failed:', error);
    return false;
  }
}

// EmailJS initialisieren
export function initializeEmailJS() {
  // Diese werden später durch echte EmailJS Credentials ersetzt
  emailjs.init(EMAILJS_CONFIG.publicKey);
}
