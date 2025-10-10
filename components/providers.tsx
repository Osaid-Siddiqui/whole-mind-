"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Heart, GraduationCap, Award } from "lucide-react"

const providers = [
  {
    name: "Esther Amune, MSN, APRN, PMHNP-BC",
    title: "Founder & Lead Psychiatric Nurse Practitioner",
    credentials: "MSN, APRN, PMHNP-BC",
    bio: "Esther Amune is a compassionate and integrative psychiatric nurse practitioner specializing in holistic behavioral health. She combines evidence-based therapy, nutritional psychiatry, and faith-informed practices to empower individuals to achieve lasting wellness and emotional balance.",
    specialties: [
      "Holistic & Integrative Psychiatry",
      "Nutritional Psychiatry",
      "Faith-Based Counseling",
      "Mindfulness & Stress Reduction",
      "Medication Management",
      "Lifestyle & Wellness Coaching",
    ],
    photo: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  },
]

export function Providers() {
  const [selectedProvider, setSelectedProvider] = useState<(typeof providers)[0] | null>(null)

  return (
    <section id="providers" className="section-cover section-providers py-24">
      <div className="container mx-auto px-4">
        <div className="frosted-panel rounded-3xl px-6 py-10 md:px-12 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Founder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Meet Esther Amune, the founder and lead clinician, guiding WholeMind with compassion, expertise, and a holistic approach.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {providers.map((provider, index) => (
            <Card
              key={index}
              className="frosted-panel provider-card overflow-hidden rounded-3xl border-border/50 py-0 gap-0 transition-all duration-500"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={provider.photo}
                  alt={provider.name}
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 360px, (min-width:768px) 32vw, 90vw"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto -mt-12 border-4 border-background">
                  <Heart className="text-primary" size={36} />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary">{provider.name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{provider.title}</p>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <GraduationCap size={14} />
                    {provider.credentials}
                  </p>
                </div>
                <Button variant="outline" className="w-full" onClick={() => setSelectedProvider(provider)}>
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProvider} onOpenChange={() => setSelectedProvider(null)}>
        <DialogContent className="frosted-panel max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">{selectedProvider?.name}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedProvider?.title} • {selectedProvider?.credentials}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {selectedProvider?.photo && (
              <div className="image-tile h-56">
                <Image
                  src={selectedProvider.photo}
                  alt={selectedProvider.name}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 560px, 100vw"
                />
                <span className="image-accent" />
              </div>
            )}
            <p className="text-foreground/90 leading-relaxed">{selectedProvider?.bio}</p>
            <div>
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Award size={18} />
                Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProvider?.specialties.map((specialty, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
