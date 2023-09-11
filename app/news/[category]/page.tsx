import NewsList from "@/components/NewsList";
import { fetchNews } from "@/lib/fetchNews";
import { categories } from "@/constants";
type Props = {
  params: { category: Category };
};

const page = async ({ params: { category } }: Props) => {
  const news = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
