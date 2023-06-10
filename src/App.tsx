import './global.css'

function App() {
  console.log(import.meta.env.VITE_HI)
  return (
    <>
      <h1 className="bg-slate-600 text-base text-red-50">Hello World</h1>
    </>
  )
}

export default App
