import { ReactNode } from "react";

export type CommandOutput = {
    id: string;
    command: string;
    output: ReactNode;
};

export const AVAILABLE_COMMANDS = [
    "help",
    "whoami",
    "about",
    "skills",
    "contact",
    "open resume",
    "clear"
];

export const handleCommand = (command: string): ReactNode => {
    const cmd = command.trim().toLowerCase();

    if (cmd === "") return null;

    switch (cmd) {
        case "welcome":
            return (
                <div className="text-gray-300">
                    <pre className="text-gray-300 mb-6 leading-tight">
                        {`
       __                        __  __              
      / /___  ____  ____  ____ _/ /_/ /_  ____ ______
 __  / / __ \\/ __ \\/ __ \\/ __ \`/ __/ __ \\/ __ \`/ ___/
/ /_/ / /_/ / / / / / / / /_/ / /_/ / / / /_/ (__  ) 
\\____/\\____/_/ /_/_/ /_/\\__,_/\\__/_/ /_/\\__,_/____/  
`}
                    </pre>

                    <p className="mb-4">Welcome to my terminal portfolio.</p>

                    <p>
                        Type <span className="text-mac-green">&quot;help&quot;</span> to see available commands.
                    </p>
                </div>
            );

        case "help":
            return (
                <div className="flex flex-col gap-1 text-gray-300">
                    <p className="mb-2">Available commands:</p>

                    <div className="grid grid-cols-[120px_1fr] gap-2">

                        <span className="text-mac-green">open resume</span>
                        <span>&rarr; open full resume page</span>

                        <span className="text-mac-green">whoami</span>
                        <span>&rarr; display basic info about me</span>

                        <span className="text-mac-green">about</span>
                        <span>&rarr; learn more about my background</span>

                        <span className="text-mac-green">skills</span>
                        <span>&rarr; see my technical skills</span>

                        <span className="text-mac-green">contact</span>
                        <span>&rarr; how to reach me</span>

                        <span className="text-mac-green">clear</span>
                        <span>&rarr; clear the terminal</span>

                        <span className="text-mac-green">help</span>
                        <span>&rarr; show this help menu</span>

                    </div>
                </div>
            );

        case "about":
            return (
                <div className="text-gray-300">
                    <p className="mb-2 text-mac-green">Hi, I&apos;m Jonnathas.</p>
                    <p>
                        Software Engineer focused on backend systems, performance and scalable architectures.
                        Currently exploring systems programming, building projects and continuously improving my engineering skills.
                    </p>
                </div>
            );

        case "skills":
            return (
                <div className="flex flex-col text-gray-300 whitespace-pre">
                    <div><span className="text-mac-yellow">backend:</span></div>
                    <div><span className="text-mac-green">  - languages:</span> [TypeScript, C, Python, Java]</div>
                    <div><span className="text-mac-green">  - database:</span> [PostgreSQL, MongoDB]</div>
                    <div><span className="text-mac-green">  - tools:</span> [Docker]</div>
                    <div className="mt-2"><span className="text-mac-yellow">frontend:</span></div>
                    <div><span className="text-mac-green">  - frameworks:</span> [Angular, Next.js]</div>
                    <div><span className="text-mac-green">  - styling:</span> [Tailwind]</div>
                </div>
            );

        case "contact":
            return (
                <div className="flex flex-col gap-1 text-gray-300">
                    <div className="flex">
                        <span className="w-24 text-mac-yellow">LinkedIn:</span>
                        <a href="https://linkedin.com/in/jgouvea7" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
                            https://linkedin.com/in/jgouvea7
                        </a>
                    </div>
                    <div className="flex">
                        <span className="w-24 text-mac-yellow">Email:</span>
                        <a href="mailto:jonnathasg@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
                            jonnathasg@gmail.com
                        </a>
                    </div>
                    <div className="flex">
                        <span className="w-24 text-mac-yellow">GitHub:</span>
                        <a href="https://github.com/jgouvea7" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
                            https://github.com/jgouvea7
                        </a>
                    </div>
                </div>
            );

        case "whoami":
            return (
                <div className="flex flex-col gap-1 text-gray-300">
                    <div className="flex"><span className="w-24 text-mac-yellow">Name:</span> <span>Jonnathas de Gouvea</span></div>
                    <div className="flex"><span className="w-24 text-mac-yellow">Role:</span> <span>Software Engineer</span></div>
                    <div className="flex"><span className="w-24 text-mac-yellow">Focus:</span> <span>Backend / Systems / Performance</span></div>
                    <div className="flex"><span className="w-24 text-mac-yellow">Location:</span> <span>Brazil</span></div>
                </div>
            );

        default:
            return (
                <div className="text-mac-red">
                    <p>Command not found: {command}</p>
                    <p className="text-gray-400">Type &quot;help&quot; to see available commands.</p>
                </div>
            );
    }
};
