import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Settings, Bell, Shield, Globe, Palette, Volume2, Smartphone, Mail } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'

const DriverSettings = () => {
  const { theme, setTheme } = useTheme()
  const [notificationSettings, setNotificationSettings] = useState({
    sound: true,
    vibration: true,
    email: true,
    sms: false,
    pushNotifications: true
  })
  const [privacySettings, setPrivacySettings] = useState({
    dataSharing: false,
    locationTracking: true,
    healthDataSharing: false,
    analyticsSharing: true
  })
  const [language, setLanguage] = useState('en')

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotificationSettings(prev => ({ ...prev, [key]: value }))
  }

  const handlePrivacyChange = (key: string, value: boolean) => {
    setPrivacySettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSaveSettings = () => {
    // TODO: API call to save settings
    console.log('Settings saved:', { notificationSettings, privacySettings, language, theme })
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Customize your SmartGuard experience and preferences.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Preferences */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-primary" />
                <CardTitle>Notification Preferences</CardTitle>
              </div>
              <CardDescription>
                Choose how you want to receive alerts and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="sound">Sound Alerts</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="sound"
                    checked={notificationSettings.sound}
                    onChange={(e) => handleNotificationChange('sound', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="vibration">Vibration</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="vibration"
                    checked={notificationSettings.vibration}
                    onChange={(e) => handleNotificationChange('vibration', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="email">Email Notifications</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="email"
                    checked={notificationSettings.email}
                    onChange={(e) => handleNotificationChange('email', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="sms">SMS Notifications</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="sms"
                    checked={notificationSettings.sms}
                    onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="push">Push Notifications</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="push"
                    checked={notificationSettings.pushNotifications}
                    onChange={(e) => handleNotificationChange('pushNotifications', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy & Data Sharing */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>Privacy & Data Sharing</CardTitle>
              </div>
              <CardDescription>
                Control how your data is shared and used
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="dataSharing">Share Data for Research</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="dataSharing"
                    checked={privacySettings.dataSharing}
                    onChange={(e) => handlePrivacyChange('dataSharing', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="locationTracking">Location Tracking</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="locationTracking"
                    checked={privacySettings.locationTracking}
                    onChange={(e) => handlePrivacyChange('locationTracking', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="healthDataSharing">Share Health Data</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="healthDataSharing"
                    checked={privacySettings.healthDataSharing}
                    onChange={(e) => handlePrivacyChange('healthDataSharing', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="analyticsSharing">Analytics & Performance</Label>
                  </div>
                  <input
                    type="checkbox"
                    id="analyticsSharing"
                    checked={privacySettings.analyticsSharing}
                    onChange={(e) => handlePrivacyChange('analyticsSharing', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Language & Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <CardTitle>Language & Appearance</CardTitle>
              </div>
              <CardDescription>
                Customize your language and visual preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Language Selection */}
                <div className="space-y-3">
                  <Label htmlFor="language">Language</Label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                    <option value="ja">日本語</option>
                  </select>
                </div>

                {/* Theme Selection */}
                <div className="space-y-3">
                  <Label>Theme</Label>
                  <div className="flex space-x-2">
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTheme('light')}
                      className="flex-1"
                    >
                      <Palette className="h-4 w-4 mr-2" />
                      Light
                    </Button>
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTheme('dark')}
                      className="flex-1"
                    >
                      <Palette className="h-4 w-4 mr-2" />
                      Dark
                    </Button>
                    <Button
                      variant={theme === 'system' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTheme('system')}
                      className="flex-1"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      System
                    </Button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button onClick={handleSaveSettings} size="lg">
                  <Settings className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default DriverSettings
