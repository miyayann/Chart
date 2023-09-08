import { FormEvent, useState } from "react";
import {addDoc , collection,} from "firebase/firestore";
import { db, auth } from "../lib/FirebaseConfig";

const WeightForm: React.FC= () => {
  const [weight, setWeight] = useState<number | null>(null)
  const uid = auth.currentUser?.uid;
  const displayName = auth.currentUser?.displayName;
  console.log(auth.currentUser)

  const handleAddWeight = async () => {
    await addDoc(collection(db, "weights"), {
      weight: weight,
      date: new Date(),
      uid: uid,
      displayName:displayName
    });

    // 'api/hello' を使うときに記述
    // 新しい体重データを作成
    // const newWeightData: WeightData = {
    //   date: new Date().toISOString(),
    //   weight: weight, 
    // };

    // 既存の体重データに新しいデータを追加
    // setWeightData((prevData: WeightData[]) => [...prevData, newWeightData]);

  };

  const confirmSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await addDoc(collection(db, "weights"), {
      weight: weight,
      date: new Date(),
      uid: uid,
      displayName:displayName
    });
  }
  
  return (
    <div className="flex items-end">
      <form onSubmit={confirmSubmit}>
        <input className="border p-3 rounded-lg" type="number" min="0"
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="体重(kg) 数字を入力"
        />
      </form>
      <div className="ml-4">
          <button onClick={handleAddWeight} className="border rounded-lg px-4 bg-gray-700 text-white  hover:bg-blue-700 transition-all duration-500" type="submit">入力</button>
        </div>
    </div>
  );
}

export default WeightForm;