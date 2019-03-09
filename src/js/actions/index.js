import { ADD_FAVORITE, DELETE_FAVORITE } from "../constants/action-types";

export function addFavorite(payload) {
  return { type: ADD_FAVORITE, payload };
}

export function deleteFavorite(payload) {
  return { type: DELETE_FAVORITE, payload };
}
