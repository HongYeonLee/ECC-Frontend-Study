import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이홍연",
        comment: "안녕하세요, 이홍연입니다.",
    },
    {
        name: "홍길동",
        comment: "리액트 재밌어요~",
    },
    {
        name: "리암",
        comment: "저도 리액트 배워 보고 싶어요!!",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;