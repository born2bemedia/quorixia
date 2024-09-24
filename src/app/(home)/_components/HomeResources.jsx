import ButtonArrow from "@/icons/ButtonArrow";
import { getPosts } from "@/utils/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeResources = async () => {
  // Fetch the latest 3 posts
  const posts = await getPosts(3);
  return (
    <section className="home-resources">
      <div className="_container">
        <h3 className="fadeInUp">Career Resources</h3>
        <h2 className="fadeInUp">Empowering You With Knowledge</h2>
        <p className="fadeInUp">
          Your career doesn’t come with a manual, but Quorixia’s resources are
          the next best thing. Stay ahead of the curve with expert insights,
          guides, and practical advice crafted by HR professionals. Our blog,
          case studies, and glossary help you stay informed and inspired, giving
          you the tools to navigate your career confidently.
        </p>
        <div className="home-resources__body">
          <div className="blog">
            {posts.map((post, index) => (
              <Link
                href={`/blog/${post.attributes.slug}`}
                key={post.id}
                className="fadeInUp"
              >
                <div className="thumb">
                  <Image
                    src={
                      post.attributes.image.data?.attributes.url ||
                      "/images/default.png"
                    } // Fallback image if no URL
                    alt={post.attributes.title}
                    fill
                  />
                </div>
                <div className="info">
                  <h4>{post.attributes.title}</h4>
                  <h5>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h5>{" "}
                  {/* Adds leading zero to the index */}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/blog" className="main-button">
          <span>Visit Our Resources</span>
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
};

export default HomeResources;
