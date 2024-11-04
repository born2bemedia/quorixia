import qs from "qs";
import axiosClient from "./GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

// Function to build the query string with an optional count parameter
const buildCasesUrl = (locale) => {
  return (
    `cases?` +
    qs.stringify({
      fields: ["id", "title", "content"],
      sort: ["id:asc"],
      locale: locale,
    })
  );
};

export const getCases = async (locale = "en") => {
  try {
    const url = buildCasesUrl(locale);
    const response = await axiosClient.get(url);

    const cases = response.data.data;
    
    return cases;
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response ? error.response.data : error.message
    );
    throw error; // Rethrow the error after logging
  }
};
