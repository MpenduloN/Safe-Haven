import React, { useState } from 'react';
import { Shield, AlertTriangle, Image, TrendingUp, BookOpen, Settings, Bell, Lock, Eye, EyeOff, CheckCircle, XCircle, BarChart3, Users, MessageSquare, Filter, Search } from 'lucide-react';

const SafeGuardPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [moderationLevel, setModerationLevel] = useState('balanced');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  // Mock data for demonstration
  const threatStats = {
    blocked: 247,
    flagged: 89,
    impersonation: 12,
    imageAbuse: 34
  };

  const recentAlerts = [
    { id: 1, type: 'impersonation', platform: 'Twitter', severity: 'high', time: '2 min ago' },
    { id: 2, type: 'harassment', platform: 'Instagram', severity: 'medium', time: '15 min ago' },
    { id: 3, type: 'image_misuse', platform: 'Facebook', severity: 'high', time: '1 hour ago' },
    { id: 4, type: 'threat', platform: 'LinkedIn', severity: 'critical', time: '2 hours ago' }
  ];

  const connectedPlatforms = [
    { name: 'Twitter', connected: true, protected: true },
    { name: 'Instagram', connected: true, protected: true },
    { name: 'Facebook', connected: false, protected: false },
    { name: 'LinkedIn', connected: true, protected: true },
    { name: 'TikTok', connected: false, protected: false }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <Shield className="text-green-600" size={24} />
            <span className="text-2xl font-bold text-green-700">{threatStats.blocked}</span>
          </div>
          <p className="text-sm text-green-800 font-medium">Threats Blocked</p>
          <p className="text-xs text-green-600 mt-1">↓ 12% from last week</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="text-yellow-600" size={24} />
            <span className="text-2xl font-bold text-yellow-700">{threatStats.flagged}</span>
          </div>
          <p className="text-sm text-yellow-800 font-medium">Flagged for Review</p>
          <p className="text-xs text-yellow-600 mt-1">Needs attention</p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
          <div className="flex items-center justify-between mb-2">
            <Users className="text-red-600" size={24} />
            <span className="text-2xl font-bold text-red-700">{threatStats.impersonation}</span>
          </div>
          <p className="text-sm text-red-800 font-medium">Impersonation Attempts</p>
          <p className="text-xs text-red-600 mt-1">↑ 3 new today</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center justify-between mb-2">
            <Image className="text-purple-600" size={24} />
            <span className="text-2xl font-bold text-purple-700">{threatStats.imageAbuse}</span>
          </div>
          <p className="text-sm text-purple-800 font-medium">Image Misuse Detected</p>
          <p className="text-xs text-purple-600 mt-1">↓ 8% from last week</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Bell className="text-blue-600" size={20} />
          Recent Alerts
        </h3>
        <div className="space-y-3">
          {recentAlerts.map(alert => (
            <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  alert.severity === 'critical' ? 'bg-red-500' :
                  alert.severity === 'high' ? 'bg-orange-500' :
                  alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                <div>
                  <p className="font-medium text-gray-800 capitalize">{alert.type.replace('_', ' ')}</p>
                  <p className="text-sm text-gray-600">{alert.platform} • {alert.time}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Review
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="text-blue-600" size={20} />
          Threat Trends (Last 30 Days)
        </h3>
        <div className="h-48 flex items-end justify-around gap-2">
          {[65, 78, 45, 89, 72, 56, 91, 67, 54, 88, 75, 82].map((height, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg hover:from-blue-600 hover:to-blue-400 transition-colors" style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="mt-4 flex justify-between text-xs text-gray-600">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </div>
  );

  const renderModeration = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Filter className="text-blue-600" size={20} />
          AI Comment Moderation
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Moderation Level</label>
            <div className="flex gap-3">
              {['strict', 'balanced', 'relaxed'].map(level => (
                <button
                  key={level}
                  onClick={() => setModerationLevel(level)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors capitalize ${
                    moderationLevel === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 font-medium mb-2">Current Settings: {moderationLevel}</p>
            <p className="text-xs text-blue-700">
              {moderationLevel === 'strict' && 'Blocks aggressive language, mild threats, and potentially harmful content automatically.'}
              {moderationLevel === 'balanced' && 'Blocks clear harassment and threats while flagging borderline content for review.'}
              {moderationLevel === 'relaxed' && 'Only blocks explicit threats and severe harassment, allows more debate.'}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">Filter Categories</h4>
            {['Harassment & Bullying', 'Hate Speech', 'Sexual Content', 'Violence & Threats', 'Spam & Scams', 'Doxxing Attempts'].map(category => (
              <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">{category}</span>
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Custom Keywords</h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Add keywords or phrases to block (comma-separated)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Add Keywords
          </button>
        </div>
      </div>
    </div>
  );

  const renderProtection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Users className="text-blue-600" size={20} />
          Impersonation Detection
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-green-600" size={20} />
              <span className="font-medium text-green-800">Protection Active</span>
            </div>
            <p className="text-sm text-green-700">We're monitoring for fake accounts using your name, photos, or brand.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Protected Identity Elements</label>
            <div className="space-y-2">
              {['Profile Photo', 'Display Name', 'Bio/Description', 'Verified Badge', 'Header Image'].map(element => (
                <div key={element} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">{element}</span>
                  <CheckCircle className="text-green-600" size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Image className="text-blue-600" size={20} />
          Image Misuse Detection
        </h3>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Upload images to monitor for unauthorized use across the web and social platforms.</p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
            <Image className="mx-auto text-gray-400 mb-3" size={40} />
            <p className="text-sm text-gray-600 font-medium">Drop images here or click to upload</p>
            <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, WebP up to 10MB</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 font-medium mb-2">How it works</p>
            <ul className="text-xs text-blue-700 space-y-1 list-disc list-inside">
              <li>AI scans social platforms for matches of your images</li>
              <li>Detects manipulated or edited versions</li>
              <li>Alerts you when unauthorized use is found</li>
              <li>Provides takedown assistance and documentation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Connected Platforms</h3>
        <div className="space-y-3">
          {connectedPlatforms.map(platform => (
            <div key={platform.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  platform.connected ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-500'
                }`}>
                  {platform.name[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{platform.name}</p>
                  <p className="text-xs text-gray-600">
                    {platform.connected ? 'Protected' : 'Not connected'}
                  </p>
                </div>
              </div>
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                platform.connected
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {platform.connected ? 'Connected' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGuidance = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-md p-6 border border-blue-200">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-600" size={20} />
          Safety Resources & Guidance
        </h3>
        <p className="text-sm text-gray-700 mb-4">Expert advice and actionable strategies for staying safe online.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: 'Responding to Harassment', icon: Shield, color: 'blue' },
          { title: 'Document & Report Abuse', icon: MessageSquare, color: 'green' },
          { title: 'Privacy Best Practices', icon: Lock, color: 'purple' },
          { title: 'Legal Resources', icon: BookOpen, color: 'red' },
          { title: 'Platform-Specific Guides', icon: Settings, color: 'yellow' },
          { title: 'Mental Health Support', icon: Users, color: 'pink' }
        ].map(resource => (
          <div key={resource.title} className={`bg-white rounded-lg shadow-md p-5 border-l-4 border-${resource.color}-500 hover:shadow-lg transition-shadow cursor-pointer`}>
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg bg-${resource.color}-100 flex items-center justify-center`}>
                <resource.icon className={`text-${resource.color}-600`} size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-1">{resource.title}</h4>
                <p className="text-xs text-gray-600">Learn more →</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Emergency Contacts</h3>
        <div className="space-y-3">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="font-medium text-red-800 mb-1">Crisis Hotline</p>
            <p className="text-sm text-red-700">24/7 support for immediate threats: 1-800-XXX-XXXX</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-medium text-blue-800 mb-1">Cyber Crime Reporting</p>
            <p className="text-sm text-blue-700">Report online abuse to authorities: cybercrime.gov</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-medium text-purple-800 mb-1">Legal Support Network</p>
            <p className="text-sm text-purple-700">Free legal consultation for online harassment cases</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Lock className="text-blue-600" size={20} />
          Privacy & Security
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Notifications</p>
              <p className="text-sm text-gray-600">Get alerts for detected threats</p>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`w-12 h-6 rounded-full transition-colors ${
                notificationsEnabled ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                notificationsEnabled ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Privacy Mode</p>
              <p className="text-sm text-gray-600">Hide your activity from analytics</p>
            </div>
            <button
              onClick={() => setPrivacyMode(!privacyMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                privacyMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                privacyMode ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 font-medium mb-2">🔒 End-to-End Encryption</p>
            <p className="text-xs text-blue-700">All your data is encrypted and never shared with third parties. We can't access your protected content.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Data Management</h3>
        <div className="space-y-3">
          <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-left">
            Export Your Data
          </button>
          <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-left">
            Download Report History
          </button>
          <button className="w-full px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium text-left">
            Delete All Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Accessibility</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-700">High Contrast Mode</span>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
            </label>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-700">Screen Reader Support</span>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'moderation', label: 'Moderation', icon: Filter },
    { id: 'protection', label: 'Protection', icon: Shield },
    { id: 'guidance', label: 'Guidance', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SafeGuard AI</h1>
              <p className="text-xs text-gray-600">Digital Safety Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="text-gray-600" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'moderation' && renderModeration()}
        {activeTab === 'protection' && renderProtection()}
        {activeTab === 'guidance' && renderGuidance()}
        {activeTab === 'settings' && renderSettings()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-600">
            🔒 Your data is encrypted and private. We never share your information.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Need help? Contact support@safeguard-ai.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SafeGuardPlatform;
