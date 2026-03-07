"use client";

import { useState, useRef, useEffect } from "react";
import { TerminalInput } from "./TerminalInput";
import { TerminalHistory } from "./TerminalHistory";
import { CommandOutput, handleCommand } from "./CommandHandler";
import { motion } from "framer-motion";

interface TerminalWindowProps {
    onOpenResume: () => void;
    onOpenDoom: () => void;
}

export function TerminalWindow({ onOpenResume, onOpenDoom }: TerminalWindowProps) {
    const [history, setHistory] = useState<CommandOutput[]>([
        {
            id: "init",
            command: "welcome",
            output: handleCommand("welcome")
        }
    ]);
    const endOfMessagesRef = useRef<HTMLDivElement>(null);
    const openResumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const openDoomTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    useEffect(() => {
        return () => {
            if (openResumeTimeoutRef.current) {
                clearTimeout(openResumeTimeoutRef.current);
            }
            if (openDoomTimeoutRef.current) {
                clearTimeout(openDoomTimeoutRef.current);
            }
        };
    }, []);

    const onCommand = (command: string) => {
        const normalizedCommand = command.trim().toLowerCase();

        if (normalizedCommand === "clear") {
            setHistory([]);
            return;
        }

        if (normalizedCommand === "open resume") {
            setHistory((prev) => [
                ...prev,
                {
                    id: Math.random().toString(36).substring(7),
                    command,
                    output: <p className="text-gray-300">Opening resume...</p>
                },
            ]);

            openResumeTimeoutRef.current = setTimeout(() => {
                onOpenResume();
            }, 350);
            return;
        }

        if (normalizedCommand === "run doom") {
            setHistory((prev) => [
                ...prev,
                {
                    id: Math.random().toString(36).substring(7),
                    command,
                    output: <p className="text-gray-300">Launching DOOM...</p>
                },
            ]);

            openDoomTimeoutRef.current = setTimeout(() => {
                onOpenDoom();
            }, 350);
            return;
        }

        const output = handleCommand(command);

        // We only create an entry if the command is not empty
        if (command.trim() !== "") {
            setHistory((prev) => [
                ...prev,
                { id: Math.random().toString(36).substring(7), command, output },
            ]);
        }
    };

    const onTabSuggestions = (currentInput: string, suggestions: string[]) => {
        setHistory((prev) => [
            ...prev,
            {
                id: Math.random().toString(36).substring(7),
                command: currentInput,
                output: (
                    <div className="flex gap-4 text-gray-300 my-1">
                        {suggestions.map((s) => (
                            <span key={s} className="text-mac-green">{s}</span>
                        ))}
                    </div>
                )
            }
        ]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-[90%] max-w-[1100px] rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] border border-mac-border/50 bg-[#1e1e1e]/85 backdrop-blur-2xl flex flex-col h-[70vh] max-h-[600px]"
        >
            {/* macOS Window Title Bar */}
            <div className="h-8 bg-[#2d2d2d]/90 border-b border-mac-border/50 flex items-center px-4 shrink-0 justify-center relative">
                <div className="absolute left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-mac-red hover:bg-red-600 cursor-pointer shadow-inner"></div>
                    <div className="w-3 h-3 rounded-full bg-mac-yellow hover:bg-yellow-500 cursor-pointer shadow-inner"></div>
                    <div className="w-3 h-3 rounded-full bg-mac-green hover:bg-green-500 cursor-pointer shadow-inner"></div>
                </div>
                <div className="text-gray-400 text-xs font-semibold cursor-default select-none">
                    jonnathas@portfolio ~ -zsh
                </div>
            </div>

            {/* Terminal Content Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 terminal-scrollbar text-sm md:text-base selection:bg-gray-700 selection:text-white pb-10">
                <TerminalHistory history={history} />
                <TerminalInput onCommand={onCommand} onTabSuggestions={onTabSuggestions} />
                <div ref={endOfMessagesRef} />
            </div>
        </motion.div>
    );
}
