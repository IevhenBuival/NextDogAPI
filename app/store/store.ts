import { type FilterData, type SearchInput } from "@/types/StateDataTypes";
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface ISearchInput {
  searchInput: SearchInput;
}

const initialSearchInput: SearchInput = {
  input: "",
  searched: "",
};

export const searchInputSlice = createSlice({
  name: "search",
  initialState: initialSearchInput,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searched = action.payload;
    },
  },
});

export interface IFilterDataState {
  filterData: FilterData;
}
const initialState: IFilterDataState = {
  filterData: {
    limit: "5",
    type: "all",
    breed: "none",
    sort: "RANDOM",
  },
};

export const filterDataSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterData: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const updated = { ...state.filterData };
      updated[action.payload.name as keyof FilterData] = action.payload.value;
      state.filterData = { ...updated };
    },
  },
});

export const createStore = () =>
  configureStore({
    reducer: {
      filterData: filterDataSlice.reducer,
      searchInput: searchInputSlice.reducer,
    },
  });

export const { setFilterData } = filterDataSlice.actions;

export const { setSearchInput, setSearch } = searchInputSlice.actions;

export type FilterDataType = ReturnType<typeof createStore>;
export type RootState = ReturnType<FilterDataType["getState"]>;

export type AppDispatch = FilterDataType["dispatch"];

export const useFilterData = () =>
  useSelector((state: RootState) => state.filterData.filterData);

export const useSearchInput = () =>
  useSelector((state: RootState) => state.searchInput);
