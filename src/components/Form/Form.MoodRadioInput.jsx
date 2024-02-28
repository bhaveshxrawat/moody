export default function MoonRadioInput({moodName, moodEmoji, userMood, onUserMood}) {
  function handleMoodChange(e) {
    onUserMood(e.target.value)
  }
  return (
    <div className="flex relative">
      <input checked={userMood==moodName} value={moodName} className="appearance-none absolute peer" type="radio" name="Mood" id={moodName} onChange={(e)=>handleMoodChange(e)}/>
      <label htmlFor={moodName} aria-label={moodName} className="p-[10px] md:p-[8px] select-none rounded cursor-pointer border-[1px] border-[#646464] peer-checked:bg-slate-200/[0.7]">{moodEmoji}</label>
    </div>
  );
}
