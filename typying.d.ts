type Category =
  | "general"
  | "business"
  | "sport"
  | "technology"
  | "science"
  | "health";

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type NewsResponse = {
  data: {
    mediastackQuery: {
      data: Article[];
      pagination: Pagination;
    };
  };
};

type TestResponse = {
  data: Article[];
  pagination: Pagination;
};
