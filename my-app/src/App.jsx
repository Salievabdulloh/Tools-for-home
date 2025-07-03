import { Suspense } from "react"
import { Route, Routes } from "react-router"
import { Page2, Home, Layout } from "./pages/lazy/lazy"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense><Layout /></Suspense>}>
          <Route index element={<Suspense><Home /></Suspense>} />
          <Route path="/page2" element={<Suspense><Page2 /></Suspense>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
