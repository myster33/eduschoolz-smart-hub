
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, UserCheck, CreditCard, MessageCircle, BarChart3, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HowItWorks = () => {
  const navigate = useNavigate();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Our team conducts a thorough assessment of your school's needs and current systems to create a customized implementation plan.",
      icon: <MessageCircle className="h-12 w-12 text-primary" />
    },
    {
      number: "02",
      title: "System Setup",
      description: "We configure Eduschools specifically for your institution, including student data migration, user accounts, and system customization.",
      icon: <UserCheck className="h-12 w-12 text-primary" />
    },
    {
      number: "03",
      title: "Staff Training",
      description: "Comprehensive training sessions for all staff members to ensure smooth adoption and maximize the system's potential.",
      icon: <BarChart3 className="h-12 w-12 text-primary" />
    },
    {
      number: "04",
      title: "Go Live",
      description: "Launch the system with ongoing support to ensure everything runs smoothly from day one.",
      icon: <CheckCircle className="h-12 w-12 text-primary" />
    }
  ];

  const features = [
    {
      title: "Student Management",
      description: "Complete student profiles with attendance, grades, and behavior tracking.",
      icon: <UserCheck className="h-8 w-8 text-primary" />
    },
    {
      title: "Financial Management",
      description: "Automated billing, payment processing, and financial reporting.",
      icon: <CreditCard className="h-8 w-8 text-primary" />
    },
    {
      title: "Communication Hub",
      description: "Real-time messaging between staff, students, and parents.",
      icon: <MessageCircle className="h-8 w-8 text-primary" />
    },
    {
      title: "Analytics & Reports",
      description: "Data-driven insights to improve school performance.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />
    }
  ];

  const benefits = [
    "Reduce administrative workload by up to 70%",
    "Improve parent-school communication",
    "Streamline fee collection and financial tracking",
    "Real-time attendance monitoring",
    "Comprehensive reporting and analytics",
    "Mobile app for parents and staff"
  ];

  return (
    <div className="min-h-screen animate-dissolve-in">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className={`text-center ${heroVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Eduschools Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your school's operations with our comprehensive management system. 
              Here's how we make it happen.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => navigate('/book-demo')}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={stepsRef} className={`text-center mb-16 ${stepsVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make getting started easy with our proven 4-step implementation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative text-center hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <CardHeader className="pt-8">
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={processRef} className={`text-center mb-16 ${processVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines essential school management tools in one integrated solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={benefitsRef} className={`${benefitsVisible ? 'animate-dissolve-in-scroll' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Schools Choose Eduschools
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of schools that have transformed their operations with our platform.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/15091b69-6182-4c9c-aaca-db32fb7944d8.jpg" 
                alt="School management dashboard" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/lovable-uploads/f3da1d43-08f3-44f2-9780-ae865b2a68b5.jpg" 
                alt="Student tracking system" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div ref={ctaRef} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${ctaVisible ? 'animate-dissolve-in-scroll' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join the growing number of schools using Eduschools to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3"
              onClick={() => navigate('/book-demo')}
            >
              Schedule Free Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => navigate('/contact')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default HowItWorks;
