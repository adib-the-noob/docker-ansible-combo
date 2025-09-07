import { useState, useEffect } from 'react'
import { getDashboardData } from './services/api'
import StatCard from './components/StatCard'
import ActivityList from './components/ActivityList'
import ProductList from './components/ProductList'
import ChartInfo from './components/ChartInfo'
import './App.css'

function App() {
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData()
        setDashboardData(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch dashboard data')
        setLoading(false)
        console.error('Error fetching dashboard data:', err)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="loading">Loading dashboard data...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      
      {dashboardData && (
        <div className="dashboard-container">
          <div className="stats-container">
            <StatCard 
              title="Total Users" 
              value={dashboardData.totalUsers} 
            />
            <StatCard 
              title="Active Users" 
              value={dashboardData.activeUsers} 
            />
            <StatCard 
              title="Total Orders" 
              value={dashboardData.totalOrders} 
            />
            <StatCard 
              title="Revenue" 
              value={dashboardData.revenue} 
              format={(value) => `$${value.toLocaleString()}`}
            />
          </div>

          <div className="dashboard-row">
            <div className="dashboard-section">
              <h2>Recent Activities</h2>
              <ActivityList activities={dashboardData.recentActivities} />
            </div>

            <div className="dashboard-section">
              <h2>Top Products</h2>
              <ProductList products={dashboardData.topProducts} />
            </div>
          </div>

          <div className="dashboard-section chart-section">
            <h2>Sales Chart</h2>
            <div className="chart-container">
              <ChartInfo chartData={dashboardData.salesChart} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
