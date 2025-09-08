// Styles are provided via Tailwind CDN in public/index.html
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaChartLine, FaUsers, FaGamepad } from 'react-icons/fa';

const Container = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-cream text-gray-900">{children}</div>
);

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      <NavLink to="/" className="flex items-center gap-2 font-semibold text-primary">
        <FaLeaf className="text-primary" />
        <span>GreenQuest</span>
      </NavLink>
      <div className="hidden md:flex items-center gap-6 text-sm">
        {[
          ['Home', '/'],
          ['Features', '/features'],
          ['Dashboard', '/dashboard'],
          ['Leaderboard', '/leaderboard'],
          ['Community', '/community'],
          ['About', '/about'],
        ].map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-2 py-1 rounded-md transition-colors ${
                isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="mt-auto bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 font-semibold text-primary">
          <FaLeaf />
          <span>GreenQuest</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">Sustainable farming made engaging and rewarding.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Contact</h4>
        <p className="text-sm text-gray-600">support@greenquest.io</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Follow</h4>
        <div className="flex gap-3 text-gray-600">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-primary">X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary">IG</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-primary">YT</a>
        </div>
      </div>
    </div>
  </footer>
);

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-green-100 via-cream to-cream" />
    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
          Farming Made Fun: <span className="text-primary">Grow Sustainably</span>, Earn Rewards
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Learn by playing, complete personalized quests, track your impact, and shine on leaderboards.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <NavLink to="/dashboard" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg shadow-soft hover:shadow-md transition">
            Start Your Journey
          </NavLink>
          <NavLink to="/features" className="inline-flex items-center gap-2 bg-white text-gray-800 px-5 py-3 rounded-lg border hover:border-primary hover:text-primary transition">
            Learn More
          </NavLink>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="grid grid-cols-2 gap-4">
        {[
          { icon: <FaGamepad />, title: 'Learning Through Play' },
          { icon: <FaLeaf />, title: 'Personalized Quests' },
          { icon: <FaChartLine />, title: 'Progress Tracker' },
          { icon: <FaUsers />, title: 'Peer Sharing & Leaderboards' },
        ].map((f, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="p-5 bg-white rounded-xl shadow-soft border border-gray-100">
            <div className="text-primary text-2xl">{f.icon}</div>
            <div className="mt-2 font-semibold">{f.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl font-bold">Core Features</h2>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: '🎮', title: 'Learning Through Play' },
        { icon: '🌱', title: 'Personalized Quests' },
        { icon: '📊', title: 'Progress Tracker' },
        { icon: '🤝', title: 'Peer Sharing & Leaderboards' },
        { icon: '🏆', title: 'Rewards & Recognition' },
      ].map((c, i) => (
        <motion.div key={i} whileHover={{ scale: 1.03 }} className="p-6 bg-white rounded-xl shadow-soft border border-gray-100">
          <div className="text-3xl">{c.icon}</div>
          <div className="mt-3 font-semibold">{c.title}</div>
          <p className="text-sm text-gray-600 mt-1">Engaging, bite-sized experiences crafted for real-world impact.</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProgressBar = ({ value = 60 }) => (
  <div className="w-full bg-gray-100 rounded-full h-3">
    <div className="bg-primary h-3 rounded-full" style={{ width: `${value}%` }} />
  </div>
);

const CircularGauge = ({ value = 72 }) => (
  <div className="relative w-36 h-36">
    <svg className="w-full h-full" viewBox="0 0 36 36">
      <path className="text-gray-200" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
      <path className="text-primary" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none"
        strokeDasharray={`${value}, 100`} d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center font-semibold">{value}%</div>
  </div>
);

const Badge = ({ label }) => (
  <div className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">{label}</div>
);

const Dashboard = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl font-bold">Your Progress</h2>
    <div className="mt-8 grid lg:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-xl shadow-soft border">
        <div className="font-semibold mb-2">Weekly Quest Progress</div>
        <ProgressBar value={64} />
      </div>
      <div className="p-6 bg-white rounded-xl shadow-soft border flex items-center justify-center">
        <div className="text-center">
          <div className="font-semibold mb-2">Sustainability Score</div>
          <CircularGauge value={72} />
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-soft border">
        <div className="font-semibold mb-2">Badges Unlocked</div>
        <div className="flex flex-wrap gap-2">
          {['Water Saver', 'Soil Steward', 'Compost Champ'].map(b => <Badge key={b} label={b} />)}
        </div>
      </div>
    </div>
  </section>
);

const Leaderboard = () => {
  const rows = [
    { name: 'Aisha K.', location: 'Nairobi', points: 980, rank: 1 },
    { name: 'Liam P.', location: 'Dublin', points: 920, rank: 2 },
    { name: 'Maya R.', location: 'Delhi', points: 880, rank: 3 },
    { name: 'Diego S.', location: 'Lima', points: 820, rank: 4 },
    { name: 'Yuna H.', location: 'Seoul', points: 790, rank: 5 },
  ];
  const medal = (rank) => rank === 1 ? 'bg-yellow-400' : rank === 2 ? 'bg-gray-300' : rank === 3 ? 'bg-amber-600' : 'bg-gray-200';
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold">Leaderboard</h2>
      <div className="mt-6 overflow-hidden rounded-xl border shadow-soft bg-white">
        <table className="w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Farmer</th>
              <th className="p-4">Location</th>
              <th className="p-4">Points</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.rank} className="border-t">
                <td className="p-4">
                  <span className={`inline-block w-6 h-6 rounded-full ${medal(r.rank)}`} />
                </td>
                <td className="p-4">{r.name}</td>
                <td className="p-4 text-gray-600">{r.location}</td>
                <td className="p-4 font-semibold">{r.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Community = () => {
  const posts = [
    { id: 1, name: 'Aisha', text: 'Harvested 20% more after drip irrigation!', badge: 'Water Saver' },
    { id: 2, name: 'Liam', text: 'Started composting—soil health improved.', badge: 'Compost Champ' },
  ];
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold">Community</h2>
      <div className="mt-6 grid gap-4">
        {posts.map(p => (
          <div key={p.id} className="p-5 bg-white rounded-xl shadow-soft border flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-semibold text-primary">
              {p.name[0]}
            </div>
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-gray-700">{p.text}</div>
              <div className="mt-2 inline-block px-2 py-0.5 text-sm rounded-full bg-secondary/20 text-secondary">{p.badge}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl font-bold">About</h2>
    <p className="mt-4 text-gray-700">We empower the next generation to farm sustainably through play, community, and measurable impact.</p>
  </section>
);

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Features />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
