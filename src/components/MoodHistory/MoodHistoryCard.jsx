import { getEmojiByMoodName } from "../../utils";
import {motion} from "framer-motion"

export default function MoodHistoryCard({
  mood,
  date,
  userPrefersDark,
  onBtnClick,
  setSelectedMood,
}) {
  
  const moodEmoji = getEmojiByMoodName(mood.moodName);
  const moodName = mood.moodName.replace(" face", "");
  return (
    <motion.div
      initial={{ opacity:0, scale: 0.7 }}
      transition={{ ease: "easeIn", delay: 0.2}}
      animate={{ opacity:1, scale: 1 }}
      className="p-3 grid bg-[#eeeeee]/[0.5] rounded-2xl gap-3 grid-flow-col items-center grid-cols-[auto_1fr_auto]">
      <span className="text-2xl">{moodEmoji}</span>
      <div>
        <h6 className="font-bold text-xl peer md:text-l">{moodName}</h6>
        <p className="text-xl peer-[]:mt-2">{date}</p>
      </div>
      <button
        onClick={() => {
          onBtnClick(true);
          setSelectedMood(mood);
        }}
        className="ml-auto"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke={userPrefersDark ? "white" : "#585858"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8L14 12L10 16"
            stroke={userPrefersDark ? "white" : "#585858"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </motion.div>
  );
}
