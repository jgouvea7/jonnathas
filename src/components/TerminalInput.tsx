"use client";

import { useEffect, useRef, useState } from "react";
import { AVAILABLE_COMMANDS } from "./CommandHandler";

interface TerminalInputProps {
    onCommand: (command: string) => void;
    onTabSuggestions: (currentInput: string, suggestions: string[]) => void;
}

export function TerminalInput({ onCommand, onTabSuggestions }: TerminalInputProps) {
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Keep focus on the input when clicking anywhere
    useEffect(() => {
        const handleGlobalClick = () => {
            // Don't focus if the text is being selected
            if (window.getSelection()?.toString()) return;
            inputRef.current?.focus();
        };

        document.addEventListener("click", handleGlobalClick);
        return () => document.removeEventListener("click", handleGlobalClick);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onCommand(input);
            setInput("");
        } else if (e.key === "Tab") {
            e.preventDefault();
            if (!input.trim()) return;

            const matches = AVAILABLE_COMMANDS.filter((cmd) => cmd.startsWith(input.toLowerCase()));

            if (matches.length === 1) {
                // Autocomplete
                setInput(matches[0]);
            } else if (matches.length > 1) {
                // Return suggestions to parent to be printed
                onTabSuggestions(input, matches);
            }
        }
    };

    return (
        <div className="flex items-center gap-2 text-mac-text">
            <span className="text-mac-green font-bold shrink-0">jonnathas@portfolio:~$</span>
            <div className="relative flex-1 flex items-center">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="bg-transparent border-none outline-none w-full text-mac-text caret-transparent"
                    spellCheck={false}
                    autoComplete="off"
                />
                {/* Blinking Cursor */}
                <span
                    className="absolute h-[1.2em] w-2 bg-gray-400 animate-pulse pointer-events-none"
                    style={{
                        left: `calc(${input.length} * 0.6em)`, // Approximation for monospace font
                        opacity: 0.8
                    }}
                />
            </div>
        </div>
    );
}
