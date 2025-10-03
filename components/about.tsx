import Image from "next/image"

export function About() {
  return (
    <section id="about" className="section-cover section-about py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="frosted-panel rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center lg:text-left mb-4">About Us</h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p className="text-pretty">
                At <strong>WholeMind Behavioral Health & Wellness</strong>, we believe that true healing encompasses the
                mind, body, and spirit. Our mission is to provide compassionate, comprehensive care that addresses the
                whole person.
              </p>
              <p className="text-pretty">
                We integrate evidence-based therapeutic approaches with faith-based principles and nutritional
                psychiatry to create personalized treatment plans that honor your unique journey toward wellness.
              </p>
              <p className="text-pretty">
                Our holistic approach recognizes that mental health is deeply connected to physical health, spiritual
                well-being, and lifestyle choices. We partner with you to restore balance, build resilience, and
                cultivate lasting wholeness.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-6 glass-dark rounded-xl">
                <h3 className="font-bold text-xl text-primary mb-2">Faith-Based</h3>
                <p className="text-sm text-muted-foreground">
                  Integrating spiritual principles with clinical excellence
                </p>
              </div>
              <div className="text-center p-6 glass-dark rounded-xl">
                <h3 className="font-bold text-xl text-primary mb-2">Holistic</h3>
                <p className="text-sm text-muted-foreground">Treating the whole person—mind, body, and spirit</p>
              </div>
              <div className="text-center p-6 glass-dark rounded-xl">
                <h3 className="font-bold text-xl text-primary mb-2">Nutritional</h3>
                <p className="text-sm text-muted-foreground">Leveraging nutrition to support mental wellness</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="image-tile h-64 md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="WholeMind clinicians collaborating on integrative care plans"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 340px, (min-width:768px) 40vw, 90vw"
              />
              <span className="image-accent" />
            </div>
            <div className="grid gap-4">
              <div className="image-tile h-40">
                <Image
                  src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=900&q=80"
                  alt="Client journaling during a mindfulness exercise"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 300px, (min-width:768px) 35vw, 80vw"
                />
                <span className="image-accent" />
              </div>
              <div className="image-tile h-40">
                <Image
                  src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=900&q=80"
                  alt="Nutrient-dense ingredients supporting mental wellness"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 300px, (min-width:768px) 35vw, 80vw"
                />
                <span className="image-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
