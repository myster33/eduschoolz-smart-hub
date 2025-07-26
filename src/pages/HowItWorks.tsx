
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Settings, Users, Shield, RotateCcw } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Onsite Installation by Our Team",
      description: "Our certified technicians handle the complete setup process at your school premises.",
      details: [
        "Hardware installation (biometric scanners, servers, networking)",
        "Software configuration and customization",
        "Database setup and data migration",
        "System integration with existing infrastructure",
        "Initial testing and quality assurance"
      ],
      duration: "2-3 days"
    },
    {
      step: "2",
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Training for School Staff",
      description: "Comprehensive training ensures your team can effectively use all system features.",
      details: [
        "Administrator training for system management",
        "Teacher training for daily operations",
        "Front office staff training for payments and communications",
        "IT staff training for basic maintenance",
        "User manual and video tutorials provided"
      ],
      duration: "1-2 days"
    },
    {
      step: "3",
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Secure Hosting & Ongoing Support",
      description: "Reliable cloud hosting with 24/7 monitoring and comprehensive support services.",
      details: [
        "Secure cloud hosting with 99.9% uptime guarantee",
        "Daily automated backups",
        "SSL encryption and data protection",
        "24/7 system monitoring and alerts",
        "Dedicated support team for assistance"
      ],
      duration: "Ongoing"
    },
    {
      step: "4",
      icon: <RotateCcw className="h-12 w-12 text-primary" />,
      title: "Regular Upgrades & Maintenance",
      description: "Continuous improvements and updates to keep your system current and efficient.",
      details: [
        "Monthly software updates and feature additions",
        "Security patches and bug fixes",
        "Performance optimization",
        "New feature rollouts based on user feedback",
        "Preventive maintenance and health checks"
      ],
      duration: "Monthly"
    }
  ];

  const benefits = [
    {
      title: "Zero Downtime Implementation",
      description: "Our phased implementation ensures your school operations continue uninterrupted."
    },
    {
      title: "Expert Technical Support",
      description: "Access to certified technicians and education technology specialists."
    },
    {
      title: "Customized Configuration",
      description: "System tailored to match your school's specific needs and processes."
    },
    {
      title: "Seamless Data Migration",
      description: "Safe transfer of existing student and administrative data."
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
              How Eduschoolz Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From implementation to ongoing support, we make school management effortless with our comprehensive process.
            </p>
          </div>
        </div>
      </section>


      {/* Implementation Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                    {step.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <div className="bg-primary-50 rounded-lg p-4 mb-6">
                    <p className="text-primary font-semibold">Duration: {step.duration}</p>
                  </div>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                          <div className="text-4xl">
                            {React.cloneElement(step.icon, { className: "h-16 w-16 text-primary" })}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-center text-gray-900">
                        Step {step.step}: {step.title}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default HowItWorks;
