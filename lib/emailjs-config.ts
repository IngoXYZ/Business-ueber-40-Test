
// EmailJS Konfiguration
// WICHTIG: Diese Werte müssen durch deine echten EmailJS Credentials ersetzt werden!

export const EMAILJS_CONFIG = {
  // Ersetze mit deinen echten EmailJS Werten:
  serviceId: 'service_business40',       // Dein EmailJS Service ID
  templateId: 'template_business_test',  // Dein EmailJS Template ID  
  publicKey: 'your_public_key_here'      // Dein EmailJS Public Key
};

// EmailJS Template Beispiel (VEREINFACHT für Testing):
// 
// Betreff: Neue Business Test 40+ Teilnahme - {{user_name}}
//
// Inhalt:
// Hallo,
// 
// ein neuer Teilnehmer hat den Business Test 40+ ausgefüllt:
//
// TEILNEHMER-DATEN:
// Name: {{user_name}}
// E-Mail: {{user_email}}
// Datum: {{submission_date}}
//
// QUIZ-ERGEBNISSE:
// Gesamtpunktzahl: {{total_score}}/{{max_score}}
// Business-Bereitschaft: {{result_type}}
//
// DETAILS:
// {{message}}
//
// Viele Grüße,
// Business Test 40+
//
// WICHTIG: Erstelle dein EmailJS Template mit genau diesen Parametern:
// - {{user_name}}
// - {{user_email}} 
// - {{submission_date}}
// - {{total_score}}
// - {{max_score}}
// - {{result_type}}
// - {{message}}
//
// SUPER-EINFACHES TEMPLATE (Falls das obige nicht funktioniert):
//
// Betreff: Business Test Teilnehmer
//
// Inhalt:
// Name: {{user_name}}
// Email: {{user_email}}
// Score: {{total_score}}/{{max_score}}  
// Typ: {{result_type}}
// Datum: {{submission_date}}
//
// {{message}}
