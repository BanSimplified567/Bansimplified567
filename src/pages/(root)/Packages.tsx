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
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] to-black text-white overflow-x-hidden">
      {/* Hero Section */ }
      <section className="py-12 md:py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-[#FF6EC7]/30 rounded-full border border-[#FF6EC7]/30">
            <Code className="w-4 h-4 md:w-5 md:h-5 text-[#FF6EC7]" />
            <span className="text-xs md:text-sm text-[#FF6EC7]">Web Development Services</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE]">Web Solutions</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            From simple static websites to complete capstone-level systems.
            Choose the perfect plan for your project needs and budget.
          </p>
        </div>
      </section>

      {/* Plan Selection */ }
      <section className="px-4 mb-12 md:mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            { plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <button
                  key={ plan.id }
                  onClick={ () => setSelectedPlan(plan.id) }
                  className={ `flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all text-sm md:text-base ${selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE] shadow-lg shadow-[#FF6EC7]/25'
                      : 'bg-[#21262d] hover:bg-[#30363d]'
                    }` }
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="font-semibold whitespace-nowrap">{ plan.name }</span>
                </button>
              );
            }) }
          </div>

          {/* Selected Plan Details */ }
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#21262d] rounded-2xl p-6 md:p-8 border border-[#30363d]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{ getSelectedPlan().name }</h2>
                  <p className="text-gray-300 mt-2 text-sm md:text-base">{ getSelectedPlan().description }</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF6EC7]">{ getSelectedPlan().price }</div>
                  <div className="text-xs md:text-sm text-gray-400">one-time payment</div>
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                  What's Included
                </h3>
                <div className="space-y-2 md:space-y-3">
                  { getSelectedPlan().features.map((feature, index) => (
                    <div key={ index } className="flex items-center justify-between text-sm md:text-base">
                      <span className="text-gray-300 truncate mr-2">{ feature.name }</span>
                      { feature.included ? (
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 md:w-5 md:h-5 text-red-500 flex-shrink-0" />
                      ) }
                    </div>
                  )) }
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-[#FF6EC7]" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  { technologies[selectedPlan].map((tech, index) => (
                    <div
                      key={ index }
                      className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#161b22] rounded-lg border border-[#30363d] text-sm"
                    >
                      <span className="text-base md:text-lg">{ tech.icon }</span>
                      <span className="truncate max-w-[80px] md:max-w-none">{ tech.name }</span>
                    </div>
                  )) }
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-[#21262d] rounded-2xl p-6 md:p-8 border border-[#30363d]">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
                  <Globe className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  Sample Project Titles
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  { getSelectedPlan().projects.map((project, index) => (
                    <li key={ index } className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-[#FF6EC7] flex-shrink-0"></div>
                      <span className="text-gray-300">{ project }</span>
                    </li>
                  )) }
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-[#21262d] rounded-xl p-4 md:p-6 border border-[#30363d]">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#FF6EC7] mb-1 md:mb-2">{ getSelectedPlan().timeline }</div>
                  <div className="text-xs md:text-sm text-gray-400">Development Timeline</div>
                </div>
                <div className="bg-[#21262d] rounded-xl p-4 md:p-6 border border-[#30363d]">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#BC13FE] mb-1 md:mb-2">{ getSelectedPlan().support }</div>
                  <div className="text-xs md:text-sm text-gray-400">Free Support</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE] hover:from-[#FF1493] hover:to-[#9B30FF] text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all text-sm md:text-base hover:scale-[1.02] shadow-lg shadow-[#FF6EC7]/25">
                Get Started with { getSelectedPlan().name }
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */ }
      <section className="px-4 mb-12 md:mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 px-2">
            Plan <span className="text-[#FF6EC7]">Comparison</span>
          </h2>

          <div className="overflow-x-auto rounded-xl md:rounded-2xl border border-[#30363d]">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-[#161b22]">
                  <th className="p-4 md:p-6 text-left text-sm md:text-base">Feature</th>
                  { plans.map((plan) => (
                    <th key={ plan.id } className="p-4 md:p-6 text-center">
                      <div className="text-base md:text-xl font-bold mb-1 md:mb-2">{ plan.name }</div>
                      <div className="text-[#FF6EC7] font-bold text-sm md:text-base">{ plan.price }</div>
                    </th>
                  )) }
                </tr>
              </thead>
              <tbody>
                { [
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
                  <tr key={ idx } className="border-t border-[#30363d]">
                    <td className="p-4 md:p-6 font-medium text-sm md:text-base">{ feature }</td>
                    { plans.map((plan) => (
                      <td key={ plan.id } className="p-4 md:p-6 text-center">
                        { (() => {
                          switch (feature) {
                            case 'Pages Included':
                              return <span className="text-sm md:text-base">{ plan.id === 'basic' ? '5-10' : plan.id === 'medium' ? '10-15' : '15+' }</span>;
                            case 'Frontend Development':
                              return <span className="text-sm md:text-base">{ plan.id === 'basic' ? 'HTML/CSS/JS' : plan.id === 'medium' ? 'HTML/CSS/JS' : 'React/Next.js' }</span>;
                            case 'Backend Development':
                              return <span className="text-sm md:text-base">{ plan.id === 'basic' ? 'None' : plan.id === 'medium' ? 'PHP' : 'Laravel/Node.js' }</span>;
                            case 'Support Period':
                              return <span className="text-sm md:text-base">{ plan.support }</span>;
                            case 'Revision Rounds':
                              return <span className="text-sm md:text-base">{ plan.id === 'basic' ? '1' : plan.id === 'medium' ? '2' : 'Unlimited' }</span>;
                            case 'Source Code Delivery':
                              return <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 mx-auto" />;
                            default:
                              const planFeature = plan.features.find(f =>
                                f.name.toLowerCase().includes(feature.toLowerCase().split(' ')[0])
                              );
                              return planFeature ? (
                                planFeature.included ? (
                                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 md:w-6 md:h-6 text-red-500 mx-auto" />
                                )
                              ) : '-';
                          }
                        })() }
                      </td>
                    )) }
                  </tr>
                )) }
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */ }
      <section className="px-4 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Frequently Asked <span className="text-[#FF6EC7]">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            { faqs.map((faq, index) => (
              <div
                key={ index }
                className="bg-[#21262d] rounded-xl p-4 md:p-6 border border-[#30363d]"
              >
                <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3 flex items-start gap-2 md:gap-3">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-[#FF6EC7] flex-shrink-0 mt-0.5" />
                  <span>{ faq.question }</span>
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed pl-6 md:pl-8">
                  { faq.answer }
                </p>
              </div>
            )) }
          </div>
        </div>
      </section>

      {/* CTA Section */ }
      <section className="px-4 mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#FF6EC7]/30 to-[#BC13FE]/30 rounded-2xl p-6 md:p-8 lg:p-12 text-center border border-[#FF6EC7]/30">
          <Users className="w-12 h-12 md:w-16 md:h-16 text-[#FF6EC7] mx-auto mb-4 md:mb-6" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 px-2">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Contact me for a free consultation and project quotation. Let's bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
            <button className="bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE] hover:from-[#FF1493] hover:to-[#9B30FF] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all text-sm md:text-base shadow-lg shadow-[#FF6EC7]/25">
              Send Message
            </button>
            <button className="bg-[#21262d] hover:bg-[#30363d] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all text-sm md:text-base border border-[#30363d]">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Elements */ }
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#FF6EC7]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#BC13FE]/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Services;
