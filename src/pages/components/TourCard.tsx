type TourCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function TourCard({ image, title, description }: TourCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}
