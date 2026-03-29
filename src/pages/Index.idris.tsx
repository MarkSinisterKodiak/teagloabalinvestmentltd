import { useState } from "react";
import { Truck, Package, Clock, Shield, MapPin, MessageCircle, Menu, X, Phone, Mail, ChevronRight, CheckCircle2, Globe, ArrowRight, Briefcase, Building2, Users, Route, Star, Award, FileCheck, MapPinned, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoIdris from "@/components/LogoIdris";
import company from "@/config/company.idris";
import ukTruckHero from "@/assets/uk-truck-hero.jpg";
import ukTruckRoad from "@/assets/uk-truck-road.jpg";
import ukTruckFleet from "@/assets/uk-truck-fleet.jpg";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

/* ─── NAVBAR ─── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", section: "about" },
    { label: "Services", section: "services" },
    { label: "Coverage", section: "coverage" },
    { label: "Quote", section: "quote" },
    { label: "Careers", section: "careers" },
    { label: "Contact", section: "contact" },
  ];

  const whatsappLink = `https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`;
  const callLink = `tel:${company.whatsappNumber}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm safe-top">
      {/* Top info bar — desktop only */}
      <div className="hidden lg:block bg-gray-900 text-gray-300 text-xs">
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between py-1.5">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-blue-400" />
              {company.address.join(", ")}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3 h-3 text-blue-400" />
              Company No. {company.companyNumber}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-blue-400" />
              {company.email}
            </a>
            <a href={callLink} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-blue-400" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 xs:h-16 md:h-20">
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <LogoIdris size="md" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors px-3 py-1.5 rounded-full hover:bg-blue-50 text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-medium text-sm">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Button size="sm" onClick={() => scrollToSection("quote")} className="bg-blue-700 hover:bg-blue-800 text-white shadow-md rounded-full px-5">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link.section} onClick={() => { scrollToSection(link.section); setIsOpen(false); }} className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition-colors">
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200 px-4 space-y-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2 text-[#25D366] font-medium">
                  <MessageCircle className="w-5 h-5" />WhatsApp Us
                </a>
                <a href={callLink} rel="noopener noreferrer" className="flex items-center gap-3 py-2 text-gray-700">
                  <Phone className="w-5 h-5" />Call {company.phoneDisplay}
                </a>
                <a href={`mailto:${company.email}`} rel="noopener noreferrer" className="flex items-center gap-3 py-2 text-gray-700">
                  <Mail className="w-5 h-5" />{company.email}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

/* ─── HERO ─── */
const HeroSection = () => (
  <section className="relative min-h-[100svh] flex items-center pt-14 xs:pt-16 md:pt-20 lg:pt-28 overflow-hidden landscape-min-h-auto">
    <div className="absolute inset-0 z-0">
      <img src={ukTruckHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-950/80 to-gray-900/85" />
    </div>

    <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 py-8 xs:py-10 sm:py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 lg:gap-12 items-center">
        {/* Content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 xs:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 xs:mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] xs:text-xs sm:text-sm text-gray-200 font-medium">Now Accepting Bookings — Company No. {company.companyNumber}</span>
          </div>

          <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-[1.1] text-white">
            Professional<span className="block text-blue-400">Freight Transport</span>Across the UK
          </h1>

          <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-4 xs:mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {company.name} — fully insured road haulage and logistics for businesses across England, Scotland &amp; Wales. Single pallets to full loads.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 xs:gap-3 mb-4 xs:mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/25">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-green-300 font-medium">Companies House Registered</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/25">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-blue-300 font-medium">Goods in Transit Insured</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/25">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-amber-300 font-medium">GPS Tracked Fleet</span>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 justify-center lg:justify-start w-full xs:w-auto">
            <Button size="lg" onClick={() => scrollToSection("quote")} className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 xs:h-12 sm:h-14 px-4 xs:px-5 sm:px-6 md:px-8 text-xs xs:text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all touch-target w-full xs:w-auto rounded-xl">
              <Briefcase className="w-4 h-4 xs:w-5 xs:h-5 mr-1.5 xs:mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
            <a href={`tel:${company.whatsappNumber}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold h-11 xs:h-12 sm:h-14 px-4 xs:px-5 sm:px-6 md:px-8 text-xs xs:text-sm sm:text-base touch-target w-full xs:w-auto rounded-xl transition-colors">
              <Phone className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">Call {company.phoneDisplay}</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-display font-bold text-white">3<span className="text-blue-400">+</span></div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400 mt-1">Years Operating</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-display font-bold text-white">500<span className="text-blue-400">+</span></div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400 mt-1">Loads Delivered</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-display font-bold text-white">24<span className="text-blue-400">/7</span></div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400 mt-1">Availability</div>
            </div>
          </div>
        </div>

        {/* Contact Card — desktop */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Get In Touch</div>
                  <div className="text-2xl font-bold text-white tracking-tight">{company.phoneDisplay}</div>
                </div>
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
            <div className="p-5 space-y-2 bg-gray-50">
              <a href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-3 bg-white hover:bg-green-50 rounded-xl border border-gray-100 hover:border-green-200 transition-all">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"><MessageCircle className="w-5 h-5 text-white" /></div>
                <div><div className="text-xs text-gray-400 uppercase tracking-wider">WhatsApp</div><div className="font-semibold text-gray-900">Message Us Instantly</div></div>
                <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </a>
              <a href={`mailto:${company.email}`} rel="noopener noreferrer" className="group flex items-center gap-4 p-3 bg-white hover:bg-blue-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"><Mail className="w-5 h-5 text-white" /></div>
                <div><div className="text-xs text-gray-400 uppercase tracking-wider">Email</div><div className="font-semibold text-gray-900 text-sm">{company.email}</div></div>
                <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
              <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center"><MapPin className="w-5 h-5 text-white" /></div>
                <div><div className="text-xs text-gray-400 uppercase tracking-wider">Registered Office</div><div className="font-medium text-gray-700 text-sm">{company.address.join(", ")}</div></div>
              </div>
            </div>
            <div className="p-5 bg-white border-t border-gray-100">
              <Button onClick={() => scrollToSection("quote")} className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all group rounded-xl">
                <Briefcase className="w-5 h-5 mr-2" />Request a Free Quote
              </Button>
              <p className="text-center text-xs text-gray-400 mt-2">No obligation &bull; Fast response</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Contact Bar */}
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg safe-bottom">
      <div className="flex items-center justify-around py-2.5 xs:py-3 px-2 xs:px-4">
        <a href={`tel:${company.whatsappNumber}`} rel="noopener noreferrer" className="flex flex-col items-center gap-0.5 xs:gap-1 text-gray-700 touch-target"><Phone className="w-5 h-5" /><span className="text-[10px] xs:text-xs">Call</span></a>
        <a href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5 xs:gap-1 text-[#25D366] touch-target"><MessageCircle className="w-5 h-5" /><span className="text-[10px] xs:text-xs">WhatsApp</span></a>
        <button onClick={() => scrollToSection("quote")} className="bg-blue-600 text-white px-4 xs:px-6 py-2 xs:py-2.5 rounded-full font-semibold text-xs xs:text-sm shadow-md touch-target">Get a Quote</button>
      </div>
    </div>
  </section>
);

/* ─── TRUST BAR ─── */
const TrustBar = () => (
  <div className="bg-white border-b border-gray-100 py-6 sm:py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
        {[
          { icon: Building2, label: "Companies House Registered" },
          { icon: Shield, label: "Goods in Transit Insured" },
          { icon: FileCheck, label: "Public Liability Covered" },
          { icon: Award, label: "GPS Tracked Vehicles" },
          { icon: Truck, label: "Modern Fleet" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-gray-500">
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── STATS BANNER ─── */
const SectionDivider = () => (
  <div className="relative py-16 sm:py-20 overflow-hidden">
    <img src={ukTruckRoad} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/95" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {[
          { value: "500+", label: "Loads Delivered", icon: Package },
          { value: "150+", label: "Business Clients", icon: Users },
          { value: "99%", label: "On-Time Rate", icon: Clock },
          { value: "0", label: "Damage Claims", icon: Shield },
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

/* ─── ABOUT ─── */
const AboutSection = () => (
  <section id="about" className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={ukTruckFleet} alt="Idris Transport fleet" className="w-full h-[350px] sm:h-[450px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
                <div><div className="text-xs text-gray-500 font-medium">SIC Code 49410</div><div className="text-sm font-bold text-gray-900">Freight Transport by Road</div></div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 sm:left-8 bg-blue-600 rounded-2xl shadow-xl p-4 text-white hidden sm:block">
            <div className="text-xs uppercase tracking-wider font-bold opacity-80">Est.</div>
            <div className="text-3xl font-bold">{company.established}</div>
          </div>
          <div className="absolute -bottom-4 -right-4 sm:right-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center"><Building2 className="w-6 h-6 text-gray-700" /></div>
              <div><div className="text-xs text-gray-500">Company No.</div><div className="text-lg font-bold text-gray-900">{company.companyNumber}</div></div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-blue-700" />
            <span className="text-blue-700 font-semibold text-sm">About Our Company</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            London-Based<br /><span className="text-blue-600">Transport Specialists</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
            {company.name} (Company No. {company.companyNumber}) is a registered freight transport company based in London, providing professional haulage and logistics services across the United Kingdom.
          </p>
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            Incorporated in July {company.established}, we specialise in road freight — from single pallets and part-loads to full truckload shipments. Every load is fully insured, GPS-tracked, and handled with care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: Truck, title: "Nationwide Coverage", text: "England, Scotland & Wales" },
              { icon: Shield, title: "Fully Insured", text: "Goods in transit & public liability" },
              { icon: Clock, title: "Same-Day Available", text: "Urgent collection & delivery" },
              { icon: FileCheck, title: "Proof of Delivery", text: "Signed POD on every load" },
              { icon: Globe, title: "GPS Tracked", text: "Real-time vehicle tracking" },
              { icon: Users, title: "Experienced Drivers", text: "Professional, vetted team" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-blue-700" /></div>
                <div><div className="text-sm font-semibold text-gray-900">{item.title}</div><div className="text-xs text-gray-500">{item.text}</div></div>
              </div>
            ))}
          </div>

          <Button size="lg" onClick={() => scrollToSection("quote")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-13 px-8 text-base shadow-lg hover:shadow-xl transition-all rounded-xl group">
            Request a Quote<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ─── HOW IT WORKS ─── */
const HowItWorksSection = () => (
  <section className="py-16 sm:py-20 bg-gray-50 border-y border-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4"><Route className="w-4 h-4 text-blue-700" /><span className="text-blue-700 font-semibold text-sm">Simple Process</span></div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It <span className="text-blue-600">Works</span></h2>
        <p className="text-gray-500 max-w-xl mx-auto">Getting your freight moving is straightforward.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-blue-200" />
        {[
          { step: "01", title: "Request a Quote", description: "Fill out our quick form or call us with your collection and delivery details. We respond within hours with a competitive price.", icon: Briefcase },
          { step: "02", title: "We Collect", description: "Our driver arrives at the agreed time, loads your goods securely, and provides a signed proof of collection.", icon: Package },
          { step: "03", title: "Safe Delivery", description: "Your freight is delivered on time, in perfect condition. You receive a signed Proof of Delivery as confirmation.", icon: CheckCircle2 },
        ].map((item) => (
          <div key={item.step} className="relative text-center group">
            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-blue-200 group-hover:border-blue-500 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-all relative z-10">
              <item.icon className="w-8 h-8 text-blue-600" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">{item.step}</div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SERVICES ─── */
const services = [
  { icon: Truck, title: "General Haulage", description: "Full and part-load transport across the UK. Pallets, boxes, crates, and general cargo delivered door-to-door.", features: ["Same-day & next-day", "Part & full loads", "Tail-lift available"] },
  { icon: Building2, title: "Commercial & Industrial", description: "Specialist transport for construction materials, machinery, equipment, and industrial supplies to sites nationwide.", features: ["Building materials", "Heavy equipment", "Site deliveries"] },
  { icon: Warehouse, title: "Pallet & Freight", description: "Palletised freight services from single pallets to multi-pallet loads. Secure handling with goods-in-transit insurance.", features: ["1–26 pallets", "Insured loads", "POD included"] },
  { icon: Globe, title: "Nationwide Express", description: "Urgent, time-critical deliveries anywhere in the UK. Dedicated vehicle, direct route — your freight gets priority.", features: ["Direct service", "GPS tracked", "Urgent & timed"] },
];

const ServicesSection = () => (
  <section id="services" className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4"><Briefcase className="w-4 h-4 text-blue-700" /><span className="text-blue-700 font-semibold text-sm">What We Offer</span></div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our <span className="text-blue-600">Services</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">Professional road freight solutions tailored to your business. Every load insured, every vehicle tracked.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.title} className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-6 transition-colors duration-300"><service.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" /></div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── COVERAGE AREAS ─── */
const CoverageSection = () => (
  <section id="coverage" className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4"><MapPinned className="w-4 h-4 text-blue-700" /><span className="text-blue-700 font-semibold text-sm">Where We Operate</span></div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Areas We <span className="text-blue-600">Cover</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">Based in London, we transport freight to all major cities and regions across the UK.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
        {["London","Manchester","Birmingham","Leeds","Liverpool","Bristol","Sheffield","Edinburgh","Glasgow","Cardiff","Newcastle","Nottingham","Southampton","Leicester","Coventry","Belfast"].map((city) => (
          <div key={city} className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all">
            <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700">{city}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-500 text-sm mb-4">Don't see your area? We cover all UK postcodes — just ask.</p>
        <Button onClick={() => scrollToSection("quote")} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 px-6 shadow-md">Check Your Route<ArrowRight className="w-4 h-4 ml-2" /></Button>
      </div>
    </div>
  </section>
);

/* ─── TESTIMONIALS ─── */
const TestimonialsSection = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4"><Star className="w-4 h-4 text-blue-700" /><span className="text-blue-700 font-semibold text-sm">Client Feedback</span></div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">What Our <span className="text-blue-600">Clients Say</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { name: "James H.", company: "Construction Co.", location: "London", text: "Idris Transport have been brilliant. Always on time, careful with our building materials, and great communication throughout. Wouldn't use anyone else now.", rating: 5 },
          { name: "Sarah M.", company: "Wholesale Dist.", location: "Manchester", text: "We needed an urgent delivery from London to Manchester and they sorted it same-day. Professional driver, goods arrived in perfect condition. Highly recommend.", rating: 5 },
          { name: "David K.", company: "Manufacturing Ltd", location: "Birmingham", text: "Reliable, fairly priced, and easy to work with. We use Idris Transport for our regular pallet deliveries across the Midlands. No complaints whatsoever.", rating: 5 },
        ].map((review) => (
          <div key={review.name} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-4">{[...Array(review.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />))}</div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-700 font-bold text-sm">{review.name.charAt(0)}</span></div>
              <div><div className="font-semibold text-gray-900 text-sm">{review.name}</div><div className="text-xs text-gray-500">{review.company} — {review.location}</div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA BANNER ─── */
const TruckCtaBanner = () => (
  <div className="relative py-20 sm:py-24 overflow-hidden">
    <img src={ukTruckRoad} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-gray-900/95" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Ready to Ship?</h3>
      <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote from our team. We respond within hours — not days.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" onClick={() => scrollToSection("quote")} className="bg-white text-blue-700 hover:bg-gray-100 font-bold h-14 px-8 text-base shadow-xl rounded-xl">Get Your Free Quote<ArrowRight className="w-5 h-5 ml-2" /></Button>
        <a href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 transition-colors">
          <MessageCircle className="w-5 h-5" />WhatsApp Us Now
        </a>
      </div>
    </div>
  </div>
);

/* ─── QUOTE FORM ─── */
const RequestQuoteSection = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", serviceType: "General Haulage", pickupLocation: "", deliveryLocation: "", cargoDescription: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => {
    const lines = [`*New Transport Quote Request*`, `Name: ${formData.fullName}`, `Email: ${formData.email}`, `Phone: ${formData.phone}`, `Service: ${formData.serviceType}`];
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: `New Transport Quote - ${formData.fullName}`, "Name": formData.fullName, "Email": formData.email, "Phone": formData.phone, "Service": formData.serviceType, "Pickup Location": formData.pickupLocation || "TBD", "Delivery Location": formData.deliveryLocation || "TBD", "Cargo": formData.cargoDescription || "N/A", "Message": formData.message || "N/A" }),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", serviceType: "General Haulage", pickupLocation: "", deliveryLocation: "", cargoDescription: "", message: "" });
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
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
              <span className="text-blue-800 font-bold text-xs xs:text-sm uppercase tracking-widest">Free Quote</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 text-gray-900">Get Your <span className="text-blue-600">Quote Today</span></h2>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto">Tell us what you need moved and where — we'll send you a competitive price within hours.</p>
          </div>

          <div className="bg-white rounded-2xl xs:rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg"><Briefcase className="w-5 h-5 xs:w-6 xs:h-6 text-white" /></div>
                  <div><h3 className="text-white font-bold text-base xs:text-lg">Request a Quote</h3><p className="text-gray-400 text-xs xs:text-sm">Free, no obligation</p></div>
                </div>
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 bg-white/10 rounded-full"><Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-blue-400" /><span className="text-white text-[10px] xs:text-xs font-medium">Fast Response</span></div>
                  <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 bg-white/10 rounded-full"><Shield className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-green-400" /><span className="text-white text-[10px] xs:text-xs font-medium">Fully Insured</span></div>
                </div>
              </div>
            </div>

            <div className="p-4 xs:p-6 sm:p-8 md:p-10">
              {status === "success" ? (
                <div className="text-center py-8 xs:py-12">
                  <div className="w-16 h-16 xs:w-20 xs:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 xs:mb-6 ring-4 ring-green-50"><CheckCircle2 className="w-8 h-8 xs:w-10 xs:h-10 text-green-600" /></div>
                  <h4 className="text-xl xs:text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h4>
                  <p className="text-gray-600 mb-6 text-sm xs:text-base max-w-md mx-auto">Thanks for your enquiry. We'll review the details and respond with a price shortly.</p>
                  <Button onClick={() => setStatus("idle")} className="bg-blue-600 hover:bg-blue-700 text-white touch-target h-11 px-6">Submit Another Enquiry</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4"><div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-700 font-bold text-xs">1</span></div><h4 className="font-semibold text-gray-900 text-sm xs:text-base">Your Details</h4></div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4">
                      <div className="space-y-1.5"><label className="text-xs xs:text-sm font-medium text-gray-700">Full Name *</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Smith" required className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base" /></div>
                      <div className="space-y-1.5"><label className="text-xs xs:text-sm font-medium text-gray-700">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.co.uk" required className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base" /></div>
                      <div className="space-y-1.5"><label className="text-xs xs:text-sm font-medium text-gray-700">Phone *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7XXX XXX XXX" required className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base" /></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4"><div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-700 font-bold text-xs">2</span></div><h4 className="font-semibold text-gray-900 text-sm xs:text-base">Shipment Details</h4></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                      <div className="space-y-1.5"><label className="text-xs xs:text-sm font-medium text-gray-700">Service Required</label>
                        <select name="serviceType" value={formData.serviceType} onChange={handleChange} required className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base appearance-none cursor-pointer">
                          <option>General Haulage</option><option>Commercial &amp; Industrial</option><option>Pallet &amp; Freight</option><option>Nationwide Express</option><option>Same-Day Delivery</option><option>Other / General Enquiry</option>
                        </select>
                      </div>
                      <div className="space-y-1.5"><label className="text-xs xs:text-sm font-medium text-gray-700">What Are You Shipping?</label><input type="text" name="cargoDescription" value={formData.cargoDescription} onChange={handleChange} placeholder="e.g. 4 pallets of tiles, 500kg" className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 mt-3 xs:mt-4">
                      <div className="space-y-1.5"><label className="text-xs xs:text-sm font-medium text-gray-700">Collection From</label><input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="e.g. London W7 or full postcode" className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base" /></div>
                      <div className="space-y-1.5"><label className="text-xs xs:text-sm font-medium text-gray-700">Deliver To</label><input type="text" name="deliveryLocation" value={formData.deliveryLocation} onChange={handleChange} placeholder="e.g. Manchester M1 or full postcode" className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-sm sm:text-base" /></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4"><div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-700 font-bold text-xs">3</span></div><h4 className="font-semibold text-gray-900 text-sm xs:text-base">Additional Info</h4></div>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any other details — preferred dates, access restrictions, weight, dimensions, etc." rows={3} className="w-full px-3 xs:px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none text-sm sm:text-base" />
                  </div>

                  {status === "error" && (
                    <div className="p-3 xs:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0"><span className="text-red-600 text-xs">!</span></div>Something went wrong. Please try again or contact us directly.</div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button type="submit" disabled={status === "loading"} className="flex-1 h-12 xs:h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm xs:text-base shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all touch-target disabled:opacity-70 rounded-xl">
                      {status === "loading" ? (<span className="flex items-center justify-center gap-2"><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</span>) : (<span className="flex items-center justify-center gap-2"><Mail className="w-4 h-4 xs:w-5 xs:h-5" />Send Quote Request</span>)}
                    </Button>
                    <button type="button" onClick={handleWhatsApp} className="inline-flex items-center justify-center gap-2 h-12 xs:h-14 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm xs:text-base shadow-lg transition-all"><MessageCircle className="w-5 h-5" />Send via WhatsApp</button>
                  </div>
                  <p className="text-center text-gray-400 text-xs mt-2">Your details are sent directly to our team. We never share your information.</p>
                </form>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 xs:gap-6 mt-8 xs:mt-10">
            <div className="flex items-center gap-2 text-gray-600"><Shield className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" /><span className="text-xs xs:text-sm font-medium">Your data is safe</span></div>
            <div className="flex items-center gap-2 text-gray-600"><Clock className="w-4 h-4 xs:w-5 xs:h-5 text-blue-600" /><span className="text-xs xs:text-sm font-medium">Quick response</span></div>
            <div className="flex items-center gap-2 text-gray-600"><CheckCircle2 className="w-4 h-4 xs:w-5 xs:h-5 text-blue-500" /><span className="text-xs xs:text-sm font-medium">No obligation</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── CAREERS ─── */
const CareersSection = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", experience: "", role: "" });
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: `Career Application - ${formData.fullName}`, "Name": formData.fullName, "Email": formData.email, "Phone": formData.phone, "Experience": formData.experience, "Role Interest": formData.role }),
      });
      if (response.ok) { setStatus("success"); setFormData({ fullName: "", email: "", phone: "", experience: "", role: "" }); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <section id="careers" className="py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden relative">
      <img src={ukTruckHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/95" />
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full mb-4"><Users className="w-4 h-4 text-blue-400" /><span className="text-blue-400 font-semibold text-sm">We're Hiring</span></div>
            <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight">Join the <span className="text-blue-400">{company.displayName}</span> Team</h2>
            <p className="text-gray-300 mb-4 xs:mb-6 sm:mb-8 text-xs xs:text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">We're a growing London-based transport company looking for reliable, professional people who want to build a career in logistics.</p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 inline-block text-left w-full max-w-sm mx-auto lg:mx-0">
              {["Competitive pay & regular work","Modern, well-maintained vehicles","Supportive team environment","Career growth opportunities","London & nationwide routes"].map((b) => (
                <li key={b} className="flex items-center gap-2.5 sm:gap-3"><div className="w-5 h-5 rounded-full bg-blue-600/30 flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-3 h-3 text-blue-400" /></div><span className="text-gray-200 text-xs sm:text-sm md:text-base">{b}</span></li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-lg touch-target rounded-xl" onClick={() => document.getElementById("career-form")?.scrollIntoView({ behavior: "smooth" })}>Apply Now<ArrowRight className="w-5 h-5 ml-2" /></Button>
            </div>
          </div>

          <div id="career-form" className="order-1 lg:order-2 w-full">
            <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl p-3 xs:p-4 sm:p-6 md:p-8 shadow-2xl max-w-md mx-auto lg:max-w-none">
              <h3 className="font-display text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-1 text-gray-900 text-center lg:text-left">Quick Application</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 text-center lg:text-left">Fill in your details and we'll be in touch</p>

              {status === "success" ? (
                <div className="text-center py-4 xs:py-6 sm:py-8">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4"><CheckCircle2 className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-green-600" /></div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1 xs:mb-2">Application Received!</h4>
                  <p className="text-gray-600 mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base">We'll review your application and be in touch soon.</p>
                  <Button onClick={() => setStatus("idle")} className="bg-blue-600 hover:bg-blue-700 text-white touch-target h-10 xs:h-11 sm:h-12 text-xs xs:text-sm sm:text-base px-4 xs:px-6">Submit Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" required className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base" />
                  <select name="experience" value={formData.experience} onChange={handleChange} required className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base">
                    <option value="">Driving Experience *</option><option value="0-1 years">0-1 years</option><option value="1-3 years">1-3 years</option><option value="3-5 years">3-5 years</option><option value="5-10 years">5-10 years</option><option value="10+ years">10+ years</option>
                  </select>
                  <select name="role" value={formData.role} onChange={handleChange} required className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base">
                    <option value="">Role Interest *</option><option value="HGV Driver (Class 1)">HGV Driver (Class 1)</option><option value="HGV Driver (Class 2)">HGV Driver (Class 2)</option><option value="Van Driver">Van Driver</option><option value="Logistics Coordinator">Logistics Coordinator</option><option value="Warehouse Operative">Warehouse Operative</option><option value="Operations">Operations</option>
                  </select>

                  {status === "error" && (<div className="p-2 xs:p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded-md xs:rounded-lg text-red-700 text-[10px] xs:text-xs sm:text-sm">Something went wrong. Please try again or contact us directly.</div>)}

                  <Button type="submit" disabled={status === "loading"} className="w-full h-10 xs:h-11 sm:h-12 md:h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs xs:text-sm sm:text-base shadow-md disabled:opacity-70 touch-target rounded-xl">
                    {status === "loading" ? (<span className="flex items-center justify-center gap-1.5 xs:gap-2"><svg className="animate-spin h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Submitting...</span>) : "Submit Application"}
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

/* ─── FOOTER ─── */
const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-gray-300 pb-24 lg:pb-0">
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4"><LogoIdris size="md" /></div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Professional freight transport and logistics services across the United Kingdom. Fully insured, GPS-tracked, on-time delivery.</p>
            <div className="space-y-1 text-xs text-gray-500">
              <p>Company No. {company.companyNumber}</p>
              <p>SIC: 49410 — Freight Transport by Road</p>
              <p>Incorporated: July {company.established}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">General Haulage</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">Commercial &amp; Industrial</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">Pallet &amp; Freight</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">Nationwide Express</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">Same-Day Delivery</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("coverage")} className="hover:text-blue-400 transition-colors">Coverage Areas</button></li>
              <li><button onClick={() => scrollToSection("careers")} className="hover:text-blue-400 transition-colors">Careers</button></li>
              <li><button onClick={() => scrollToSection("quote")} className="hover:text-blue-400 transition-colors">Request Quote</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold mb-4 text-white text-sm">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {company.address.map((line) => (<li key={line} className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />{line}</li>))}
              <li><a href={`tel:${company.whatsappNumber}`} rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"><Phone className="w-4 h-4" />{company.phoneDisplay}</a></li>
              <li><a href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] hover:text-green-300 font-medium transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp Us</a></li>
              <li><a href={`mailto:${company.email}`} rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"><Mail className="w-4 h-4" /><span className="break-all">{company.email}</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved. Company No. {company.companyNumber}</p>
          <span className="text-xs">Registered in England &amp; Wales</span>
        </div>
      </div>
    </div>
  </footer>
);

/* ─── PAGE ─── */
const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TrustBar />
    <SectionDivider />
    <AboutSection />
    <HowItWorksSection />
    <ServicesSection />
    <CoverageSection />
    <TestimonialsSection />
    <RequestQuoteSection />
    <TruckCtaBanner />
    <CareersSection />
    <Footer />
  </div>
);

export default Index;
