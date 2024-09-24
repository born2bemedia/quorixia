import qs from "qs";
import axiosClient from "./GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

// Function to build URL for fetching posts/pages by slug
const buildPageUrl = (slug) => {
  return (
    `pages?` +
    qs.stringify({
      fields: ["id", "title", "content", "updatedAt", "seo_title"], // Fetch only required fields
      populate: {}, // No need to populate unnecessary fields
      filters: {
        slug: slug, // Filter by the slug parameter
      },
    })
  );
};

export const getPageSlugs = async (count) => {
  try {
    const url = buildPageUrl(count);
    const response = await axiosClient.get(url);

    // Extract and return only the slugs
    return response.data.data.map((page) => page.attributes.slug);
  } catch (error) {
    console.error(
      "Error fetching slugs:",
      error.response ? error.response.data : error.message
    );
    throw error; // Rethrow the error after logging
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};

// Fetch a specific page from Strapi by slug
export const getPageBySlug = async (slug) => {
  try {
    const url = buildPageUrl(slug);
    const response = await axiosClient.get(url);

    // Check if the response contains any data
    if (response.data.data.length === 0) {
      throw new Error(`Page with slug "${slug}" not found`);
    }

    // Assuming there's only one page with the given slug
    const page = response.data.data[0];

    // Format the updatedAt date
    const formattedDate = formatDate(page.attributes.updatedAt);

    // Return the required fields
    return {
      id: page.id,
      title: page.attributes.title,
      content: page.attributes.content,
      updatedAt: formattedDate,
      seo_title: page.attributes.content,
    };
  } catch (error) {
    console.error(
      "Error fetching page:",
      error.response ? error.response.data : error.message
    );
    throw error; // Rethrow the error after logging
  }
};
