
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const values = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Innovation",
      description: "We continuously evolve our platform to meet the changing needs of modern education."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Care",
      description: "We care deeply about the success of every school and student using our platform."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Community",
      description: "We believe in building strong connections between schools, parents, and students."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product development to customer service."
    }
  ];

  const stats = [
    { number: "500+", label: "Schools Served" },
    { number: "100,000+", label: "Students Managed" },
    { number: "50,000+", label: "Parents Connected" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen animate-dissolve-in">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className={`text-center ${heroVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Eduschools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming education through innovative technology solutions that connect schools, parents, and students.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={missionRef} className={`${missionVisible ? 'animate-dissolve-in-scroll' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Eduschools, we believe that education is the foundation of a better future. Our mission is to empower schools with cutting-edge technology that simplifies administration, enhances communication, and ultimately improves the learning experience for every student.
              </p>
              <p className="text-lg text-gray-600">
                We're passionate about creating solutions that make educators' lives easier while fostering stronger connections between schools and families. Through innovation and dedication, we're building the future of education management.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/8fca7d9f-82b8-4e27-a7f1-7473c5ed22bf.png" 
                alt="Modern classroom with technology" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/lovable-uploads/8abef18f-ed3a-4e4a-b478-3d0163a3aaec.png" 
                alt="Students using educational technology" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={valuesRef} className={`text-center mb-16 ${valuesVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Eduschools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className={`text-center mb-16 ${statsVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Founded in 2020, Eduschools emerged from a simple observation: schools needed better tools to manage their operations efficiently. Our founders, experienced educators and technology professionals, recognized the gap between traditional school management methods and the digital age requirements.
            </p>
            <p className="text-gray-700 mb-6">
              Starting with a small team of passionate developers and educators, we built our first school management solution in South Africa. Today, we serve hundreds of schools across the region, helping them streamline their operations and enhance their educational delivery.
            </p>
            <p className="text-gray-700">
              Our journey continues as we expand our platform with new features and capabilities, always keeping our focus on making education management simpler, more efficient, and more effective for everyone involved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default About;
