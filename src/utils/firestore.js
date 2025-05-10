import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export async function addFavorites(userId, movie) {
  const docRef = doc(db, "users", userId, "favorites", movie.id.toString());
  await setDoc(docRef, movie);
}

export async function getFavorites(userId) {
  const favoriteCol = collection(db, "users", userId, "favorites");
  const snapshot = await getDocs(favoriteCol);
  return snapshot.docs.map((doc) => doc.data());
}
export async function deleteFavorites(userId, movie) {
  const docRef = doc(db, "users", userId, "favorites", movie.id.toString());
  await deleteDoc(docRef);
}
//WATCHED
export async function addWatchedMovies(userId, movie) {
  const docRef = doc(db, "users", userId, "watchedMovies", movie.id.toString());
  await setDoc(docRef, movie);
}

export async function getWatchedMovies(userId) {
  const watchedCol = collection(db, "users", userId, "watchedMovies");
  const snapshot = await getDocs(watchedCol);
  return snapshot.docs.map((doc) => doc.data());
}
export async function deleteWatched(userId, movie) {
  const docRef = doc(db, "users", userId, "watchedMovies", movie.id.toString());
  await deleteDoc(docRef);
}
//WATCHLIST
export async function addWatchlist(userId, movie) {
  const docRef = doc(db, "users", userId, "watchlist", movie.id.toString());
  await setDoc(docRef, movie);
}
export async function getWatchlist(userId) {
  const watchlistCol = collection(db, "users", userId, "watchlist");
  const snapshot = await getDocs(watchlistCol);
  return snapshot.docs.map((doc) => doc.data());
}

export async function deleteWatchlistMovie(userId, movie) {
  const docRef = doc(db, "users", userId, "watchlist", movie.id.toString());
  await deleteDoc(docRef, movie);
}
