import { useState } from "react";
import { Truck, Package, Clock, Shield, MapPin, MessageCircle, Menu, X, Phone, Mail, ChevronRight, CheckCircle2, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import heroTruck from "@/assets/truck.jpg";
import company from "@/config/company";

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
    { label: "Get Quote", section: "quote" },
    { label: "Drive With Us", section: "drivers" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm safe-top">
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
                className="text-gray-600 hover:text-sky-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${company.whatsappNumber}`}
              className="flex items-center gap-2 text-gray-700 hover:text-sky-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{company.phoneDisplay}</span>
            </a>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("quote")}
              className="bg-sky-500 hover:bg-sky-600 text-white shadow-md"
            >
              Get Quote
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
                  href={`https://wa.me/${company.whatsappNumber.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 py-2 text-sky-600 font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
                <a href={`tel:${company.whatsappNumber}`} className="flex items-center gap-3 py-2 text-gray-700">
                  <Phone className="w-5 h-5" />
                  {company.phoneDisplay}
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
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroTruck})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45 sm:from-black/80 sm:via-black/60 sm:to-black/40" />
    </div>

    {/* Animated Floating Elements */}
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {/* Animated truck moving across */}
      <div className="absolute bottom-32 -left-20 animate-[slideRight_20s_linear_infinite] opacity-20">
        <Truck className="w-16 h-16 text-sky-500" />
      </div>
      <div className="absolute top-40 -right-20 animate-[slideLeft_25s_linear_infinite] opacity-15">
        <Package className="w-12 h-12 text-white" />
      </div>
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 py-8 xs:py-10 sm:py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 lg:gap-12 items-center">
        {/* Hero Content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full bg-sky-500/20 backdrop-blur-sm border border-sky-500/30 mb-4 xs:mb-6">
            <Truck className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-sky-400" />
            <span className="text-[10px] xs:text-xs sm:text-sm text-amber-300 font-medium">{company.tagline} • Since {company.established}</span>
          </div>

          <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight text-white">
            {company.hero.headline.split('—')[0]}
            <span className="text-sky-400">—</span>
            <br className="hidden xs:block" />
            <span className="text-sky-400">{company.hero.headline.split('—')[1] || ''}</span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-4 xs:mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {company.hero.subtext}
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 xs:gap-3 mb-4 xs:mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-green-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-white">Fully Insured</span>
            </div>
            <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-yellow-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-white">24/7 Service</span>
            </div>
            <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              <Globe className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-blue-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-white">UK Nationwide</span>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 justify-center lg:justify-start w-full xs:w-auto">
            <Button
              size="lg"
              onClick={() => scrollToSection("quote")}
              className="group bg-sky-500 hover:bg-sky-600 text-white font-semibold h-11 xs:h-12 sm:h-14 px-4 xs:px-5 sm:px-6 md:px-8 text-xs xs:text-sm sm:text-base shadow-lg hover:shadow-xl transition-all touch-target w-full xs:w-auto"
            >
              <Truck className="w-4 h-4 xs:w-5 xs:h-5 mr-1.5 xs:mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">Get Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("drivers")}
              className="border-white/40 text-white hover:bg-white/10 font-semibold h-11 xs:h-12 sm:h-14 px-4 xs:px-5 sm:px-6 md:px-8 text-xs xs:text-sm sm:text-base touch-target w-full xs:w-auto"
            >
              <span className="whitespace-nowrap">Join Our Team</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-4 xs:gap-6 sm:gap-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Package className="w-4 h-4 xs:w-5 xs:h-5 text-sky-400" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-bold text-white">10K+</span>
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Recoveries</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-sky-400" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-bold text-white">30min</span>
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Truck className="w-4 h-4 xs:w-5 xs:h-5 text-sky-400" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-bold text-white">24/7</span>
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Availability</div>
            </div>
          </div>
        </div>

        {/* Contact Card - Hidden on mobile, shown on lg+ */}
        <div className="lg:col-span-5 hidden lg:block">
          {/* Sharp Contact Card */}
          <div className="relative bg-white border-l-4 border-sky-500 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 animate-shimmer pointer-events-none" />

            {/* Header with sharp edge */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-1">24/7 Support</div>
                  <div className="text-2xl font-bold text-white tracking-tight">{company.phoneDisplay}</div>
                </div>
                <div className="w-14 h-14 bg-sky-500 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="p-5 space-y-1 bg-gray-50">
              <a
                href={`https://wa.me/${company.whatsappNumber.replace(/\+/g, "")}`}
                target="_blank"
                rel="noreferrer"
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

              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-4 p-3 bg-white hover:bg-sky-50 border border-gray-100 hover:border-amber-200 transition-all"
              >
                <div className="w-10 h-10 bg-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Email</div>
                  <div className="font-semibold text-gray-900 text-sm">{company.email}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
              </a>

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

            {/* Quick Quote Form */}
            <div className="p-5 bg-white border-t-2 border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-sky-500" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Quick Quote</span>
              </div>
              <form className="space-y-3">
                <input
                  placeholder="Pickup Location"
                  className="w-full h-12 px-4 bg-gray-50 border-l-2 border-gray-200 focus:border-sky-500 outline-none transition-all text-sm font-medium placeholder:text-gray-400"
                />
                <input
                  placeholder="Delivery Location"
                  className="w-full h-12 px-4 bg-gray-50 border-l-2 border-gray-200 focus:border-sky-500 outline-none transition-all text-sm font-medium placeholder:text-gray-400"
                />
                <Button className="w-full h-12 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all group">
                  <Truck className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get Quote Now
                </Button>
              </form>
            </div>

            {/* Animated truck at bottom */}
            <div className="h-8 bg-gray-900 relative overflow-hidden">
              <div className="absolute bottom-1 animate-truck-drive">
                <Truck className="w-6 h-6 text-sky-500" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-2">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-8 h-0.5 bg-sky-500/30" />
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
        <a
          href={`tel:${company.whatsappNumber}`}
          className="flex flex-col items-center gap-0.5 xs:gap-1 text-gray-700 touch-target"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] xs:text-xs">Call</span>
        </a>
        <a
          href={`https://wa.me/${company.whatsappNumber.replace(/\+/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-0.5 xs:gap-1 text-green-600 touch-target"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] xs:text-xs">WhatsApp</span>
        </a>
        <button
          onClick={() => scrollToSection("quote")}
          className="bg-sky-500 text-white px-4 xs:px-6 py-2 xs:py-2.5 rounded-full font-semibold text-xs xs:text-sm shadow-md touch-target"
        >
          Get Quote
        </button>
      </div>
    </div>
  </section>
);

// Animated Road Divider with Trucks
const TruckRoadDivider = () => (
  <div className="relative bg-gray-900 h-20 sm:h-24 overflow-hidden">
    {/* Road surface */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />

    {/* Road markings */}
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
      <div className="flex gap-4">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="w-12 sm:w-16 h-1 bg-sky-500/60" />
        ))}
      </div>
    </div>

    {/* Animated trucks */}
    <div className="absolute top-1/2 -translate-y-1/2 animate-truck-drive">
      <div className="flex items-center gap-1">
        <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-sky-500" />
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      </div>
    </div>

    <div className="absolute top-1/2 -translate-y-1/2 animate-truck-drive-reverse opacity-60" style={{ animationDelay: '3s' }}>
      <div className="flex items-center gap-1 -scale-x-100">
        <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      </div>
    </div>

    {/* Side lights */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
      <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
      <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
      <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
      <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  </div>
);

const services = [
  {
    icon: Truck,
    title: "Vehicle Recovery",
    description: "Professional 24/7 vehicle recovery for breakdowns, accidents, and roadside emergencies across London and the UK.",
  },
  {
    icon: Package,
    title: "Car Transport",
    description: "Safe and reliable vehicle transport nationwide. Door-to-door collection and delivery for any vehicle.",
  },
  {
    icon: Clock,
    title: "Roadside Assistance",
    description: "Fast response roadside assistance — tyre changes, jump starts, fuel delivery, and lockout help.",
  },
  {
    icon: Shield,
    title: "Accident Recovery",
    description: "Rapid accident recovery service with full insurance coverage and safe vehicle handling.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-12 xs:py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-10 left-10 opacity-5 hidden sm:block">
      <Truck className="w-32 sm:w-40 h-32 sm:h-40 text-gray-900" />
    </div>
    <div className="absolute bottom-10 right-10 opacity-5 hidden sm:block">
      <Package className="w-24 sm:w-32 h-24 sm:h-32 text-gray-900" />
    </div>

    <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-8 xs:mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-sky-100 mb-3 xs:mb-4">
          <Truck className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-sky-600" />
          <span className="text-sky-700 font-bold text-xs xs:text-sm uppercase tracking-widest">Our Services</span>
        </div>
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 text-gray-900">
          Complete Recovery <span className="text-sky-500">Solutions</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg px-2">
          London and nationwide — we provide professional vehicle recovery and transport services around the clock.
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group relative bg-white border-l-4 border-transparent hover:border-sky-500 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-sky-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

            <div className="p-5 sm:p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 flex items-center justify-center mb-5 group-hover:bg-sky-500 transition-colors duration-300 relative">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-sky-500 group-hover:text-white transition-colors" />
                {/* Animated corner */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-sky-500 group-hover:bg-gray-900 transition-colors" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center gap-2 text-sky-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Bottom truck animation on hover */}
            <div className="h-8 bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 flex items-center -translate-x-full group-hover:translate-x-[calc(100%+200px)] transition-transform duration-1000">
                <Truck className="w-5 h-5 text-sky-500" />
              </div>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-3 opacity-30">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-4 h-0.5 bg-gray-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Vehicle Recovery",
    pickupLocation: "",
    deliveryLocation: "",
    cargoDescription: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Quote Request - ${formData.fullName}`,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          pickupLocation: formData.pickupLocation,
          deliveryLocation: formData.deliveryLocation,
          cargoDescription: formData.cargoDescription,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceType: "Vehicle Recovery",
          pickupLocation: "",
          deliveryLocation: "",
          cargoDescription: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const sendToWhatsApp = () => {
    const message = `Hi D&C Recovery! I'd like a quote:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.serviceType}\nPickup: ${formData.pickupLocation}\nDelivery: ${formData.deliveryLocation}\nDetails: ${formData.cargoDescription}`;
    const whatsappUrl = `https://wa.me/${company.whatsappNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="quote" className="py-12 xs:py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 xs:mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-sky-100 rounded-full mb-3 xs:mb-4">
              <Truck className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-sky-600" />
              <span className="text-sky-700 font-bold text-xs xs:text-sm uppercase tracking-widest">Free Quote</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 text-gray-900">
              Get Your <span className="text-sky-500">Shipping Quote</span>
            </h2>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto">
              Fill out the form below and receive a competitive quote within 24 hours.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl xs:rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-sky-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Package className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base xs:text-lg">Request a Quote</h3>
                    <p className="text-gray-400 text-xs xs:text-sm">Fast response guaranteed</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 bg-white/10 rounded-full">
                    <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-sky-400" />
                    <span className="text-white text-[10px] xs:text-xs font-medium">24hr Response</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 bg-white/10 rounded-full">
                    <Shield className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-green-400" />
                    <span className="text-white text-[10px] xs:text-xs font-medium">Secure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 xs:p-6 sm:p-8 md:p-10">
              {status === "success" ? (
                <div className="text-center py-8 xs:py-12">
                  <div className="w-16 h-16 xs:w-20 xs:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 xs:mb-6 ring-4 ring-green-50">
                    <CheckCircle2 className="w-8 h-8 xs:w-10 xs:h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl xs:text-2xl font-bold text-gray-900 mb-2">Quote Request Sent!</h4>
                  <p className="text-gray-600 mb-6 text-sm xs:text-base max-w-md mx-auto">We'll get back to you within 24 hours with a competitive quote.</p>
                  <Button
                    onClick={() => setStatus("idle")}
                    className="bg-sky-500 hover:bg-sky-600 text-white touch-target h-11 px-6"
                  >
                    Submit Another Quote
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">
                        <span className="text-sky-600 font-bold text-xs">1</span>
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
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm sm:text-base"
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
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 7XXX XXXXXX"
                          required
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipment Details */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">
                        <span className="text-sky-600 font-bold text-xs">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Shipment Details</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700">Service Type</label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm sm:text-base appearance-none cursor-pointer"
                        >
                          <option>Vehicle Recovery</option>
                          <option>Car Transport</option>
                          <option>Roadside Assistance</option>
                          <option>Accident Recovery</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-sky-500" />
                          Pickup Location
                        </label>
                        <input
                          type="text"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          placeholder="City or Postcode"
                          required
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs xs:text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-sky-500" />
                          Delivery Location
                        </label>
                        <input
                          type="text"
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          placeholder="City or Postcode"
                          required
                          className="w-full h-10 xs:h-11 sm:h-12 px-3 xs:px-4 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cargo Description */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">
                        <span className="text-sky-600 font-bold text-xs">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Cargo Information</h4>
                    </div>
                    <textarea
                      name="cargoDescription"
                      value={formData.cargoDescription}
                      onChange={handleChange}
                      placeholder="Describe your vehicle and situation (make, model, issue, special requirements...)"
                      rows={3}
                      className="w-full px-3 xs:px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none text-sm sm:text-base"
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

                  {/* Submit Buttons */}
                  <div className="pt-2">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="flex-1 h-12 xs:h-14 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold text-sm xs:text-base shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all touch-target disabled:opacity-70 rounded-xl"
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
                            Request Quote via Email
                          </span>
                        )}
                      </Button>
                      <Button
                        type="button"
                        onClick={sendToWhatsApp}
                        className="sm:w-auto h-12 xs:h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm xs:text-base shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all touch-target flex items-center justify-center gap-2 rounded-xl px-6 xs:px-8"
                      >
                        <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="hidden xs:inline">Send via</span> WhatsApp
                      </Button>
                    </div>
                    <p className="text-center text-gray-500 text-xs mt-4">
                      By submitting, you agree to our terms of service and privacy policy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 xs:gap-6 mt-8 xs:mt-10">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" />
              <span className="text-xs xs:text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-sky-500" />
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

const DriversSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    licenseClass: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Driver Application - ${formData.fullName}`,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          licenseClass: formData.licenseClass,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", experience: "", licenseClass: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="drivers" className="py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block text-sky-500 font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider mb-2 xs:mb-3">Join Our Team</span>
            <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight">
              Drive With <span className="text-sky-500 block xs:inline">{company.name}</span>
            </h2>
            <p className="text-gray-300 mb-4 xs:mb-6 sm:mb-8 text-xs xs:text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
              Join our team of professional recovery operators. Competitive pay, 24/7 shift flexibility,
              and a supportive team environment.
            </p>

            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3 mb-4 xs:mb-6 sm:mb-8 inline-block text-left w-full max-w-sm mx-auto lg:mx-0">
              {[
                "Competitive weekly pay with bonuses",
                "Modern recovery fleet",
                "Flexible shift patterns",
                "Full training provided",
                "24/7 operations support",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-500" />
                  </div>
                  <span className="text-gray-200 text-[11px] xs:text-xs sm:text-sm md:text-base leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-lg touch-target"
                onClick={() => document.getElementById("driver-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Apply Now
              </Button>
            </div>
          </div>

          <div id="driver-form" className="order-1 lg:order-2 w-full">
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
                    className="bg-sky-500 hover:bg-sky-600 text-white touch-target h-10 xs:h-11 sm:h-12 text-xs xs:text-sm sm:text-base px-4 xs:px-6"
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
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  />
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  >
                    <option value="">Years of Experience</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                  <select
                    name="licenseClass"
                    value={formData.licenseClass}
                    onChange={handleChange}
                    required
                    className="w-full h-9 xs:h-10 sm:h-11 md:h-12 px-2.5 xs:px-3 sm:px-4 rounded-md xs:rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-[11px] xs:text-xs sm:text-sm md:text-base"
                  >
                    <option value="">License Category</option>
                    <option value="Cat B">Cat B (Car)</option>
                    <option value="Cat C1">Cat C1 (Up to 7.5t)</option>
                    <option value="Cat C">Cat C (Rigid)</option>
                    <option value="Cat C+E">Cat C+E (Artic)</option>
                  </select>

                  {status === "error" && (
                    <div className="p-2 xs:p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded-md xs:rounded-lg text-red-700 text-[10px] xs:text-xs sm:text-sm">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-10 xs:h-11 sm:h-12 md:h-14 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs xs:text-sm sm:text-base shadow-md disabled:opacity-70 touch-target"
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
  <footer id="contact" className="py-10 xs:py-12 sm:py-16 bg-gray-100 border-t border-gray-200 pb-20 xs:pb-24 lg:pb-16">
    <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 mb-8 xs:mb-10 sm:mb-12">
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <div className="mb-3 xs:mb-4">
            <Logo size="md" />
          </div>
          <p className="text-gray-600 text-xs xs:text-sm leading-relaxed">
            Your trusted partner in vehicle recovery and transport across London and the UK.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-3 xs:mb-4 text-gray-900 text-sm xs:text-base">Services</h4>
          <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm text-gray-600">
            <li><button onClick={() => scrollToSection("services")} className="hover:text-sky-600 transition-colors touch-target">Vehicle Recovery</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-sky-600 transition-colors touch-target">Car Transport</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-sky-600 transition-colors touch-target">Roadside Assistance</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-sky-600 transition-colors touch-target">Accident Recovery</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-3 xs:mb-4 text-gray-900 text-sm xs:text-base">Company</h4>
          <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm text-gray-600">
            <li><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-sky-600 transition-colors touch-target">About Us</button></li>
            <li><button onClick={() => scrollToSection("drivers")} className="hover:text-sky-600 transition-colors touch-target">Careers</button></li>
            <li><button onClick={() => scrollToSection("quote")} className="hover:text-sky-600 transition-colors touch-target">Get Quote</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="hover:text-sky-600 transition-colors touch-target">Contact</button></li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-display font-bold mb-3 xs:mb-4 text-gray-900 text-sm xs:text-base">Contact</h4>
          <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm text-gray-600">
            {company.address.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li className="pt-1.5 xs:pt-2">
              <a
                href={`https://wa.me/${company.whatsappNumber.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                <span className="text-xs xs:text-sm">{company.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                <span className="text-xs xs:text-sm break-all">{company.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 xs:pt-8 border-t border-gray-200 text-center text-xs xs:text-sm text-gray-500">
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
      <TruckRoadDivider />
      <ServicesSection />
      <QuoteSection />
      <DriversSection />
      <Footer />
    </div>
  );
};

export default Index;
