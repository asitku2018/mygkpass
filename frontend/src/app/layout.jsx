import '../styles/globals.css';

export const metadata = {
  title: 'MygkpasS — AI-Powered General Knowledge & Quiz Platform',
  description: 'Master general knowledge and competitive exams in any Indian language with instant AI translations and automated quizzes.',
  keywords: 'GK, Quizzes, Indian Languages, Current Affairs, UPSC, Banking Exams, MygkpasS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
