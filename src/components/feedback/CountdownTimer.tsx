"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialTime: number;
  onComplete?: () => void;
}

export default function CountdownTimer({ initialTime, onComplete }: CountdownTimerProps) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) {
      onComplete?.();
      return;
    }
    const interval = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time, onComplete]);

  return <span className="text-sm text-gray-600">Resend OTP ({time})</span>;
}

