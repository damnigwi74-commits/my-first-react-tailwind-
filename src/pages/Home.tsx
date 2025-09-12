import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Explore the World with My APP</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Discover breathtaking destinations, experience unforgettable adventures, 
          and create lifelong memories with us.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Book Your Trip
        </button>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Gallery</h3>
        <Gallery />
      </section>
    </div>
  );
}
