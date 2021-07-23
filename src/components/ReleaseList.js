import React, { useEffect, useState } from "react";

export default function ReleaseList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let latestRelease;

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/dtangerfors/stenbrottsvagen-app/releases"
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar …</p>
  if (error) return <p>Ett fel uppstod …</p>


  latestRelease = data[0];
  return (
  <div>
      <div className="bg-gray-100 rounded-xl px-4 py-2 w-full">
        <p className="block text-headline uppercase text-gray-400 leading-none py-2 mb-2 border-b border-gray-300">Aktuell version {latestRelease.tag_name}</p>
        <p className="text-base text-gray-500 break-words">
            <span className="font-semibold">{latestRelease.name}</span> – <span className="break-all">{latestRelease.body}</span>
        </p>
      </div>
      


        
  </div>
  );
}
