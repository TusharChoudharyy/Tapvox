import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import SideBar from "./components/SideBar";
import Blogs from "./pages/Blogs";
import BlogEditor from "./pages/BlogEditor";
import Login from "./pages/Login";
import { JSX } from "react";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Toaster />
      <Routes>
        {/* Login route */}
        <Route path="/admin" element={<Login />} />
        {/* Protected routes with layout */}
        <Route
          path="/admin/*"
          element={
            <ProtectedLayout>
              <Routes>
                <Route path="blogs" element={<Blogs />} />
                <Route path="blog-editor" element={<BlogEditor />} />
                <Route path="blog-editor/:id" element={<BlogEditor />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </ProtectedLayout>
          }
        />
      </Routes>
    </div>
  );
}

// Layout wrapper for protected routes (adds SideBar)
const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
        {children}
      </div>
    </div>
  );
};

export default App;
