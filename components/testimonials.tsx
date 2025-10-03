"use client"

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
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real stories of healing and transformation
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12">
              <Quote className="text-primary/30 mb-6" size={48} />
              <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 text-pretty">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-primary text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    aria-label="Next testimonial"
                  >
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
