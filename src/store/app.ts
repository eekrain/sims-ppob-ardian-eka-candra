import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from ".";

export type MyDialogProps = {
  type: "success" | "error" | "topup";
  content: { normal?: string; big?: string }[];
  confirmation?: {
    warning: string;
    onConfirm: () => void;
  };
  handleClose: () => void;
};

type AppState = {
  dialog: MyDialogProps | null;
};
const initialState: AppState = { dialog: null };

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setDialog: (state, { payload }: PayloadAction<AppState["dialog"]>) => {
      state.dialog = payload;
    },
  },
});

export const useDialog = () => {
  const dispatch = useAppDispatch();
  return {
    setDialog: (props: AppState["dialog"]) =>
      dispatch(appSlice.actions.setDialog(props)),
  };
};

const appReducer = appSlice.reducer;
export default appReducer;
