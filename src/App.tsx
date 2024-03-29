import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import "./App.css";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<DefaultLayout footer={route.isFooter} ><Page/></DefaultLayout>}/>
          })}

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
