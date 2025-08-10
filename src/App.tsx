import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Calendar,
  Users,
  MapPin,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const LANGUAGES = {
  en: {
    name: "English",
    heroTitle: "Your Dream Wedding",
    heroSubtitle: "Starts Here",
    heroDesc:
      "Plan your perfect celebration with our comprehensive wedding planning platform. From venues to vendors, we make your special day unforgettable.",
    aboutTitle: "About Namma Kalyanam",
    aboutDesc: `Namma Kalyanam is your comprehensive wedding planning companion, designed to transform the complex process of wedding planning into a joyful journey. We understand that every couple deserves their perfect day, and we're here to make it happen with traditional values and modern convenience.`,
    featuresTitle: "Everything You Need for Your Perfect Day",
    featuresDesc: "Comprehensive tools and services to plan your dream wedding",
    features: [
      {
        title: "Venue Booking",
        desc: "Discover and book stunning venues that match your style and budget",
      },
      {
        title: "Vendor Selection",
        desc: "Connect with verified photographers, caterers, decorators and more",
      },
      {
        title: "Budget Management",
        desc: "Track expenses and stay within budget with our smart tools",
      },
      {
        title: "Event Scheduling",
        desc: "Coordinate all your wedding events with our timeline planner",
      },
      {
        title: "Custom Checklists",
        desc: "Never miss a detail with personalized wedding checklists",
      },
      {
        title: "Cultural Guidance",
        desc: "Honor your traditions with our cultural wedding expertise",
      },
    ],
    howItWorksTitle: "How It Works",
    howItWorksDesc: "Simple steps to plan your perfect wedding",
    howItWorks: [
      {
        step: "01",
        title: "Create Your Profile",
        desc: "Tell us about your dream wedding, preferences, and budget to get personalized recommendations.",
      },
      {
        step: "02",
        title: "Discover & Connect",
        desc: "Browse curated venues and vendors, read reviews, and connect with the perfect match for your big day.",
      },
      {
        step: "03",
        title: "Plan & Celebrate",
        desc: "Use our tools to manage timelines, budgets, and guest lists. Then celebrate your perfect wedding!",
      },
    ],
    testimonialsTitle: "Love Stories & Happy Couples",
    testimonialsDesc:
      "What our couples say about their wedding planning experience",
    testimonials: [
      {
        name: "Priya & Arjun",
        text: "Namma Kalyanam made our wedding planning so smooth! From finding the perfect venue to coordinating with vendors, everything was handled professionally. Our dream wedding became a reality!",
      },
      {
        name: "Sneha & Vikram",
        text: "The cultural guidance and traditional elements they incorporated made our wedding truly special. The budget management tools kept us on track without compromising on our vision.",
      },
      {
        name: "Anjali & Rohit",
        text: "Outstanding service! The vendor network is amazing and the platform made collaboration so easy. Our families and vendors were all connected seamlessly throughout the planning process.",
      },
    ],
    ctaTitle: "Ready to Plan Your Dream Wedding?",
    ctaDesc:
      "Join thousands of couples who have trusted Namma Kalyanam to make their special day perfect. Start your wedding planning journey today!",
    footerDesc:
      "Making dream weddings a reality with traditional values and modern convenience.",
    services: [
      "Venue Booking",
      "Vendor Selection",
      "Budget Planning",
      "Event Coordination",
    ],
    support: ["Help Center", "Wedding Guide", "Cultural Tips", "FAQs"],
    contact: { phone: "+91 9876543210", email: "hello@nammakalyanam.com" },
    copyright:
      "© 2025 Namma Kalyanam. All rights reserved. Made with ❤️ for couples everywhere.",
  },
  ta: {
    name: "தமிழ்",
    heroTitle: "உங்கள் கனவு திருமணம்",
    heroSubtitle: "இங்கே துவங்குகிறது",
    heroDesc:
      "உங்கள் சிறப்பு நாளை மறக்க முடியாததாக மாற்ற, நம்ம கல்யாணம் முழுமையான திருமண திட்டமிடல் தளத்தை வழங்குகிறது. இடங்கள் முதல் வழங்குநர்கள் வரை, உங்கள் விழாவை சிறப்பாக திட்டமிடுங்கள்.",
    aboutTitle: "நம்ம கல்யாணம் பற்றி",
    aboutDesc: `திருமண திட்டமிடலை மகிழ்ச்சியான பயணமாக மாற்ற, நம்ம கல்யாணம் உங்கள் முழுமையான திருமண திட்டமிடல் துணை. ஒவ்வொரு ஜோடியும் தங்கள் கனவு நாளை அனுபவிக்க வேண்டும் என்பதில் நாங்கள் நம்புகிறோம்; பாரம்பரியத்தையும், நவீன வசதிகளையும் இணைத்து அதை நனவாக்குகிறோம்.`,
    featuresTitle: "உங்கள் சிறப்பு நாளுக்கான அனைத்தும் இங்கே",
    featuresDesc:
      "உங்கள் கனவு திருமணத்தை திட்டமிட முழுமையான கருவிகள் மற்றும் சேவைகள்",
    features: [
      {
        title: "இடம் முன்பதிவு",
        desc: "உங்கள் ஸ்டைலும் பட்ஜெட்டும் பொருந்தும் அழகான இடங்களை கண்டறிந்து முன்பதிவு செய்யுங்கள்",
      },
      {
        title: "வழங்குநர் தேர்வு",
        desc: "புகைப்படக்காரர்கள், உணவகங்கள், அலங்காரர்கள் மற்றும் பலருடன் இணைக",
      },
      {
        title: "பட்ஜெட் மேலாண்மை",
        desc: "நம் ஸ்மார்ட் கருவிகளுடன் செலவுகளை கண்காணித்து பட்ஜெட்டில் இருங்கள்",
      },
      {
        title: "நிகழ்ச்சி திட்டமிடல்",
        desc: "நிகழ்வுகளுக்கான டைம்லைன் திட்டமிடலுடன் அனைத்து நிகழ்வுகளையும் ஒருங்கிணையுங்கள்",
      },
      {
        title: "தனிப்பயன் பட்டியல்கள்",
        desc: "தனிப்பயன் திருமண பட்டியல்களுடன் எந்த விவரமும் தவற விடாதீர்கள்",
      },
      {
        title: "பாரம்பரிய வழிகாட்டுதல்",
        desc: "பாரம்பரிய திருமண அனுபவத்துடன் உங்கள் கலாச்சாரத்தை கௌரவிக்கவும்",
      },
    ],
    howItWorksTitle: "எப்படி வேலை செய்கிறது",
    howItWorksDesc: "உங்கள் கனவு திருமணத்தை எளிதாக திட்டமிட எளிய படிகள்",
    howItWorks: [
      {
        step: "01",
        title: "உங்கள் விவரங்களை உருவாக்குங்கள்",
        desc: "உங்கள் விருப்பங்கள், பட்ஜெட் மற்றும் கனவு திருமணத்தைப் பற்றி கூறுங்கள்; தனிப்பயன் பரிந்துரைகள் பெறுங்கள்.",
      },
      {
        step: "02",
        title: "கண்டறிந்து இணைக",
        desc: "தேர்ந்தெடுக்கப்பட்ட இடங்கள் மற்றும் வழங்குநர்களை பார்வையிடுங்கள், விமர்சனங்களை படியுங்கள், உங்கள் சிறப்பு நாளுக்கான சரியானவரை தேர்ந்தெடுக்கவும்.",
      },
      {
        step: "03",
        title: "திட்டமிட்டு கொண்டாடுங்கள்",
        desc: "நம் கருவிகளுடன் டைம்லைன், பட்ஜெட், விருந்தினர் பட்டியலை நிர்வகிக்கவும். பிறகு உங்கள் திருமணத்தை கொண்டாடுங்கள்!",
      },
    ],
    testimonialsTitle: "காதல் கதைகள் & மகிழ்ச்சியான ஜோடிகள்",
    testimonialsDesc:
      "எங்கள் திருமண திட்டமிடல் அனுபவம் பற்றி எங்கள் ஜோடிகள் சொல்வது",
    testimonials: [
      {
        name: "பிரியா & அர்ஜுன்",
        text: "நம்ம கல்யாணம் எங்கள் திருமண திட்டமிடலை மிகவும் எளிதாக்கியது! சரியான இடத்தை கண்டுபிடிப்பது முதல் வழங்குநர்களுடன் ஒருங்கிணைப்பது வரை, அனைத்தும் சிறப்பாக நடந்தது. எங்கள் கனவு திருமணம் நனவானது!",
      },
      {
        name: "ஸ்நேகா & விக்ரம்",
        text: "பாரம்பரிய வழிகாட்டுதலும், நவீன வசதிகளும் எங்கள் திருமணத்தை சிறப்பாக்கின. பட்ஜெட் மேலாண்மை கருவிகள் எங்களை பாதையில் வைத்தது.",
      },
      {
        name: "அஞ்சலி & ரோஹித்",
        text: "அற்புதமான சேவை! வழங்குநர் வலைப்பின்னல் சிறந்தது, மற்றும் அனைவரும் ஒருங்கிணைந்து எளிதாக வேலை செய்தோம். எங்கள் குடும்பங்களும் வழங்குநர்களும் இணைந்திருந்தனர்.",
      },
    ],
    ctaTitle: "உங்கள் கனவு திருமணத்தை திட்டமிட தயாரா?",
    ctaDesc:
      "நம்ம கல்யாணத்தை நம்பி ஆயிரக்கணக்கான ஜோடிகள் தங்கள் சிறப்பு நாளை சிறப்பாக்கியுள்ளனர். இன்று உங்கள் திருமண திட்டமிடலை துவங்குங்கள்!",
    footerDesc:
      "பாரம்பரியத்துடன் நவீன வசதிகளை இணைத்து உங்கள் கனவு திருமணத்தை நனவாக்குகிறோம்.",
    services: [
      "இடம் முன்பதிவு",
      "வழங்குநர் தேர்வு",
      "பட்ஜெட் திட்டமிடல்",
      "நிகழ்ச்சி ஒருங்கிணைப்பு",
    ],
    support: [
      "உதவி மையம்",
      "திருமண வழிகாட்டி",
      "பாரம்பரிய குறிப்புகள்",
      "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    ],
    contact: { phone: "+91 9876543210", email: "hello@nammakalyanam.com" },
    copyright:
      "© 2025 நம்ம கல்யாணம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. அனைத்து ஜோடிகளுக்கும் அன்புடன்.",
  },
};

type LanguageKey = "en" | "ta";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState<LanguageKey>("en");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut" as const,
      },
    }),
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-500" />
              <span
                className={`text-2xl font-bold ${
                  scrollY > 50 ? "text-gray-800" : "text-white"
                }`}
              >
                Namma Kalyanam
              </span>
              {/* Language Switcher */}
              <div className="ml-4 relative">
                <button
                  className={`px-3 py-1 rounded-full border ${
                    scrollY > 50
                      ? "border-gray-300 bg-white text-gray-700"
                      : "border-white bg-transparent text-white"
                  } text-sm font-medium focus:outline-none`}
                  onClick={() => setLanguage(language === "en" ? "ta" : "en")}
                  title="Switch Language"
                >
                  {LANGUAGES[language as LanguageKey].name}
                </button>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["About", "Features", "How It Works", "Testimonials"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      smoothScroll(item.toLowerCase().replace(" ", "-"))
                    }
                    className={`font-medium transition-colors hover:text-rose-500 ${
                      scrollY > 50 ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
              <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    scrollY > 50 ? "text-gray-800" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    scrollY > 50 ? "text-gray-800" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-4 space-y-4">
              {["About", "Features", "How It Works", "Testimonials"].map(
                (item, i) => (
                  <motion.button
                    key={item}
                    onClick={() =>
                      smoothScroll(item.toLowerCase().replace(" ", "-"))
                    }
                    className="block w-full text-left text-gray-700 hover:text-rose-500 py-2"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={i}
                  >
                    {item}
                  </motion.button>
                )
              )}
              <motion.button
                className="w-full bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={4}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {LANGUAGES[language as LanguageKey].heroTitle}
            <span className="block text-rose-400">
              {LANGUAGES[language as LanguageKey].heroSubtitle}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            {LANGUAGES[language as LanguageKey].heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Planning <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {LANGUAGES[language as LanguageKey].aboutTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {LANGUAGES[language as LanguageKey].aboutDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding planning"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Personalized Experience
                  </h3>
                  <p className="text-gray-600">
                    Tailored wedding planning that reflects your unique style
                    and cultural traditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Expert Network
                  </h3>
                  <p className="text-gray-600">
                    Connect with verified vendors and professionals who
                    understand your vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Seamless Coordination
                  </h3>
                  <p className="text-gray-600">
                    Real-time collaboration tools to keep everyone on the same
                    page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {LANGUAGES[language as LanguageKey].featuresTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {LANGUAGES[language as LanguageKey].featuresDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(
              LANGUAGES[language as LanguageKey].features as {
                title: string;
                desc: string;
              }[]
            ).map((feature, index) => {
              const icons = [
                MapPin,
                Users,
                DollarSign,
                Calendar,
                CheckCircle,
                Heart,
              ];
              const icon = icons[index];
              const colors = [
                "bg-rose-100 text-rose-600",
                "bg-purple-100 text-purple-600",
                "bg-green-100 text-green-600",
                "bg-blue-100 text-blue-600",
                "bg-yellow-100 text-yellow-600",
                "bg-pink-100 text-pink-600",
              ];
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <div
                    className={`w-12 h-12 ${colors[index]} rounded-lg flex items-center justify-center mb-4`}
                  >
                    {icon &&
                      React.createElement(icon, { className: "h-6 w-6" })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-rose-50 to-purple-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {LANGUAGES[language as LanguageKey].howItWorksTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {LANGUAGES[language as LanguageKey].howItWorksDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(
              LANGUAGES[language as LanguageKey].howItWorks as {
                step: string;
                title: string;
                desc: string;
              }[]
            ).map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={index}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {LANGUAGES[language as LanguageKey].testimonialsTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {LANGUAGES[language as LanguageKey].testimonialsDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(
              LANGUAGES[language as LanguageKey].testimonials as {
                name: string;
                text: string;
              }[]
            ).map((testimonial, index) => {
              const images = [
                "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
              ];
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={images[index]}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-rose-500 to-purple-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {LANGUAGES[language as LanguageKey].ctaTitle}
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            {LANGUAGES[language as LanguageKey].ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              {language === "en"
                ? "Start Planning Now"
                : "இப்போது திட்டமிடத் தொடங்குங்கள்"}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300">
              {language === "en"
                ? "Schedule Consultation"
                : "ஆலோசனைக்கு நேரம் ஒதுக்கவும்"}
            </button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-rose-500" />
                <span className="text-2xl font-bold">Namma Kalyanam</span>
              </div>
              <p className="text-gray-300 mb-4">
                {LANGUAGES[language as LanguageKey].footerDesc}
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-rose-500 cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-300 hover:text-rose-500 cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-300 hover:text-rose-500 cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Services" : "சேவைகள்"}
              </h4>
              <ul className="space-y-2 text-gray-300">
                {(LANGUAGES[language as LanguageKey].services as string[]).map(
                  (service, i) => (
                    <li key={i}>{service}</li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Support" : "உதவி"}
              </h4>
              <ul className="space-y-2 text-gray-300">
                {(LANGUAGES[language as LanguageKey].support as string[]).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Contact" : "தொடர்பு"}
              </h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>
                    {LANGUAGES[language as LanguageKey].contact.phone}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>
                    {LANGUAGES[language as LanguageKey].contact.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>{LANGUAGES[language as LanguageKey].copyright}</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
