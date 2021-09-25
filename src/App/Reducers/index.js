import { combineReducers } from "redux";
import { categories, photos, openedPhoto, randomPhotos } from "./dataReducers";

export const reducers = combineReducers({
  categories,
  photos,
  randomPhotos,
  openedPhoto,
});
