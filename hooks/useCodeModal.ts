"use client";

import { useState, useCallback } from "react";
import type { HoverEffect } from "@/lib/effects-data";

export function useCodeModal() {
  const [selectedEffect, setSelectedEffect] = useState<HoverEffect | null>(
    null
  );

  const openModal = useCallback((effect: HoverEffect) => {
    setSelectedEffect(effect);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedEffect(null);
  }, []);

  return { selectedEffect, openModal, closeModal };
}
