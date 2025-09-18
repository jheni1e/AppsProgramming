import './App.css'

function App() {
  return (
    <>
    <div className="min-h-screen flex justify-between items-center flex-col">
      <div className="flex justify-between space-x-48">
        <div className="w-52 h-52 bg-blue-400 flex justify-center">
          <div className="flex flex-col justify-between items-center">
            <div className="w-17 h-17 bg-orange-400 flex self-start"></div>
            <div className="w-17 h-17 bg-orange-400 flex self-end"></div>
          </div>
        </div>

        <div className="w-52 h-52 bg-blue-400 flex justify-center items-center">
          <div className="w-17 h-17 bg-orange-400"></div>
        </div>
        
        <div className="w-52 h-52 bg-blue-400 flex justify-between">
          <div className="w-17 h-17 bg-orange-400 flex self-start"></div>
          <div className="w-17 h-17 bg-orange-400 flex self-end"></div>
        </div>

        <div className="w-52 h-52 bg-blue-400 flex justify-center">
          <div className="w-17 h-17 bg-orange-400 flex self-end"></div>
        </div>
      </div>


      <div className="flex justify-between space-x-48">
        <div className="w-52 h-52 bg-blue-400 flex justify-center">
          <div className="w-17 h-17 bg-orange-400 flex self-start"></div>
        </div>

        <div className="w-52 h-52 bg-blue-400 flex justify-between flex-col">
          <div className="flex justify-center">
            <div className="w-17 h-17 bg-orange-400"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-17 h-17 bg-orange-400 flex self-start"></div>
            <div className="w-17 h-17 bg-orange-400 flex self-end"></div> 
          </div>
          <div className="flex justify-center items-end">
            <div className="w-17 h-17 bg-orange-400"></div>
          </div>
        </div>

        <div className="w-52 h-52 bg-blue-400 flex justify-center">
          <div className="w-17 h-17 bg-orange-400 flex self-start my-4"></div>
        </div>
      </div>


      <div className="flex justify-between space-x-48">
        <div className="w-52 h-52 bg-blue-400 flex justify-between">
          <div className="w-17 h-17 bg-orange-400 flex self-end"></div>
          <div className="w-17 h-17 bg-orange-400 flex self-start"></div>
        </div>

        <div className="w-52 h-52 bg-blue-400 flex justify-center items-center">
          <div className="w-17 h-17 bg-orange-400"></div>
        </div>

        <div className="w-52 h-52 bg-blue-400 flex justify-end items-center">
          <div className="w-17 h-17 bg-orange-400 flex self-start"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App