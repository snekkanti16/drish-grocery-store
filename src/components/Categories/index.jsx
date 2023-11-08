import React from 'react';
import './Categories.css';

const categories = [
    {
        'id': 1,
        'catName':'dairy products',
        'catImage': 'image/cat-3.png',
        'catDiscount': 'upto 15% off',
    },
    {
        'id': 2,
        'catName':'fresh fruits',
        'catImage': 'image/cat-2.png',
        'catDiscount': 'upto 25% off',
    },
    {
        'id': 3,
        'catName':'vegetables',
        'catImage': 'image/cat-1.png',
        'catDiscount': 'upto 35% off',
    },
    {
        'id': 4,
        'catName':'fresh meat',
        'catImage': 'image/cat-4.png',
        'catDiscount': 'upto 45% off',
    }
]

const Categories = () => {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        products
        {' '}
        <span>categories</span>
      </h1>
      <div className="box-container">
        {
        categories.map(category => {
            return (
            <div key={category.id} className="box">
                <img src={category.catImage} alt="" />
                <h3>{category.catName}</h3>
                <p>{category.catDiscount}</p>
                <button type="button" className="btn">shop now</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Categories;