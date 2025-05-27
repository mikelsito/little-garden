import Navbar from '@/components/Navbar';

export default function Projects() {
  const projects = [
    {
      title: "Urban Rooftop Garden",
      description: "Transforming city rooftops into lush green spaces",
      image: "https://images.unsplash.com/photo-1534308983496-9670e2a3d5e8",
      category: "Urban",
    },
    {
      title: "Sustainable Vegetable Patch",
      description: "Organic vegetable garden with composting system",
      image: "https://images.unsplash.com/photo-1567583862486-24437a78a46a",
      category: "Vegetable",
    },
    {
      title: "Native Plant Garden",
      description: "Showcasing local flora and supporting wildlife",
      image: "https://images.unsplash.com/photo-1545972154-9bb223aac683",
      category: "Native",
    },
    {
      title: "Water Conservation",
      description: "Smart irrigation and drought-resistant plants",
      image: "https://images.unsplash.com/photo-1591864491581-077685719781",
      category: "Sustainable",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Projects
          </h1>
          <p className="text-gray-600">
            Explore our latest garden projects and get inspired
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  project.category === 'Urban' ? 'bg-blue-100 text-blue-800' :
                  project.category === 'Vegetable' ? 'bg-green-100 text-green-800' :
                  project.category === 'Native' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {project.category} Garden
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
