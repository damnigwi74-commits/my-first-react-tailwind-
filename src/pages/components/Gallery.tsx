const imagesV1 = [
  "https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const imagesV2 = [
  "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg", // beach
  "https://images.pexels.com/photos/3781530/pexels-photo-3781530.jpeg", // safari / adventure
  "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg", // mountain view
  "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg", // forest
  "https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg", // hiking adventure
  "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg", // travel / city
];


console.log(imagesV1);

function Gallery() {
  const images = imagesV2;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Tour Gallery"
          className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  );
}


export default Gallery;
