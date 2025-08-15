"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Terms from ".";

type Props = {
  open?: boolean;
  onDismiss: () => void;
};

export default function TermsPortal({ open, onDismiss }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <Terms open={open} onDismiss={onDismiss} />,
    document.body
  );
}
