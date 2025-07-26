
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, CreditCard, MessageSquare, BookOpen, Fingerprint, Smartphone, Percent, AlertTriangle, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Learner Info & Profiles",
      description: "Comprehensive student management system with detailed profiles, academic history, and personal information.",
      details: [
        "Complete student database with photos and documents",
        "Academic performance tracking and history",
        "Health records and emergency contact information",
        "Customizable profile fields for unique school needs",
        "Bulk import/export capabilities"
      ]
    },
    {
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      title: "Accounting & Payments",
      description: "Automated financial management with real-time ledgers, payment tracking, and receipt generation.",
      details: [
        "Automated ledger system with real-time updates",
        "Multiple payment method support",
        "Automated receipt generation and email delivery",
        "Financial reporting and analytics",
        "Integration with accounting software",
        "Payment reminder automation"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Communication Tools",
      description: "Real-time SMS notifications, announcements, and seamless parent-school communication.",
      details: [
        "Instant SMS notifications to parents",
        "School-wide announcement system",
        "Individual and group messaging",
        "Emergency alert broadcasting",
        "Multi-language support",
        "Message delivery confirmation"
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Paymaster",
      description: "Staff attendance tracking and comprehensive payroll statistics for efficient workforce management.",
      details: [
        "Biometric staff attendance tracking",
        "Automated timesheet generation",
        "Payroll calculation and statistics",
        "Leave management system",
        "Overtime tracking and reporting",
        "Staff performance analytics"
      ]
    },
    {
      icon: <Fingerprint className="h-12 w-12 text-primary" />,
      title: "Attendance Technology",
      description: "Advanced biometric and barcode attendance tracking with real-time monitoring and reporting.",
      details: [
        "Fingerprint biometric scanning",
        "QR code and barcode scanning",
        "Real-time attendance updates",
        "Automated parent notifications",
        "Attendance analytics and reporting",
        "Late arrival and early departure tracking"
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Parental Mobile App",
      description: "Dedicated mobile application giving parents complete access to their child's school information.",
      details: [
        "Real-time attendance notifications",
        "Academic progress monitoring",
        "School announcements and updates",
        "Direct messaging with teachers",
        "Payment history and outstanding fees",
        "Event calendar and important dates"
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive data analytics and customizable reporting for informed decision-making.",
      details: [
        "Real-time dashboard with key metrics",
        "Custom report generation",
        "Academic performance analytics",
        "Financial reporting and forecasting",
        "Attendance trend analysis",
        "Export capabilities for external analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive School Management Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover all the powerful tools and features that make Eduschoolz the complete solution for modern educational institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details">
                      <AccordionTrigger className="text-primary font-semibold">
                        View Detailed Features
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Features;
