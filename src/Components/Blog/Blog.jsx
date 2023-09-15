import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark }) => {

    return (
        <div>

            <img className='w-full' src={blog.cover} alt="" srcset="" />
             

            <div className='flex justify-between' >

                <div className='flex'>

                <div className='w-12'>
                    <img src={blog.author_img} alt="" />
                </div>

                <div className='ml-4'>
                    <p>{blog.author}</p>
                    <p>{blog.posted_date}</p>
                </div>

                </div>


               

                <div>
                    <span> {blog.reading_time} </span>
                    <button onClick={() => handleAddToBookmark(blog)}>Book Mark</button>
                </div>


            </div>

            <h1 className='text-4xl font-bold'> Blog Title: {blog.title} </h1>

            {
                blog.hashtags.map((hash , idx) => <span key={idx}># {hash} &nbsp;</span>)
            }


        </div>
    );
};

Blog.PropTypes = {

    blog: PropTypes.object.isRequired
}

export default Blog;