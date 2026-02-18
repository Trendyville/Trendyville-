
import React from 'react';
import { AppMode, UserStats, InvestorStats } from '../types';
import { MOCK_USER_STATS, MOCK_INVESTOR_STATS } from '../constants';

interface DashboardProps {
  mode: AppMode;
}

const Dashboard: React.FC<DashboardProps> = ({ mode }) => {
  const isInvestor = mode === 'INVESTOR';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">
            {isInvestor ? 'Investor Console' : 'Traveler Lounge'}
          </h1>
          <p className="text-slate-500">Welcome back, Alex. Here's your {isInvestor ? 'portfolio' : 'activity'} overview.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <i className="fa-solid fa-download mr-2"></i> Reports
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
            <i className="fa-solid fa-plus mr-2"></i> {isInvestor ? 'New Asset' : 'Book Stay'}
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {isInvestor ? (
          <>
            <StatCard label="Portfolio Value" value={`$${MOCK_INVESTOR_STATS.portfolioValue.toLocaleString()}`} icon="fa-vault" color="indigo" />
            <StatCard label="Total Earnings" value={`$${MOCK_INVESTOR_STATS.totalEarnings.toLocaleString()}`} icon="fa-money-bill-trend-up" color="emerald" />
            <StatCard label="Avg. ROI" value={MOCK_INVESTOR_STATS.averageRoi} icon="fa-chart-pie" color="amber" />
            <StatCard label="Active Assets" value={MOCK_INVESTOR_STATS.activeInvestments.toString()} icon="fa-building-circle-check" color="sky" />
          </>
        ) : (
          <>
            <StatCard label="Upcoming Trips" value={MOCK_USER_STATS.activeBookings.toString()} icon="fa-calendar-check" color="indigo" />
            <StatCard label="Wallet Balance" value={`$${MOCK_USER_STATS.walletBalance.toLocaleString()}`} icon="fa-wallet" color="emerald" />
            <StatCard label="Saved Spots" value={MOCK_USER_STATS.savedProperties.toString()} icon="fa-heart" color="rose" />
            <StatCard label="Total Travel" value={`$${MOCK_USER_STATS.totalSpent.toLocaleString()}`} icon="fa-bag-shopping" color="amber" />
          </>
        )}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Activity/Portfolio */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              {isInvestor ? 'Portfolio Distribution' : 'Upcoming Bookings'}
            </h3>
            {/* Mock Chart/List Placeholder */}
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <i className={`fa-solid ${isInvestor ? 'fa-chart-simple' : 'fa-hotel'} text-2xl`}></i>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-bold text-slate-800">{isInvestor ? `Asset Cluster #${i} - NY District` : `Modern Loft Stay - Chicago`}</p>
                    <p className="text-sm text-slate-500">{isInvestor ? 'Real Estate • 14.2% yield' : 'Oct 12 - Oct 15 • Confirmed'}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-800">{isInvestor ? '+$4,200/mo' : '$450.00'}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 font-bold uppercase">Paid</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Payments & Payouts */}
        <div className="space-y-8">
          <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <h3 className="text-xl font-bold mb-6">Quick Payout</h3>
            <div className="mb-8">
              <p className="text-slate-400 text-sm mb-1">Withdrawable Balance</p>
              <h4 className="text-3xl font-extrabold">$2,450.00</h4>
            </div>
            <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-indigo-50 transition-all flex items-center justify-center space-x-2">
              <i className="fa-solid fa-paper-plane"></i>
              <span>Transfer to Bank</span>
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">Standard 1-2 business days for processing.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Payment Method</h3>
            <div className="flex items-center p-4 border border-slate-200 rounded-2xl">
              <i className="fa-brands fa-cc-visa text-3xl text-indigo-600"></i>
              <div className="ml-4">
                <p className="font-bold text-slate-800">•••• 4242</p>
                <p className="text-xs text-slate-500">Expires 12/26</p>
              </div>
              <button className="ml-auto text-slate-400 hover:text-indigo-600 transition-colors">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, color }) => {
  const colorMap: Record<string, string> = {
    indigo: 'bg-indigo-50 text-indigo-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    amber: 'bg-amber-50 text-amber-600',
    rose: 'bg-rose-50 text-rose-600',
    sky: 'bg-sky-50 text-sky-600',
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${colorMap[color]} rounded-2xl flex items-center justify-center mb-4`}>
        <i className={`fa-solid ${icon} text-xl`}></i>
      </div>
      <p className="text-slate-500 text-sm font-medium">{label}</p>
      <h4 className="text-2xl font-extrabold text-slate-900 mt-1">{value}</h4>
    </div>
  );
};

export default Dashboard;
