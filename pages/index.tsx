import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where
} from "firebase/firestore";
import WeightChart from "@/components/WeightChart";
import WeightForm from "@/components/WeightForm";
import SwitchBox from "@/components/SwitchBox";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { db } from "../lib/FirebaseConfig";
import MessagesTypes from "@/types/MessagesType";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true); 
  const user = useAuth();
  const [messages, setMessages] = useState<MessagesTypes[]>([]);
  const [newWeight ,setNewWeight] = useState<number[]>([]);
  
  useEffect(() => {
    if (user) {
      const userId = user.uid; // UIDを取得
      // ユーザーごとにデータを取得する
      const q = query(
        collection(db, "weights"),
        where("uid", "==", userId), // UIDが一致するものを取得
        orderBy("date") // ソート
      );
  
      // リアルタイムリスナーをセットアップ
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const updatedMessages = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          const updatedWeightValues = snapshot.docs.map((doc) => doc.data().weight);

          setMessages(updatedMessages);
          setNewWeight(updatedWeightValues);

          setIsLoading(false)
        });
        return () => {
          // コンポーネントがアンマウントされたらリスナーをクリーンアップ
          unsubscribe();
    }
    
    };

      // const apiUrl = 'api/hello'; // データを提供するAPIのエンドポイントに置き換える
      // fetch(apiUrl)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setWeightData(data); // 取得したデータをweightDataに設定
      //     setNewWeight(data); // 初期のnewWeightにも設定（初期表示として同じデータを使用）
      //     setIsLoading(false);
      //   })
      //   .catch((error) => {
      //     console.error('データの取得エラー:', error);
      //   });
    }, [user])



  return (
    <main>
      <div className="w-full sm:w-3/4 sm:h-3/4 h-full mx-auto">
      {isLoading ? (
          <div>Loading...(ログインしてください)</div> 
        ) : (
          <>
        { user ? (
          <>
              <WeightChart newWeight={newWeight} />
              <div className="sm:flex justify-between mt-5">
              <WeightForm />
              <SwitchBox 
              Count={messages} 
              setNewWeight={setNewWeight}
              />
              </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h1 className="font-bold text-4xl ">ログインしてください</h1>
          </div>
        )}
        </>)}
      </div>
    </main>
  )}
