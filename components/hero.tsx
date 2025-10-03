"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToReferral = () => {
    const element = document.querySelector("#referral")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="section-cover section-home min-h-screen flex items-center justify-center relative py-24 pt-28">
      <div className="container mx-auto px-4">
        <div className="frosted-panel rounded-3xl px-6 py-12 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-3 rounded-full bg-primary/10 px-6 py-3 text-sm font-semibold text-primary uppercase tracking-wider">
                Holistic Behavioral Health
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight text-balance">
                Healing the Mind
                <br />
                Nourishing the Soul
                <br />
                Restoring Wholeness
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
                Compassionate, faith-based behavioral health care that integrates holistic wellness and nutritional
                psychiatry
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button size="lg" onClick={scrollToReferral} className="px-8 py-6 text-lg">
                  Make a Referral
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.querySelector("#about")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="border-primary text-primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="grid gap-4 lg:gap-6">
              <div className="image-tile h-64 sm:h-72 lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
                  alt="Therapist guiding a mindful breathing exercise"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 480px, (min-width:768px) 45vw, 85vw"
                  priority
                />
                <span className="image-accent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="image-tile h-32 sm:h-36 lg:h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1521510895919-46920266ddb4?auto=format&fit=crop&w=900&q=80"
                    alt="Warm counseling office with natural light"
                    fill
                    className="object-cover"
                    sizes="(min-width:1280px) 220px, (min-width:768px) 22vw, 40vw"
                  />
                  <span className="image-accent" />
                </div>
                <div className="image-tile h-32 sm:h-36 lg:h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=900&q=80"
                    alt="Faith-integrated therapy session"
                    fill
                    className="object-cover"
                    sizes="(min-width:1280px) 220px, (min-width:768px) 22vw, 40vw"
                  />
                  <span className="image-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  )
}
