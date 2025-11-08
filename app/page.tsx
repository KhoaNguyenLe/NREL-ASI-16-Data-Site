"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

interface FileInfo{
  label: string;
  directoryLabel?: string;
  downloadURL: string;
}

export default function Home() {

  const [files, setFiles] = useState<FileInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(
          'link'
        );
        const data = await res.json();
        const fileList = data.data.latestVersion.files.map((f:any) =>({
          label: f.label,
          directoryLabel: f.directoryLabel,
          downloadURL: f.dataFile.downloadURL,
        }));
        setFiles(fileList);
      } catch(err){
        console.error(err);
      } finally{
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  //JSX PART FINALLY

  return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <div className = "flex flex-col items-center justify-center h-[70vh] text-center px-6"> 
          <h1 className = "text-5xl font bold mb-4"> Sky Image Dataset </h1>
          <p>
            A minute-resolution dataset of sky images
          </p>

          <a href="link to dset" className = "px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            View Dataset
          </a>

        </div>


      </main>
        
  );
}
