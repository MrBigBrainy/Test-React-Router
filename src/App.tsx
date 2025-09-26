
import './App.css'
import { useCounterStore } from './store/counterStore'
import { useUserStore } from './store/userStore'
import { useThemeStore } from './store/themeStore'
function App() {
  const counter = useCounterStore((state: any) => state.count)
  const increment = useCounterStore((state:any) => state.increment)
  const decrement = useCounterStore((state:any) => state.decrement)
  
  const theme = useThemeStore((state:any) => state.theme )
  const toggleTheme = useThemeStore((state:any) => state.toggleTheme)

  const user = useUserStore((state:any) => state.user)
  const loading = useUserStore((state:any) => state.loading)
  const fetchUser = useUserStore((state: any) => state.fetchUser)
  console.log(user)


  if(loading) return <p>Loading</p>
  return (
    <>
      <h1>{counter}</h1>
    <button onClick={increment}>increment</button>
     <button onClick={decrement}>decrement</button>
     <br/>
     <div className={`${theme === "light" ? "bg-white" : "bg-dark"}`}>
     <h1>{theme}</h1>
     <button onClick={toggleTheme}>Set Theme</button>
     </div>
     <br/>
     <h1>{user?.firstName || "NO DATA"}</h1>
     <button onClick={fetchUser}>Fetch User</button>
      
    </>
  )
}

export default App
