import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Shield, Award, Wrench, Droplets, Flame, Zap, Mail } from "lucide-react"
import CRPlumbingLogo from '@/assets/images/logo.webp'
import ForestBackground from '@/assets/images/forest.webp'
import SeattleBackground from '@/assets/images/seattle.webp'
import PlumbingRepairsImage from '@/assets/images/plumbingRepairs.webp'
import PipeInstallationImage from '@/assets/images/pipeInstallation.webp'
import WaterHeaterImage from '@/assets/images/waterHeater.webp'
import DrainCleaningImage from '@/assets/images/drainCleaning.webp'

function App() {
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
    { icon: <Zap className="w-8 h-8" />, title: "Drain Cleaning", description: "Professional drain cleaning and unclogging for kitchens, bathrooms, and main lines", image: DrainCleaningImage }
  ]

  const serviceAreas = [
    "Bellevue", "Redmond", "Kirkland", "Sammamish", "Issaquah", "Mercer Island",
    "Newcastle", "Renton", "Woodinville", "Bothell", "Kent", "Federal Way", 
    "Tukwila", "SeaTac", "Burien"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={CRPlumbingLogo} alt="CR Plumbing Logo" className="h-10 w-auto" />
              <div>
                <h1 className="text-2xl font-bold">CR Plumbing</h1>
                <p className="text-sm opacity-90">Professional Plumbing Services</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Licensed | Bonded | Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Reliable Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Local Seattle Area Plumber</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="font-semibold"
              style={{ backgroundColor: '#64c6c4', color: 'white' }}
              asChild
            >
              <a href="mailto:Contact@CRPlumbing.biz">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${SeattleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Plumbing Services for the Seattle Eastside
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional, reliable plumbing solutions for your home. Licensed, bonded, and insured, and ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="mailto:Contact@CRPlumbing.biz">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-8" 
              style={{ backgroundColor: 'white', color: 'black', border: '1px solid #e5e7eb' }}
              onClick={scrollToContact}
            >
              Send us a Message
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
              <span className="text-sm font-medium">Local Seattle Area Plumber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" id="services">
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
                <div className="h-48 w-full relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Areas We Serve</h3>
            <p className="text-lg text-muted-foreground">
              Proudly serving the Seattle Eastside communities
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
      <section className="py-16" id="contact">
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
                    <p className="text-muted-foreground">Extensive experience serving Seattle Eastside homeowners with quality workmanship and reliable service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Local Seattle Area Plumber</h4>
                    <p className="text-muted-foreground">We live here just like you do. Our professional expertise is tailored to the Pacific Northwest, ensuring we address the unique plumbing needs of our community.</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-card">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Send us a Message</h4>
                <div className="flex justify-center">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfzOMcSKsenBQEnc3vOc_XxUecAHawYS5UO1kKSYz4RlUlN9Q/viewform?embedded=true" 
                    width="640" 
                    height="740" 
                    className="w-full max-w-full"
                    title="Contact Form"
                  >
                    Loading…
                  </iframe>
                </div>
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
            className="text-xl px-8 py-4" 
            style={{ backgroundColor: '#64c6c4', color: 'white' }}
            asChild
          >
            <a href="mailto:Contact@CRPlumbing.biz">
              <Mail className="w-6 h-6 mr-2" />
              Contact Us
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={CRPlumbingLogo} alt="CR Plumbing Logo" className="h-8 w-auto" />
                <h4 className="text-xl font-bold">CR Plumbing</h4>
              </div>
              <p className="mb-4">Professional plumbing services for the Seattle Eastside. Licensed, insured, and committed to quality workmanship.</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Seattle Eastside, WA
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Plumbing Repairs</li>
                <li>Pipe Installation & Repair</li>
                <li>Water Heater Services</li>
                <li>Drain Cleaning</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Service Areas</h4>
              <p className="mb-2">We proudly serve:</p>
              <p className="text-sm opacity-90">
                Bellevue, Redmond, Kirkland, Sammamish, Issaquah, Mercer Island, Newcastle, Renton, Woodinville, Bothell, Kent, Federal Way, Tukwila, SeaTac, Burien
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; 2025 CR Plumbing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App