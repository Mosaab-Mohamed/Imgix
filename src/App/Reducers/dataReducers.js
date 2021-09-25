import {
  GET_CATEGORIES,
  GET_PHOTOS,
  GET_COLLECTION_PHOTOS,
  OPEN_PHOTO,
  GET_RANDOM_PHOTOS,
} from "../Actions/data";

export const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export const photos = (state = [], action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return action.payload;
    case GET_COLLECTION_PHOTOS:
      return action.payload;
    default:
      return state;
  }
};

export const randomPhotos = (state = [], action) => {
  switch (action.type) {
    case GET_RANDOM_PHOTOS:
      return action.payload;
    default:
      return state;
  }
};

export const openedPhoto = (state = null, action) => {
  switch (action.type) {
    case OPEN_PHOTO:
      return action.payload;
    default:
      return state;
  }
};
