"use client"
import { useState, useEffect } from "react"
import {
    CommandDialog,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {
    ArrowUp,
    Book,
    Briefcase,
    File,
    Folder,
    Github,
    Home,
    Keyboard,
    Mail,
} from "lucide-react"
import { useHotkeys, useRecordHotkeys } from "react-hotkeys-hook"
import { useRouter } from "next/navigation"
import copy from "copy-to-clipboard"

export function Commands() {
    const [open, setOpen] = useState(false)
    const router = useRouter()


        useHotkeys("shift+h", () => router.push("/"))

    useHotkeys("shift+b", () => router.push("/blogs"))

    useHotkeys("shift+w", () => router.push("/work"))

    useHotkeys("shift+p", () => router.push("/projects"))

    useHotkeys("shift+r", () => router.push("/resume"))

    useHotkeys("shift+g", () => router.push("https://github.com/Utkarshrajmishra"))

    useHotkeys("shift+e", () => copy("utkarshrajmishra811545@gmail.com"))


    useHotkeys("shift + up", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    useHotkeys("ctrl+q", () => setOpen((prev) => !prev))



    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-xs px-3 h-8 flex items-center justify-center rounded-md gap-1.5 border border-neutral-700 cursor-pointer bg-neutral-900 hover:bg-neutral-800 text-white transition-colors duration-200"
            >
                Search
                <span className="text-[0.65rem] text-neutral-400">(Ctrl + Q)</span>
            </button>

            <CommandDialog open={open} onOpenChange={setOpen} className="border border-neutral-500">
                <Command className="w-full max-w-2xl font-host bg-neutral-900  text-neutral-100 border-none rounded-lg  shadow-lg">
                    <CommandInput
                        className="text-base text-neutral-400 placeholder:text-neutral-400 "
                        placeholder="Type a command or search..."
                    />
                    <CommandList className="max-h-[450px] border-none">
                        <CommandEmpty className="py-6 text-center text-neutral-400">
                            No results found.
                        </CommandEmpty>

                        <CommandGroup
                            heading={
                                <span className="text-xs font-medium text-neutral-400">
                                    Navigation
                                </span>
                            }
                            className="px-2"
                        >
                            <CommandItem className="flex items-center gap-2 px-2 py-2 text-sm text-neutral-400  rounded cursor-pointer">
                                <Home className="h-4 w-4 text-neutral-400" />
                                <span>Go to Home</span>
                                <CommandShortcut className="text-xs text-neutral-400 group-hover:text-neutral-300">
                                    Shift+H
                                </CommandShortcut>
                            </CommandItem>
                            <CommandItem className="flex items-center gap-2 px-2 py-2 text-sm text-neutral-400  rounded cursor-pointer">
                                <Briefcase className="h-4 w-4 text-neutral-400" />
                                <span>Go to Work Experience</span>
                                <CommandShortcut className="text-xs text-neutral-400 group-hover:text-neutral-300">
                                    Shift+W
                                </CommandShortcut>
                            </CommandItem>
                            <CommandItem className="flex items-center gap-2 px-2 py-2 text-sm text-neutral-400  rounded cursor-pointer">
                                <Book className="h-4 w-4 text-neutral-400" />
                                <span>Go to Blogs</span>
                                <CommandShortcut className="text-xs text-neutral-400 group-hover:text-neutral-300">
                                    Shift+B
                                </CommandShortcut>
                            </CommandItem>
                            <CommandItem className="flex items-center gap-2 px-2 py-2 text-sm text-neutral-400  rounded cursor-pointer">
                                <Folder className="h-4 w-4 text-neutral-400" />
                                <span>Go to Projects</span>
                                <CommandShortcut className="text-xs text-neutral-400 group-hover:text-neutral-300">
                                    Shift+P
                                </CommandShortcut>
                            </CommandItem>
                            <CommandItem className="flex items-center gap-2 px-2 py-2 text-sm text-neutral-400  rounded cursor-pointer">
                                <File className="h-4 w-4 text-neutral-400" />
                                <span>Go to Resume</span>
                                <CommandShortcut className="text-xs text-neutral-400 group-hover:text-neutral-300">
                                    Shift+R
                                </CommandShortcut>
                            </CommandItem>

                        </CommandGroup>

                        <CommandSeparator className="bg-neutral-700 my-1" />

                        <CommandGroup
                            heading={
                                <span className="text-xs font-medium text-neutral-400">
                                    Actions
                                </span>
                            }
                            className="px-2"
                        >
                            <CommandItem className="flex items-center justify-between px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-800 rounded cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-neutral-400" />
                                    <span>Copy Email</span>
                                </div>
                                <CommandShortcut className="text-xs text-neutral-400 group-hover:text-neutral-300">
                                    Shift+E
                                </CommandShortcut>
                            </CommandItem>
                            <CommandItem className="flex items-center justify-between px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-800 rounded cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <Github className="h-2 w-2 text-neutral-400" />
                                    <span>View GIthub Profile</span>
                                </div>
                                <CommandShortcut className="text-xs text-neutral-400 group-hover:text-neutral-300">
                                    Shift+G
                                </CommandShortcut>
                            </CommandItem>
                            <CommandItem className="flex items-center justify-between px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-800 rounded cursor-pointer group">
                                <div className="flex items-center ">
                                    <ArrowUp className="size-2 text-neutral-400" />
                                    <span>Scroll to Top</span>
                                </div>
                                <CommandShortcut className="text-xs text-neutral-400 flex items-center  group-hover:text-neutral-300">
                                    Shift+<ArrowUp className="h-2 w-2 text-neutral-400" />
                                </CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                        


                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    )
}