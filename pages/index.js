export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center p-6">
      <nav className="flex justify-center space-x-16 mb-10 text-gray-500 text-lg">
        <a href="/contacts" className="hover:text-gray-300">КОНТАКТЫ</a>
      </nav>
      <h1 className="text-3xl font-bold mb-2 opacity-80">ПОРТФОЛИО</h1>
      <p className="text-gray-500 text-sm mb-6">ретушь</p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-3xl mx-auto">
        <div className="border-2 border-gray-700 rounded-lg p-2">
          <img src="https://i.imgur.com/3c3iJgF.jpeg" className="w-full h-auto" />
        </div>
        <div className="border-2 border-gray-700 rounded-lg p-2">
          <img src="https://i.imgur.com/uJzkG4s.jpeg" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}