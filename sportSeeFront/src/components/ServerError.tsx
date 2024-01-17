const ServerError = () => {
  return (
    <div className="flex w-screen items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">500 - Internal Server Error</h2>
        <p>Sorry, something went wrong on our end. Please try again later.</p>
      </div>
    </div>
  );
};

export default ServerError;
