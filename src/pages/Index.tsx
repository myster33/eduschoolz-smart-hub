
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import GeometricShapes from '@/components/GeometricShapes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, CreditCard, MessageSquare, BookOpen, Fingerprint, Smartphone, Percent } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Fingerprint className="h-8 w-8 text-white" />,
      title: "Biometric Technology",
      description: "Advanced fingerprint and biometric systems for accurate attendance tracking",
      color: "bg-accent-orange"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "School Accounting",
      description: "Comprehensive financial management with automated ledgers and reporting",
      color: "bg-primary"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: "Assets Management",
      description: "Track and manage all school assets efficiently with detailed reporting",
      color: "bg-accent-yellow"
    }
  ];

  const extraServices = [
    {
      title: "Full System Installation",
      description: "On-site setup of the Eduschoolz system.",
      color: "bg-accent-coral"
    },
    {
      title: "System Maintenance",
      description: "Secure, high-speed server hosting with regular updates.",
      color: "bg-primary"
    },
    {
      title: "User Training",
      description: "Training provided for designated school staff.",
      color: "bg-accent-orange"
    },
    {
      title: "Data Entry Support",
      description: "Assistance with initial system data setup.",
      color: "bg-accent-turquoise"
    }
  ];

  const aboutFeatures = [
    "Student Attendance Management",
    "Student Account Payments Monitoring and Receipting",
    "Payment Reports and Other Financial Reports",
    "School Summative Payments and Balances",
    "Debtors Management and Debt Collection",
    "Asset Management",
    "Fingerprint Technology for Student Attendance",
    "Barcode Technology for Attendance Tracking",
    "Real-Time SMS Alerts and Notifications",
    "Mobile Application (Centralized communication and information transmission to parents and guardians)"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-400 to-primary-600 py-20 overflow-hidden">
        <GeometricShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Eduschoolz
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8">
              Unified school management system!
            </p>
            
            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className={`${feature.color} px-6 py-3 rounded-lg font-semibold text-white shadow-lg`}>
                  {feature.title}
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl mb-2">Simplify your school's workflow,</p>
              <p className="text-xl font-semibold mb-8">
                <span className="font-bold">sign-up now</span> for a demo and experience<br />
                the power of a centralized system!
              </p>
            </div>
            
            <Button size="lg" className="bg-accent-coral hover:bg-red-600 text-white text-lg px-12 py-4 rounded-full font-bold shadow-xl">
              BOOK NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Extra Services!
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto">
              To ensure a seamless and value-added experience for our clients,<br />
              we provide the following additional services:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extraServices.map((service, index) => (
              <div key={index} className={`${service.color} rounded-3xl p-8 text-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                About Eduschoolz?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Eduschoolz is a unified management system that incorporates modules and functionalities suitable for schools and educational institutions. These include:
              </p>
              
              <div className="space-y-3">
                {aboutFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-primary font-bold text-lg">{index + 1}.</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-orange rounded-full"></div>
              <Card className="relative z-10 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="h-12 w-12 text-white" />
                    </div>
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

      {/* Installation Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Installation Process!
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Our professional team ensures a smooth, on-site system installation tailored to your school's infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Step 1", title: "Site Assessment & Requirements Gathering", color: "bg-primary" },
              { step: "Step 2", title: "Full System Installation & Configuration", color: "bg-primary" },
              { step: "Step 3", title: "Initial Data Entry & Students cards printing", color: "bg-primary" },
              { step: "Step 4", title: "User Training & Go-Live Support", color: "bg-primary" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`${item.color} text-white rounded-t-3xl p-6 mb-0`}>
                  <h3 className="text-xl font-bold">{item.step}</h3>
                </div>
                <div className="bg-accent-orange text-white rounded-b-3xl p-8">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-8">
              Open up to new experience to streamline your school's operations
            </p>
            <Button size="lg" className="bg-accent-coral hover:bg-red-600 text-white text-lg px-12 py-4 rounded-full font-bold">
              BOOK NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Our Priority Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-lg leading-relaxed">
                Our dedicated team of experts works closely with educational institutions to understand their unique challenges and provide tailored solutions that enhance efficiency, security, and user experience.
              </p>
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
