
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const LoginForm = () => {
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // ログイン成功時の処理
        const user = result.user;
        console.log('ログイン成功', user);
      })
      .catch((error) => {
        // ログイン失敗時の処理
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('ログイン失敗', errorCode, errorMessage);
      });
  };

  return (
    <div className="px-4">
      <button className="button w-40 h-10 bg-blue-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]
    border-[1px] border-blue-400" onClick={handleGoogleLogin}>Googleでログイン</button>
    </div>
  );
};

export default LoginForm;