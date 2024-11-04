import ButtonArrow from "@/icons/ButtonArrow";
import { getPosts } from "@/utils/blog";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const HomeResources = async () => {
  const t = useTranslations("home");
  const locale = useLocale();
  const posts = await getPosts(3, locale);
  return (
    <section className="home-resources">
      <div className="_container">
        <h3 className="fadeInUp">{t("HomeResources.title")}</h3>
        <h2 className="fadeInUp">{t("HomeResources.subtitle")}</h2>
        <p className="fadeInUp">{t("HomeResources.text")}</p>
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
                    //src={`/images/blog/${post.attributes.slug}.png`} // Fallback image if no URL
                    src={`${post.attributes.image.data.attributes.url}`} // Fallback image if no URL
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
          <span>{t("HomeResources.button")}</span>
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
};

export default HomeResources;
