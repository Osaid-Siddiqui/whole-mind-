import Image from "next/image"
import { Brain, Pill, Apple, Heart, Users, Video } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Holistic & Integrative Psychiatry",
    description:
      "Comprehensive psychiatric care that integrates evidence-based medicine with holistic approaches to address mind, body, and spirit.",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clinician offering supportive counseling in a calming space",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Individualized psychiatric evaluation and ongoing medication support, guided by evidence-based practices and compassionate care.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pharmacist preparing personalized medication plan",
  },
  {
    icon: Apple,
    title: "Nutritional Psychiatry",
    description:
      "Integrating nutrition and mental health science to optimize brain health, emotional balance, and overall wellness.",
    image: "https://images.unsplash.com/photo-1478749483989-2f5bb5f3cbfe?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Colorful whole foods arranged for balanced nutrition",
  },
  {
    icon: Heart,
    title: "Faith-Based Counseling",
    description:
      "Therapeutic support that honors your spiritual beliefs while providing compassionate, evidence-based care.",
    image: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands joined in reflection during faith-based therapy",
  },
  {
    icon: Users,
    title: "Mindfulness & Stress Reduction",
    description:
      "Practical techniques to cultivate awareness, manage stress, and promote emotional resilience in daily life.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Therapist guiding a group mindfulness session",
  },
  {
    icon: Video,
    title: "Lifestyle & Wellness Coaching",
    description:
      "Personalized guidance to optimize daily routines, sleep, nutrition, and overall mental and physical well-being.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Provider offering virtual lifestyle coaching",
  },
]

export function Services() {
  return (
    <section id="services" className="section-cover section-services py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="frosted-panel rounded-3xl px-6 py-8 md:px-10 md:py-12 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Evidence-based, holistic, and faith-informed care designed to nurture the mind, body, and spirit.
          </p>
        </div>

        {/* Services Grid */}
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
