import Navbar from '@/components/Navbar';

export default function Services() {
  const services = [
    {
      title: "Garden Design",
      description: "Custom garden layouts tailored to your space and needs",
      icon: "flower",
      features: [
        "Custom garden plans",
        "Plant selection",
        "Seasonal planning",
        "Sustainable design",
      ],
    },
    {
      title: "Plant Care",
      description: "Professional care for all types of plants and gardens",
      icon: "leaf",
      features: [
        "Weekly maintenance",
        "Seasonal pruning",
        "Pest control",
        "Watering systems",
      ],
    },
    {
      title: "Landscaping",
      description: "Complete garden transformation services",
      icon: "mountain",
      features: [
        "Soil preparation",
        "Plant installation",
        "Pathways",
        "Water features",
      ],
    },
    {
      title: "Consultation",
      description: "Expert advice for your gardening needs",
      icon: "advice",
      features: [
        "Garden assessment",
        "Maintenance plans",
        "Plant selection",
        "Seasonal tips",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-coral-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-coral-50 rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600">
            Professional gardening services to create and maintain your perfect outdoor space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-coral-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon === "flower" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  )}
                  {service.icon === "leaf" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1z"
                    />
                  )}
                  {service.icon === "mountain" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143-5.714-2.143L3 17l6.286-17z"
                    />
                  )}
                  {service.icon === "advice" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  )}
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
