import { Brain, Pill, Apple, Heart, Users, Video } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Counseling & Psychotherapy",
    description: "Individual, couples, and family therapy using evidence-based approaches tailored to your needs.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Comprehensive psychiatric evaluation and medication management with ongoing monitoring and support.",
  },
  {
    icon: Apple,
    title: "Nutritional Psychiatry",
    description:
      "Integrating nutrition science with mental health care to optimize brain health and emotional well-being.",
  },
  {
    icon: Heart,
    title: "Faith-Integrated Therapy",
    description:
      "Therapy that honors your spiritual beliefs and integrates faith-based principles into your healing journey.",
  },
  {
    icon: Users,
    title: "Behavioral Therapy",
    description: "Evidence-based behavioral interventions including CBT, DBT, and other therapeutic modalities.",
  },
  {
    icon: Video,
    title: "Telehealth Consultations",
    description: "Convenient, secure virtual appointments that bring quality care to you wherever you are.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive care designed to support your journey to wholeness
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
