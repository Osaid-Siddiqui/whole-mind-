"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [consent, setConsent] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Referral Submitted",
          description: "Thank you! We will contact you within 1-2 business days.",
        })
        e.currentTarget.reset()
        setConsent(false)
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or call our office.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="referral" className="section-cover section-referral py-24">
      <div className="container mx-auto px-4">
        <div className="frosted-panel rounded-3xl px-6 py-10 md:px-12 text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Make a Referral</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Start your journey to wholeness today
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="image-tile h-80">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80"
                alt="Clinician welcoming a new client to WholeMind"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 420px, (min-width:768px) 45vw, 90vw"
              />
              <span className="image-accent" />
            </div>
            <div className="image-tile h-40">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
                alt="Healthy lifestyle tools supporting recovery"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 320px, (min-width:768px) 40vw, 90vw"
              />
              <span className="image-accent" />
            </div>
          </div>

          {/* Updated Card */}
          <Card className="frosted-panel border-border/50 bg-black/40 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Referral Form</CardTitle>
              <CardDescription className="text-gray-200">
                Complete this form to refer yourself or a patient to our practice
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="text-white"> {/* Make all text readable */}
                <Tabs defaultValue="patient" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="patient">Patient Self-Referral</TabsTrigger>
                    <TabsTrigger value="provider">Provider Referral</TabsTrigger>
                  </TabsList>

                  <TabsContent value="patient">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="referralType" value="patient" />
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            className="text-white placeholder-gray-300 bg-black/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            className="text-white placeholder-gray-300 bg-black/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="text-white placeholder-gray-300 bg-black/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="text-white placeholder-gray-300 bg-black/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input
                          id="dob"
                          name="dob"
                          type="date"
                          required
                          className="text-white placeholder-gray-300 bg-black/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="insurance">Insurance Provider</Label>
                        <Input
                          id="insurance"
                          name="insurance"
                          className="text-white placeholder-gray-300 bg-black/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason">Reason for Referral *</Label>
                        <Textarea
                          id="reason"
                          name="reason"
                          rows={4}
                          placeholder="Please describe your concerns and what you're hoping to address..."
                          required
                          className="text-white placeholder-gray-300 bg-black/20"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="consent"
                          checked={consent}
                          onCheckedChange={(checked) => setConsent(checked as boolean)}
                          required
                        />
                        <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                          I consent to WholeMind Behavioral Health & Wellness contacting me regarding this referral
                          and understand that my information will be kept confidential in accordance with HIPAA
                          regulations.
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={isSubmitting || !consent}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Referral"
                        )}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Provider Tab content can be updated similarly */}
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
