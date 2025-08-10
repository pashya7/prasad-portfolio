import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const metrics = [
  { name: 'Ticket Resolution ↓', value: 40 },
  { name: 'Manual Workflows Automated', value: 80 },
  { name: 'Projects Delivered', value: 15 },
  { name: 'User Satisfaction ↑', value: 95 },
];

const pieData = [
  { name: 'Automated', value: 80 },
  { name: 'Manual', value: 20 },
];
const COLORS = ['#107360', '#e6f2ef'];

export default function ImpactMetricsDashboard() {
  return (
    <motion.section className="py-12 px-2 max-w-4xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <h2 className="text-2xl font-bold text-sn mb-2 text-center">Impact Metrics Dashboard</h2>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">Quantifiable achievements from my ServiceNow journey.</p>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="w-full md:w-1/2 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={metrics} layout="vertical">
              <XAxis type="number" hide domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="value" fill="#107360" barSize={18} radius={[6, 6, 6, 6]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/3 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-2 text-sn text-sm">80% Automated Workflows</div>
        </div>
      </div>
    </motion.section>
  );
}
