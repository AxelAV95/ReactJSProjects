import { Book, Crown, Globe, Home, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main className="container mx-auto p-4 md:flex md:space-x-4 overflow-y-auto">
            <aside className="mb-4 md:w-1/4">
                <div className="bg-[#1cb0f6] rounded-lg p-4 mb-4">
                    <h2 className="text-xl font-bold mb-2">Your Progress</h2>
                    <div className="flex items-center space-x-2">
                        <Crown className="h-6 w-6 text-yellow-400" />
                        <span>Level 5</span>
                    </div>
                    <div className="mt-2">
                        <div className="bg-[#235390] h-2 rounded-full">
                            <div className="bg-yellow-400 h-2 rounded-full w-2/3"></div>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="flex items-center space-x-2 hover:text-[#1cb0f6]">
                                <Home className="h-5 w-5" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/stories" className="flex items-center space-x-2 hover:text-[#1cb0f6]">
                                <Book className="h-5 w-5" />
                                <span>Stories</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/discuss" className="flex items-center space-x-2 hover:text-[#1cb0f6]">
                                <MessageCircle className="h-5 w-5" />
                                <span>Discuss</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/leaderboard" className="flex items-center space-x-2 hover:text-[#1cb0f6]">
                                <Globe className="h-5 w-5" />
                                <span>Leaderboard</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section className="md:w-3/4">
                <h1 className="text-2xl font-bold mb-4">Continue Learning</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {["Basics", "Phrases", "Travel", "Family", "Restaurant", "Shopping", "Daily life"].map((lesson) => (
                        <div key={lesson} className="bg-[#1cb0f6] rounded-lg p-4 hover:bg-[#235390] transition-colors">
                            <h3 className="font-bold mb-2">{lesson}</h3>
                            <p className="text-sm">Master essential {lesson.toLowerCase()} vocabulary and grammar.</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Main;