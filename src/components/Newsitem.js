import React from 'react';

const NewsItem = (props) => {

    let { title, discription, imageUrl, newsUrl, author, date } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={!imageUrl ? "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/vo1rstipzruawucy_1690471481.jpeg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{discription}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-danger">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;


//kjjkjkhkhk