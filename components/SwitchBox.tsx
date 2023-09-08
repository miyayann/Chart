import CountTypes from '@/types/CountType';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

interface SwitchBoxProps {
  Count: CountTypes; 
  setNewWeight: (newPage: any) => void; 
}

const SwitchBox: React.FC<SwitchBoxProps> = ({ Count, setNewWeight }) => {
  console.log(Count)
  const [itemsOffset, setItemsOffset] = useState(0);
  const itemsPerPage = 7;

  const handlePageChange = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % Count.length;
    setItemsOffset(newOffset); 
  };

  useEffect(() => {
    const endOffset = itemsOffset + itemsPerPage;
    const current = Count.slice(itemsOffset, endOffset);
    console.log(current)
    setNewWeight(current); 
  }, [itemsOffset,Count, setNewWeight]);

  const PgCount = Math.ceil(Count.length / itemsPerPage);

  return (
    <div className="flex justify-center my-4">
      <ReactPaginate
      pageCount={PgCount} 
      onPageChange={handlePageChange}
      previousLabel="先週"
        nextLabel="次週"
        breakLabel="..."
        marginPagesDisplayed={2} // 現在ページの前後に表示されるページ数
        pageRangeDisplayed={5} // 表示されるページリンクの数
        containerClassName="flex justify-center h-8"
        pageClassName="mx-2 border rounded-sm w-5 text-center"
        activeClassName="bg-blue-500 text-white"
        previousClassName="mr-2 border rounded-full"
        nextClassName="ml-2 border rounded-full"
      />
    </div>
  );
};


export default SwitchBox;
