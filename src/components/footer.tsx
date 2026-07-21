import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-clay text-white border-t border-clay">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-white/80">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profile.social.email}`}
            className="font-mono text-xs font-bold tracking-[0.2em] uppercase hover:text-white/60 transition-colors duration-200"
          >
            Email
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold tracking-[0.2em] uppercase hover:text-white/60 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold tracking-[0.2em] uppercase hover:text-white/60 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
