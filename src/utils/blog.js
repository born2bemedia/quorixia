import qs from "qs";
import axiosClient from "./GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

// Function to build the query string with an optional count parameter
const buildPostsUrl = (count) => {
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
    })
  );
};

// Fetch posts from Strapi with an optional count parameter
export const getPosts = async (count) => {
  try {
    const url = buildPostsUrl(count);
    console.log("Fetching URL: ", url); // Log the URL for debugging
    const response = await axiosClient.get(url);
    console.log("Response Status: ", response.status); // Log the response status

    // Add full URL to image paths
    const posts = response.data.data.map(post => {
      const imageUrl = post.attributes.image.data?.attributes.url;
      // If image exists, prepend the cmsUrl to the path
      if (imageUrl) {
        post.attributes.image.data.attributes.url = `${cmsUrl}${imageUrl}`;
      }
      return post;
    });

    return posts;
  } catch (error) {
    console.error(
      "Error fetching posts:",
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
export const getPost = async (slug) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.attributes.slug === slug);
  return post;
};
