import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

import { data } from "../data";

const d = data.map((item)=> item.like )
export const columns = [
    {
        Header: "#",
        accessor: "id",
    },
    {
        Header: "Title",
        accessor: "title"
        //     () => {

        //     return (
        //         <div className="flex items-center">
        //             <img src="" alt="" />
        //             <i><AiFillEdit /></i>
        //             <p className="text-xs">Rune raises $100,000 for marketing through NFT butterflies sale</p>
        //         </div>
        //     );
        // },
    },

    {
        Header: "Author",
        accessor: "username"
        //     () => {

        //     return (
        //         <div className="flex items-center">
        //           <img src="" alt="" />
        //             <i><AiFillEdit /></i>
        //             <p>ninjanft</p>
        //         </div>
        //     );
        // },
    },
    {
        Header: "Most Liked",
        accessor:
            () => {

                return (
                    <div className="flex items-center gap-[1rem]">
                        <p>
                            {d}
                        </p>
                        <i><AiFillEdit /></i>
                    </div>
                );
            },
    },
];


