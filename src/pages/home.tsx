import { useEffect, useState } from "react";
import "../../src/index.css";
import LoginImage from "../assets/images/squirtle_crew.png";
import { useAppStore } from "../store/use-app-store";
import {useStorage} from '../hooks/use-storage'
import {useNavigate} from 'react-router-dom'
import {useHandleDarkMode} from '../hooks/use-handle-dark-mode'

function Home() {
  const navigate = useNavigate();
  const {setValue} = useStorage()
  const { setUser } = useAppStore();
  const [localUser, setLocalUser] = useState<string>("")

  const initTheme = () => {
    localStorage.theme = 'dark'
  }

  const handleAccess = () => {
    setUser(localUser)
    setValue("user", localUser)
    navigate("/principal")
  }

  const {handleClick} = useHandleDarkMode()

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <div className="w-110 h-110 p-10">
        <div className="flex flex-col gap-4">
          <img src={LoginImage} alt="login" />

          <button type="button" onClick={handleClick}>Dark/light</button>

          <input
            className={`h-10 w-full bg-white text-gray-500 rounded-md pl-2 ${localStorage.theme === "dark" ? "" : "border-black border"}`}
            onChange={(event: any) => setLocalUser(event.target.value)}
          />

          <button type="button" onClick={handleAccess}>Ingresar</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
