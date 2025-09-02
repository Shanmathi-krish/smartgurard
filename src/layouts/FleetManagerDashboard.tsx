import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  User, 
  Settings, 
  LogOut, 
  Activity,
  Users,
  AlertTriangle,
  Bell,
  BarChart3,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

const FleetManagerDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // TODO: Replace with actual user data from context/API
  const user = JSON.parse(localStorage.getItem('smartguard-user') || '{}')
  
  const handleLogout = () => {
    localStorage.removeItem('smartguard-auth')
    localStorage.removeItem('smartguard-role')
    localStorage.removeItem('smartguard-user')
    navigate('/')
  }

  const navigation = [
    { name: 'Overview', href: '/fleet', icon: Activity, current: location.pathname === '/fleet' },
    { name: 'Drivers', href: '/fleet/drivers', icon: Users, current: location.pathname === '/fleet/drivers' },
    { name: 'Alerts', href: '/fleet/alerts', icon: AlertTriangle, current: location.pathname === '/fleet/alerts' },
    { name: 'Reports', href: '/fleet/reports', icon: BarChart3, current: location.pathname === '/fleet/reports' },
    { name: 'Analytics', href: '/fleet/analytics', icon: TrendingUp, current: location.pathname === '/fleet/analytics' },
    { name: 'Profile', href: '/fleet/profile', icon: User, current: location.pathname === '/fleet/profile' },
    { name: 'Settings', href: '/fleet/settings', icon: Settings, current: location.pathname === '/fleet/settings' },
  ]

  // Dummy data for demonstration
  const overviewStats = [
    { label: 'Active Drivers', value: '24', change: '+2', trend: 'up', icon: Users },
    { label: 'Alerts Today', value: '7', change: '-3', trend: 'down', icon: AlertTriangle },
    { label: 'Critical Incidents', value: '1', change: '0', trend: 'neutral', icon: AlertTriangle },
    { label: 'Safety Score', value: '94.2%', change: '+1.8%', trend: 'up', icon: TrendingUp }
  ]

  const recentAlerts = [
    { id: 1, driver: 'John Smith', vehicle: 'TRK-001', type: 'warning', message: 'Drowsiness detected', time: '5 min ago' },
    { id: 2, driver: 'Sarah Johnson', vehicle: 'TRK-002', type: 'info', message: 'Route completed', time: '15 min ago' },
    { id: 3, driver: 'Mike Wilson', vehicle: 'TRK-003', type: 'critical', message: 'Emergency stop activated', time: '1 hour ago' }
  ]

  const driverStatuses = [
    { id: 1, name: 'John Smith', vehicle: 'TRK-001', status: 'safe', location: 'I-95 N', lastUpdate: '2 min ago' },
    { id: 2, name: 'Sarah Johnson', vehicle: 'TRK-002', status: 'warning', location: 'US-1 S', lastUpdate: '5 min ago' },
    { id: 3, name: 'Mike Wilson', vehicle: 'TRK-003', status: 'critical', location: 'I-80 W', lastUpdate: '1 hour ago' },
    { id: 4, name: 'David Brown', vehicle: 'TRK-004', status: 'safe', location: 'I-90 E', lastUpdate: '10 min ago' }
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

  const getAlertTypeColor = (type: string) => {
    switch (type) {
      case 'warning': return 'text-warning'
      case 'critical': return 'text-critical'
      case 'info': return 'text-primary'
      default: return 'text-gray-600'
    }
  }

  const getAlertTypeBg = (type: string) => {
    switch (type) {
      case 'warning': return 'bg-warning/10'
      case 'critical': return 'bg-critical/10'
      case 'info': return 'bg-primary/10'
      default: return 'bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-gray-900">SmartGuard</span>
              </div>
              <div className="ml-8 flex items-center space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.href)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'bg-primary text-primary-foreground'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Notifications</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name || 'Fleet Manager'}</p>
                  <p className="text-xs text-gray-500">{user.organization || 'Organization'}</p>
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
              </div>

              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
        
        {/* Default dashboard content when no route is selected */}
        {location.pathname === '/fleet' && (
          <div className="space-y-6">
            {/* Welcome */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Fleet Overview
              </h1>
              <p className="text-gray-600">
                Monitor your fleet's safety and performance in real-time.
              </p>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                        <div className={`p-3 rounded-full ${stat.trend === 'up' ? 'bg-safe/10' : stat.trend === 'down' ? 'bg-warning/10' : 'bg-gray-100'}`}>
                          <stat.icon className={`h-6 w-6 ${stat.trend === 'up' ? 'text-safe' : stat.trend === 'down' ? 'text-warning' : 'text-gray-600'}`} />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        {stat.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-safe" />
                        ) : stat.trend === 'down' ? (
                          <TrendingDown className="h-4 w-4 text-warning" />
                        ) : (
                          <div className="w-4 h-4" />
                        )}
                        <span className={`text-sm ${
                          stat.trend === 'up' ? 'text-safe' : 
                          stat.trend === 'down' ? 'text-warning' : 
                          'text-gray-500'
                        }`}>
                          {stat.change} from yesterday
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Alerts and Driver Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <span>Recent Alerts</span>
                  </CardTitle>
                  <CardDescription>
                    Latest safety alerts and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`flex items-center justify-between p-3 rounded-lg ${getAlertTypeBg(alert.type)}`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${getAlertTypeColor(alert.type)}`} />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{alert.driver}</p>
                            <p className="text-xs text-gray-600">{alert.vehicle} • {alert.message}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      View All Alerts
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Driver Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Driver Status</span>
                  </CardTitle>
                  <CardDescription>
                    Current status of all active drivers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {driverStatuses.map((driver) => (
                      <div
                        key={driver.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${getStatusBg(driver.status)}`}>
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(driver.status)} mx-auto mt-0.5`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{driver.name}</p>
                            <p className="text-xs text-gray-600">{driver.vehicle} • {driver.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-xs font-medium capitalize ${getStatusColor(driver.status)}`}>
                            {driver.status}
                          </p>
                          <p className="text-xs text-gray-500">{driver.lastUpdate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      View All Drivers
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex-col space-y-2" onClick={() => navigate('/fleet/drivers')}>
                    <Users className="h-6 w-6" />
                    <span>Manage Drivers</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2" onClick={() => navigate('/fleet/alerts')}>
                    <AlertTriangle className="h-6 w-6" />
                    <span>View Alerts</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2" onClick={() => navigate('/fleet/analytics')}>
                    <BarChart3 className="h-6 w-6" />
                    <span>Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}

export default FleetManagerDashboard

