
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, CreditCard, MessageSquare, BookOpen, Fingerprint, Smartphone, Percent, AlertTriangle } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Fingerprint className="h-8 w-8 text-primary" />,
      title: "Smart Attendance Tracking",
      description: "Biometric & Barcode technology for accurate attendance monitoring"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Student Payment Monitoring",
      description: "Automated ledgers and receipt generation for seamless financial management"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Real-time Parent Notifications",
      description: "Instant SMS and app notifications to keep parents informed"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Built-in Learning Content",
      description: "Curriculum-aligned AV content and comprehensive reports"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Parental Mobile App",
      description: "Complete access for parents via user-friendly mobile application"
    },
    {
      icon: <Percent className="h-8 w-8 text-primary" />,
      title: "Student Discount Network",
      description: "Exclusive discount programs for students and families"
    }
  ];

  const testimonials = [
    {
      quote: "Eduschoolz helped us cut admin time in half! The automated systems are incredible.",
      author: "Sarah Johnson",
      role: "Principal, Greenwood Academy"
    },
    {
      quote: "Our parents love the real-time attendance updates. Communication has never been better.",
      author: "Michael Chen",
      role: "Administrator, Riverside School"
    },
    {
      quote: "The financial management tools streamlined our accounting completely.",
      author: "Rachel Davis",
      role: "Finance Manager, Oak Valley School"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionize School Management with a 
              <span className="text-primary"> Centralized, Smart System</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Simplify attendance, streamline accounting, empower communication, and enhance learning — all in one place.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-700 text-lg px-8 py-3">
              <CheckCircle className="mr-2 h-5 w-5" />
              Sign Up for a Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive school management tools designed for modern education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple implementation process with ongoing support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Onsite Installation", description: "Our expert team handles complete setup" },
              { step: "2", title: "Staff Training", description: "Comprehensive training for all school staff" },
              { step: "3", title: "Secure Hosting", description: "Reliable hosting with ongoing support" },
              { step: "4", title: "Regular Updates", description: "Continuous upgrades and maintenance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your School Management?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of schools already using Eduschoolz to streamline their operations.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            <CheckCircle className="mr-2 h-5 w-5" />
            Get Your Free Demo Today
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
