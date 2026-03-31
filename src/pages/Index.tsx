import { useState } from "react";
import { Truck, Package, Clock, Shield, MapPin, MessageCircle, Menu, X, Phone, Mail, ChevronRight, CheckCircle2, Globe, ArrowRight, Briefcase, Building2, Users, Route, Home, BoxIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import company from "@/config/company";
import heroBg from "@/assets/hero-bg.jpg";
import truckRoad from "@/assets/blank-cargo-truck-road.jpg";
import truckImg from "@/assets/truck.jpg";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", section: "services" },
    { label: "Request Quote", section: "quote" },
    { label: "Careers", section: "careers" },
    { label: "Contact", section: "contact" },
  ];

  const whatsappLink = `https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`;
  const callLink = `tel:${company.whatsappNumber}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] safe-top">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 xs:h-16 md:h-20">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo size="md" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors px-3 py-1.5 rounded-full hover:bg-blue-50"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={callLink}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{company.phoneDisplay}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("quote")}
              className="bg-blue-700 hover:bg-blue-800 text-white shadow-md"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => {
                    scrollToSection(link.section);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition-colors"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200 px-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2 text-blue-700 font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
                <a href={callLink} rel="noopener noreferrer" className="flex items-center gap-3 py-2 text-gray-700">
                  <Phone className="w-5 h-5" />
                  Call {company.phoneDisplay}
                </a>
                <a href={`mailto:${company.email}`} rel="noopener noreferrer" className="flex items-center gap-3 py-2 text-gray-700">
                  <Mail className="w-5 h-5" />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section className="relative min-h-[100svh] flex items-center pt-14 xs:pt-16 md:pt-20 overflow-hidden landscape-min-h-auto">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src={truckImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-blue-950/80 to-gray-900/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
    </div>

    {/* Animated Floating Elements */}
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-pulse" />
    </div>

    <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 py-8 xs:py-10 sm:py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 lg:gap-12 items-center">
        {/* Hero Content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 mb-4 xs:mb-6">
            <Truck className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-blue-400" />
            <span className="text-[10px] xs:text-xs sm:text-sm text-amber-300 font-medium">{company.tagline} • ABN {(company as any).abn || ''} • Est. {company.established}</span>
          </div>

          <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight text-white">
            {company.hero.headline}
          </h1>

          <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-4 xs:mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {company.hero.subtext}
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 xs:gap-3 mb-4 xs:mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-green-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-white">ABN Registered</span>
            </div>
            <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-yellow-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-white">GST Registered</span>
            </div>
            <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              <Truck className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-blue-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-white">Australia Wide</span>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 justify-center lg:justify-start w-full xs:w-auto">
            <Button
              size="lg"
              onClick={() => scrollToSection("quote")}
              className="group bg-blue-700 hover:bg-blue-800 text-white font-semibold h-11 xs:h-12 sm:h-14 px-4 xs:px-5 sm:px-6 md:px-8 text-xs xs:text-sm sm:text-base shadow-lg hover:shadow-xl transition-all touch-target w-full xs:w-auto"
            >
              <Briefcase className="w-4 h-4 xs:w-5 xs:h-5 mr-1.5 xs:mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-white/40 text-white hover:bg-white/10 font-semibold h-11 xs:h-12 sm:h-14 px-4 xs:px-5 sm:px-6 md:px-8 text-xs xs:text-sm sm:text-base touch-target w-full xs:w-auto"
            >
              <span className="whitespace-nowrap">Our Services</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-4 xs:gap-6 sm:gap-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Truck className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-bold text-white">All Aus</span>
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Coverage</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Shield className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-bold text-white">Insured</span>
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400">All Loads</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-bold text-white">24/7</span>
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Service</div>
            </div>
          </div>
        </div>

        {/* Contact Card - Hidden on mobile, shown on lg+ */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative bg-white border-l-4 border-blue-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="absolute inset-0 animate-shimmer pointer-events-none" />

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Get In Touch</div>
                  <div className="text-2xl font-bold text-white tracking-tight">{company.phoneDisplay || "Contact Us"}</div>
                </div>
                <div className="w-14 h-14 bg-blue-700 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform shadow-lg">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            <div className="p-5 space-y-1 bg-gray-50">
              {company.whatsappNumber && (
                <a
                  href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 bg-white hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all"
                >
                  <div className="w-10 h-10 bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">WhatsApp</div>
                    <div className="font-semibold text-gray-900">Message Us Instantly</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                </a>
              )}

              {company.email && (
                <a
                  href={`mailto:${company.email}`}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 bg-white hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all"
                >
                  <div className="w-10 h-10 bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Email</div>
                    <div className="font-semibold text-gray-900 text-sm">{company.email}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
                </a>
              )}

              <div className="flex items-center gap-4 p-3 bg-white border border-gray-100">
                <div className="w-10 h-10 bg-gray-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Location</div>
                  <div className="font-medium text-gray-700 text-sm">{company.address.join(', ')}</div>
                </div>
              </div>
            </div>

            {/* Quick Quote CTA */}
            <div className="p-5 bg-white border-t-2 border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-blue-700" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Quick Enquiry</span>
              </div>
              <Button
                onClick={() => scrollToSection("quote")}
                className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all group"
              >
                <Briefcase className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Request Quote
              </Button>
            </div>

            {/* Bottom bar */}
            <div className="h-8 bg-gray-900 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-2">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-8 h-0.5 bg-blue-500/30" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Contact Bar */}
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg safe-bottom">
      <div className="flex items-center justify-around py-2.5 xs:py-3 px-2 xs:px-4">
        {company.whatsappNumber && (
          <a
            href={`tel:${company.whatsappNumber}`}
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 xs:gap-1 text-gray-700 touch-target"
          >
            <Phone className="w-5 h-5" />
            <span className="text-[10px] xs:text-xs">Call Us</span>
          </a>
        )}
        {company.whatsappNumber && (
          <a
            href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 xs:gap-1 text-[#25D366] touch-target"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] xs:text-xs">WhatsApp</span>
          </a>
        )}
        <button
          onClick={() => scrollToSection("quote")}
          className="bg-blue-700 text-white px-4 xs:px-6 py-2 xs:py-2.5 rounded-full font-semibold text-xs xs:text-sm shadow-md touch-target"
        >
          Request Quote
        </button>
      </div>
    </div>
  </section>
);

// Stats Banner with truck background
const SectionDivider = () => (
  <div className="relative py-16 sm:py-20 overflow-hidden">
    <img src={truckRoad} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {[
          { value: "All Aus", label: "Coverage", icon: Truck },
          { value: "7 Days", label: "Service Available", icon: Clock },
          { value: "Insured", label: "Every Load", icon: Shield },
          { value: "100%", label: "Safe Delivery", icon: Package },
        ].map((stat) => (
          <div key={stat.label} className="text-center group">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/20 backdrop-blur-sm mb-4 group-hover:bg-blue-500/30 transition-colors">
              <stat.icon className="w-7 h-7 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// About / Why Choose Us section with truck image
const AboutSection = () => (
  <section className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={truckImg} alt="Haulage fleet" className="w-full h-[350px] sm:h-[450px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <Shield className="w-7 h-7 text-blue-700" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">NSW</div>
                <div className="text-sm text-gray-500">Based Haulage</div>
              </div>
            </div>
          </div>
          {/* Second floating card */}
          <div className="absolute -top-4 -left-4 sm:left-8 bg-blue-700 rounded-2xl shadow-xl p-4 text-white hidden sm:block">
            <div className="text-xs uppercase tracking-wider font-bold opacity-80">Established</div>
            <div className="text-3xl font-bold">{company.established}</div>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-blue-700" />
            <span className="text-blue-700 font-semibold text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted <br />
            <span className="text-blue-700">Haulage Partner Since {company.established}</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            {company.name} provides professional haulage and freight transport services across NSW and all of Australia.
            We handle your cargo with care — secure loading, safe transport, and on-time delivery every load.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Truck, text: "Australia-wide haulage" },
              { icon: Shield, text: "Fully insured transport" },
              { icon: Users, text: "Professional driver team" },
              { icon: Clock, text: "On-time delivery guarantee" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-gray-700 text-sm font-medium leading-snug">{item.text}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            onClick={() => scrollToSection("quote")}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold h-13 px-8 text-base shadow-lg hover:shadow-xl transition-all rounded-xl group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// Truck CTA Banner
const TruckCtaBanner = () => (
  <div className="relative py-20 sm:py-24 overflow-hidden">
    <img src={truckRoad} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-gray-900/90" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Need a Haulage Quote?</h3>
      <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">Get a free quote from our haulage team and discover the best transport solution for your freight.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          onClick={() => scrollToSection("quote")}
          className="bg-white text-blue-700 hover:bg-gray-100 font-bold h-14 px-8 text-base shadow-xl rounded-xl"
        >
          Request a Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        {company.whatsappNumber && (
          <a
            href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        )}
      </div>
    </div>
  </div>
);

const services = [
  {
    icon: Truck,
    title: "General Haulage",
    description: "Reliable freight and cargo haulage across NSW and interstate. From pallets to full truckloads, we deliver on time.",
  },
  {
    icon: Building2,
    title: "Commercial Transport",
    description: "Efficient commercial and industrial transport solutions. Equipment, materials, and supplies moved professionally.",
  },
  {
    icon: Package,
    title: "Freight Services",
    description: "Secure freight handling and delivery using quality equipment. Heavy loads, oversized items, and bulk cargo transported safely.",
  },
  {
    icon: Shield,
    title: "Insured Transport",
    description: "Every load is fully insured for your peace of mind. GPS-tracked trucks with real-time updates on your cargo.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 sm:py-20 md:py-28 bg-gray-50 relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
          <Briefcase className="w-4 h-4 text-blue-700" />
          <span className="text-blue-700 font-semibold text-sm">Our Services</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Haulage <span className="text-blue-700">Services</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
          Professional haulage and freight transport services to move your cargo safely, on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-700 flex items-center justify-center mb-6 transition-colors duration-300">
              <service.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RequestQuoteSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "General Haulage",
    pickupLocation: "",
    deliveryLocation: "",
    cargoDescription: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `*New Haulage Quote Request*`,
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.serviceType}`,
    ];
    if (formData.pickupLocation) lines.push(`Pickup: ${formData.pickupLocation}`);
    if (formData.deliveryLocation) lines.push(`Delivery: ${formData.deliveryLocation}`);
    if (formData.cargoDescription) lines.push(`Cargo: ${formData.cargoDescription}`);
    if (formData.message) lines.push(`Message: ${formData.message}`);
    return encodeURIComponent(lines.join("\n"));
  };

  const handleWhatsApp = () => {
    if (!formData.fullName || !formData.email || !formData.phone) return;
    const number = company.whatsappNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${number}?text=${buildWhatsAppMessage()}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${company.formSubmitHash || company.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Haulage Quote - ${formData.fullName}`,
          "Name": formData.fullName,
          "Email": formData.email,
          "Phone": formData.phone,
          "Service": formData.serviceType,
          "Pickup Location": formData.pickupLocation || "TBD",
          "Delivery Location": formData.deliveryLocation || "TBD",
          "Cargo": formData.cargoDescription || "N/A",
          "Message": formData.message || "N/A",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceType: "General Haulage",
          pickupLocation: "",
          deliveryLocation: "",
          cargoDescription: "",
          message: "",
        });

        // Fire AI auto-reply (non-blocking)
        fetch("/api/review-quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            serviceType: formData.serviceType,
            pickupLocation: formData.pickupLocation,
            deliveryLocation: formData.deliveryLocation,
            cargoDescription: formData.cargoDescription,
            message: formData.message,
          }),
        }).catch(() => {});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="py-12 xs:py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 xs:mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-blue-100 rounded-full mb-3 xs:mb-4">
              <Briefcase className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-blue-700" />
              <span className="text-blue-800 font-bold text-xs xs:text-sm uppercase tracking-widest">Request a Quote</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 text-gray-900">
              Get a <span className="text-blue-700">Free Quote</span>
            </h2>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto">
              Tell us about your freight and our team will get back to you with a tailored quote.
            </p>
          </div>

          <div className="bg-white rounded-2xl xs:rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                    <Briefcase className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base xs:text-lg">Request a Quote</h3>
                    <p className="text-gray-400 text-xs xs:text-sm">No obligation, completely free</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 bg-white/10 rounded-full">
                    <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-blue-400" />
                    <span className="text-white text-[10px] xs:text-xs font-medium">24hr Response</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 bg-white/10 rounded-full">
                    <Shield className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-green-400" />
                    <span className="text-white text-[10px] xs:text-xs font-medium">Confidential</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 xs:p-6 sm:p-8 md:p-10">
              {status === "success" ? (
                <div className="text-center py-8 xs:py-12">
                  <div className="w-16 h-16 xs:w-20 xs:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 xs:mb-6 ring-4 ring-green-50">
                    <CheckCircle2 className="w-8 h-8 xs:w-10 xs:h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl xs:text-2xl font-bold text-gray-900 mb-2">Quote Request Sent!</h4>
              <p className="text-gray-600 mb-6 text-sm xs:text-base max-w-md mx-auto">We'll review your enquiry and get back to you within 24 hours.</p>
                  <Button
                    onClick={() => setStatus("idle")}
                    className="bg-blue-700 hover:bg-blue-800 text-white touch-target h-11 px-6"
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-700 font-bold text-xs">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Contact Information</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+61 4XX XXX XXX"
                          required
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-700 font-bold text-xs">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Haulage Details</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Service Required</label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base appearance-none cursor-pointer"
                        >
                          <option>General Haulage</option>
                          <option>Commercial Transport</option>
                          <option>Freight Services</option>
                          <option>Interstate Haulage</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Items Description</label>
                        <input
                          type="text"
                          name="cargoDescription"
                          value={formData.cargoDescription}
                          onChange={handleChange}
                          placeholder="e.g. Pallets, building materials, machinery"
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 mt-3 xs:mt-4">
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Pickup Location</label>
                        <input
                          type="text"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          placeholder="e.g. Sydney CBD, Parramatta"
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Delivery Location</label>
                        <input
                          type="text"
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          placeholder="e.g. Melbourne, Brisbane"
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-700 font-bold text-xs">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Additional Details</h4>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your haulage needs (load type, weight, dimensions, access requirements, preferred date, etc.)..."
                      rows={3}
                      className="w-full px-3 xs:px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none text-sm sm:text-base"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 xs:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 text-xs">!</span>
                      </div>
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-12 xs:h-14 bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-semibold text-sm xs:text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all touch-target disabled:opacity-70 rounded-xl"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Mail className="w-4 h-4 xs:w-5 xs:h-5" />
                          Submit Quote Request
                        </span>
                      )}
                    </Button>
                    <p className="text-center text-gray-500 text-xs mt-4">
                      Your quote details will be sent directly to our team.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 xs:gap-6 mt-8 xs:mt-10">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" />
              <span className="text-xs xs:text-sm font-medium">Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-blue-700" />
              <span className="text-xs xs:text-sm font-medium">24hr Response</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle2 className="w-4 h-4 xs:w-5 xs:h-5 text-blue-500" />
              <span className="text-xs xs:text-sm font-medium">No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CareersSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    role: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${company.formSubmitHash || company.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Career Application - ${formData.fullName}`,
          "Name": formData.fullName,
          "Email": formData.email,
          "Phone": formData.phone,
          "Experience": formData.experience,
          "Role Interest": formData.role,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", experience: "", role: "" });

        // Fire AI auto-reply (non-blocking)
        fetch("/api/review-application", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            experience: formData.experience,
            role: formData.role,
          }),
        }).catch(() => {});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="careers" className="py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden relative">
      <img src={truckImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gray-900/80" />
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block text-blue-600 font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider mb-2 xs:mb-3">Join Our Team</span>
            <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight">
              Work at <span className="text-blue-600 block xs:inline">{company.displayName}</span>
            </h2>
            <p className="text-gray-300 mb-4 xs:mb-6 sm:mb-8 text-xs xs:text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
              Join a growing haulage team in NSW. We're looking for dedicated professionals
              who take pride in delivering freight safely and on time.
            </p>

            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3 mb-4 xs:mb-6 sm:mb-8 inline-block text-left w-full max-w-sm mx-auto lg:mx-0">
              {[
                "Competitive salary & benefits",
                "Full training provided",
                "Collaborative team environment",
                "Career progression opportunities",
                "Modern fleet & equipment",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600" />
                  </div>
                  <span className="text-gray-200 text-[11px] xs:text-xs sm:text-sm md:text-base leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-lg touch-target"
                onClick={() => document.getElementById("career-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Apply Now
              </Button>
            </div>
          </div>

          <div id="career-form" className="order-1 lg:order-2 w-full">
            <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl p-3 xs:p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl max-w-md mx-auto lg:max-w-none">
              <h3 className="font-display text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6 text-gray-900 text-center lg:text-left">Quick Application</h3>

              {status === "success" ? (
                <div className="text-center py-4 xs:py-6 sm:py-8">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                    <CheckCircle2 className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1 xs:mb-2">Application Submitted!</h4>
                  <p className="text-gray-600 mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base">We'll review your application and contact you soon.</p>
                  <Button
                    onClick={() => setStatus("idle")}
                    className="bg-blue-700 hover:bg-blue-800 text-white touch-target h-10 xs:h-11 sm:h-12 text-xs xs:text-sm sm:text-base px-4 xs:px-6"
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  />
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  >
                    <option value="">Years of Experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  >
                    <option value="">Role Interest</option>
                    <option value="Removalist">Driver / Operator</option>
                    <option value="Truck Driver">Truck Driver</option>
                    <option value="Packing Specialist">Logistics Coordinator</option>
                    <option value="Warehouse Operative">Warehouse Operative</option>
                    <option value="Operations Manager">Operations Manager</option>
                  </select>

                  {status === "error" && (
                    <div className="p-2 xs:p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded-md xs:rounded-lg text-red-700 text-[10px] xs:text-xs sm:text-sm">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-10 xs:h-11 sm:h-12 md:h-14 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs xs:text-sm sm:text-base shadow-md disabled:opacity-70 touch-target"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-1.5 xs:gap-2">
                        <svg className="animate-spin h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="py-12 sm:py-16 bg-gray-900 text-gray-300 pb-24 lg:pb-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-4">
            <Logo size="md" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted haulage partner in NSW. Professional freight and cargo transport across Australia.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white text-sm">Services</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">General Haulage</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">Commercial Transport</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">Freight Services</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">Insured Transport</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white text-sm">Company</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-blue-400 transition-colors">About Us</button></li>
            <li><button onClick={() => scrollToSection("careers")} className="hover:text-blue-400 transition-colors">Careers</button></li>
            <li><button onClick={() => scrollToSection("quote")} className="hover:text-blue-400 transition-colors">Request Quote</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition-colors">Contact</button></li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-semibold mb-4 text-white text-sm">Contact</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            {company.address.map((line) => (
              <li key={line}>{line}</li>
            ))}
            {company.phoneDisplay && (
              <li className="pt-2">
                <a
                  href={`tel:${company.whatsappNumber}`}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{company.phoneDisplay}</span>
                </a>
              </li>
            )}
            {company.whatsappNumber && (
              <li>
                <a
                  href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:text-green-300 font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
            )}
            {company.email && (
              <li>
                <a href={`mailto:${company.email}`} rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm break-all">{company.email}</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {company.displayName}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <ServicesSection />
      <RequestQuoteSection />
      <TruckCtaBanner />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
