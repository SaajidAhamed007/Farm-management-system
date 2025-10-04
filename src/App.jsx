import { useState } from 'react'
import './index.css'
import FarmersList from './pages/villageofficer/FarmersList'
import FarmerDetail from './pages/villageofficer/FarmerDetail'
import VillageDashboard from './pages/villageofficer/VillageDashboard'
import VillageOverview from './pages/villageofficer/VillageOverview'
import DistrictDashboard from './pages/districtofficer/DistrictDashboard'
import { Routes, Route, Navigate } from 'react-router-dom'
import VillageList from './pages/districtofficer/VillageList'
import DistrictIssue from './pages/districtofficer/DistrictIssue'
import DealersList from './pages/villageofficer/DealersList'
import DealerDetail from './pages/villageofficer/DealerDetail'
import VillageIssue from './pages/villageofficer/VillageIssue'
import VillageIssueDetails from './pages/villageofficer/VillageIssueDetails'
import VillageDetail from './pages/districtofficer/VillageDetail'
import DistrictIssueDetail from './pages/districtofficer/DistrictIssueDetail'
import Navbar from './components/Navbar'
import Login from './pages/auth/login'
import ProtectedRoute from './components/ProtectedRoute'
import useAuthStore from './store/useAuthstore'

function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <div>
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* District Officer Routes */}
        <Route path="/" element={
          <ProtectedRoute 
            element={<DistrictDashboard />} 
            allowedRoles={['district']} 
          />
        } />
        <Route path="/village-list" element={
          <ProtectedRoute 
            element={<VillageList />} 
            allowedRoles={['district']} 
          />
        } />
        <Route path="/village-detail" element={
          <ProtectedRoute 
            element={<VillageDetail />} 
            allowedRoles={['district']} 
          />
        } />
        <Route path="/district-issue" element={
          <ProtectedRoute 
            element={<DistrictIssue />} 
            allowedRoles={['district']} 
          />
        } />
        <Route path="/district-issue-detail" element={
          <ProtectedRoute 
            element={<DistrictIssueDetail />} 
            allowedRoles={['district']} 
          />
        } />
        
        <Route path="/village-dashboard" element={
          <ProtectedRoute 
            element={<VillageDashboard />} 
            allowedRoles={['village']} 
          />
        } />
        <Route path="/farmers-list" element={
          <ProtectedRoute 
            element={<FarmersList />} 
            allowedRoles={['village']} 
          />
        } />
        <Route path="/farmer-detail" element={
          <ProtectedRoute 
            element={<FarmerDetail />} 
            allowedRoles={['village']} 
          />
        } />
        <Route path="/Dealers-list" element={
          <ProtectedRoute 
            element={<DealersList />} 
            allowedRoles={['village']} 
          />
        } />
        <Route path="/dealer-detail" element={
          <ProtectedRoute 
            element={<DealerDetail />} 
            allowedRoles={['village']} 
          />
        } />
        <Route path="/Village-issue" element={
          <ProtectedRoute 
            element={<VillageIssue />} 
            allowedRoles={['village']} 
          />
        } />
        <Route path="/village-issue-detail" element={
          <ProtectedRoute 
            element={<VillageIssueDetails />} 
            allowedRoles={['village']} 
          />
        } />
        
        {/* Redirect all other routes */}
        <Route path="*" element={
          isAuthenticated ? (
            user?.role === 'district' ? 
              <Navigate to="/" replace /> : 
              <Navigate to="/village-overview" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        } />
      </Routes>
    </div>
  )
}

export default App
