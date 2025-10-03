"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "WholeMind changed my life. The integration of faith and therapy helped me find peace I didn't think was possible. The team truly cares about the whole person.",
    author: "Jennifer M.",
    location: "Tampa, FL",
  },
  {
    quote:
      "The nutritional psychiatry approach was a game-changer for me. I never realized how much my diet affected my mental health. Dr. Johnson is incredibly knowledgeable and compassionate.",
    author: "Robert T.",
    location: "Orlando, FL",
  },
  {
    quote:
      "After years of struggling, I finally found a place that understands me. The faith-based approach resonated deeply, and I've made more progress in 6 months than in years of traditional therapy.",
    author: "Maria S.",
    location: "Miami, FL",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-cover section-testimonials py-24">
      <div className="container mx-auto px-4">
        <div className="frosted-panel rounded-3xl px-6 py-10 md:px-12 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real stories of healing and transformation
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-center max-w-6xl mx-auto">
          <div className="grid gap-4">
            <div className="image-tile h-80">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80"
                alt="Client embracing a sense of hope after therapy"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 420px, (min-width:768px) 45vw, 90vw"
              />
              <span className="image-accent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="image-tile h-32">
                <Image
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                  alt="Support group celebrating progress together"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 200px, (min-width:768px) 22vw, 40vw"
                />
                <span className="image-accent" />
              </div>
              <div className="image-tile h-32">
                <Image
                  src="https://images.unsplash.com/photo-1551298375-0c5e0b1a2729?auto=format&fit=crop&w=900&q=80"
                  alt="Journaling progress as part of therapy journey"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 200px, (min-width:768px) 22vw, 40vw"
                />
                <span className="image-accent" />
              </div>
            </div>
          </div>
          <Card className="frosted-panel rounded-3xl border-border/40">
            <CardContent className="p-8 md:p-12">
              <Quote className="text-primary/30 mb-6" size={48} />
              <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 text-pretty">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="font-bold text-primary text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                    <ChevronLeft size={20} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
