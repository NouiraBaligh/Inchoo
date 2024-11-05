import {Typewriter} from "react-simple-typewriter"

function Announcement() {
  return (
    <div className="bg-[#e9acd9] text-white text-[18px] font-semibold h-[30px] flex items-center justify-center">
      <Typewriter
      words={["inchoo","every smell ","has a story"]}
      loop={5}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      />
    </div>
  )
}

export default Announcement
