import qs from "qs";
import axiosClient from "./GlobalApi";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

// Function to build the query string with an optional count parameter
const buildJobsUrl = (locale) => {
  return (
    `jobs?` +
    qs.stringify({
      fields: ["id", "title", "content"],
      sort: ["id:asc"],
      locale: locale,
    })
  );
};

export const getJobs = async (locale = "en") => {
  try {
    const url = buildJobsUrl(locale);
    const response = await axiosClient.get(url);

    const jobs = response.data.data;

    return jobs;
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response ? error.response.data : error.message
    );
    throw error; // Rethrow the error after logging
  }
};
