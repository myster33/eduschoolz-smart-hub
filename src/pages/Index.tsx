
import { ArrowRight, CheckCircle, Star, Users, Building, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GeometricShapes from '@/components/GeometricShapes';
import ScrollingBackground from '@/components/ScrollingBackground';
import FloatingCTA from '@/components/FloatingCTA';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useAnimatedCount } from '@/hooks/useAnimatedCount';

const Index = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const studentsCount = useAnimatedCount(5000, 2000, statsAnimation.isVisible);
  const schoolsCount = useAnimatedCount(50, 2000, statsAnimation.isVisible);
  const uptime = useAnimatedCount(99.9, 2000, statsAnimation.isVisible, 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-600 to-primary-700 relative overflow-hidden">
      <Header />
      <GeometricShapes />
      <ScrollingBackground />
      
      {/* Hero Section */}
      <section ref={heroAnimation.ref} className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of 
              <span className="text-accent-coral block mt-2">School Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Revolutionize your school with a centralized, smart system that simplifies attendance, 
              streamlines accounting, empowers communication, and enhances learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/book-demo">
                <Button 
                  size="lg" 
                  className="bg-accent-coral hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  Sign-up now for a FREE Installation!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-primary px-8 py-4 text-lg font-semibold"
                >
                  View Features
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-primary-200">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-lg font-medium">{studentsCount.toLocaleString()}+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                <span className="text-lg font-medium">{schoolsCount}+ Schools</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-lg font-medium">{uptime}% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Preview */}
      <section ref={featuresAnimation.ref} className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Everything Your School Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From attendance tracking to financial management, our comprehensive platform 
              handles it all with cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-accent-coral" />,
                title: "Smart Attendance",
                description: "Automated attendance tracking with barcode technology and real-time SMS notifications to parents."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-accent-coral" />,
                title: "Financial Management",
                description: "Complete accounting system with payment monitoring, receipting, and comprehensive financial reports."
              },
              {
                icon: <Users className="h-12 w-12 text-accent-coral" />,
                title: "Parent Communication",
                description: "Centralized mobile app for seamless communication between school, parents, and students."
              },
              {
                icon: <Building className="h-12 w-12 text-accent-coral" />,
                title: "Asset Management",
                description: "Track and manage all school assets with detailed inventory and maintenance schedules."
              },
              {
                icon: <Clock className="h-12 w-12 text-accent-coral" />,
                title: "Staff Management",
                description: "Paymaster integration for staff attendance tracking and comprehensive payroll statistics."
              },
              {
                icon: <Star className="h-12 w-12 text-accent-coral" />,
                title: "Debt Management",
                description: "Advanced debtors management system with automated collection processes and reporting."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-primary text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsAnimation.ref} className="relative z-10 py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Schools Nationwide
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of schools that have transformed their management systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-coral mb-4">
                {studentsCount.toLocaleString()}+
              </div>
              <p className="text-xl text-primary-100">Students Managed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-coral mb-4">
                {schoolsCount}+
              </div>
              <p className="text-xl text-primary-100">Schools Connected</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-coral mb-4">
                {uptime}%
              </div>
              <p className="text-xl text-primary-100">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsAnimation.ref} className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Schools Are Saying
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Principal, Greenwood High",
                content: "EduSchools has completely transformed how we manage our school. The attendance system alone has saved us countless hours every week.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Administrator, Riverside Academy",
                content: "The financial management features are incredible. We now have complete visibility into our school's finances with detailed reporting.",
                rating: 5
              },
              {
                name: "Lisa Williams",
                role: "Vice Principal, Oakwood Elementary",
                content: "Parent communication has never been easier. The mobile app keeps everyone connected and informed in real-time.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border border-gray-200">
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 text-lg italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaAnimation.ref} className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the revolution in school management. Get started today with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button 
                size="lg" 
                className="bg-accent-coral hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                Start Your FREE Installation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
