
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  
  const pricingTiers = [
    {
      name: "Freemium",
      range: "1-500 learners",
      price: "R0",
      period: "/month",
      features: [
        "Student Attendance Management",
        "Student Account Payments Monitoring and Receipting",
        "Payment Reports and Other Financial Reports",
        "School Summative Payments and Balances",
        "Debtors Management and Debt Collection",
        "Paymaster for staff attendance tracking and payroll statistics",
        "Barcode Technology for Attendance Tracking",
        "Real-Time SMS Alerts and Notifications"
      ],
      popular: false
    },
    {
      name: "Starter",
      range: "1-500 learners",
      price: "R1,750",
      period: "/month",
      features: [
        "Student Attendance Management",
        "Student Account Payments Monitoring and Receipting",
        "Payment Reports and Other Financial Reports",
        "School Summative Payments and Balances",
        "Debtors Management and Debt Collection",
        "Asset Management",
        "Paymaster for staff attendance tracking and payroll statistics",
        "Barcode Technology for Attendance Tracking",
        "Real-Time SMS Alerts and Notifications",
        "Mobile Application (Centralized communication and information transmission to parents and guardians)"
      ],
      popular: true
    },
    {
      name: "Professional",
      range: "501-1000 learners",
      price: "R2,500",
      period: "/month",
      features: [
        "All Starter features",
        "Advanced analytics",
        "Multiple campus support",
        "API access",
        "Dedicated support",
        "Custom integrations"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      range: "1000+ learners",
      price: "R3,000",
      period: "/month",
      features: [
        "All Professional features",
        "Unlimited users",
        "Advanced security",
        "Custom development",
        "24/7 support",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const handleChoosePlan = (planName: string) => {
    navigate('/registration', { state: { planName } });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your school. All plans include core features with scalable options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-shadow duration-300 ${tier.popular ? 'border-primary shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <p className="text-gray-600">{tier.range}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${tier.popular ? 'bg-primary hover:bg-primary-700' : 'variant-outline'}`}
                    onClick={() => handleChoosePlan(tier.name)}
                  >
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cyber Month Promotion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Limited Time Offer
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss our exclusive Cyber Month promotion!
            </p>
          </div>

          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/cyber-month-promo.png" 
              alt="Cyber Month Promotion - Up to 20% off monthly subscription for the first year" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Is there a setup fee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No, there are no setup fees. Our team provides free onsite installation and training as part of your monthly subscription.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I change plans anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What about data security and backups?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All plans include secure cloud hosting with daily backups, SSL encryption, and compliance with data protection regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today for a personalized demo and see which plan works best for your school.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-3"
            onClick={() => navigate('/book-demo')}
          >
            Schedule Your Free Demo
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Pricing;
