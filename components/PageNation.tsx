import { useState } from "react";
import ReactPaginate from 'react-paginate'

type Album = {
  albumId: number,
  Id: number,
  thumbnailUrl: string,
  title: string,
  url: string,
}

type Props = {
  albums: Album[]
}
const PageNation = (props: Props) => {
  const {albums} = props;

  const itemsPerPage = 7

  const [itemsOffset, setItemsOffset] = useState(0)
  console.log(itemsOffset)

  const endOffset = itemsOffset + itemsPerPage

  const currentAlbums = albums.slice(itemsOffset, endOffset);
  const pageCount = Math.ceil(albums.length / itemsPerPage)
  console.log(pageCount)

  const handlePageClick = (e : {selected: number}) => {
    console.log(e.selected);

    const newOffset = (e.selected * itemsPerPage) % albums.length;
    console.log(newOffset)
    setItemsOffset(newOffset)
  }
  return (
    <div>
      {currentAlbums.map((album) => (
        <div key={album.Id}>
          <img src={album.thumbnailUrl} alt="" />
        </div>
      ))}
      <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick}/>
    </div>
  );
}

export default PageNation;