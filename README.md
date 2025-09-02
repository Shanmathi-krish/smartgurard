# SmartGuard - AI-Powered Driver Safety System

SmartGuard is a comprehensive, production-ready frontend application for monitoring driver safety using AI-powered drowsiness detection and health monitoring. Built with modern web technologies, it provides real-time safety insights for both individual drivers and fleet managers.

## 🚀 Features

### For Drivers
- **Real-time Drowsiness Monitoring** - AI-powered alertness detection
- **Health Vital Signs Tracking** - Heart rate, temperature, blood pressure monitoring
- **Emergency SOS Button** - One-click emergency response activation
- **Safety Status Dashboard** - Live safety metrics and alerts
- **Emergency Contacts Management** - Quick access to emergency contacts
- **Profile & Settings** - Personalized safety preferences

### For Fleet Managers
- **Fleet Overview Dashboard** - Real-time fleet safety metrics
- **Driver Monitoring** - Individual driver status and location tracking
- **Alert Management** - Comprehensive alert filtering and response
- **Analytics & Reports** - Safety trends and performance insights
- **Driver History** - Detailed safety and health records

### Technical Features
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Accessibility** - WCAG compliant with high-contrast colors and ARIA labels
- **Dark/Light Mode** - Theme switching with system preference detection
- **Real-time Updates** - Live data synchronization
- **Offline Support** - Progressive Web App capabilities

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Animations**: Framer Motion for smooth interactions
- **Charts**: Recharts for data visualization
- **Routing**: React Router v6 with protected routes
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: React hooks with local storage
- **Icons**: Lucide React for consistent iconography

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── theme-provider.tsx
├── pages/              # Page components
│   ├── auth/           # Authentication pages
│   └── LandingPage.tsx
├── layouts/            # Layout components
│   ├── DriverDashboard.tsx
│   └── FleetManagerDashboard.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css           # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smartguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## 🔐 Authentication

The application includes a complete authentication system:

- **Driver Login/Signup** - Email/password with vehicle ID and emergency contacts
- **Fleet Manager Login/Signup** - Organization-based registration
- **Password Reset** - Secure password recovery flow
- **Protected Routes** - Role-based access control
- **Session Management** - Local storage with automatic logout

### Demo Credentials

For testing purposes, you can use any email/password combination. The app simulates authentication and creates mock user data.

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) - Main brand color
- **Success**: Green (#22c55e) - Safe status indicators
- **Warning**: Orange (#f59e0b) - Caution alerts
- **Critical**: Red (#ef4444) - Emergency situations
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Large Text**: Optimized for readability and accessibility
- **High Contrast**: Ensures visibility in all lighting conditions
- **Responsive Sizing**: Scales appropriately across devices

### Components
- **Cards**: Information containers with consistent spacing
- **Buttons**: Multiple variants with clear visual hierarchy
- **Forms**: Accessible input fields with validation
- **Tables**: Sortable data displays with filtering
- **Charts**: Interactive data visualizations

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Mobile (< 768px)**: Stacked layouts, collapsible navigation
- **Tablet (768px - 1024px)**: Hybrid layouts with sidebar navigation
- **Desktop (> 1024px)**: Full-featured layouts with persistent navigation

## ♿ Accessibility Features

- **ARIA Labels**: Comprehensive screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast**: Optimized color combinations
- **Large Text**: Readable font sizes
- **Focus Indicators**: Clear focus management
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_endpoint
VITE_APP_NAME=SmartGuard
```

### Tailwind Configuration
Custom colors and animations are defined in `tailwind.config.js`:

```javascript
// SmartGuard specific colors
success: { DEFAULT: "#22c55e", foreground: "#ffffff" },
warning: { DEFAULT: "#f59e0b", foreground: "#ffffff" },
critical: { DEFAULT: "#ef4444", foreground: "#ffffff" },
safe: { DEFAULT: "#22c55e", foreground: "#ffffff" }
```

## 📊 Data Management

### Mock Data
The application includes comprehensive mock data for demonstration:

- **Driver Profiles**: Sample driver information and vitals
- **Fleet Data**: Mock fleet statistics and driver statuses
- **Alerts**: Sample safety alerts and notifications
- **Health Metrics**: Realistic vital sign data

### API Integration
The app is designed for easy backend integration:

- **Authentication Endpoints**: Login, signup, password reset
- **Driver Data**: Real-time vitals and status updates
- **Fleet Management**: Driver monitoring and alert systems
- **Analytics**: Safety metrics and reporting data

## 🚨 Emergency Features

### SOS Button
- **Fixed Position**: Always accessible emergency button
- **Visual Alert**: Pulsing animation to draw attention
- **Immediate Response**: Instant emergency service activation
- **Location Sharing**: Automatic GPS coordinates transmission

### Alert System
- **Real-time Notifications**: Instant safety alerts
- **Priority Levels**: Warning, critical, and info classifications
- **Escalation**: Automatic alert escalation for critical situations
- **Response Tracking**: Alert acknowledgment and resolution

## 📈 Analytics & Reporting

### Driver Analytics
- **Safety Score**: Overall driver safety rating
- **Trend Analysis**: Performance over time
- **Incident Reports**: Detailed safety event documentation
- **Health Trends**: Vital sign patterns and alerts

### Fleet Analytics
- **Fleet Safety Score**: Overall fleet safety rating
- **Driver Performance**: Individual driver comparisons
- **Route Analysis**: Safety metrics by route and time
- **Cost Analysis**: Safety incident cost tracking

## 🔒 Security Features

- **Protected Routes**: Role-based access control
- **Input Validation**: Comprehensive form validation
- **XSS Prevention**: Secure data handling
- **Session Management**: Secure authentication state
- **Data Encryption**: Sensitive data protection

## 🧪 Testing

### Manual Testing
- **Cross-browser Testing**: Chrome, Firefox, Safari, Edge
- **Device Testing**: iOS, Android, Windows, macOS
- **Accessibility Testing**: Screen reader compatibility
- **Performance Testing**: Load times and responsiveness

### Automated Testing
```bash
npm run test
# or
yarn test
```

## 🚀 Deployment

### Build Optimization
- **Code Splitting**: Route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Minification**: Compressed production builds
- **Asset Optimization**: Optimized images and fonts

### Hosting Options
- **Vercel**: One-click deployment
- **Netlify**: Static site hosting
- **AWS S3**: Cloud hosting with CloudFront
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Documentation**: Check the project wiki
- **Issues**: Create a GitHub issue
- **Discussions**: Join the community discussions
- **Email**: support@smartguard.com

## 🙏 Acknowledgments

- **shadcn/ui** for the excellent component library
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **React Team** for the amazing framework
- **Community** for feedback and contributions

---

**SmartGuard** - AI-driven safety for drivers. Stay awake, stay safe. 🚗💙

