
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen animate-dissolve-in">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className={`text-center ${heroVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team. We're here to help you transform your school's operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={contactRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${contactVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <MessageCircle className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">WhatsApp Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Quick support via WhatsApp
                </p>
                <p className="text-gray-700 mb-4">+27 73 645 5297</p>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=27736455297&text&type=phone_number&app_absent=0', '_blank')}
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Calendar className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Schedule a Call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Book a personalized demo
                </p>
                <p className="text-gray-700 mb-4">Free consultation</p>
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = '/book-demo'}
                >
                  Book Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Mail className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Send us your questions
                </p>
                <p className="text-gray-700 mb-4">support@eduschools.co.za</p>
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:support@eduschools.co.za'}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Visit Our Office</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">36 Goldman Street</p>
                <p className="text-gray-700 mb-2">Florida</p>
                <p className="text-gray-700 mb-4">South Africa</p>
                <p className="text-gray-600">
                  Open Monday to Friday, 8:00 AM - 5:00 PM
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Call Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">Main Line: +27 11 568 5135</p>
                <p className="text-gray-700 mb-2">WhatsApp: +27 73 645 5297</p>
                <p className="text-gray-600">
                  Available during business hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={mapRef} className={`text-center mb-16 ${mapVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Located in Florida, South Africa - Easy to reach and always ready to help.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive Map</p>
                <p className="text-gray-500">36 Goldman Street, Florida, South Africa</p>
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

export default Contact;
