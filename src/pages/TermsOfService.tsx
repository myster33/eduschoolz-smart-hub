
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using the Eduschools platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on Eduschools' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to decompile or reverse engineer any software contained on Eduschools' website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Description</h2>
              <p className="text-gray-700">
                Eduschools provides a comprehensive school management system that includes student attendance tracking, payment monitoring, financial reporting, asset management, and communication tools. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Safeguarding your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Immediately notifying us of any unauthorized use</li>
                <li>Ensuring compliance with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Protection and Privacy</h2>
              <p className="text-gray-700">
                We are committed to protecting your privacy and the privacy of students, parents, and staff. All data collected through the platform is handled in accordance with South African data protection laws. We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700">
                Payment for services is due according to the subscription plan selected. We reserve the right to suspend or terminate access to the service for non-payment. All fees are non-refundable except where explicitly stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Uses</h2>
              <p className="text-gray-700 mb-4">
                You may not use our service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>For any unlawful purpose or to solicit others to engage in unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer</h2>
              <p className="text-gray-700">
                The materials on Eduschools' website are provided on an 'as is' basis. Eduschools makes no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitations</h2>
              <p className="text-gray-700">
                In no event shall Eduschools or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Eduschools' website, even if Eduschools or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700">
                These terms and conditions are governed by and construed in accordance with the laws of South Africa and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: support@eduschools.co.za</p>
                <p>Phone: +27 11 568 5135</p>
                <p>Address: 36 Goldman Street, Florida, South Africa</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default TermsOfService;
