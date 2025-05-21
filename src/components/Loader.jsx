import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading }) => {
  return (
    <ClipLoader
      color="blue"
      loading={loading}
      cssOverride={{ margin: "0 auto" }}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
