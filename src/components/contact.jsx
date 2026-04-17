
export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    }
    return (
    <div id="contact" className="max-w-2xl mx-auto px-10 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Feel free to reach out to me at any time!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}