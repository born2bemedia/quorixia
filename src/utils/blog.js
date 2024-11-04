import qs from "qs";
import axiosClient from "./GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

// Function to build the query string with an optional count parameter
const buildPostsUrl = (count, locale) => {
  return (
    `posts?` +
    qs.stringify({
      fields: [
        "id",
        "slug",
        "title",
        "excerpt",
        "content",
        "seo_title",
        "seo_description",
      ],
      populate: { image: { fields: ["url"] } },
      pagination: { pageSize: count || 9999 },
      sort: ["id:asc"],
      locale: locale,
    })
  );
};

// Fetch posts from Strapi with an optional count parameter
export const getPosts = async (count, locale = "en") => {
  try {
    const url = buildPostsUrl(count, locale);
    const response = await axiosClient.get(url);

    // Add full URL to image paths
    /* const posts = response.data.data.map((post) => {
      const imageUrl = post.attributes.image.data?.attributes.url;
      // If image exists, prepend the cmsUrl to the path
      if (imageUrl) {
        post.attributes.image.data.attributes.url = `${cmsUrl}${imageUrl}`;
      }
      return post;
    });*/

    const posts = response.data.data;

    return posts;
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response ? error.response.data : error.message
    );
    throw error; // Rethrow the error after logging
  }
};

export const getSlugs = async (count, locale = "en") => {
  try {
    const url = buildPostsUrl(count, locale);
    const response = await axiosClient.get(url);

    // Extract and return only the slugs
    return response.data.data.map((post) => post.attributes.slug);
  } catch (error) {
    console.error(
      "Error fetching slugs:",
      error.response ? error.response.data : error.message
    );
    throw error; // Rethrow the error after logging
  }
};

// Fetch posts by a specific category with an optional count parameter
export const getPostsByCategory = async (category, count) => {
  const posts = await getPosts(count);
  const categoryPosts = posts.filter(
    (post) => post.attributes.category === category
  );
  return categoryPosts;
};

// Fetch a single post by slug
export const getPost = async (slug, locale) => {
  const posts = await getPosts(undefined, locale);
  const post = posts.find((post) => post.attributes.slug === slug);
  return post;
};
