"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CommandPalette } from "./CommandPalette";

export type CommandPaletteWritingItem = {
  title: string;
  slug: string;
  excerpt: string;
};

export type CommandPaletteProjectItem = {
  title: string;
  slug: string;
  description: string;
};

type CommandPaletteContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(null);

function isPaletteShortcut(event: KeyboardEvent) {
  return (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
}

export function CommandPaletteProvider({
  children,
  writing,
  projects,
}: {
  children: React.ReactNode;
  writing: CommandPaletteWritingItem[];
  projects: CommandPaletteProjectItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isPaletteShortcut(event)) {
        return;
      }

      event.preventDefault();
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const value = useMemo(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle]
  );

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
      <CommandPalette
        isOpen={isOpen}
        onClose={close}
        writing={writing}
        projects={projects}
      />
    </CommandPaletteContext.Provider>
  );
}

export function useCommandPalette() {
  const context = useContext(CommandPaletteContext);

  if (!context) {
    throw new Error("useCommandPalette must be used within CommandPaletteProvider");
  }

  return context;
}
