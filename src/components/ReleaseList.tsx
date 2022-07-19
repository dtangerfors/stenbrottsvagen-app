import React, { useEffect, useState } from "react";

type Release = {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
};

const showDate = (timeStr: string) => {
  let date = new Date(timeStr)
  return date.toLocaleDateString();
};

export default function ReleaseList() {
  const [releaseData, setReleaseData] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  let latestRelease: Release;

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/dtangerfors/stenbrottsvagen-app/releases"
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        setReleaseData(data);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar …</p>;
  if (error) return <p>Ett fel uppstod …</p>;

  latestRelease = releaseData?.at(0);

  return (
    <div>
      <div className="bg-gray-100 rounded-xl px-4 py-2 w-full dark:bg-black">
        <p className="flex justify-between text-headline uppercase text-gray-400 font-medium leading-none py-2 mb-2 border-b border-gray-300 dark:text-gray-300 dark:border-gray-500">
          Aktuell version {latestRelease.tag_name}{" "}
          <span>{showDate(latestRelease.published_at)}</span>
        </p>
        <p className="text-base text-gray-500 dark:text-gray-300">
         {latestRelease.body}
        </p>
      </div>

      <div className="py-12 px-4">
        <p className=" text-headline uppercase text-gray-400 font-medium leading-none pb-2 mb-2 border-b border-gray-300 dark:border-gray-500">Alla versioner</p>
        <ul>
        {releaseData?.map((item: any, key: number) => {
          return <li key={`release-item-${key}`} className="flex justify-between py-2 border-b border-gray-200 last:border-0 font-normal text-headline text-gray-400 dark:border-gray-500"><span className="uppercase">{item.tag_name}</span> <span>{showDate(item.published_at)}</span></li>
        })}
        </ul>
      </div>
    </div>
  );
}
