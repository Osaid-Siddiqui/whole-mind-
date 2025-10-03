import Image from "next/image"
import { Brain, Pill, Apple, Heart, Users, Video } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Counseling & Psychotherapy",
    description: "Individual, couples, and family therapy using evidence-based approaches tailored to your needs.",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clinician offering supportive counseling in a calming space",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Comprehensive psychiatric evaluation and medication management with ongoing monitoring and support.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pharmacist preparing personalized medication plan",
  },
  {
    icon: Apple,
    title: "Nutritional Psychiatry",
    description:
      "Integrating nutrition science with mental health care to optimize brain health and emotional well-being.",
    image: "https://images.unsplash.com/photo-1478749483989-2f5bb5f3cbfe?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Colorful whole foods arranged for balanced nutrition",
  },
  {
    icon: Heart,
    title: "Faith-Integrated Therapy",
    description:
      "Therapy that honors your spiritual beliefs and integrates faith-based principles into your healing journey.",
    image: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands joined in reflection during faith-based therapy",
  },
  {
    icon: Users,
    title: "Behavioral Therapy",
    description: "Evidence-based behavioral interventions including CBT, DBT, and other therapeutic modalities.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Therapist guiding a group cognitive behavioral session",
  },
  {
    icon: Video,
    title: "Telehealth Consultations",
    description: "Convenient, secure virtual appointments that bring quality care to you wherever you are.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Provider offering virtual telehealth consultation",
  },
]

export function Services() {
  return (
    <section id="services" className="section-cover section-services py-24">
      <div className="container mx-auto px-4">
        <div className="frosted-panel rounded-3xl px-6 py-8 md:px-10 md:py-12 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Comprehensive care designed to support your journey to wholeness
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="frosted-panel rounded-2xl p-6 transition-all duration-500">
                <div className="image-tile h-36 mb-5">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width:1280px) 320px, (min-width:768px) 38vw, 90vw"
                  />
                  <span className="image-accent" />
                </div>
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
