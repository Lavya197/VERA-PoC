import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { counterController } from "@/controllers/counterController";
import { useCounterStore } from "@/store/useCounterStore";

export default function TestPage() {
  const { count } = useCounterStore();

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Test Page (MVC + Zustand)</h1>
      <p className="mb-4">Counter: {count}</p>
      <button 
        className="px-4 py-2 bg-green-600 text-white rounded mr-2"
        onClick={counterController.increase}>
        Increase
      </button>
      <button 
        className="px-4 py-2 bg-red-600 text-white rounded"
        onClick={counterController.decrease}>
        Decrease
      </button>
    </MainLayout>
  );
}