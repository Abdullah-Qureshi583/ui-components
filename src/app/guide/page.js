import { Code, Copy, ExternalLink } from 'lucide-react'

export default function GuidePage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">UI Components Library</h1>
        <p className="text-lg text-gray-600">
          A comprehensive collection of reusable React components built with Tailwind CSS and shadcn/ui.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Getting Started */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="mb-4">
              This library provides ready-to-use UI components that you can easily integrate into your projects. 
              Each component comes with live preview and source code.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Code size={16} />
                Browse Components
              </button>
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                <Copy size={16} />
                Copy Installation
              </button>
            </div>
          </div>
        </section>

        {/* Component Categories */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Component Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Navigation",
                description: "Navbar, Sidebar, Breadcrumb, Tabs",
                icon: "🧭",
                count: 4
              },
              {
                title: "Layout",
                description: "Grid, Container, Card, Carousel",
                icon: "📐",
                count: 4
              },
              {
                title: "Forms",
                description: "Input, Button, Checkbox, Select",
                icon: "📝",
                count: 6
              },
              {
                title: "Feedback",
                description: "Alert, Toast, Modal",
                icon: "💬",
                count: 3
              },
              {
                title: "Data Display",
                description: "Table, Badge, Progress",
                icon: "📊",
                count: 3
              }
            ].map((category) => (
              <div key={category.title} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{category.count} components</span>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guide */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">1. Browse Components</h3>
              <p className="text-sm text-gray-600">
                Use the sidebar navigation to browse different component categories. 
                Each component has its own page with live preview and code examples.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">2. Preview & Code</h3>
              <p className="text-sm text-gray-600">
                Click on any component to see it in action. Toggle between preview and 
                source code views to understand how to implement it.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">3. Copy & Customize</h3>
              <p className="text-sm text-gray-600">
                Copy the source code directly and customize it according to your needs. 
                All components are built with Tailwind CSS for easy customization.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}