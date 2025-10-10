import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, UnitedHealthcare, Cigna, and Medicare. Please contact our office to confirm your specific plan coverage and any requirements.",
  },
  {
    question: "Do you offer telehealth appointments?",
    answer:
      "Yes! We provide secure telehealth appointments for most services, allowing you to receive compassionate, evidence-based care from the comfort of your home.",
  },
  {
    question: "What is nutritional psychiatry?",
    answer:
      "Nutritional psychiatry explores the connection between diet, nutrition, and mental health. We integrate evidence-based nutritional strategies to support brain health, emotional well-being, and overall holistic care.",
  },
  {
    question: "How does faith-based therapy work?",
    answer:
      "Faith-based therapy honors your spiritual beliefs and integrates them into the therapeutic process. We combine your faith perspective with evidence-based clinical approaches to support healing and personal growth.",
  },
  {
    question: "How long are typical appointments?",
    answer:
      "Initial evaluations generally last 60-90 minutes. Follow-up therapy sessions typically last 45-60 minutes, and medication management appointments are around 20-30 minutes.",
  },
  {
    question: "What ages do you serve?",
    answer:
      "We provide services for adolescents (ages 13+) and adults. For younger children, we can refer you to specialized pediatric providers.",
  },
  {
    question: "How do I make a referral?",
    answer:
      "Referrals can be made online, by phone, or by having your healthcare provider fax a referral. We accept both patient self-referrals and provider referrals.",
  },
  {
    question: "What should I expect at my first appointment?",
    answer:
      "Your first appointment includes a comprehensive evaluation covering your history, concerns, and goals. This helps us create a personalized, holistic treatment plan for your unique needs.",
  },
  {
    question: "Do you prescribe medication?",
    answer:
      "Our clinicians may prescribe medication when clinically appropriate. We emphasize a holistic approach, considering therapy, lifestyle, nutrition, and faith-informed care alongside medication.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "We aim to schedule new patients within 1-2 weeks. For urgent situations, please contact our office to discuss expedited scheduling options.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-cover section-faq py-24">
      <div className="container mx-auto px-4">
        <div className="frosted-panel rounded-3xl px-6 py-10 md:px-12 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find answers to common questions about our holistic, integrative, and faith-informed behavioral health services.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start max-w-6xl mx-auto">
          <div className="grid gap-4">
            <div className="image-tile h-80">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                alt="WholeMind team member answering client questions"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 420px, (min-width:768px) 45vw, 90vw"
              />
              <span className="image-accent" />
            </div>
            <div className="image-tile h-40">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Collaborative approach to behavioral health care"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 320px, (min-width:768px) 40vw, 90vw"
              />
              <span className="image-accent" />
            </div>
          </div>
          <div className="frosted-panel rounded-3xl p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="frosted-panel rounded-xl px-6 py-4 border-border/40">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
