"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { WorkItem } from "@/data/projects";
import EmailModal from "./EmailModal";
import MediaViewer from "./MediaViewer";
import PhoneModal from "./PhoneModal";

type ModalKind = "phone" | "email" | null;

type ModalContextValue = {
  openPhone: () => void;
  openEmail: () => void;
  openViewer: (item: WorkItem) => void;
  closeAll: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModals() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModals must be used within ModalProvider");
  return ctx;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalKind>(null);
  const [viewer, setViewer] = useState<WorkItem | null>(null);

  const closeAll = useCallback(() => {
    setModal(null);
    setViewer(null);
  }, []);

  const openPhone = useCallback(() => {
    setViewer(null);
    setModal("phone");
  }, []);

  const openEmail = useCallback(() => {
    setViewer(null);
    setModal("email");
  }, []);

  const openViewer = useCallback((item: WorkItem) => {
    setModal(null);
    setViewer(item);
  }, []);

  useEffect(() => {
    const open = modal !== null || viewer !== null;
    document.body.classList.toggle("modal-open", open);
    return () => document.body.classList.remove("modal-open");
  }, [modal, viewer]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  const value = useMemo(
    () => ({ openPhone, openEmail, openViewer, closeAll }),
    [openPhone, openEmail, openViewer, closeAll],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal === "phone" && (
        <PhoneModal
          onClose={closeAll}
          onSwitchToEmail={() => setModal("email")}
        />
      )}
      {modal === "email" && <EmailModal onClose={closeAll} />}
      {viewer && <MediaViewer item={viewer} onClose={closeAll} />}
    </ModalContext.Provider>
  );
}
