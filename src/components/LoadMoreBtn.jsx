const LoadMoreBtn = ({ page, setPage }) => {
  return <button onClick={() => setPage(page + 1)}>Load more</button>;
};

export default LoadMoreBtn;
