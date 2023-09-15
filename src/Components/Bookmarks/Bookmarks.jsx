import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h1 className="text-3xl">Bookmarked Blog: {bookmarks.length}</h1>
        
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}> </Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;