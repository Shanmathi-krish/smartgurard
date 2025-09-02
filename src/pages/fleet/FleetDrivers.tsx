import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Users, Search, Filter, MapPin, Activity, AlertTriangle, Eye, MessageSquare } from 'lucide-react'

const FleetDrivers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Dummy data for demonstration
  const drivers = [
    {
      id: 1,
      name: 'John Doe',
      vehicleId: 'VH123456',
      location: 'New York, NY',
      drowsinessStatus: 'safe',
      heartRate: 72,
      temperature: 98.6,
      bloodPressure: '120/80',
      lastUpdate: '2 minutes ago',
      alerts: 0
    },
    {
      id: 2,
      name: 'Jane Smith',
      vehicleId: 'VH789012',
      location: 'Los Angeles, CA',
      drowsinessStatus: 'warning',
      heartRate: 85,
      temperature: 99.1,
      bloodPressure: '135/85',
      lastUpdate: '5 minutes ago',
      alerts: 2
    },
    {
      id: 3,
      name: 'Mike Johnson',
      vehicleId: 'VH345678',
      location: 'Chicago, IL',
      drowsinessStatus: 'critical',
      heartRate: 95,
      temperature: 100.2,
      bloodPressure: '150/95',
      lastUpdate: '1 minute ago',
      alerts: 5
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      vehicleId: 'VH901234',
      location: 'Miami, FL',
      drowsinessStatus: 'safe',
      heartRate: 68,
      temperature: 98.2,
      bloodPressure: '115/75',
      lastUpdate: '3 minutes ago',
      alerts: 0
    },
    {
      id: 5,
      name: 'David Brown',
      vehicleId: 'VH567890',
      location: 'Seattle, WA',
      drowsinessStatus: 'warning',
      heartRate: 78,
      temperature: 98.8,
      bloodPressure: '125/80',
      lastUpdate: '4 minutes ago',
      alerts: 1
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-green-600 bg-green-100'
      case 'warning': return 'text-yellow-600 bg-yellow-100'
      case 'critical': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-green-100'
      case 'warning': return 'bg-yellow-100'
      case 'critical': return 'bg-red-100'
      default: return 'bg-gray-100'
    }
  }

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.vehicleId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || driver.drowsinessStatus === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Driver Management</h1>
        <p className="text-gray-600">Monitor your fleet drivers' safety status and vital signs in real-time.</p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{drivers.length}</p>
                <p className="text-sm text-gray-600">Total Drivers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Activity className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {drivers.filter(d => d.drowsinessStatus === 'safe').length}
                </p>
                <p className="text-sm text-gray-600">Safe Status</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {drivers.filter(d => d.drowsinessStatus === 'warning').length}
                </p>
                <p className="text-sm text-gray-600">Warning Status</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {drivers.filter(d => d.drowsinessStatus === 'critical').length}
                </p>
                <p className="text-sm text-gray-600">Critical Status</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search" className="sr-only">Search drivers</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="Search by name or vehicle ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Label htmlFor="status-filter">Status Filter:</Label>
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="all">All Status</option>
                  <option value="safe">Safe</option>
                  <option value="warning">Warning</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Drivers Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Driver Status Overview</CardTitle>
            <CardDescription>
              Real-time monitoring of driver safety and health metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>Vehicle ID</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Drowsiness Status</TableHead>
                  <TableHead>Vital Signs</TableHead>
                  <TableHead>Last Update</TableHead>
                  <TableHead>Alerts</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDrivers.map((driver, index) => (
                  <motion.tr
                    key={driver.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900">{driver.name}</div>
                        <div className="text-sm text-gray-500">ID: {driver.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-mono text-sm">{driver.vehicleId}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{driver.location}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(driver.drowsinessStatus)}`}>
                        {driver.drowsinessStatus.charAt(0).toUpperCase() + driver.drowsinessStatus.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        <div>HR: {driver.heartRate} bpm</div>
                        <div>Temp: {driver.temperature}°F</div>
                        <div>BP: {driver.bloodPressure}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-500">{driver.lastUpdate}</div>
                    </TableCell>
                    <TableCell>
                      {driver.alerts > 0 ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          {driver.alerts} alert{driver.alerts !== 1 ? 's' : ''}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500">None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default FleetDrivers
