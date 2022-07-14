import { GridColDef } from "@mui/x-data-grid";
import { FurnitureProps } from "./FurnitureTypes";
import { LicenseProps } from "./LicenseTypes";
import { ConsumableProps } from "./ConsumableTypes";

export type DataGridProps<T> = {
    rows: T[];
    columns: GridColDef[];
};

export type Rows = ConsumableProps|FurnitureProps|LicenseProps;
