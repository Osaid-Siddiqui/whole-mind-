"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GraduationCap, Award, Heart } from "lucide-react"

const providers = [
  {
    name: "Dr. Sarah Johnson, MD",
    title: "Psychiatrist & Medical Director",
    credentials: "MD, Board Certified in Psychiatry",
    bio: "Dr. Johnson brings over 15 years of experience in integrative psychiatry, specializing in medication management and nutritional psychiatry. She completed her residency at Johns Hopkins and has a passion for helping patients achieve lasting wellness through holistic approaches.",
    specialties: ["Medication Management", "Nutritional Psychiatry", "Anxiety & Depression"],
  },
  {
    name: "Michael Chen, LMHC",
    title: "Licensed Mental Health Counselor",
    credentials: "LMHC, MA in Clinical Psychology",
    bio: "Michael specializes in faith-integrated therapy and cognitive behavioral therapy. With a decade of experience, he helps individuals and families navigate life transitions, trauma, and relationship challenges with compassion and evidence-based techniques.",
    specialties: ["Faith-Based Therapy", "CBT", "Trauma Recovery"],
  },
  {
    name: "Dr. Emily Rodriguez, PsyD",
    title: "Clinical Psychologist",
    credentials: "PsyD, Licensed Clinical Psychologist",
    bio: "Dr. Rodriguez specializes in behavioral therapy and psychological assessment. She has extensive training in DBT and works with adolescents and adults facing mood disorders, personality disorders, and behavioral challenges.",
    specialties: ["DBT", "Psychological Assessment", "Adolescent Therapy"],
  },
]

export function Providers() {
  const [selectedProvider, setSelectedProvider] = useState<(typeof providers)[0] | null>(null)

  return (
    <section id="providers" className="py-24 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Providers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Meet our compassionate team of experienced professionals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {providers.map((provider, index) => (
            <Card key={index} className="glass border-border/50 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
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
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                  onClick={() => setSelectedProvider(provider)}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProvider} onOpenChange={() => setSelectedProvider(null)}>
        <DialogContent className="glass max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">{selectedProvider?.name}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedProvider?.title} • {selectedProvider?.credentials}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
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
