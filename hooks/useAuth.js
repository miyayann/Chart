// hooks/useAuth.js

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/FirebaseConfig"; // Firebase Authenticationの初期化ファイルからインポート

export function useAuth() {
  const [user] = useAuthState(auth);

  return user;
}
