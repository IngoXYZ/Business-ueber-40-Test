
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
    
    // Check configuration first
    if (!EMAILJS_CONFIG.serviceId || EMAILJS_CONFIG.serviceId === 'service_auswanderer') {
      console.error('❌ EmailJS Service ID not configured properly');
      return false;
    }
    if (!EMAILJS_CONFIG.templateId || EMAILJS_CONFIG.templateId === 'template_quiz_results') {
      console.error('❌ EmailJS Template ID not configured properly');  
      return false;
    }
    if (!EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === 'your_public_key_here') {
      console.error('❌ EmailJS Public Key not configured properly');
      return false;
    }
    
    // Simplified Template Parameters (less complex for testing)
    const templateParams = {
      user_name: submission.name,
      user_email: submission.email,
      total_score: submission.totalScore,
      max_score: submission.maxScore,
      result_type: submission.resultType,
      submission_date: submission.timestamp,
      message: `Neuer Business Test 40+ Teilnehmer: ${submission.name} (${submission.email}) - Score: ${submission.totalScore}/${submission.maxScore} - Bereitschaft: ${submission.resultType}`
    };

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
