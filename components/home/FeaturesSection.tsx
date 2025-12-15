const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Real-Time Updates",
      description: "Get instant score updates with zero delay. Never miss a wicket or boundary."
    },
    {
      icon: "📊",
      title: "Detailed Statistics",
      description: "Comprehensive match statistics, player performances, and historical data."
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Customizable alerts for wickets, milestones, and match results."
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Follow matches from all major cricket tournaments worldwide."
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Beautiful, responsive design that works perfectly on all devices."
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to stay connected with cricket
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;