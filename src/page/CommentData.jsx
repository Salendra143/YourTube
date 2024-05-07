import React, { useEffect, useState } from 'react';
import { VIDEO_COMMENTS } from '../utils/constant';

const CommentData = ({ id }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApi = async () => {
        try {
            const data = await fetch(VIDEO_COMMENTS + id);
            const json = await data.json();
            setComments(json.items || []);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
       
        

    useEffect(() => {
        fetchApi();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (comments.length === 0) return <div>No comments available.</div>;

    return (
        <div className=''>
            <p className='text-[2rem] italic font-semibold '>Comments:</p>
            <div className=''>
                {comments.map((comment, index) => (
                    <div className=' flex gap-3 mt-3' key={index}>
                        <img className='rounded-full' src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div className='flex flex-col'>
                            <div className=' italic text-[1rem] font-semibold'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</div>
                            <div className='italic'>{comment.snippet.topLevelComment.snippet.textDisplay}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentData;
