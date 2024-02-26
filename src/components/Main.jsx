import { useState } from "react";
import Form from "./Form/Form";
import MoodHistoryCard from "./MoodHistory/MoodHistoryCard";

const userMoodData = localStorage.getItem("moodHistoryItems")
  ? JSON.parse(localStorage.getItem("moodHistoryItems"))
  : [
      {
        date: "23 February 2024",
        moodName: "Happy face",
        miscText: null,
      },
      {
        date: "25 February 2024",
        moodName: "Neutral face",
        miscText: null,
      },
    ];

export default function Main({ userPrefers }) {
  const [newUserMoodData, setNewUserMoodData] = useState(userMoodData);
  return (
    <main className="flex p-5 gap-5">
      <div className="flex-1 border-2 border-[#E5E7EB] rounded-3xl p-6">
        <h3 className="text-4xl font-bold">My Mood History</h3>
        <div className="mt-6 grid gap-5 grid-cols-2">
          {newUserMoodData.map((mood, key) => {
            return (
              <MoodHistoryCard
                mood={mood}
                userPrefersDark={userPrefers}
                date={mood.date}
                key={key}
              />
            );
          })}
        </div>
      </div>
      <div className="flex-1 py-6">
        <h4 className="relative before:absolute before:w-[70%] before:h-[1px] before:bg-[#646464] before:bottom-0 before:left-0 pb-[10px] inline-block font-bold text-[2rem] select-none">
          How did your day went?
        </h4>
        <Form
          classname="mt-9"
          onNewUserMoodData={setNewUserMoodData}
          moodData={newUserMoodData}
        />
      </div>
    </main>
  );
}
