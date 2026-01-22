import { ArrowRight, Code, Zap, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to React Frontend
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Modern, fast, and scalable web applications built with React
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose React?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build user interfaces with component-based architecture for better maintainability and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Component-Based</h3>
              <p className="text-gray-600">
                Build encapsulated components that manage their own state, making code reusable and maintainable
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Virtual DOM and optimized rendering ensure your applications run smoothly and efficiently
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliable</h3>
              <p className="text-gray-600">
                Backed by Facebook and a large community, React is continuously updated and well-supported
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
