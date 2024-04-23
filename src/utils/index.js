import moodData from "../../moodList.json";

function getEmojiByMoodName(moodName) {
  for (let i = 0; i < moodData.length; i++) {
    if (moodData[i].moodName === moodName) {
      return moodData[i].moodEmoji;
    }
  }
}

export { getEmojiByMoodName };
