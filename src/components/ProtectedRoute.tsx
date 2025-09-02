import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: ReactNode
  userType: 'driver' | 'fleet'
}

const ProtectedRoute = ({ children, userType }: ProtectedRouteProps) => {
  // TODO: Replace with actual authentication logic
  const isAuthenticated = localStorage.getItem('smartguard-auth')
  const userRole = localStorage.getItem('smartguard-role')
  
  if (!isAuthenticated) {
    return <Navigate to={`/${userType}/login`} replace />
  }
  
  if (userRole !== userType) {
    return <Navigate to="/" replace />
  }
  
  return <>{children}</>
}

export default ProtectedRoute

