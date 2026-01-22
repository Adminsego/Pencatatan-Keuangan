import { Users, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating exceptional web experiences with modern React development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              To build fast, responsive, and user-friendly web applications that solve real-world problems. 
              We believe in the power of modern web technologies to create meaningful digital experiences.
            </p>
            <p className="text-lg text-gray-600">
              This React frontend project demonstrates best practices in component architecture, 
              state management, and modern UI design using Tailwind CSS.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Users className="text-blue-600" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">User-Centered Design</h3>
                  <p className="text-gray-600">Creating intuitive interfaces that users love</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Target className="text-purple-600" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Performance Optimized</h3>
                  <p className="text-gray-600">Building fast and efficient applications</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Award className="text-green-600" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Best Practices</h3>
                  <p className="text-gray-600">Following industry standards and modern patterns</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full">React 18</span>
            <span className="bg-cyan-600 text-white px-4 py-2 rounded-full">Vite</span>
            <span className="bg-teal-600 text-white px-4 py-2 rounded-full">Tailwind CSS</span>
            <span className="bg-indigo-600 text-white px-4 py-2 rounded-full">React Router</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full">Lucide Icons</span>
          </div>
        </div>
      </div>
    </div>
  )
}
