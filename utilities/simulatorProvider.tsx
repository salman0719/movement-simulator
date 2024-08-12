"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { DEFAULT_GRID_COLS, DEFAULT_GRID_ROWS } from "./constants";

interface PropType {
  children: ReactNode;
}

export interface SimulatorContent {
  gridRows: number;
  setGridRows: Dispatch<
    SimulatorContent["gridRows"] | SetStateAction<SimulatorContent["gridRows"]>
  >;
  gridCols: number;
  setGridCols: Dispatch<
    SimulatorContent["gridCols"] | SetStateAction<SimulatorContent["gridCols"]>
  >;
}

export const SimulatorContext = createContext<SimulatorContent | undefined>(
  undefined,
);

export const useSimulatorContext = () => {
  const context = useContext(
    SimulatorContext as React.Context<SimulatorContent | undefined>,
  );
  if (!context) {
    throw new Error("useSimulatorContext does not have proper context.");
  }
  return context;
};

export default function SimulatorProvider({ children }: PropType) {
  const [gridRows, setGridRows] =
    useState<SimulatorContent["gridRows"]>(DEFAULT_GRID_ROWS);
  const [gridCols, setGridCols] =
    useState<SimulatorContent["gridCols"]>(DEFAULT_GRID_COLS);

  return (
    <SimulatorContext.Provider
      value={{ gridRows, setGridRows, gridCols, setGridCols }}
    >
      {children}
    </SimulatorContext.Provider>
  );
}
