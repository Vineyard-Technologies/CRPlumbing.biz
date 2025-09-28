import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, MapPin, Clock, Shield, Award, Wrench, Droplets, Flame, Zap, Mail } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'
import CRPlumbingLogo from '@/assets/images/logo.webp'
import ForestBackground from '@/assets/images/forest.webp'
import SkylineBackground from '@/assets/images/skyline.webp'
import PlumbingRepairsImage from '@/assets/images/plumbingRepairs.webp'
import PipeInstallationImage from '@/assets/images/pipeInstallation.webp'
import WaterHeaterImage from '@/assets/images/waterHeater.webp'
import DrainCleaningImage from '@/assets/images/drainCleaning.webp'

// Custom hook for fade-in animations
function useFadeInOnScroll() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzjdkay");
  
  if (state.succeeded) {
    return (
      <div className="text-center p-8">
        <h3 className="text-2xl font-bold text-green-600 mb-4">Thank you!</h3>
        <p className="text-lg">Your message has been sent successfully. We'll get back to you soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Your full name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email" 
          name="email"
          placeholder="your.email@example.com"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          placeholder="(425) 555-0123"
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe your plumbing needs..."
          rows={4}
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      <Button 
        type="submit" 
        disabled={state.submitting}
        className="w-full bg-primary text-primary-foreground hover:bg-gray-50 hover:shadow-md transition-all duration-200 hover:border-gray-300 disabled:hover:bg-primary disabled:hover:shadow-none"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

function App() {
  const heroFade = useFadeInOnScroll()
  const servicesFade = useFadeInOnScroll()
  const aboutFade = useFadeInOnScroll()
  const contactFade = useFadeInOnScroll()

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: <Wrench className="w-8 h-8" />, title: "Plumbing Repairs", description: "Professional plumbing repairs for leaks, pipe issues, and fixture problems", image: PlumbingRepairsImage },
    { icon: <Droplets className="w-8 h-8" />, title: "Pipe Installation & Repair", description: "Professional pipe installation, repair, and replacement for all plumbing systems", image: PipeInstallationImage },
    { icon: <Flame className="w-8 h-8" />, title: "Water Heater Services", description: "Water heater installation, repair, maintenance, and energy-efficient upgrades", image: WaterHeaterImage },
    { icon: <Zap className="w-8 h-8" />, title: "Drain Cleaning", description: "Professional drain cleaning and unclogging for kitchens, and bathrooms.", image: DrainCleaningImage }
  ]

  const serviceAreas = [
    "Bellevue", "Redmond", "Kirkland", "Sammamish", "Issaquah", "Mercer Island", 
    "Newcastle", "Renton", "Bothell", "Kent", "Tukwila", "Snoqualmie", 
    "North Bend", "Covington"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                <img src={CRPlumbingLogo} alt="CR Plumbing Logo" className="h-8 w-auto" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">CR Plumbing</h1>
                <p className="opacity-90">Professional Plumbing Services</p>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Licensed | Bonded | Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Reliable Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Greater Eastside Plumber</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="font-semibold hover:bg-gray-100 hover:shadow-md transition-all duration-200"
              style={{ backgroundColor: 'white', color: '#1f2937' }}
              asChild
            >
              <a href="tel:+14255337351">
                <Phone className="w-4 h-4 mr-2" />
                (425) 533-7351
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        ref={heroFade.ref}
        className={`bg-gradient-to-br from-primary/5 to-accent/5 py-16 relative overflow-hidden transition-all duration-1000 ${
          heroFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          backgroundImage: `url(${SkylineBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Plumbing Services for the Greater Eastside
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional, reliable plumbing solutions for your home. Licensed, bonded, and insured, and ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 hover:opacity-90 hover:shadow-md transition-all duration-200" asChild>
              <a href="tel:+14255337351">
                <Phone className="w-5 h-5 mr-2" />
                (425) 533-7351
              </a>
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-8 hover:bg-gray-50 hover:shadow-md transition-all duration-200 hover:border-gray-300" 
              style={{ backgroundColor: 'white', color: 'black', border: '1px solid #e5e7eb' }}
              asChild
            >
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
              >
                Send us a Message
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Licensed | Bonded | Insured</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Reliable Service</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Greater Eastside Plumber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesFade.ref}
        className={`py-16 transition-all duration-1000 ${
          servicesFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} 
        id="services"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Plumbing Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From repairs to new installations, we handle all your plumbing needs with professional expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section 
        ref={aboutFade.ref}
        className={`py-16 bg-muted/30 transition-all duration-1000 ${
          aboutFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Areas We Serve</h3>
            <p className="text-lg text-muted-foreground">
              Proudly serving the Greater Eastside communities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  {area}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        ref={contactFade.ref}
        className={`py-16 transition-all duration-1000 ${
          contactFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} 
        id="contact"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Why Choose CR Plumbing?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Licensed | Bonded | Insured</h4>
                    <p className="text-muted-foreground">Fully licensed Washington State plumber with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Reliable Service</h4>
                    <p className="text-muted-foreground">Dependable plumbing service when you need it. Professional workmanship on every job.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">15+ Years Experience</h4>
                    <p className="text-muted-foreground">Extensive experience serving Greater Eastside homeowners with quality workmanship and reliable service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Greater Eastside Plumber</h4>
                    <p className="text-muted-foreground">We live here just like you do. Our professional expertise is tailored to the Pacific Northwest, ensuring we address the unique plumbing needs of our community.</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-card">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Send us a Message</h4>
                <p className="text-center mb-6 text-muted-foreground max-w-md mx-auto">
                  Fill out the form below, or give us a call at{" "}
                  <a href="tel:+14255337351" className="text-primary hover:underline font-medium">
                    (425) 533-7351
                  </a>
                  , or send us an email at{" "}
                  <a href="mailto:Contact@CRPlumbing.biz" className="text-primary hover:underline font-medium">
                    Contact@CRPlumbing.biz
                  </a>
                  .
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section 
        className="bg-white text-gray-900 py-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${ForestBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-2xl font-bold mb-2">Need Plumbing Service?</h3>
          <p className="text-lg mb-4">Reach out today to schedule your service appointment!</p>
          <Button 
            size="lg" 
            className="text-xl px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 hover:shadow-md transition-all duration-200" 
            asChild
          >
            <a href="tel:+14255337351">
              <Phone className="w-6 h-6 mr-2" />
              (425) 533-7351
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <a href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
                <div className="bg-white rounded-full p-2 flex items-center justify-center">
                  <img src={CRPlumbingLogo} alt="CR Plumbing Logo" className="h-6 w-auto" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold">CR Plumbing</h4>
                  <p className="opacity-90">Professional Plumbing Services</p>
                </div>
              </a>
            </div>
            <div className="text-right">
              <p>&copy; 2025 CR Plumbing. All rights reserved.</p>
              <p className="mt-1">Website designed by <a href="https://vineyardtechnologies.org/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Vineyard Technologies</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App