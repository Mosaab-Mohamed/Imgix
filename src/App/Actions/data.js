import axios from "axios";

const KEY = "Client-ID OPpGaU3GyR7Jb2gUxHbIBzMy8-HoS4kDSmgHr3_hR_k";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_PHOTOS = "GET_PHOTOS";
export const GET_COLLECTION_PHOTOS = "GET_COLLECTION_PHOTOS";
export const OPEN_PHOTO = "OPEN_PHOTO";
export const GET_RANDOM_PHOTOS = "GET_RANDOM_PHOTOS";

export const getCategories = () => {
  return async (dispatch) => {
    const response = await axios.get("https://api.unsplash.com/collections", {
      headers: {
        Authorization: KEY,
      },
    });

    dispatch({ type: GET_CATEGORIES, payload: response.data });
  };
};

export const getPhotos = (page = 1) => {
  return async (dispacth) => {
    const response = await axios.get("https://api.unsplash.com/photos", {
      headers: {
        Authorization: KEY,
      },
      params: {
        per_page: 18,
        page,
      },
    });

    dispacth({ type: GET_PHOTOS, payload: response.data });
  };
};

export const getCollectionPhotos = (id, page = 1) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.unsplash.com/collections/${id}/photos`,
      {
        headers: {
          Authorization: KEY,
        },
        params: {
          page,
        },
      }
    );

    dispatch({ type: GET_COLLECTION_PHOTOS, payload: response.data });
  };
};

export const getRandomPhotos = (query = "landscape") => {
  return async (dispatch) => {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: KEY,
      },
      params: {
        orientation: "landscape",
        count: 5,
        query,
      },
    });

    dispatch({ type: GET_RANDOM_PHOTOS, payload: response.data });
  };
};

export const openPhoto = (id) => {
  return {
    type: OPEN_PHOTO,
    payload: id,
  };
};
