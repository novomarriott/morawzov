export default function Contacts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center p-6">
      <nav className="flex justify-center space-x-16 mb-10 text-gray-500 text-lg">
        <a href="/" className="hover:text-gray-300">ПОРТФОЛИО</a>
      </nav>
      <h1 className="text-3xl font-bold mb-4 opacity-80">КОНТАКТЫ</h1>
      <p className="text-lg text-gray-400 mb-4">Свяжитесь со мной:</p>
      <div className="flex justify-center space-x-4">
        <a href="https://t.me/example" className="text-blue-400 text-xl hover:underline">Telegram</a>
        <a href="https://instagram.com/example" className="text-pink-400 text-xl hover:underline">Instagram</a>
        <a href="mailto:example@example.com" className="text-green-400 text-xl hover:underline">Email</a>
      </div>
    </div>
  );
}