import TourCard from "./components/TourCard";

const tours = [
  {
    image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
    title: "Relaxing Beach Escape",
    description: "Unwind on pristine sandy beaches and soak in breathtaking sunsets.",
  },
  {
    image: "https://images.pexels.com/photos/3781530/pexels-photo-3781530.jpeg",
    title: "Safari Adventure",
    description: "Experience the thrill of wildlife safaris in Africa’s iconic parks.",
  },
  {
    image: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg",
    title: "Mountain Trekking",
    description: "Conquer scenic mountain trails and embrace fresh alpine air.",
  },
  {
    image: "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg",
    title: "Forest Exploration",
    description: "Discover hidden gems deep within lush green forests.",
  },
  {
    image: "https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg",
    title: "Hiking Getaway",
    description: "Reconnect with nature through guided hikes and adventures.",
  },
  {
    image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    title: "City & Culture",
    description: "Immerse yourself in vibrant cities rich in culture and history.",
  },
];

export default function Tours() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Tours</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour, i) => (
          <TourCard
            key={i}
            image={tour.image}
            title={tour.title}
            description={tour.description}
          />
        ))}
      </div>
    </div>
  );
}
