import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import RichTextEditor from "./Editor";

const BlogEditor = () => {
  const { id } = useParams(); // Get blog ID from route if editing
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [bannerDesc, setBannerDesc] = useState("");
  const [bannerLink, setBannerLink] = useState("");
  const [tags, setTags] = useState("");
  const [categories, setCategories] = useState([
    "Uncategorised",
    "Tech",
    "Marketing",
    "Design",
  ]);
  const [category, setCategory] = useState("Uncategorised");
  const [customCategory, setCustomCategory] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const res = await fetch(`${backendUrl}/api/get-blog/${id}`);
          const blog = await res.json();

          setTitle(blog.title || "");
          setDescription(blog.description || "");
          setBannerDesc(blog.bannerDesc || "");
          setBannerLink(blog.bannerLink || "");
          setTags(blog.tags?.join(", ") || "");
          setCategory(blog.category || "Uncategorised");
          setContent(blog.content || "");
        } catch (error) {
          console.error("Failed to fetch blog:", error);
        }
      }
    };

    fetchBlog();
  }, [id]);

  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (featuredImage) formData.append("featuredImage", featuredImage);
    if (bannerImage) formData.append("bannerImage", bannerImage);
    formData.append("bannerDesc", bannerDesc);
    formData.append("bannerLink", bannerLink);
    formData.append("tags", tags);
    formData.append("category", category);
    formData.append("content", content);

    try {
      const res = await fetch(
        `${backendUrl}/api/${id ? `update-blog/${id}` : "create"}`,
        {
          method: id ? "PUT" : "POST",
          body: formData,
        }
      );

      if (res.ok) {
        toast(id ? "Blog updated!" : "Blog published!");
        navigate("/admin/blogs"); // Optional: navigate after success
      } else {
        toast("Something went wrong!");
      }
    } catch (err) {
      toast("Server error.");
    }
  };




  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6 p-6">
      <h2 className="text-3xl font-bold">Write a New Blog</h2>

      <div>
        <Label className="mb-2">Title</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Blog title" />
      </div>

      <div>
        <Label className="mb-2">Description</Label>
        <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Short description..." />
      </div>

      <div>
        <Label className="mb-2">Featured Image</Label>
        <Input type="file" onChange={e => setFeaturedImage(e.target.files?.[0] || null)} />
      </div>

      <div>
        <Label className="mb-2">Banner Image (optional)</Label>
        <Input type="file" onChange={e => setBannerImage(e.target.files?.[0] || null)} />
      </div>

      <div>
        <Label className="mb-2">Banner Image Description</Label>
        <Input value={bannerDesc} onChange={e => setBannerDesc(e.target.value)} placeholder="e.g., Hero visual on top" />
      </div>

      <div>
        <Label className="mb-2">Banner Image Link</Label>
        <Input value={bannerLink} onChange={e => setBannerLink(e.target.value)} placeholder="https://..." />
      </div>

      <div>
        <Label className="mb-2">Tags (comma separated)</Label>
        <Input value={tags} onChange={e => setTags(e.target.value)} placeholder="e.g., marketing, UX, tips" />
      </div>

      <div>
        <Label className="mb-2">Category</Label>
        <Select
          value={category}
          onValueChange={(value) => {
            if (value === "__custom__") {
              setIsCustom(true);
              setCategory(""); // clear selection
            } else {
              setIsCustom(false);
              setCategory(value);
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
            <SelectItem value="__custom__">+ Create New Category</SelectItem>
          </SelectContent>
        </Select>

        {isCustom && (
          <div className="mt-2 flex gap-2 items-center">
            <Input
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              placeholder="Enter new category"
            />
            <Button
              type="button"
              onClick={() => {
                if (customCategory.trim() && !categories.includes(customCategory)) {
                  setCategories([...categories, customCategory]);
                  setCategory(customCategory);
                  setCustomCategory("");
                  setIsCustom(false);
                }
              }}
            >
              Add
            </Button>
          </div>
        )}
      </div>


      <div>
        <Label className="mb-2">Blog Content</Label>
        <RichTextEditor value={content} onChange={setContent} />
      </div>

      <Button type="submit" className="mt-4">Publish</Button>
    </form>
  );
};

export default BlogEditor;
