import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, MapPin, Clock, Shield, Award, Wrench, Droplets, Flame, Zap } from "@phosphor-icons/react"
import { useState } from "react"
import { toast } from "sonner"

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Thank you! We'll contact you within 24 hours.")
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const services = [
    { icon: <Wrench className="w-8 h-8" />, title: "Emergency Repairs", description: "Fast emergency plumbing repairs for burst pipes, major leaks, and urgent issues" },
    { icon: <Droplets className="w-8 h-8" />, title: "Pipe Installation & Repair", description: "Professional pipe installation, repair, and replacement for all plumbing systems" },
    { icon: <Flame className="w-8 h-8" />, title: "Water Heater Services", description: "Water heater installation, repair, maintenance, and energy-efficient upgrades" },
    { icon: <Zap className="w-8 h-8" />, title: "Drain Cleaning", description: "Professional drain cleaning and unclogging for kitchens, bathrooms, and main lines" }
  ]

  const serviceAreas = [
    "Bellevue", "Redmond", "Kirkland", "Sammamish", "Issaquah", "Mercer Island",
    "Newcastle", "Renton", "Woodinville", "Bothell"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">CR Plumbing</h1>
              <p className="text-sm opacity-90">Professional Plumbing Services</p>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Seattle Eastside</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Reliable Service</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold animate-pulse"
            >
              <Phone className="w-4 h-4 mr-2" />
              (425) 555-PIPE
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Plumbing Services for the Seattle Eastside
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional, reliable plumbing solutions for your home. Licensed, insured, and ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call for Emergency Service
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Schedule Service
            </Button>
          </div>
          <div className="flex justify-center items-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Reliable Service</span>
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
              From emergency repairs to new installations, we handle all your plumbing needs with professional expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
      <section className="py-16">
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
                    <h4 className="text-xl font-semibold mb-2">Licensed & Insured</h4>
                    <p className="text-muted-foreground">Fully licensed Washington State contractor with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Emergency Service Available</h4>
                    <p className="text-muted-foreground">Plumbing emergencies happen at inconvenient times. We offer priority emergency service for urgent repairs.</p>
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
              </div>
            </div>
            <Card className="bg-card">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Get a Free Estimate</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <Input
                      id="service"
                      placeholder="e.g., Leaky faucet, water heater repair..."
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your plumbing issue..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Request Free Estimate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Plumbing Emergency?</h3>
          <p className="text-lg mb-4">Don't wait - call now for immediate assistance!</p>
          <Button size="lg" variant="secondary" className="text-xl px-8 py-4">
            <Phone className="w-6 h-6 mr-2" />
            (425) 555-PIPE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">CR Plumbing</h4>
              <p className="mb-4">Professional plumbing services for the Seattle Eastside. Licensed, insured, and committed to quality workmanship.</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (425) 555-PIPE
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Seattle Eastside, WA
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Emergency Plumbing Repairs</li>
                <li>Water Heater Installation & Repair</li>
                <li>Pipe Installation & Replacement</li>
                <li>Drain Cleaning & Unclogging</li>
                <li>Bathroom & Kitchen Plumbing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Service Areas</h4>
              <p className="mb-2">We proudly serve:</p>
              <p className="text-sm opacity-90">
                Bellevue, Redmond, Kirkland, Sammamish, Issaquah, Mercer Island, Newcastle, Renton, Woodinville, Bothell
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; 2024 CR Plumbing. Licensed & Insured. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App