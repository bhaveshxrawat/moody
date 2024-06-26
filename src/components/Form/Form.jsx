import { useState } from "react";
import MoonRadioInput from "./Form.MoodRadioInput";
import moods from "../../../moodList.json";

export default function Form({ classname, onNewUserMoodData, newUserMoodData, userLocalData }) {
  function formatDateValue() {
    const theDate = new Date();
    const thisDate = theDate.getDate();
    const thisMonth = theDate.toLocaleString("default", { month: "long" });
    const thisYear = theDate.getFullYear();
    const formattedDate = `${thisDate} ${thisMonth} ${thisYear}`;
    return { formattedDate };
  }
  const { formattedDate } = formatDateValue();
  const [dateValue] = useState(formattedDate);
  const [userMood, setUserMood] = useState(null);
  const [miscText, setMiscText] = useState("");
  function handleFormSubmit(e) {
  e.preventDefault();
  if (!userMood) return;
  const existingEntryIndex = newUserMoodData.findIndex(
    (entry) => entry.date === dateValue
  );
  let updatedMoodData;
  if (existingEntryIndex !== -1) {
    updatedMoodData = newUserMoodData.map((entry, index) =>
      index === existingEntryIndex
        ? { ...entry, moodName: userMood, miscText: miscText }
        : entry
    );
  } else {
    let newEntry = {
      date: dateValue,
      moodName: userMood,
      miscText: miscText,
    };
    updatedMoodData = [...newUserMoodData, newEntry];
  }
  onNewUserMoodData(updatedMoodData);
  userLocalData.setItem('moodHistoryItems', updatedMoodData);
  setUserMood(null);
  setMiscText("");
}
  return (
    <form
      className={`${classname} flex flex-col gap-12 md:gap-5`}
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <div className="flex flex-col gap-4 md:gap-2">
        <label htmlFor="date" className="text-2xl md:text-xl">
          Date
        </label>
        <input
          className="p-4 border-[1px] border-[#646464] rounded-xl max-w-fit cursor-not-allowed opacity-50"
          id="date"
          type="text"
          disabled
          readOnly
          value={dateValue}
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-2">
        <p className="text-2xl md:text-xl">Your Mood</p>
        <div className="flex gap-8 flex-wrap md:gap-4">
          {moods.map((mood, index) => {
            return (
              <MoonRadioInput
                moodName={mood.moodName}
                moodEmoji={mood.moodEmoji}
                key={index}
                userMood={userMood}
                onUserMood={setUserMood}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-2">
        <label htmlFor="date" className="text-2xl md:text-xl">
          Additional Info? <small>(Optional)</small>
        </label>
        <textarea
          name="Additional Info"
          id="date"
          className="w-full min-h-[115px] rounded-xl p-4 outline-none border-[1px] border-[#646464]"
          placeholder="Let it out..."
          value={miscText}
          onChange={(e) => setMiscText(e.target.value)}
        ></textarea>
      </div>
      <button className="p-[10px] rounded-xl border-[1px] border-[#646464]">
        Submit
      </button>
    </form>
  );
}
