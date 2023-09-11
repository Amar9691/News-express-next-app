import Article from "./Article";

type Props = {
  news: {
    pagination: Pagination;
    data: Article[];
  };
};
const NewsList = ({ news }: Props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 lg:grid:cols-4 p-3 gap-10">
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
};

export default NewsList;
