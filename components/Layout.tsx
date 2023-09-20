import { ReactElement, useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { useAuth } from "@/hooks/useAuth";
import LogoutForm from "./LogoutForm";
import { auth } from "../lib/FirebaseConfig";

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
  const user = useAuth();
  const [isLoading, setIsLoading] = useState(true); // ローディング状態
  const displayName = auth.currentUser?.displayName;

  // user の初期値が設定されたらローディング状態を解除
  useEffect(() => {
    if (user !== undefined) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <div>
      <div className=" flex h-16 items-center bg-gray-200">
        <>
        {isLoading ? (
          <div>Loading...</div> // ローディング表示
        ) : (
          user ? 
          <div className="flex w-3/4 mx-auto justify-between items-center">
              <h1 className="sm:text-4xl text-lg font-sans font-bold">体重グラフ</h1>
              <h1 className="text-3xl sm:block hidden">{displayName}さん</h1>
              <div>
                <LogoutForm/>
              </div> 
            </div>
            : <div><LoginForm/></div>
        )}
        </>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
