import { create } from "zustand";
import { NewNote } from "../api";
import { persist } from "zustand/middleware";

type NoteStore = {
  draft: NewNote;
  setDraft: (note: Partial<NewNote>) => void;
  clearDraft: () => void;
};

export const initialDraft: NewNote = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteDraftStore = create<NoteStore>()(
    persist(
        (set) => ({
  draft: initialDraft,
  setDraft: (note) =>
    set((prev) => ({
      draft: { ...prev.draft, ...note },
    })),
  clearDraft: () =>
    set(() => ({
      draft: initialDraft,
    })),
        }),
        {
            name: 'note-draft',
        }
    ));
