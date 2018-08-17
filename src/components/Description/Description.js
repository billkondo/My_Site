import React from 'react';
import Tag from './Tag';
import { CSSTransition } from 'react-transition-group';

const Description = (props) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={800}
    classNames={{
      appear: "animated",
      appearActive: "fadeIn fast"
    }}
  >
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
  </CSSTransition>
);

export default Description;