import { useState } from "react";
import { createPortal } from "react-dom";
import MoodHistoryCardModal from "./MoodHistory/MoodHistoryCardModal";
import { motion } from "framer-motion";

import Form from "./Form/Form";
import MoodHistoryCard from "./MoodHistory/MoodHistoryCard";
import localforage from "localforage";


const migStatus = localforage.createInstance({
  name: "migrationStatus",
})
const userLocalData = localforage.createInstance({
  name: "mlUserData",
})

function setMigration(bool) {
  migStatus.setItem("migrated", bool);
}

const userMoodData = JSON.parse(localStorage.getItem("moodHistoryItems"))


// migrate moodData from localStorage to localforage
if (userMoodData) {  //if a user has data in localStorage
  userLocalData.setItem("moodHistoryItems", userMoodData)
    .then(() => {
      localStorage.clear();
      setMigration(true);
    })
    .then(() => console.log("migration complete"))
    .catch(err => console.log(err));
} else if (userMoodData === null) {
  migStatus.getItem("migrated").then((val) => {
    if (!val) {
      setMigration(true);
      userLocalData.setItem("moodHistoryItems", [])
    }
  })
}
  export default function Main({ userPrefers }) {
    userLocalData.getItem("moodHistoryItems").then((v) => {
      setNewUserMoodData(v)
    }).catch((e) => {
      console.log(e);
    });
    const [newUserMoodData, setNewUserMoodData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedMood, setSelectedMood] = useState(null);
  return (
    <>
      <main className="flex p-5 gap-5 md:p-4 md:flex-col">
        <motion.div 
          initial={{ opacity:0, x:-15 }}
          animate={{ opacity:1, x:0 }}
          transition={{
            duration: 0.3
          }}
          className="flex-1 border-2 border-[#E5E7EB] rounded-3xl p-6 md:p-4 md:max-h-[35vh] overflow-y-clip grid grid-rows-[auto,_1fr]">
          <h3 className="text-4xl font-bold md:text-2xl">My Mood History</h3>
          <div className="mt-6 overflow-y-auto">
            <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
              {newUserMoodData?.map((mood, key) => {
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
        </motion.div>
        <motion.div 
          initial={{ opacity:0, x:15 }}
          animate={{ opacity:1, x:0 }}
          transition={{
            duration: 0.3
          }} 
          className="flex-1 py-6">
          <h4 className="relative before:absolute before:w-[70%] before:h-[1px] before:bg-[#646464] before:bottom-0 before:left-0 pb-[10px] inline-block font-bold text-[2rem] select-none md:text-xl">
            How did your day went?
          </h4>
          <Form
            classname="mt-9"
            onNewUserMoodData={setNewUserMoodData}
            newUserMoodData={newUserMoodData}
            userLocalData={userLocalData}
          />
        </motion.div>
      </main>
      {createPortal(<MoodHistoryCardModal active={modalIsOpen} mood={selectedMood} setSelectionMood={setSelectedMood} onDismiss={()=>setModalIsOpen(false)} />, document.body)}
    </>
  );
}
