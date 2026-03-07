"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DoomPage } from "@/components/DoomPage";
import { ResumePage } from "@/components/ResumePage";
import { TerminalWindow } from "@/components/TerminalWindow";

type AppView = "terminal" | "resume" | "doom";

export default function Home() {
  const [view, setView] = useState<AppView>("terminal");

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-zinc-950">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] max-w-[1400px] h-[80vh] max-h-[1000px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Terminal Container */}
      <div className="relative z-10 flex w-full min-h-screen items-center justify-center p-4 md:p-8">
        <TerminalWindow onOpenResume={() => setView("resume")} onOpenDoom={() => setView("doom")} />
      </div>

      <AnimatePresence mode="wait">
        {view !== "terminal" && (
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 p-4 backdrop-blur-[1px] md:p-8"
          >
            {view === "resume" ? (
              <ResumePage onBackToTerminal={() => setView("terminal")} />
            ) : (
              <DoomPage onBackToTerminal={() => setView("terminal")} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
