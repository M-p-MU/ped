import React from 'react';

const Comment = ({ comment }) => (
  <div className="border p-4 rounded-md my-4">
    <p className="text-lg">{comment.text}</p>
    <p className="text-gray-600 text-sm">Posted by: {comment.user.username}</p>
    <p className="text-gray-600 text-sm">Posted at: {new Date(comment.createdAt).toLocaleString()}</p>
    <p className="text-gray-600 text-sm">Updated at: {new Date(comment.updatedAt).toLocaleString()}</p>
    {comment.replies && comment.replies.length > 0 && (
      <div className="ml-4 mt-2 border-l pl-2">
        {comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} />
        ))}
      </div>
    )}
  </div>
);
const CommentsList = ({ comments }) => (
  <div className="space-y-4">
    {comments.map((comment, index) => (
      <Comment key={index} comment={comment} />
    ))}
  </div>
);

// const CommentsList = ({ comments }) => (
//   <div className="space-y-4">
//     {comments.map((comment, index) => (
//       <Comment key={index} comment={comment} />
//     )}
//   </div>
// );

const CommentSection = ({ data }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Comments</h2>
    <CommentsList comments={data.comments} />
  </div>
);

export default CommentSection;
