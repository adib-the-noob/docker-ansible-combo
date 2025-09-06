const getDashboard = async (req, res) => {
    try {
        const userData = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            profilePicture: 'https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=gkvLDCgsHH-8HeQe7JsjhlOY6vRBJk_sKW9lyaLgmLo=',
        };

        const earningsData = {
            totalEarnings: 5000,
            monthlyEarnings: 400,
            yearlyEarnings: 4800,
        };

        const recentActivities = [
            { activity: 'Logged in', timestamp: '2023-10-01T10:00:00Z' },
            { activity: 'Updated profile', timestamp: '2023-10-02T12:30:00Z' },
            { activity: 'Posted a comment', timestamp: '2023-10-03T14:45:00Z' },
        ];

        const dashboardData = {
            user: userData,
            earnings: earningsData,
            activities: recentActivities,
            postCount: 200,
            followers: 1200,
            notifications: 3,
        };

        res.status(200).json(dashboardData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dashboard data' });
    }
};

module.exports = {
    getDashboard,
};
