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
      title: "How to reach the top of the digital wallet",
      tag: 'Product',
      img: Img1,
      date: 'May 6, 2024'
    },
    {
      title: "How sascard works with multiple banks",
      tag: 'Company',
      img: Img2,
      date: 'May 5, 2024'
    },
    {
      title: "Building fintech is still too hard",
      tag: 'Company',
      img: Img3,
      date: 'May 2, 2024'
    },
   ]
  return (
    <section className='blog'>
      <div className="blog__text" data-aos='fade-up'>
        <h3>Explore our Resources</h3>
        <p>Navigate articles, whitepapers, and thought leadership pieces to learn more about Sascard.</p>
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
