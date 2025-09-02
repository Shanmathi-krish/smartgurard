import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, EyeOff, AlertCircle, User, Mail, Lock, Truck, Phone } from 'lucide-react'

const DriverSignup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    vehicleId: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    }
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as Record<string, any>),
          [child]: value
        }
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.vehicleId.trim()) {
      newErrors.vehicleId = 'Vehicle ID is required'
    }

    if (!formData.emergencyContact.name.trim()) {
      newErrors['emergencyContact.name'] = 'Emergency contact name is required'
    }

    if (!formData.emergencyContact.phone.trim()) {
      newErrors['emergencyContact.phone'] = 'Emergency contact phone is required'
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.emergencyContact.phone)) {
      newErrors['emergencyContact.phone'] = 'Please enter a valid phone number'
    }

    if (!formData.emergencyContact.relationship.trim()) {
      newErrors['emergencyContact.relationship'] = 'Relationship to emergency contact is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulate successful signup
      localStorage.setItem('smartguard-auth', 'true')
      localStorage.setItem('smartguard-role', 'driver')
      localStorage.setItem('smartguard-user', JSON.stringify({
        id: 'driver-new',
        name: formData.name,
        email: formData.email,
        role: 'driver',
        vehicleId: formData.vehicleId,
        emergencyContact: formData.emergencyContact
      }))
      
      navigate('/driver')
    } catch (error) {
      setErrors({ general: 'Signup failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900">
            <Shield className="h-8 w-8 text-primary" />
            <span>SmartGuard</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Driver Registration</CardTitle>
            <CardDescription>
              Create your account to start monitoring your safety on the road
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <div className="flex items-center space-x-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">{errors.general}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Personal Information</span>
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? 'border-destructive' : ''}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'border-destructive' : ''}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicleId" className="text-base">
                      Vehicle ID
                    </Label>
                    <Input
                      id="vehicleId"
                      name="vehicleId"
                      type="text"
                      placeholder="Enter your vehicle ID"
                      value={formData.vehicleId}
                      onChange={handleInputChange}
                      className={errors.vehicleId ? 'border-destructive' : ''}
                      aria-describedby={errors.vehicleId ? 'vehicleId-error' : undefined}
                      aria-invalid={!!errors.vehicleId}
                    />
                    {errors.vehicleId && (
                      <p id="vehicleId-error" className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.vehicleId}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Security & Emergency Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Lock className="h-5 w-5" />
                    <span>Security</span>
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-base">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={errors.password ? 'border-destructive pr-10' : 'pr-10'}
                        aria-describedby={errors.password ? 'password-error' : undefined}
                        aria-invalid={!!errors.password}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p id="password-error" className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.password}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-base">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={errors.confirmPassword ? 'border-destructive pr-10' : 'pr-10'}
                        aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                        aria-invalid={!!errors.confirmPassword}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p id="confirmPassword-error" className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.confirmPassword}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Emergency Contact</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact.name" className="text-base">
                      Contact Name
                    </Label>
                    <Input
                      id="emergencyContact.name"
                      name="emergencyContact.name"
                      type="text"
                      placeholder="Full name"
                      value={formData.emergencyContact.name}
                      onChange={handleInputChange}
                      className={errors['emergencyContact.name'] ? 'border-destructive' : ''}
                      aria-describedby={errors['emergencyContact.name'] ? 'emergency-name-error' : undefined}
                      aria-invalid={!!errors['emergencyContact.name']}
                    />
                    {errors['emergencyContact.name'] && (
                      <p id="emergency-name-error" className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors['emergencyContact.name']}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact.phone" className="text-base">
                      Phone Number
                    </Label>
                    <Input
                      id="emergencyContact.phone"
                      name="emergencyContact.phone"
                      type="tel"
                      placeholder="Phone number"
                      value={formData.emergencyContact.phone}
                      onChange={handleInputChange}
                      className={errors['emergencyContact.phone'] ? 'border-destructive' : ''}
                      aria-describedby={errors['emergencyContact.phone'] ? 'emergency-phone-error' : undefined}
                      aria-invalid={!!errors['emergencyContact.phone']}
                    />
                    {errors['emergencyContact.phone'] && (
                      <p id="emergency-phone-error" className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors['emergencyContact.phone']}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact.relationship" className="text-base">
                      Relationship
                    </Label>
                    <Input
                      id="emergencyContact.relationship"
                      name="emergencyContact.relationship"
                      type="text"
                      placeholder="e.g., Spouse, Parent"
                      value={formData.emergencyContact.relationship}
                      onChange={handleInputChange}
                      className={errors['emergencyContact.relationship'] ? 'border-destructive' : ''}
                      aria-describedby={errors['emergencyContact.relationship'] ? 'emergency-relationship-error' : undefined}
                      aria-invalid={!!errors['emergencyContact.relationship']}
                    />
                    {errors['emergencyContact.relationship'] && (
                      <p id="emergency-relationship-error" className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors['emergencyContact.relationship']}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading}
                aria-describedby={isLoading ? 'loading-description' : undefined}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
                {isLoading && (
                  <span id="loading-description" className="sr-only">
                    Please wait while we create your account
                  </span>
                )}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link 
                  to="/driver/login" 
                  className="text-primary hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  Sign in here
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link 
            to="/fleet/signup" 
            className="text-sm text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Are you a fleet manager? Sign up here
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default DriverSignup

