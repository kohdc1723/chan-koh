"use client";

import { useRef } from "react";
import { SiGmail } from "react-icons/si";
import { useCopyToClipboard } from "usehooks-ts";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner";

export default function EmailButton() {
    const inputRef = useRef<HTMLInputElement>(null);

    const [copiedText, copy] = useCopyToClipboard();

    const handleCopy = () => {
        const text = inputRef.current?.value;

        if (!text) return;

        copy(text).then(() => {
            toast.success(`Email "${text}" is copied to clipboard`);
        }).catch(() => {
            toast.error("Failed to copy");
        });
    };

    return (
        <Popover>
            <PopoverTrigger>
                <SiGmail className="w-5 h-5 lg:w-7 lg:h-7 hover:cursor-pointer hover:text-white/75" />
            </PopoverTrigger>
            <PopoverContent className="flex items-center gap-3 bg-neutral-900 border-none w-fit rounded-lg">
                <input
                    ref={inputRef}
                    value="kohdc1723@gmail.com"
                    disabled
                    className="bg-neutral-950 text-neutral-50 border border-neutral-50 rounded-lg px-2 py-1 text-sm"
                />
                <button
                    className="bg-neutral-50 py-1 px-2 rounded-lg hover:bg-neutral-50/75 text-sm"
                    onClick={handleCopy}
                >
                    Copy
                </button>
            </PopoverContent>
        </Popover>
    );
};