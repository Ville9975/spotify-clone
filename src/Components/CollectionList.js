import { GrFavorite } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { BsJournalAlbum } from "react-icons/bs";

const CollectionList = [
    {
        id: 1,
        logo: < GrFavorite/>,
        name: 'Favorite Songs'
    },
    {
        id: 2,
        logo: < IoIosPeople/>,
        name: 'Artist'
    },
    {
        id: 3,
        logo: < BsJournalAlbum/>,
        name: 'Albums'
    },
]

export default CollectionList;