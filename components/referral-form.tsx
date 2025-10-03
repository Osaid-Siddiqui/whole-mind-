"use client"

import type React from "react"

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
    <section id="referral" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Make a Referral</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Start your journey to wholeness today
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Referral Form</CardTitle>
              <CardDescription>Complete this form to refer yourself or a patient to our practice</CardDescription>
            </CardHeader>
            <CardContent>
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
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input id="dob" name="dob" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="insurance">Insurance Provider</Label>
                      <Input id="insurance" name="insurance" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Referral *</Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        rows={4}
                        placeholder="Please describe your concerns and what you're hoping to address..."
                        required
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
                        I consent to WholeMind Behavioral Health & Wellness contacting me regarding this referral and
                        understand that my information will be kept confidential in accordance with HIPAA regulations.
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

                <TabsContent value="provider">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="referralType" value="provider" />
                    <div className="space-y-4 mb-6 p-4 bg-primary/5 rounded-lg">
                      <h3 className="font-semibold text-primary">Provider Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="providerName">Provider Name *</Label>
                          <Input id="providerName" name="providerName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="providerPhone">Provider Phone *</Label>
                          <Input id="providerPhone" name="providerPhone" type="tel" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="providerEmail">Provider Email *</Label>
                        <Input id="providerEmail" name="providerEmail" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="practice">Practice/Organization</Label>
                        <Input id="practice" name="practice" />
                      </div>
                    </div>

                    <h3 className="font-semibold text-primary">Patient Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patientFirstName">Patient First Name *</Label>
                        <Input id="patientFirstName" name="patientFirstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="patientLastName">Patient Last Name *</Label>
                        <Input id="patientLastName" name="patientLastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patientEmail">Patient Email</Label>
                      <Input id="patientEmail" name="patientEmail" type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patientPhone">Patient Phone *</Label>
                      <Input id="patientPhone" name="patientPhone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patientDob">Patient Date of Birth *</Label>
                      <Input id="patientDob" name="patientDob" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="diagnosis">Diagnosis/Presenting Concerns *</Label>
                      <Textarea
                        id="diagnosis"
                        name="diagnosis"
                        rows={4}
                        placeholder="Please provide relevant diagnoses and clinical information..."
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <select
                        id="urgency"
                        name="urgency"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="routine">Routine</option>
                        <option value="urgent">Urgent (within 1 week)</option>
                        <option value="emergency">Emergency (immediate attention)</option>
                      </select>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="providerConsent"
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(checked as boolean)}
                        required
                      />
                      <Label htmlFor="providerConsent" className="text-sm leading-relaxed cursor-pointer">
                        I confirm that I have obtained appropriate consent from the patient to make this referral and
                        share their information with WholeMind Behavioral Health & Wellness.
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
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
