import { MessageSquare, Monitor, Network, ThumbsUp } from "lucide-react";

export default function Component() {
  const services = [
    {
      icon: MessageSquare,
      title: "Social Marketing",
      description:
        "Social marketing is an approach used to develop activities aimed at changing or maintaining people's behavior for the benefit of individuals and society as a whole.",
      iconColor: "text-teal-500",
    },
    {
      icon: Monitor,
      title: "Startups",
      description:
        "We've funded hundreds of companies over the world, you'll find them all here.",
      iconColor: "text-teal-500",
    },
    {
      icon: Network,
      title: "Business Growing",
      description:
        "Based on client needs, We will provide some good business solutions.",
      iconColor: "text-green-500",
    },
    {
      icon: ThumbsUp,
      title: "Development",
      description:
        "Creating Your Own Website was Never That Easy. Come and Check it Out!",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-8 text-center"
              >
                <div className="mb-6">
                  <IconComponent
                    className={`w-16 h-16 mx-auto ${service.iconColor} stroke-[1.5]`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
