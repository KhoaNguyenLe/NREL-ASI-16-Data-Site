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

  return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <div>
          <p>
            
          </p>
        </div>
      </main>
        
  );
}
