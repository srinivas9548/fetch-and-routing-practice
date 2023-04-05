import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="blog-item-image" />
          <div className="blog-item-info">
            <p className="blog-item-topic">{topic}</p>
            <h1 className="">{title}</h1>
            <div className="author-info">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
