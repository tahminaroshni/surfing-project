import { useRef } from "react";
import { gsapHoverAnimation, gsapMouseLeaveAnimation } from "../hooks/gsap";

const Blog = () => {
  const blogOneRef = useRef(null);
  const blogTwoRef = useRef(null);
  const blogThreeRef = useRef(null);
  const blogFourRef = useRef(null);
  const blogFiveRef = useRef(null);
  const blogSixRef = useRef(null);
  const blogSevenRef = useRef(null);

  const blogOneContent = useRef(null);
  const blogTwoContent = useRef(null);
  const blogThreeContent = useRef(null);
  const blogFourContent = useRef(null);
  const blogFiveContent = useRef(null);
  const blogSixContent = useRef(null);
  const blogSevenContent = useRef(null);


  return (
    <section className="blogs wrapper">
      <div
        ref={blogOneRef}
        onMouseEnter={() => gsapHoverAnimation(blogOneContent)}
        onMouseLeave={() => gsapMouseLeaveAnimation(blogOneContent)}
        className="blog blog-one">
        <div ref={blogOneContent} className="blog-content">
          <h3 className="blog-title">Blog One</h3>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores deleniti in error fugit earum maiores quae, pariatur iste? Debitis, magni. Distinctio rem cupiditate facilis accusantium soluta iste iure eius illo!</p>
        </div>
      </div>
      <div ref={blogTwoRef}
        onMouseEnter={() => gsapHoverAnimation(blogTwoContent)}
        onMouseLeave={() => gsapMouseLeaveAnimation(blogTwoContent)}
        className="blog blog-two">
        <div ref={blogTwoContent} className="blog-content">
          <h3 className="blog-title">Blog Two</h3>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores deleniti in error fugit earum maiores quae, pariatur iste?</p>
        </div>
      </div>
      <div ref={blogThreeRef}
        onMouseEnter={() => gsapHoverAnimation(blogThreeContent)}
        onMouseLeave={() => gsapMouseLeaveAnimation(blogThreeContent)}
        className="blog blog-three"><div ref={blogThreeContent} className="blog-content">
          <h3 className="blog-title">Blog Three</h3>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores deleniti in error fugit earum maiores quae, pariatur iste? Debitis, magni.</p>
        </div></div>
      <div ref={blogFourRef}
        onMouseEnter={() => gsapHoverAnimation(blogFourContent)}
        onMouseLeave={() => gsapMouseLeaveAnimation(blogFourContent)}
        className="blog blog-four"><div ref={blogFourContent} className="blog-content">
          <h3 className="blog-title">Blog Four</h3>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores deleniti in error fugit earum maiores quae, pariatur iste? Debitis, magni!</p>
        </div></div>
      <div ref={blogFiveRef}
        onMouseEnter={() => gsapHoverAnimation(blogFiveContent)}
        onMouseLeave={() => gsapMouseLeaveAnimation(blogFiveContent)}
        className="blog blog-five"><div ref={blogFiveContent} className="blog-content">
          <h3 className="blog-title">Blog Five</h3>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores deleniti in error fugit earum maiores quae, pariatur iste?</p>
        </div></div>
      <div ref={blogSixRef}
        onMouseEnter={() => gsapHoverAnimation(blogSixContent)}
        onMouseLeave={() => gsapMouseLeaveAnimation(blogSixContent)}
        className="blog blog-six"><div ref={blogSixContent} className="blog-content">
          <h3 className="blog-title">Blog Six</h3>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores deleniti in error fugit earum maiores quae, pariatur iste? </p>
        </div></div>
      <div
        ref={blogSevenRef}
        onMouseEnter={() => gsapHoverAnimation(blogSevenContent)}
        onMouseLeave={() => gsapMouseLeaveAnimation(blogSevenContent)}
        className="blog blog-seven">
        <div ref={blogSevenContent} className="blog-content">
          <h3 className="blog-title">Blog Seven</h3>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores deleniti in error fugit earum maiores quae, pariatur iste? </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;