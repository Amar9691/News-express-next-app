export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.data.mediastackQuery.data.filter(
    (item) => item.image !== null
  );
  const newsWithOutImage = news.data.mediastackQuery.data.filter(
    (item) => item.image === null
  );
  const sortedNewsResponse = {
    pagination: news.data.mediastackQuery.pagination,
    data: [...newsWithImage, ...newsWithOutImage],
  };
  return sortedNewsResponse;
}
