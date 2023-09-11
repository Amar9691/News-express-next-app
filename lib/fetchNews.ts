import { access } from "fs";
import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
export const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query mediastackQuery($access_key: String!) {
      mediastackQuery(access_key: $access_key) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  const res = await fetch(
    "https://mbambabay.stepzen.net/api/getting-started/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.NEXT_PUBLIC_MEDIA_API_KEY,
        },
      }),
    }
  );
  const newResponse = await res.json();
  const news = sortNewsByImage(newResponse);
  return news;
};
