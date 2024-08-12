import { createPortal } from "react-dom";
import Dialog, { DialogPropType } from "../dialog/dialog";
import styles from "./configurationModal.module.css";
import Input from "../formElements/input";
import { useSimulatorContext } from "@/utilities/simulatorProvider";
import {
  MAX_GRID_COLS,
  MAX_GRID_ROWS,
  MIN_GRID_COLS,
  MIN_GRID_ROWS,
} from "@/utilities/constants";
import { useState } from "react";
import PrimaryButton from "../button/primaryButton";

interface PropType {
  onClose: DialogPropType["onClose"];
}

const isRowsValid = (rows: number) =>
  rows <= MAX_GRID_ROWS && rows >= MIN_GRID_ROWS;
const isColsValid = (cols: number) =>
  cols <= MAX_GRID_COLS && cols >= MIN_GRID_COLS;

const ConfigurationModal: React.FC<PropType> = ({ onClose }: PropType) => {
  const { gridRows, setGridRows, gridCols, setGridCols } =
    useSimulatorContext();
  const [rows, setRows] = useState<typeof gridRows | "">(gridRows);
  const [cols, setCols] = useState<typeof gridCols | "">(gridCols);

  const onRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "") {
      setRows("");
    } else {
      const rows = parseInt(value);
      !isNaN(rows) && setRows(rows);
    }
  };

  const onColChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "") {
      setCols("");
    } else {
      const cols = parseInt(value);
      !isNaN(cols) && setCols(cols);
    }
  };

  const onSave = () => {
    if (rows === "" || cols === "") {
      return;
    }

    if (isRowsValid(rows) && isColsValid(cols)) {
      setGridRows(rows);
      setGridCols(cols);
      onClose?.();
    }
  };

  return createPortal(
    <Dialog onClose={onClose} bodyClassName={styles.body}>
      <h2 className="text-xl mb-3 text-center">Configuration</h2>
      <form>
        <Input
          name="rows"
          label="Grid Rows"
          error={
            rows !== "" &&
            !isRowsValid(rows) &&
            `Row count should be between ${MIN_GRID_ROWS} & ${MAX_GRID_ROWS}, inclusive`
          }
          value={rows}
          onChange={onRowChange}
        />
        <Input
          name="cols"
          label="Grid Columns"
          error={
            cols !== "" &&
            !isColsValid(cols) &&
            `Column count should be between ${MIN_GRID_COLS} & ${MAX_GRID_COLS}, inclusive`
          }
          value={cols}
          onChange={onColChange}
        />
        <div className="text-center">
          <PrimaryButton onClick={onSave} type="button">
            Save
          </PrimaryButton>
        </div>
      </form>
    </Dialog>,
    document.body,
  );
};

export default ConfigurationModal;
