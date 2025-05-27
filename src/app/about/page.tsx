import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-coral-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-coral-50 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Little Garden
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Little Garden was founded with a passion for nature and a commitment to sustainability. 
                We believe that everyone should have access to the joy and benefits of gardening.
              </p>
              <p className="text-gray-600">
                Our mission is to make gardening accessible and enjoyable for everyone, regardless of experience level.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Values
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Environmental Responsibility</li>
                <li>Community Engagement</li>
                <li>Sustainable Practices</li>
                <li>Education and Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
