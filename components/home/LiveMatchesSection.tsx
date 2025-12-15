const LiveMatchesSection = () => {
  const matches = [
    {
      id: 1,
      team1: "India",
      team2: "Australia",
      score1: "245/3",
      score2: "198/7",
      status: "Live",
      overs: "45.2",
      venue: "MCG, Melbourne"
    },
    {
      id: 2,
      team1: "England",
      team2: "New Zealand",
      score1: "312/8",
      score2: "289/10",
      status: "Completed",
      overs: "50.0",
      venue: "Lord's, London"
    },
    {
      id: 3,
      team1: "Pakistan",
      team2: "South Africa",
      score1: "156/2",
      score2: "152/4",
      status: "Live",
      overs: "32.1",
      venue: "Dubai International"
    }
  ];

  return (
    <section id="matches" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live Matches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow your favorite teams and players in real-time
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  match.status === "Live" 
                    ? "bg-red-100 text-red-600 animate-pulse" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {match.status}
                </span>
                <span className="text-sm text-gray-500">{match.venue}</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">I</span>
                    </div>
                    <span className="font-semibold text-gray-900">{match.team1}</span>
                  </div>
                  <span className="font-bold text-lg text-gray-900">{match.score1}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">A</span>
                    </div>
                    <span className="font-semibold text-gray-900">{match.team2}</span>
                  </div>
                  <span className="font-bold text-lg text-gray-900">{match.score2}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Overs: {match.overs}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMatchesSection;