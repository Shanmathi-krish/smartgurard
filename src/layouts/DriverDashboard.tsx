import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  Menu, 
  X, 
  User, 
  Phone, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Activity,
  Heart,
  Thermometer,
  Droplets,
  AlertTriangle,
  Bell,
  MapPin
} from 'lucide-react'

const DriverDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  // TODO: Replace with actual user data from context/API
  const user = JSON.parse(localStorage.getItem('smartguard-user') || '{}')
  
  const handleLogout = () => {
    localStorage.removeItem('smartguard-auth')
    localStorage.removeItem('smartguard-role')
    localStorage.removeItem('smartguard-user')
    navigate('/')
  }

  const navigation = [
    { name: 'Dashboard', href: '/driver', icon: Activity, current: location.pathname === '/driver' },
    { name: 'Profile', href: '/driver/profile', icon: User, current: location.pathname === '/driver/profile' },
    { name: 'Emergency Contacts', href: '/driver/emergency-contacts', icon: Phone, current: location.pathname === '/driver/emergency-contacts' },
    { name: 'Settings', href: '/driver/settings', icon: Settings, current: location.pathname === '/driver/settings' },
    { name: 'Help & Support', href: '/driver/help', icon: HelpCircle, current: location.pathname === '/driver/help' },
  ]

  // Dummy data for demonstration
  const drowsinessStatus = {
    status: 'safe', // 'safe' | 'warning' | 'critical'
    level: 15,
    lastUpdated: '2 minutes ago'
  }

  const vitals = {
    heartRate: { value: 72, unit: 'bpm', status: 'normal' },
    temperature: { value: 98.6, unit: '°F', status: 'normal' },
    bloodPressure: { value: '120/80', unit: 'mmHg', status: 'normal' }
  }

  const notifications = [
    { id: 1, type: 'info', message: 'Route updated - ETA 2:30 PM', time: '5 min ago' },
    { id: 2, type: 'warning', message: 'Take a break in 30 minutes', time: '15 min ago' },
    { id: 3, type: 'success', message: 'Safety check completed', time: '1 hour ago' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-safe'
      case 'warning': return 'text-warning'
      case 'critical': return 'text-critical'
      default: return 'text-gray-600'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-safe/10'
      case 'warning': return 'bg-warning/10'
      case 'critical': return 'bg-critical/10'
      default: return 'bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: sidebarOpen ? 0 : -100 }}
        transition={{ type: 'spring', damping: 20 }}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">SmartGuard</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{user.name || 'Driver'}</p>
                <p className="text-xs text-gray-500">Professional Driver</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.href)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.current
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full justify-start"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-white border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Notifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Current Location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
          
          {/* Default dashboard content when no route is selected */}
          {location.pathname === '/driver' && (
            <div className="space-y-6">
              {/* Welcome */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back, {user.name || 'Driver'}!
                </h1>
                <p className="text-gray-600">
                  Here's your current safety status and vital information.
                </p>
              </div>

              {/* Drowsiness Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className={`h-5 w-5 ${getStatusColor(drowsinessStatus.status)}`} />
                    <span>Drowsiness Status</span>
                  </CardTitle>
                  <CardDescription>
                    Last updated: {drowsinessStatus.lastUpdated}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getStatusBg(drowsinessStatus.status)}`}>
                        <span className={`text-2xl font-bold ${getStatusColor(drowsinessStatus.status)}`}>
                          {drowsinessStatus.level}%
                        </span>
                      </div>
                      <div>
                        <p className={`text-lg font-semibold capitalize ${getStatusColor(drowsinessStatus.status)}`}>
                          {drowsinessStatus.status}
                        </p>
                        <p className="text-sm text-gray-600">
                          Drowsiness Level: {drowsinessStatus.level}%
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Vehicle ID</p>
                      <p className="font-mono text-lg">{user.vehicleId || 'TRK-001'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vital Signs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span>Heart Rate</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">
                      {vitals.heartRate.value}
                      <span className="text-lg text-gray-500 ml-1">{vitals.heartRate.unit}</span>
                    </div>
                    <p className="text-sm text-gray-600 capitalize">
                      Status: {vitals.heartRate.status}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Thermometer className="h-5 w-5 text-orange-500" />
                      <span>Temperature</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">
                      {vitals.temperature.value}
                      <span className="text-lg text-gray-500 ml-1">{vitals.temperature.unit}</span>
                    </div>
                    <p className="text-sm text-gray-600 capitalize">
                      Status: {vitals.temperature.status}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Droplets className="h-5 w-5 text-blue-500" />
                      <span>Blood Pressure</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">
                      {vitals.bloodPressure.value}
                      <span className="text-lg text-gray-500 ml-1">{vitals.bloodPressure.unit}</span>
                    </div>
                    <p className="text-sm text-gray-600 capitalize">
                      Status: {vitals.bloodPressure.status}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                  <CardDescription>
                    Latest updates and alerts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            notification.type === 'warning' ? 'bg-warning' :
                            notification.type === 'critical' ? 'bg-critical' :
                            notification.type === 'success' ? 'bg-safe' : 'bg-primary'
                          }`} />
                          <span className="text-sm text-gray-900">{notification.message}</span>
                        </div>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>

      {/* Emergency SOS Button */}
      <button
        className="sos-button"
        onClick={() => {
          // TODO: Implement emergency SOS functionality
          alert('Emergency SOS activated! Emergency services will be contacted immediately.')
        }}
        aria-label="Emergency SOS - Click to activate emergency response"
      >
        <AlertTriangle className="h-8 w-8 mx-auto" />
      </button>
    </div>
  )
}

export default DriverDashboard

