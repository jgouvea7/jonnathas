"use client";

import { motion } from "framer-motion";

interface DoomPageProps {
  onBackToTerminal: () => void;
}

export function DoomPage({ onBackToTerminal }: DoomPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-[80vh] w-[94%] max-w-[1100px] overflow-hidden rounded-2xl border border-slate-700/70 bg-[#111315] shadow-[0_35px_80px_-35px_rgba(0,0,0,0.8)]"
    >
      <div className="flex h-12 items-center border-b border-slate-700 bg-[#1a1d21] px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToTerminal}
            aria-label="Close doom app"
            className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-inner transition hover:brightness-110"
          />
          <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-inner" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-inner" />
        </div>
        <div className="mx-auto text-xs font-semibold tracking-wide text-slate-400">DOOM</div>
      </div>

      <div className="h-[calc(80vh-3rem)] bg-black p-3">
        <div className="h-full w-full overflow-hidden rounded-xl border border-slate-800 bg-black">
          <iframe
            title="DOOM"
            src="https://js-dos.com/games/doom.exe.html"
            className="h-full w-full"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  );
}
