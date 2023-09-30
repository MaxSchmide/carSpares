import { useRouter } from 'next/router';

const Search = () => {
  const { query } = useRouter();
  return <div className="container">Search: {query.query}</div>;
};

export default Search;
