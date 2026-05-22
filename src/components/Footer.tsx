import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const footerLinks = [
  {
    name: "linkedin",
    color:
      "from-sky-400/20 to-blue-500/10 hover:border-sky-400/30 hover:text-sky-300",
    icon: <FaLinkedin />,
    href: "",
  },
  {
    name: "github",
    color:
      "from-gray-400/20 to-zinc-500/10 hover:border-white/30 hover:text-white",
    icon: <FaGithub />,
    href: "",
  },
  {
    name: "instagram",
    color:
      "from-pink-400/20 to-rose-500/10 hover:border-pink-400/30 hover:text-pink-300",
    icon: <FaInstagram />,
    href: "",
  },
];

export default function Footer() {
  return (
    <footer className="relative mb-10 overflow-hidden rounded-4xl border border-white/10 bg-white/5 px-6 py-5 text-white backdrop-blur-xl">
      {/* Glow */}
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pink-400/10 blur-3xl"></div>

      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col gap-5 flex-row items-center justify-between">
        {/* Left */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>

            <span className="text-xs font-bold tracking-[0.2em] text-yellow-300">
              SHIRITORI GAME
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-300 max-sm:text-xs">
            © 2026 <span className="font-bold text-white">Haikaruuu</span>. All
            rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {footerLinks.map((fl) => (
            <a
              key={fl.name}
              href={fl.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${fl.color} p-3 text-xl max-md:text-lg   text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10`}
            >
              {/* Blur */}
              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {fl.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
