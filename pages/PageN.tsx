import PageNation from "@/components/PageNation";
import { useEffect, useState } from "react";

type Album = {
  albumId: number,
  Id: number,
  thumbnailUrl: string,
  title: string,
  url: string,
}

const PageN = () => {

  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then(res => res.json())
      .then((album) => setAlbums(album))
    }
    getAlbums()
  }, [])
  return (
    <div>
      <PageNation albums={albums}/>
    </div>
  );
}

export default PageN;