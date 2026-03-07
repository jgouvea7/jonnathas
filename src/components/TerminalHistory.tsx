import { CommandOutput } from "./CommandHandler";

interface TerminalHistoryProps {
    history: CommandOutput[];
}

export function TerminalHistory({ history }: TerminalHistoryProps) {
    return (
        <div className="flex flex-col gap-4 mb-4">
            {history.map((item) => (
                <div key={item.id} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-mac-text">
                        <span className="text-mac-green font-bold">jonnathas@portfolio:~$</span>
                        <span>{item.command}</span>
                    </div>
                    {item.output && (
                        <div className="ml-2">
                            {item.output}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
