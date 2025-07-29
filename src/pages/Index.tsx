
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import GeometricShapes from '@/components/GeometricShapes';
import ScrollingBackground from '@/components/ScrollingBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, CreditCard, MessageSquare, BookOpen, Fingerprint, Smartphone, Percent } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: priorityRef, isVisible: priorityVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const features = [{
    icon: <Fingerprint className="h-8 w-8 text-white" />,
    title: "Biometric Technology",
    description: "Advanced fingerprint and biometric systems for accurate attendance tracking",
    color: "bg-accent-orange"
  }, {
    icon: <CreditCard className="h-8 w-8 text-white" />,
    title: "School Accounting", 
    description: "Comprehensive financial management with automated ledgers and reporting",
    color: "bg-primary"
  }, {
    icon: <BookOpen className="h-8 w-8 text-white" />,
    title: "Assets Management",
    description: "Track and manage all school assets efficiently with detailed reporting",
    color: "bg-accent-yellow"
  }];

  const extraServices = [{
    title: "Full System Installation",
    description: "On-site setup of the Eduschools system.",
    color: "bg-accent-coral",
    icon: "🔧"
  }, {
    title: "System Maintenance",
    description: "Secure, high-speed server hosting with regular updates.",
    color: "bg-accent-blue",
    icon: "📊"
  }, {
    title: "User Training",
    description: "Training provided for designated school staff.",
    color: "bg-accent-orange",
    icon: "⚙️"
  }, {
    title: "Data Entry Support",
    description: "Assistance with initial system data setup.",
    color: "bg-accent-turquoise",
    icon: "⭕"
  }];

  const aboutFeatures = ["Student Attendance Management", "Student Account Payments Monitoring and Receipting", "Payment Reports and Other Financial Reports", "School Summative Payments and Balances", "Debtors Management and Debt Collection", "Asset Management", "Paymaster for staff attendance tracking and payroll statistics", "Barcode Technology for Attendance Tracking", "Real-Time SMS Alerts and Notifications", "Mobile Application (Centralized communication and information transmission to parents and guardians)"];

  const testimonials = [{
    school: "Royal Kings School",
    quote: "Since we started using the Eduschools system, tracking student payments and attendance has become incredibly efficient. The real-time SMS alerts are a game changer for parent communication.",
    author: "Mr. T.P. Davids, Principal, Royal Kings Schools",
    color: "bg-accent-orange"
  }, {
    school: "Royal College",
    quote: "The fingerprint and barcode attendance tools have significantly reduced manual errors and saved us hours every week.",
    author: "Mr. T. Dlamini, School Administrator",
    color: "bg-accent-orange"
  }, {
    school: "Sultan Academy",
    quote: "The mobile app gives parents peace of mind and helps them stay informed. It's brought our school community closer together.",
    author: "Ms. R. Khumalo, Grade Head",
    color: "bg-accent-orange"
  }];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-400 to-primary-600 py-20 overflow-hidden pt-36">
        <ScrollingBackground />
        <GeometricShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-dissolve-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Eduschools
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto animate-dissolve-in-delayed">
              Delivering reliable, secure, and user-friendly school management solutions with 
              ongoing support to ensure your institution runs smoothly and efficiently.
            </p>
            
            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-dissolve-in-delayed">
              <div className="bg-accent-orange px-6 py-3 rounded-lg font-semibold text-white shadow-lg">
                Biometric Technology
              </div>
              <div className="bg-accent-blue px-6 py-3 rounded-lg font-semibold text-white shadow-lg">
                School Accounting
              </div>
              <div className="bg-accent-yellow px-6 py-3 rounded-lg font-semibold text-white shadow-lg">
                Assets Management
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-8 animate-dissolve-in-delayed">
              <p className="text-xl mb-2">Simplify your school's workflow,</p>
              <p className="text-xl font-semibold mb-8">
                <span className="font-bold">sign-up now</span> for a Demo!
              </p>
            </div>
            
            <div className="animate-dissolve-in-delayed">
              <Link to="/book-demo">
                <Button size="lg" className="bg-accent-coral hover:bg-red-600 text-white text-lg px-12 py-4 rounded-full font-bold shadow-xl">
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={aboutRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${aboutVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Eduschools?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Eduschools is a unified management system that incorporates modules and functionalities suitable for schools and educational institutions. These include:
              </p>
              
              <div className="space-y-3">
                {aboutFeatures.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                    <span className="text-primary font-bold text-lg">{index + 1}.</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 right-0">
                <div className="w-32 h-32 bg-primary transform rotate-45 rounded-lg"></div>
              </div>
              <div className="absolute bottom-0 left-0">
                <div className="w-24 h-24 bg-accent-orange rounded-full"></div>
              </div>
              <Card className="relative z-10 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <img alt="School management system interface" className="w-full h-48 object-cover rounded-lg mb-6" src="/lovable-uploads/15091b69-6182-4c9c-aaca-db32fb7944d8.jpg" />
                    <h3 className="text-2xl font-bold text-primary mb-4">Complete School Management</h3>
                    <p className="text-gray-600">
                      Everything you need to run your educational institution efficiently in one comprehensive system.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef} className={`${servicesVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Additional Services!</h2>
              <p className="text-xl text-white max-w-4xl mx-auto">
                To ensure a seamless and value-added experience for our clients,<br />
                we provide the following additional services:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {extraServices.map((service, index) => <div key={index} className={`${service.color} rounded-3xl p-8 text-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={processRef} className={`${processVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Installation Process!
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our professional team ensures a smooth, on-site system installation tailored to your school's infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                step: "Step 1",
                title: "Site Assessment & Requirements Gathering"
              }, {
                step: "Step 2", 
                title: "Full System Installation & Configuration"
              }, {
                step: "Step 3",
                title: "Initial Data Entry & Students cards printing"
              }, {
                step: "Step 4",
                title: "User Training & Go-Live Support"
              }].map((item, index) => <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-t-3xl p-6 mb-0">
                  <h3 className="text-xl font-bold">{item.step}</h3>
                </div>
                <div className="bg-accent-orange text-white rounded-b-3xl p-8">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                </div>
              </div>)}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 mb-8">
                Open up to new experience to streamline your school's operations
              </p>
              <Link to="/book-demo">
                <Button size="lg" className="bg-accent-coral hover:bg-red-600 text-white text-lg px-12 py-4 rounded-full font-bold">
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={testimonialsRef} className={`${testimonialsVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <div className="text-center mb-16">
              <div className="flex justify-center space-x-4 mb-8">
                <div className="w-12 h-6 bg-accent-orange rounded-full"></div>
                <div className="w-8 h-16 bg-primary rounded-lg"></div>
                <div className="w-16 h-16 bg-accent-yellow star-shape"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Testimonials
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-t-3xl p-6 mb-0">
                  <h3 className="text-xl font-bold">{testimonial.school}</h3>
                </div>
                <div className={`${testimonial.color} text-white rounded-b-3xl p-8`}>
                  <p className="mb-4 italic font-normal">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium">— {testimonial.author}</p>
                </div>
              </div>)}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-white text-xl mb-8">
                Sign-up for a demo and centralize your school's workflow
              </p>
              <Link to="/book-demo">
                <Button size="lg" className="bg-accent-coral hover:bg-red-600 text-white text-lg px-12 py-4 rounded-full font-bold">
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-300 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={benefitsRef} className={`${benefitsVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Client Benefits
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                The three major client benefits for your school management system.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-accent-orange rounded-3xl p-8 text-center text-white">
                <div className="h-32 mb-6 flex items-center justify-center">
                  <div className="w-full h-20 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-4xl">📈</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Efficient Accounting Operations</h3>
              </div>
              
              <div className="bg-gray-800 rounded-3xl p-8 text-center text-white">
                <div className="h-32 mb-6 flex items-center justify-center">
                  <div className="w-full h-20 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-4xl">📊</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Streamlined Student Management</h3>
              </div>
              
              <div className="bg-primary rounded-3xl p-8 text-center text-white">
                <div className="h-32 mb-6 flex items-center justify-center">
                  <div className="w-full h-20 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-4xl">💬</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Effective Customer Communications</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Priority Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={priorityRef} className={`${priorityVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Priority
              </h2>
              <p className="text-xl text-white max-w-4xl mx-auto">
                Delivering reliable, secure, and user-friendly school management solutions with ongoing support to ensure your institution runs smoothly and efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-accent-orange rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <blockquote className="text-white text-xl font-medium">
                  "Through trust and collaboration, our team transforms challenges into impactful solutions."
                </blockquote>
              </div>
              
              <div className="text-white">
                <img alt="Team collaboration" className="w-full rounded-lg mb-6" src="/lovable-uploads/f3da1d43-08f3-44f2-9780-ae865b2a68b5.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={ctaRef} className={`${ctaVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <p className="text-xl text-gray-700 mb-8">
              Manage attendance, finances, and communication with ease.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Sign-up for Demo!
            </h2>
            <Link to="/book-demo">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white text-lg px-12 py-4 rounded-lg font-bold">
                BOOK NOW
              </Button>
            </Link>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
              <div className="space-y-2 text-gray-700">
                <p>admin@eduschools.co.za</p>
                <p>+27 11 568 5135</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
