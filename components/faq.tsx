import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, UnitedHealthcare, Cigna, and Medicare. Please contact our office to verify your specific plan coverage.",
  },
  {
    question: "Do you offer telehealth appointments?",
    answer:
      "Yes! We offer secure telehealth appointments for most services. This allows you to receive quality care from the comfort of your home.",
  },
  {
    question: "What is nutritional psychiatry?",
    answer:
      "Nutritional psychiatry is an emerging field that explores the relationship between diet, nutrition, and mental health. We integrate evidence-based nutritional interventions to support brain health and emotional well-being alongside traditional treatments.",
  },
  {
    question: "How does faith-based therapy work?",
    answer:
      "Faith-based therapy integrates your spiritual beliefs and values into the therapeutic process. We respect and honor your faith tradition while using evidence-based clinical approaches to support your healing journey.",
  },
  {
    question: "How long are typical appointments?",
    answer:
      "Initial evaluations typically last 60-90 minutes. Follow-up therapy sessions are usually 45-60 minutes, while medication management appointments are typically 20-30 minutes.",
  },
  {
    question: "What ages do you serve?",
    answer:
      "We provide services for adolescents (ages 13+) and adults. For younger children, we can provide referrals to specialized pediatric providers.",
  },
  {
    question: "How do I make a referral?",
    answer:
      "You can make a referral by completing our online referral form below, calling our office, or having your healthcare provider fax a referral to us. We accept both patient self-referrals and provider referrals.",
  },
  {
    question: "What should I expect at my first appointment?",
    answer:
      "Your first appointment will be a comprehensive evaluation where we discuss your concerns, medical history, and treatment goals. This helps us create a personalized treatment plan tailored to your needs.",
  },
  {
    question: "Do you prescribe medication?",
    answer:
      "Our psychiatrists can prescribe medication when clinically appropriate. We take a holistic approach and consider all treatment options, including therapy, lifestyle changes, and nutritional interventions.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "We strive to schedule new patients within 1-2 weeks. For urgent situations, please call our office to discuss expedited scheduling options.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-cover section-faq py-24">
      <div className="container mx-auto px-4">
        <div className="frosted-panel rounded-3xl px-6 py-10 md:px-12 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find answers to common questions about our services
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
