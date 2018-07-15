import React from 'react';
import Tag from './Tag';

const Description = (props) => (
  <div className="description">
    <div className="title">
      {props.title}
    </div>

    <div className="explanation">
      {props.text}
    </div>

    <div className="tags">
      {
        props.tags.map((item, index) => {
          return <Tag tag={item} key={index} />
        })
      }
    </div>
  </div>
);

export default Description;