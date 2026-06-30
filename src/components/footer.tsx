import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profile.social.email}`}
            className="font-mono text-sm hover:text-cyan-500 transition-colors duration-200"
          >
            Email
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm hover:text-cyan-500 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm hover:text-cyan-500 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
