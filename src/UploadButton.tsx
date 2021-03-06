function UploadButton({ callback }: any) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const blob = URL.createObjectURL(event.target.files![0]);
      callback(blob);
    }
  };

  return (
    <div className="flex items-center justify-center bg-grey-lighter m-2">
      <label className="w-64 flex flex-col items-center px-4 py-6 bg-gray-700 text-gray-100 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer hover:bg-gray-800">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">
          Select your 3d-Model
        </span>
        <input
          type="file"
          className="hidden"
          onChange={handleChange}
          accept=".glb"
        />
      </label>
    </div>
  );
}

export default UploadButton;
