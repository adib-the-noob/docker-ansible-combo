const getDashboard = async (req, res) => {
    try {

        const dashboardData = {
            totalUsers: 1247,
            activeUsers: 892,
            totalOrders: 3456,
            revenue: 125430.50,
            recentActivities: [
                { id: 1, action: "New user registered", timestamp: "2024-01-15T10:30:00Z" },
                { id: 2, action: "Order completed", timestamp: "2024-01-15T09:45:00Z" },
                { id: 3, action: "Payment processed", timestamp: "2024-01-15T09:20:00Z" }
            ],
            salesChart: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                data: [12000, 19000, 15000, 22000, 18000]
            },
            topProducts: [
                { name: "Product A", sales: 450 },
                { name: "Product B", sales: 320 },
                { name: "Product C", sales: 280 }
            ]
        };
        res.status(200).json(dashboardData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dashboard data' });
    }
};

module.exports = {
    getDashboard,
};
