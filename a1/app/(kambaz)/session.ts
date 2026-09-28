const KEY = "kambaz-in";

export function signedIn() {
  return localStorage.getItem(KEY) === "1";
}

export function signIn() {
  localStorage.setItem(KEY, "1");
}

export function signOut() {
  localStorage.removeItem(KEY);
}
