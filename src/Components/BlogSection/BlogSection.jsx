import './BlogSection.scss';
import Wrapper from '../Wrapper/Wrapper';
import Img1 from '../../assets/blog-1.jpg';
import Img2 from '../../assets/blog-2.jpg';
import Img3 from '../../assets/blog-3.jpg';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function BlogSection() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
   const blog = [
    {
      title: "Seamless SMS and Voice Solutions",
      tag: 'Product',
      img: Img1,
      date: 'May 5, 2025'
    },
    {
      title: "How Tapvox works with multiple banks",
      tag: 'Company',
      img: Img2,
      date: 'May 15, 2025'
    },
    {
      title: "How can Tapvox simplify fintech building processes",
      tag: 'Company',
      img: Img3,
      date: 'May 25, 2025'
    },
   ]
  return (
    <section className='blog'>
      <div className="blog__text" data-aos='fade-up'>
        <h3>Explore our Resources</h3>
        <p>Navigate articles, whitepapers, and thought leadership pieces to learn more about Tapvox.</p>
      </div>

      <div className="blog__container" data-aos='fade-up'>
        {blog.map((blog) => (
          <div className="blog__card">
            <div className="blog__card-img">
              <img src={blog.img} alt="" />
            </div>
            <div className="blog__tag">
              {blog.tag}
            </div>
            <div className="blog__title">
                {blog.title}
              </div>
              <h6>{blog.date}</h6>
          </div>
        ))}
      </div>

      <div className="blog__btn">
        <a href="#" className='button-primary'>See All Blog</a>
      </div>
    </section>
  )
}

export default BlogSection
