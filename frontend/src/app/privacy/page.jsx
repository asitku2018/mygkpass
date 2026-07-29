export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-3xl font-black">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: January 2026</p>
      <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
        <p>Welcome to MygkpasS. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
        <h3 className="font-bold text-base text-gray-900 pt-2">1. Information We Collect</h3>
        <p>When you register on MygkpasS, we collect your email address, authentication credentials, and quiz progress metrics to provide personalized learning dashboards.</p>
        <h3 className="font-bold text-base text-gray-900 pt-2">2. Data Security</h3>
        <p>All data transmissions are encrypted via industry-standard SSL/TLS protocols. Passwords are securely hashed using bcrypt algorithms, and database access is governed by strict Row-Level Security policies.</p>
      </div>
    </div>
  );
}
