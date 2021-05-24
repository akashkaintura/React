import React, { useState, useEffect } from "react"
import "./assests/css/style.css"
import Images from "./components/Images"
function App() {
  const [title, setTitle] = useState("This is the best one can learn from ")
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    console.log("App Mounted")
  }, [])

  function handleClick() {
    setIsShowing(!isShowing)
  }

  return (
    <section className=" flex justify-center">
      <div className="w-1/2">
        {console.log("re-renderd")}
        <div className="text-center">
          <div className="my-4">{title}</div>
          <div>
            <button
              className="p-1 bg-blue-700 text-white my-2"
              onClick={handleClick}>
              Toggle Image
            </button>
          </div>
          {isShowing ? <Images /> : null}
        </div>
      </div>
    </section>
  )
}

export default App
