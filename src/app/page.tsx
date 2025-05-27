import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-coral-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-coral-50 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Welcome to Little Garden
          </h1>
          <div className="text-center mb-12">
            <img 
              src="/images/logos/logo-nobackground.png" 
              alt="Little Garden Full Logo" 
              className="mx-auto h-96 w-auto"
            />
          </div>
          <p className="text-gray-600">
            Discover the beauty of nature in every corner of our garden. 
            Explore our collection of plants, flowers, and natural wonders.
          </p>
        </div>
      </main>
    </div>
  );
}
