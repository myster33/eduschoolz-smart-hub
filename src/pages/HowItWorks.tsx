
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
              From installation to ongoing support, we handle everything so you can focus on education.
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional implementation with ongoing support ensures your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Complete setup and training typically completed within one week
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            <div className="space-y-8">
              {[
                { day: "Day 1-3", title: "Installation & Setup", description: "Hardware installation and software configuration" },
                { day: "Day 4-5", title: "Training & Testing", description: "Staff training and system testing" },
                { day: "Day 6", title: "Go-Live Support", description: "Launch support and final adjustments" },
                { day: "Ongoing", title: "Support & Updates", description: "Continuous support and regular updates" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`w-80 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <CardContent className="p-6">
                      <div className="text-primary font-semibold mb-2">{item.day}</div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default HowItWorks;
