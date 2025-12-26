import { Award, Briefcase, Check, Code, Database, FileText, Globe, Shield, Users, X, Zap } from 'lucide-react';
import { useState } from 'react';

type PlanId = 'basic' | 'medium' | 'fullstack';

interface Plan {
  id: PlanId;
  name: string;
  price: string;
  description: string;
  icon: any;
  color: string;
  features: { name: string; included: boolean }[];
  projects: string[];
  timeline: string;
  support: string;
}

const Services = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('medium');

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '₱500',
      description: 'Perfect for static websites and simple projects',
      icon: FileText,
      color: 'pink',
      features: [
        { name: 'Responsive Design', included: true },
        { name: '5-10 Pages', included: true },
        { name: 'HTML, CSS, JavaScript', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Basic SEO', included: true },
        { name: '1 Revision Round', included: true },
        { name: 'PHP Backend', included: false },
        { name: 'Database Integration', included: false },
        { name: 'Admin Panel', included: false },
        { name: 'User Authentication', included: false },
      ],
      projects: [
        'Static Corporate Profile Website',
        'Personal Portfolio Website',
        'Local Business Marketing Website',
        'Academic Portfolio Website',
        'Tourism Information Website',
        'Café/Restaurant Promotional Site',
        'Digital Resume Platform',
        'Organization Profile Website',
      ],
      timeline: '1-2 weeks',
      support: '1 month'
    },
    {
      id: 'medium',
      name: 'Medium Plan',
      price: '₱5,000',
      description: 'Ideal for dynamic websites and semi-fullstack projects',
      icon: Database,
      color: 'violet',
      features: [
        { name: 'Responsive Design', included: true },
        { name: '10-15 Pages', included: true },
        { name: 'HTML, CSS, JavaScript', included: true },
        { name: 'PHP Backend', included: true },
        { name: 'MySQL Database', included: true },
        { name: 'Admin Panel', included: true },
        { name: 'User Authentication', included: true },
        { name: 'CRUD Operations', included: true },
        { name: 'Basic Reporting', included: true },
        { name: '2 Revision Rounds', included: true },
      ],
      projects: [
        'Web-Based Ordering System',
        'Student Information System',
        'Content Management System',
        'Appointment Booking System',
        'Inventory Management System',
        'User Registration Portal',
        'Barangay Information System',
        'Service Ticketing System',
      ],
      timeline: '2-4 weeks',
      support: '3 months'
    },
    {
      id: 'fullstack',
      name: 'Fullstack Plan',
      price: '₱10,000+',
      description: 'Complete capstone-level systems with advanced features',
      icon: Shield,
      color: 'purple',
      features: [
        { name: 'Full-Stack Architecture', included: true },
        { name: 'Modern Frameworks', included: true },
        { name: 'OAuth2/JWT Authentication', included: true },
        { name: 'Role-Based Access Control', included: true },
        { name: 'Real-time Features', included: true },
        { name: 'API Integration', included: true },
        { name: 'Advanced Dashboard', included: true },
        { name: 'Payment Gateway', included: true },
        { name: 'Advanced Reporting', included: true },
        { name: 'Unlimited Revisions', included: true },
      ],
      projects: [
        'E-Commerce Platform with Payment',
        'Employee Payroll System',
        'Telehealth Booking System',
        'Learning Management System',
        'Project Tracking Platform',
        'Multi-Role Management System',
        'Real-time Order Tracking',
        'Hospital Management System',
      ],
      timeline: '4-8 weeks',
      support: '6 months'
    },
  ];

  const technologies: Record<PlanId, { name: string; icon: string }[]> = {
    basic: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Responsive Design', icon: '📱' },
    ],
    medium: [
      { name: 'HTML/CSS/JS', icon: '🔧' },
      { name: 'PHP', icon: '🐘' },
      { name: 'MySQL', icon: '🗄️' },
      { name: 'AJAX', icon: '🔄' },
      { name: 'jQuery', icon: '📚' },
      { name: 'Bootstrap', icon: '🎯' },
    ],
    fullstack: [
      { name: 'React/Next.js', icon: '⚛️' },
      { name: 'Laravel/Node.js', icon: '🚀' },
      { name: 'PostgreSQL/MongoDB', icon: '🗃️' },
      { name: 'OAuth2/JWT', icon: '🔐' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'Supabase/Firebase', icon: '🔥' },
      { name: 'Payment APIs', icon: '💳' },
    ],
  };

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'I accept GCash, bank transfer (BPI, BDO), and PayPal. A 50% downpayment is required to start the project.'
    },
    {
      question: 'Do you provide source code?',
      answer: 'Yes, you will receive all source code files upon project completion and full payment.'
    },
    {
      question: 'Can you maintain the website after development?',
      answer: 'Yes, I offer maintenance packages starting at ₱1,500/month depending on your needs.'
    },
    {
      question: 'Do you handle domain and hosting?',
      answer: 'I can assist with domain registration and hosting setup. Hosting costs are separate from development fees.'
    },
    {
      question: 'What if I need more pages than included?',
      answer: 'Additional pages can be added at ₱300/page for Basic Plan, ₱500/page for Medium Plan.'
    },
  ];

  const getSelectedPlan = () => plans.find(p => p.id === selectedPlan)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] to-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#FF6EC7]/30 rounded-full border border-[#FF6EC7]/30">
            <Code className="w-5 h-5 text-[#FF6EC7]" />
            <span className="text-[#FF6EC7]">Web Development Services</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE]">Web Solutions</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            From simple static websites to complete capstone-level systems.
            Choose the perfect plan for your project needs and budget.
          </p>
        </div>
      </section>

      {/* Plan Selection */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE] shadow-lg shadow-[#FF6EC7]/25'
                      : 'bg-[#21262d] hover:bg-[#30363d]'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-lg font-semibold">{plan.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Plan Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#21262d] rounded-2xl p-8 border border-[#30363d]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold">{getSelectedPlan().name}</h2>
                  <p className="text-gray-300 mt-2">{getSelectedPlan().description}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-[#FF6EC7]">{getSelectedPlan().price}</div>
                  <div className="text-sm text-gray-400">one-time payment</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  What's Included
                </h3>
                <div className="space-y-3">
                  {getSelectedPlan().features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{feature.name}</span>
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#FF6EC7]" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies[selectedPlan].map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-[#161b22] rounded-lg border border-[#30363d]"
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#21262d] rounded-2xl p-8 border border-[#30363d]">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-500" />
                  Sample Project Titles
                </h3>
                <ul className="space-y-3">
                  {getSelectedPlan().projects.map((project, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#FF6EC7] flex-shrink-0"></div>
                      <span className="text-gray-300">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#21262d] rounded-xl p-6 border border-[#30363d]">
                  <div className="text-2xl font-bold text-[#FF6EC7] mb-2">{getSelectedPlan().timeline}</div>
                  <div className="text-sm text-gray-400">Development Timeline</div>
                </div>
                <div className="bg-[#21262d] rounded-xl p-6 border border-[#30363d]">
                  <div className="text-2xl font-bold text-[#BC13FE] mb-2">{getSelectedPlan().support}</div>
                  <div className="text-sm text-gray-400">Free Support</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE] hover:from-[#FF1493] hover:to-[#9B30FF] text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-[#FF6EC7]/25">
                Get Started with {getSelectedPlan().name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Plan <span className="text-[#FF6EC7]">Comparison</span>
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#30363d]">
            <table className="w-full">
              <thead>
                <tr className="bg-[#161b22]">
                  <th className="p-6 text-left">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="p-6 text-center">
                      <div className="text-xl font-bold mb-2">{plan.name}</div>
                      <div className="text-[#FF6EC7] font-bold">{plan.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Responsive Design',
                  'Pages Included',
                  'Frontend Development',
                  'Backend Development',
                  'Database Integration',
                  'Admin Panel',
                  'User Authentication',
                  'Revision Rounds',
                  'Support Period',
                  'Source Code Delivery',
                ].map((feature, idx) => (
                  <tr key={idx} className="border-t border-[#30363d]">
                    <td className="p-6 font-medium">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-6 text-center">
                        {(() => {
                          switch (feature) {
                            case 'Pages Included':
                              return plan.id === 'basic' ? '5-10' : plan.id === 'medium' ? '10-15' : '15+';
                            case 'Frontend Development':
                              return plan.id === 'basic' ? 'HTML/CSS/JS' : plan.id === 'medium' ? 'HTML/CSS/JS' : 'React/Next.js';
                            case 'Backend Development':
                              return plan.id === 'basic' ? 'None' : plan.id === 'medium' ? 'PHP' : 'Laravel/Node.js';
                            case 'Support Period':
                              return plan.support;
                            case 'Revision Rounds':
                              return plan.id === 'basic' ? '1' : plan.id === 'medium' ? '2' : 'Unlimited';
                            case 'Source Code Delivery':
                              return <Check className="w-6 h-6 text-green-500 mx-auto" />;
                            default:
                              const planFeature = plan.features.find(f =>
                                f.name.toLowerCase().includes(feature.toLowerCase().split(' ')[0])
                              );
                              return planFeature ? (
                                planFeature.included ? (
                                  <Check className="w-6 h-6 text-green-500 mx-auto" />
                                ) : (
                                  <X className="w-6 h-6 text-red-500 mx-auto" />
                                )
                              ) : '-';
                          }
                        })()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
  {/* FAQ Section */}
<section className="px-4 mb-20">
  <div className="max-w-4xl mx-auto"> {/* Slightly wider for better 2-column look */}
    <h2 className="text-3xl font-bold text-center mb-12">
      Frequently Asked <span className="text-[#FF6EC7]">Questions</span>
    </h2>

    {/* 2-column grid on md+, 1-column on mobile */}
    <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-[#21262d] rounded-xl p-6 border border-[#30363d] flex flex-col"
        >
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-3">
            <Award className="w-5 h-5 text-[#FF6EC7] flex-shrink-0" />
            {faq.question}
          </h3>
          <p className="text-gray-300 text-xs leading-relaxed">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#FF6EC7]/30 to-[#BC13FE]/30 rounded-2xl p-12 text-center border border-[#FF6EC7]/30">
          <Users className="w-16 h-16 text-[#FF6EC7] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact me for a free consultation and project quotation. Let's bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE] hover:from-[#FF1493] hover:to-[#9B30FF] text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#FF6EC7]/25">
              Send Message
            </button>
            <button className="bg-[#21262d] hover:bg-[#30363d] text-white font-semibold py-4 px-8 rounded-xl transition-all border border-[#30363d]">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6EC7]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BC13FE]/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Services;
