
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const teamExpertise = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "IT Specialists",
      description: "Expert developers and system architects with years of educational technology experience."
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Multimedia Experts",
      description: "Creative professionals developing engaging educational content and user experiences."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Finance Professionals",
      description: "Accounting and financial management experts ensuring robust fiscal solutions."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Strategy Consultants",
      description: "Educational consultants who understand the unique challenges schools face daily."
    }
  ];

  const values = [
    {
      title: "Accessibility",
      description: "Making advanced school management technology accessible to educational institutions of all sizes.",
      icon: "🌍"
    },
    {
      title: "Security",
      description: "Protecting sensitive student and school data with enterprise-grade security measures.",
      icon: "🔒"
    },
    {
      title: "Innovation",
      description: "Continuously evolving our platform with cutting-edge features and technologies.",
      icon: "💡"
    },
    {
      title: "Support",
      description: "Providing exceptional client support with personalized service and training.",
      icon: "🤝"
    },
    {
      title: "Reliability",
      description: "Ensuring consistent, dependable service that schools can count on every day.",
      icon: "⚡"
    },
    {
      title: "Simplicity",
      description: "Creating intuitive, user-friendly solutions that simplify complex administrative tasks.",
      icon: "✨"
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Eduschools was established with a vision to revolutionize school management." },
    { year: "2021", title: "First 50 Schools", description: "Reached our first milestone of 50 schools using our platform." },
    { year: "2022", title: "Mobile App Launch", description: "Launched dedicated mobile application for parents and students." },
    { year: "2023", title: "500+ Schools", description: "Expanded to serve over 500 educational institutions across the region." },
    { year: "2024", title: "AI Integration", description: "Introduced AI-powered analytics and predictive insights." }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Eduschools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about transforming education through innovative technology solutions that empower schools, teachers, parents, and students.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize school management by providing a comprehensive, user-friendly platform that streamlines administrative tasks, enhances communication, and improves educational outcomes for all stakeholders.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that by simplifying complex administrative processes, we free up educators to focus on what matters most: teaching and nurturing the next generation of leaders.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-gray-600">Schools Served</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">100K+</h3>
                  <p className="text-gray-600">Students Managed</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To become the leading educational technology platform that empowers every school to achieve excellence through innovative, accessible, and secure management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team Expertise
            </h2>
            <p className="text-xl text-gray-600">
              A diverse team of professionals dedicated to educational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamExpertise.map((expert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {expert.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{expert.title}</h3>
                  <p className="text-gray-600">{expert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform education
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`w-80 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <CardContent className="p-6">
                      <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="font-semibold mb-2 text-lg">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Partner with us to transform your school's management and unlock new possibilities for educational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default About;
