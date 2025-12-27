import BanHotel from '@/assets/PortfolioImages/BanHotel.png';
import BirthdayGift from '@/assets/PortfolioImages/BirthdayGift.png';
import BulbOnOff from '@/assets/PortfolioImages/BulbOnOff.png';
import Calculator from '@/assets/PortfolioImages/Calculator.png';
import MotorStart from '@/assets/PortfolioImages/MotorStart.png';
import PizzaBan from '@/assets/PortfolioImages/PizzaBan.png';
import Sukidesu from '@/assets/PortfolioImages/Sukidesu.png';
import { useEffect, useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  date: string;
  type: string;
  link: string;
  image: string;
  stars: number;
  language: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Bulb On/Off",
    description: "Interactive bulb switch control with smooth animations",
    date: "Jul 27, 2024",
    type: "School Activity",
    link: "https://bulb-switch-six.vercel.app/",
    image: BulbOnOff,
    stars: 1,
    language: "HTML"
  },
  {
    id: 2,
    title: "PizzaBan Sibonga",
    description: "Full-stack pizza ordering system with cart functionality",
    date: "Jul 31, 2024",
    type: "College Final Project",
    link: "https://pizzabansibonga.netlify.app/",
    image: PizzaBan,
    stars: 1,
    language: "JavaScript"
  },
  {
    id: 3,
    title: "React Calculator",
    description: "Modern calculator with advanced mathematical operations",
    date: "Jul 28, 2024",
    type: "React Practice",
    link: "https://calculator-sigma-hazel.vercel.app/",
    image: Calculator,
    stars: 1,
    language: "CSS"
  },
  {
    id: 4,
    title: "Sukidesu",
    description: "Interactive confession platform with creative UI",
    date: "Aug 9, 2024",
    type: "Side Project",
    link: "https://sukidesu.vercel.app/",
    image: Sukidesu,
    stars: 1,
    language: "JavaScript"
  },
  {
    id: 5,
    title: "Birthday Gift",
    description: "Digital birthday card with interactive surprises",
    date: "Aug 8, 2024",
    type: "Personal Project",
    link: "https://birthday-gift-eight.vercel.app/",
    image: BirthdayGift,
    stars: 9,
    language: "HTML"
  },
  {
    id: 6,
    title: "BanHotel UI",
    description: "Modern hotel booking interface with responsive design",
    date: "Nov 27, 2025",
    type: "UI/UX Design",
    link: "https://banhotel.netlify.app/",
    image: BanHotel,
    stars: 1,
    language: "JavaScript"
  },
  {
    id: 6,
    title: "MotorStart",
    description: "MotorStart – Choose Your Ride Wisely MotorStart is a basic school e-commerce project that allows users to browse and view motorcycles through a simple, user-friendly website, demonstrating core online shopping concepts.",
    date: "December 27, 2025",
    type: "Project Static Website",
    link: "https://motorstar.infinityfree.me/?i=1",
    image: MotorStart,
    stars: 1,
    language: "Php"
  }

];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);

    const timers = portfolioItems.map((_, index) =>
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
      }, index * 100)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] to-black text-white p-4 md:p-8">
      {/* Hero Section */ }
      <section
        className={ `py-1 md:py-20 bg-[#161b22] rounded-xl transition-all duration-800 border border-[#30363d] ${isVisible ? 'opacity-100' : 'opacity-0'
          }` }
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <div
            className={ `p-3 bg-[#FF6EC7]/30 text-[#FF6EC7] rounded-full inline-flex items-center transform transition-all duration-500 delay-200 border border-[#FF6EC7]/30 ${isVisible ? 'scale-100' : 'scale-0'
              }` }
          >
            <span>🛠️</span>
          </div>
          <h1
            className={ `text-3xl md:text-5xl font-bold mb-4 transform transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }` }
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6EC7] to-[#BC13FE]">Projects</span>
          </h1>
          <p
            className={ `text-lg md:text-xl text-gray-300 mb-8 transform transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }` }
          >
            A collection of projects showcasing my journey in web development.
          </p>

          <div
            className={ `flex justify-center gap-4 md:gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'
              }` }
          >
            <div className="text-center">
              <span className="block text-2xl md:text-4xl font-bold text-[#FF6EC7]">{ portfolioItems.length }</span>
              <span className="text-sm text-gray-400">Projects</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-4xl font-bold text-[#FF6EC7]">6+</span>
              <span className="text-sm text-gray-400">Months</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-4xl font-bold text-[#FF6EC7]">100%</span>
              <span className="text-sm text-gray-400">Responsive</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects in grid */ }
      <section className="mb-12 mt-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white p-3 mb-2">
            All <span className="text-[#FF6EC7]">Projects</span>
          </h2>
          <p className="text-gray-300">Click on any project to explore it live</p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          { portfolioItems.map((item, index) => (
            <div
              key={ item.id }
              className={ `
                transform transition-all duration-500 ease-out
                ${animatedItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }
                hover:-translate-y-2
              `}
              style={ { transitionDelay: `${index * 100}ms` } }
            >
              <a
                href={ item.link }
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#21262d] rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group h-full border border-[#30363d]"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 md:h-56 overflow-hidden">
                    <img
                      src={ item.image }
                      alt={ item.title }
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
                      View Project →
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-[#FF6EC7] group-hover:text-[#FF1493] transition-colors">
                      { item.title }
                    </h3>
                    <span className="text-sm px-3 py-1 bg-[#161b22] rounded border border-[#30363d] text-gray-300">
                      { item.type }
                    </span>
                  </div>

                  <p className="text-base text-gray-300 mb-4">{ item.description }</p>

                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{ item.date }</span>
                    </div>
                    <span className="group-hover:text-[#FF6EC7] group-hover:translate-x-1 transition-all duration-200">
                      Visit Site →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          )) }
        </div>
      </section>

      {/* Decorative Elements */ }
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6EC7]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BC13FE]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}

export default Projects;
