export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <p className="mb-4 text-gray-700">We’d love to hear from you!</p>
          <p className="mb-2">📧 Email: info@dktouring.com</p>
          <p className="mb-2">📞 Phone: +254 700 123 456</p>
          <p>📍 Location: Nairobi, Kenya</p>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border rounded p-2" />
          <input type="email" placeholder="Your Email" className="w-full border rounded p-2" />
          <textarea placeholder="Your Message" rows={4} className="w-full border rounded p-2"></textarea>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
