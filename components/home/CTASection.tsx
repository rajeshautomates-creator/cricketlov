const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Never Miss a Match?
        </h2>
        <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
          Join thousands of cricket fans who stay updated with real-time scores and statistics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Start Free Trial
          </button>
          <button className="bg-transparent hover:bg-green-800 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
            Contact Sales
          </button>
        </div>
        <p className="mt-6 text-green-100 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;