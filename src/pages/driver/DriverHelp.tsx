import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { HelpCircle, MessageCircle, FileText, ChevronDown, ChevronUp, Mail, Phone, MessageSquare } from 'lucide-react'

const DriverHelp = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const faqs = [
    {
      question: "How does SmartGuard detect drowsiness?",
      answer: "SmartGuard uses advanced AI algorithms to analyze your facial features, eye movements, and head position through your device's camera. It continuously monitors these indicators to detect signs of drowsiness and alerts you when necessary."
    },
    {
      question: "What should I do if I receive a drowsiness alert?",
      answer: "If you receive a drowsiness alert, immediately pull over to a safe location and take a break. Get out of your vehicle, stretch, and consider taking a short nap if needed. Never continue driving when drowsy."
    },
    {
      question: "How accurate is the health monitoring?",
      answer: "Our health monitoring system provides real-time data with high accuracy. However, it's not a substitute for professional medical advice. Always consult healthcare professionals for medical concerns."
    },
    {
      question: "Can I use SmartGuard at night?",
      answer: "Yes, SmartGuard works in various lighting conditions including low-light and night driving. The system automatically adjusts to different lighting environments to maintain accuracy."
    },
    {
      question: "How do I update my emergency contacts?",
      answer: "Go to your Profile section and navigate to Emergency Contacts. You can add, edit, or remove contacts as needed. Make sure to keep this information up to date."
    },
    {
      question: "What happens when I press the Emergency SOS button?",
      answer: "The Emergency SOS button immediately contacts emergency services and your emergency contacts with your location and vehicle information. Only use this in genuine emergency situations."
    }
  ]

  const troubleshootingSteps = [
    {
      step: 1,
      title: "Check Camera Access",
      description: "Ensure SmartGuard has permission to access your device's camera. Go to your device settings and verify camera permissions are enabled."
    },
    {
      step: 2,
      title: "Restart the Application",
      description: "Close SmartGuard completely and restart it. This often resolves temporary glitches and connectivity issues."
    },
    {
      step: 3,
      title: "Check Internet Connection",
      description: "Verify you have a stable internet connection. SmartGuard requires internet access for real-time monitoring and alerts."
    },
    {
      step: 4,
      title: "Update the App",
      description: "Make sure you're using the latest version of SmartGuard. Check your app store for available updates."
    },
    {
      step: 5,
      title: "Clear Cache and Data",
      description: "If issues persist, try clearing the app's cache and data. This will reset the app to its default state."
    }
  ]

  const handleFaqToggle = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API call to submit contact form
    console.log('Contact form submitted:', contactForm)
    alert('Thank you for your message. We\'ll get back to you soon!')
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
        <p className="text-gray-600">Find answers to common questions and get help when you need it.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                <CardTitle>Frequently Asked Questions</CardTitle>
              </div>
              <CardDescription>
                Quick answers to common questions about SmartGuard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border rounded-lg"
                >
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <CardTitle>Contact Support</CardTitle>
              </div>
              <CardDescription>
                Get in touch with our support team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="pt-4 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Other Ways to Reach Us</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>support@smartguard.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>1-800-SMARTGUARD</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Live Chat (24/7)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Troubleshooting Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <CardTitle>Troubleshooting Guide</CardTitle>
            </div>
            <CardDescription>
              Common issues and how to resolve them
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {troubleshootingSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 border rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default DriverHelp
