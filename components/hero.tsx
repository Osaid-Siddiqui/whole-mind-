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
    <section
      id="home"
      className="section-cover section-home min-h-screen flex items-center justify-center relative py-24 pt-28 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="rounded-3xl px-6 py-12 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8 text-center lg:text-left">
              {/* Brand Essence Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-3 rounded-full bg-primary/20 px-6 py-3 text-sm font-semibold text-white uppercase tracking-wider">
                WholeMind Behavioral Health & Wellness
              </div>

              {/* Headline with Tagline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
                Healing the Mind
                <br />
                Nourishing the Soul
                <br />
                Restoring Wholeness
              </h1>

              {/* Supporting Mission Statement */}
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 text-pretty">
                Compassionate, evidence-based, and integrative behavioral health care addressing the whole person—mind,
                body, and spirit. We empower individuals to achieve lasting wellness and emotional balance.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button size="lg" onClick={scrollToReferral} className="px-8 py-6 text-lg text-white bg-white">
                  Make a Referral
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.querySelector("#about")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="image-tile h-64 sm:h-72 lg:h-80">
              <Image
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
                alt="Therapist guiding a mindful breathing exercise"
                fill
                className="object-cover rounded-2xl"
                sizes="(min-width:1280px) 480px, (min-width:768px) 45vw, 85vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="text-white" size={32} />
      </div>
    </section>
  )
}
