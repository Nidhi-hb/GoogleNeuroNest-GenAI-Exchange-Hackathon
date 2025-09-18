import React from 'react';
import { Shield, Eye, Globe, CheckCircle, Zap, Smartphone, ArrowRight } from 'lucide-react';
import FactChecker from './components/FactChecker';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'fact-checker'>('home');

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Real-time fact verification (with credibility score)",
      description: "Instant verification of claims with transparent scoring system"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "AI-powered deepfake & image forgery detection",
      description: "Advanced AI algorithms detect manipulated visual content"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual misinformation detection",
      description: "Support for multiple languages ensuring global accessibility"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Source reliability ranking",
      description: "Comprehensive ranking system for information sources"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Simple-language explanation mode",
      description: "Complex information explained in easy-to-understand terms"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Web + Mobile app with interactive UI",
      description: "Seamless experience across all devices and platforms"
    }
  ];

  if (currentPage === 'fact-checker') {
    return <FactChecker />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-white" />
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold text-white hover:text-cyan-300 transition-colors"
            >
              TruthLens
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('fact-checker')}
              className="text-white hover:text-cyan-300 transition-colors font-medium"
            >
              Fact Checker
            </button>
            <button 
              onClick={() => setCurrentPage('fact-checker')}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm">AI-Powered Fact Checking Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Combat Misinformation with
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"> AI Precision</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Most existing fact-checking tools focus only on text-based claim verification. TruthLens is different 
            because it integrates text, image, and video verification into one unified platform, supports multilingual 
            analysis, and presents results in simple, understandable language for all users.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('fact-checker')}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Try TruthLens Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How TruthLens Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-6"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              TruthLens solves the misinformation problem by combining AI-driven fact-checking with real-time 
              deepfake detection. Whenever a user inputs a link, post, image, or video, the system automatically 
              cross-checks claims with trusted sources (Google Fact Check API), analyzes content for manipulations, 
              and generates a credibility score.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Input Content</h3>
                <p className="text-white/70">Submit links, posts, images, or videos for verification</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Analysis</h3>
                <p className="text-white/70">Advanced AI algorithms analyze and cross-reference with trusted sources</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Get Results</h3>
                <p className="text-white/70">Receive credibility scores and simple explanations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose TruthLens?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Unified Platform</h3>
              <p className="text-white/80">Combines fact-checking + AI deepfake detection in one platform</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Accessibility</h3>
              <p className="text-white/80">Explains misinformation in simple terms for students, rural users, non-tech people</p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-red-600/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Multilingual Support</h3>
              <p className="text-white/80">Works in multiple languages, ensuring global scalability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Feature Set
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Everything you need to combat misinformation in one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Fight Misinformation?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join the fight against fake news with AI-powered fact-checking that anyone can understand.
            </p>
            <button 
              onClick={() => setCurrentPage('fact-checker')}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Start Fact-Checking Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-white" />
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-xl font-bold text-white hover:text-cyan-300 transition-colors"
            >
              TruthLens
            </button>
          </div>
          <p className="text-white/60">
            AI-powered fact-checking for a more informed world
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;