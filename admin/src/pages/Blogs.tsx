//@ts-nocheck
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}/api/get-blogs`)
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/blog-editor/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`${backendUrl}/api/delete-blog/${id}`);
        setBlogs(blogs.filter(blog => blog._id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Blogs</h1>
        <Button
          onClick={() => navigate('/admin/blog-editor')}
          className="bg-[#f14144] hover:bg-[#d9383c] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:cursor-pointer"
        >
          Post New Blog
        </Button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-600">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 font-medium">Title</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">Created At</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{blog.title}</td>
                <td className="px-6 py-4">{blog.category}</td>
                <td className="px-6 py-4">{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <Button
                    onClick={() => handleEdit(blog._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No blogs available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
