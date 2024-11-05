"use client";

import { useState } from "react";

const Short = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [finalURL, setFinalURL] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 6000);
    // });

    try {
      const res = await fetch("/api/short", {
        method: "POST",
        body: JSON.stringify({ url, slug }),
      });

      const data = await res.json();
      console.log(data);

      setFinalURL(data.url);
      setGenerated(true);
      setError("");
      setUrl("");
      setSlug("");

      setError(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Generate</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          type="text"
          placeholder="Enter URL"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
        />
        <input
          onChange={(e) => setSlug(e.target.value)}
          value={slug}
          type="text"
          placeholder="Preferred slug"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full py-3 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition duration-200"
        >
          Generate
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {generated && (
          <div className="mt-4">
            <p className="text-green-500">URL Generated</p>
            <p
              className="text-green-700 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(finalURL);
                alert("URL copied to clipboard!");
              }}
            >
              {finalURL}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Short;
