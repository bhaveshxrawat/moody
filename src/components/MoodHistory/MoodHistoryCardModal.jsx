import { getEmojiByMoodName } from "../../utils";
import { motion, AnimatePresence } from "framer-motion";

export default function MoodHistoryCardModal({onDismiss, mood, setSelectionMood, active}) {
  const moodEmoji = getEmojiByMoodName(mood?.moodName);
  const moodName = mood?.moodName.replace(" face", "");
  return (
    <AnimatePresence>
      {mood && active && <motion.div 
        key="modal"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 backdrop-blur-xl bg-white/[0.5] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.4, }}
          exit={{ scale: 0.9 }}
          className="flex flex-col bg-white/85 rounded-2xl p-5 w-[min(90%,990px)] h-[min(50vh,585px)] text-black gap-10 relative shadow-[0_4px_64px] shadow-black/25 md:gap-5">
          <h3 className="flex items-center gap-2 text-4xl font-bold md:text-xl">
            {moodEmoji} {moodName} <span>•</span>
            <small className="text-2xl font-normal md:text-lg">{mood.date}</small>
          </h3>
          <div>
            <h5 className="font-medium text-2xl md:text-xl">Additional Info</h5>
            <p className="text-xl text-black/70 mt-4 md:text-lg md:mt-2">
              {mood.miscText || "You haven't entered any additional information."}
            </p>
          </div>
          <button onClick={() => {
            onDismiss(false)
            setSelectionMood(null)
            }} className="absolute top-5 right-5">x</button>
      
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}
