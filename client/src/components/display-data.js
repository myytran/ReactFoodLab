import React from 'react';



const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
}; 

export default ({ recipe: { recipe_name, startDate, _id }, onDelete }) => {
  return (
    <div style={ styles }>
      <h2>{ recipe_name }</h2>
      <h3>{ startDate }</h3>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>Remove</button>
    </div>
  );
};