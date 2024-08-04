const OnboardBtn = ({setModalActive}) => {
  return (
    <button onClick={()=>setModalActive(true)} className="py-3 px-4 bg-[#151515] rounded-xl text-white border border-white">
        Try the app!
    </button>
  )
}

export default OnboardBtn