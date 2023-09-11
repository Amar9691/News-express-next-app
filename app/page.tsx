import { categories } from "@/constants";
import Image from "next/image";
import NewsList from "@/components/NewsList";
import { fetchNews } from "@/lib/fetchNews";
import Response from "@/response.json";
const Home = async () => {
  const news = await fetchNews(categories.join(","));
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default Home;
