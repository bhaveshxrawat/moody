import { useState } from "react";
import { createPortal } from "react-dom";
import MoodHistoryCardModal from "./MoodHistory/MoodHistoryCardModal";

import Form from "./Form/Form";
import MoodHistoryCard from "./MoodHistory/MoodHistoryCard";

const userMoodData = localStorage.getItem("moodHistoryItems")
  ? JSON.parse(localStorage.getItem("moodHistoryItems"))
  : [];
  
  export default function Main({ userPrefers }) {
    const [newUserMoodData, setNewUserMoodData] = useState(userMoodData);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [selectedMood, setSelectedMood] = useState(null);
  return (
    <>
      <main className="flex p-5 gap-5 md:p-4 md:flex-col">
        <div className="flex-1 border-2 border-[#E5E7EB] rounded-3xl p-6 md:p-4 md:max-h-[35vh] overflow-y-clip grid grid-rows-[auto,_1fr]">
          <h3 className="text-4xl font-bold md:text-2xl">My Mood History</h3>
          <div className="mt-6 overflow-y-auto">
            <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
              {newUserMoodData.map((mood, key) => {
                return (
                  <MoodHistoryCard
                    onBtnClick={setModalIsOpen}
                    setSelectedMood={setSelectedMood}
                    mood={mood}
                    userPrefersDark={userPrefers}
                    date={mood.date}
                    key={key}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1 py-6">
          <h4 className="relative before:absolute before:w-[70%] before:h-[1px] before:bg-[#646464] before:bottom-0 before:left-0 pb-[10px] inline-block font-bold text-[2rem] select-none md:text-xl">
            How did your day went?
          </h4>
          <Form
            classname="mt-9"
            onNewUserMoodData={setNewUserMoodData}
            moodData={newUserMoodData}
          />
        </div>
      </main>
      {modalIsOpen && selectedMood && createPortal(<MoodHistoryCardModal mood={selectedMood} setSelectionMood={setSelectedMood} onDismiss={()=>setModalIsOpen(false)} />, document.body)}
    </>
  );
}
