"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  // Motion fade in/out on scroll
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -60 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white p-8 lg:p-12"
            >
              <div className="max-w-md">
                <div className="mb-8">
                  <p className="text-black font-semibold text-sm tracking-wider uppercase mb-4">CONTACT US</p>
                  <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">Get in touch today</h1>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We love questions and feedback - and we're always happy to help! Here are some ways to contact us.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email:</p>
                      <p className="text-black font-medium">support@apexweb.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone:</p>
                      <p className="text-black font-medium">(123) 123-3213-23</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 60 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-gray-50 p-8 lg:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                    Company (optional)
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                    Leave us a message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] resize-none"
                    required
                  />
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-sm text-gray-600">I'm not a robot</span>
                  <div className="ml-auto">
                    <div className="text-xs text-gray-400">
                      reCAPTCHA
                      <br />
                      Privacy - Terms
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-black/90 text-white py-3 text-base font-medium"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
