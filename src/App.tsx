import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/toaster'
import { useTheme } from './hooks/use-theme'

// Pages
import LandingPage from './pages/LandingPage'
import DriverLogin from './pages/auth/DriverLogin'
import DriverSignup from './pages/auth/DriverSignup'
import FleetManagerLogin from './pages/auth/FleetManagerLogin'
import FleetManagerSignup from './pages/auth/FleetManagerSignup'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'

// Driver Pages
import DriverProfile from './pages/driver/DriverProfile'
import DriverSettings from './pages/driver/DriverSettings'
import DriverHelp from './pages/driver/DriverHelp'

// Fleet Manager Pages
import FleetDrivers from './pages/fleet/FleetDrivers'
import FleetAnalytics from './pages/fleet/FleetAnalytics'

// Layouts
import DriverDashboard from './layouts/DriverDashboard'
import FleetManagerDashboard from './layouts/FleetManagerDashboard'

// Protected Routes
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider defaultTheme={theme} storageKey="smartguard-theme">
      <div className={`min-h-screen bg-background text-foreground ${theme}`}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/driver/login" element={<DriverLogin />} />
          <Route path="/driver/signup" element={<DriverSignup />} />
          <Route path="/fleet/login" element={<FleetManagerLogin />} />
          <Route path="/fleet/signup" element={<FleetManagerSignup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Protected Driver Routes */}
          <Route path="/driver" element={
            <ProtectedRoute userType="driver">
              <DriverDashboard />
            </ProtectedRoute>
          }>
            <Route index element={<DriverDashboard />} />
            <Route path="profile" element={<DriverProfile />} />
            <Route path="emergency-contacts" element={<DriverProfile />} />
            <Route path="settings" element={<DriverSettings />} />
            <Route path="help" element={<DriverHelp />} />
          </Route>
          
          {/* Protected Fleet Manager Routes */}
          <Route path="/fleet" element={
            <ProtectedRoute userType="fleet">
              <FleetManagerDashboard />
            </ProtectedRoute>
          }>
            <Route index element={<FleetManagerDashboard />} />
            <Route path="drivers" element={<FleetDrivers />} />
            <Route path="alerts" element={<FleetManagerDashboard />} />
            <Route path="reports" element={<FleetManagerDashboard />} />
            <Route path="analytics" element={<FleetAnalytics />} />
            <Route path="profile" element={<FleetManagerDashboard />} />
            <Route path="settings" element={<FleetManagerDashboard />} />
          </Route>
        </Routes>
        
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App

