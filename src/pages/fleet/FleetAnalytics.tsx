import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts'
import { BarChart3, TrendingUp, Activity, AlertTriangle, Calendar, Filter } from 'lucide-react'

const FleetAnalytics = () => {
  const [timeRange, setTimeRange] = useState('7d')

  // Dummy data for charts
  const drowsinessTrends = [
    { date: 'Mon', safe: 45, warning: 12, critical: 3 },
    { date: 'Tue', safe: 42, warning: 15, critical: 5 },
    { date: 'Wed', safe: 48, warning: 10, critical: 2 },
    { date: 'Thu', safe: 40, warning: 18, critical: 4 },
    { date: 'Fri', safe: 35, warning: 22, critical: 6 },
    { date: 'Sat', safe: 38, warning: 20, critical: 3 },
    { date: 'Sun', safe: 44, warning: 14, critical: 2 }
  ]

  const healthMetrics = [
    { time: '00:00', heartRate: 72, temperature: 98.6, bloodPressure: 120 },
    { time: '04:00', heartRate: 68, temperature: 98.2, bloodPressure: 118 },
    { time: '08:00', heartRate: 75, temperature: 98.8, bloodPressure: 122 },
    { time: '12:00', heartRate: 78, temperature: 99.1, bloodPressure: 125 },
    { time: '16:00', heartRate: 82, temperature: 99.3, bloodPressure: 128 },
    { time: '20:00', heartRate: 76, temperature: 98.9, bloodPressure: 123 },
    { time: '24:00', heartRate: 70, temperature: 98.4, bloodPressure: 119 }
  ]

  const alertDistribution = [
    { type: 'Drowsiness', count: 45, color: '#ef4444' },
    { type: 'Health', count: 28, color: '#f59e0b' },
    { type: 'Location', count: 15, color: '#3b82f6' },
    { type: 'Vehicle', count: 12, color: '#10b981' }
  ]

  const driverPerformance = [
    { driver: 'John Doe', safetyScore: 95, alerts: 2, miles: 1200 },
    { driver: 'Jane Smith', safetyScore: 88, alerts: 5, miles: 1100 },
    { driver: 'Mike Johnson', safetyScore: 92, alerts: 3, miles: 1350 },
    { driver: 'Sarah Wilson', safetyScore: 97, alerts: 1, miles: 980 },
    { driver: 'David Brown', safetyScore: 85, alerts: 7, miles: 1250 }
  ]

  const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6']

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">Comprehensive insights into fleet safety performance and trends.</p>
      </motion.div>

      {/* Time Range Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">Time Range:</span>
              </div>
              <div className="flex space-x-2">
                {['1d', '7d', '30d', '90d'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      timeRange === range
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {range === '1d' ? '24h' : range === '7d' ? '7 days' : range === '30d' ? '30 days' : '90 days'}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">94.2%</p>
                <p className="text-sm text-gray-600">Safety Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Activity className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-gray-600">Total Miles</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">18</p>
                <p className="text-sm text-gray-600">Alerts Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-sm text-gray-600">Active Drivers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Drowsiness Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Drowsiness Trends</CardTitle>
              <CardDescription>Weekly drowsiness status distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={drowsinessTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="safe" fill="#10b981" name="Safe" />
                  <Bar dataKey="warning" fill="#f59e0b" name="Warning" />
                  <Bar dataKey="critical" fill="#ef4444" name="Critical" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Health Metrics Over Time */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Health Metrics Over Time</CardTitle>
              <CardDescription>24-hour health monitoring trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={healthMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="heartRate" stroke="#ef4444" name="Heart Rate (bpm)" />
                  <Line type="monotone" dataKey="temperature" stroke="#f59e0b" name="Temperature (°F)" />
                  <Line type="monotone" dataKey="bloodPressure" stroke="#3b82f6" name="Blood Pressure (systolic)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Alert Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Alert Distribution</CardTitle>
              <CardDescription>Types of alerts by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={alertDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ type, percent }) => `${type} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {alertDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Driver Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Driver Performance</CardTitle>
              <CardDescription>Safety scores and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={driverPerformance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="driver" type="category" width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="safetyScore" fill="#10b981" name="Safety Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Performance Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>Key insights and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Top Performers</h4>
                <div className="space-y-2">
                  {driverPerformance
                    .sort((a, b) => b.safetyScore - a.safetyScore)
                    .slice(0, 3)
                    .map((driver, index) => (
                      <div key={driver.driver} className="flex items-center justify-between">
                        <span className="text-sm">{driver.driver}</span>
                        <span className="text-sm font-medium text-green-600">{driver.safetyScore}%</span>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Areas of Concern</h4>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">High Alert Drivers:</span> 2 drivers with 5+ alerts
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Critical Incidents:</span> 3 in the last 24 hours
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Health Alerts:</span> 8 temperature/heart rate warnings
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Recommendations</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Schedule breaks for drivers with high alert counts</div>
                  <div>• Review health monitoring thresholds</div>
                  <div>• Implement additional safety training</div>
                  <div>• Consider route optimization for high-risk areas</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default FleetAnalytics
