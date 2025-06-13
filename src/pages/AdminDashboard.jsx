import React from 'react';

function AdminDashboard() {
  return (
    <div className="p-4">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Here you can manage uploads and users.</p>
      <ul>
        <li>📁 Total Uploads: 42</li>
        <li>👥 Registered Users: 15</li>
        <li>⚠️ Reports Pending: 2</li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
