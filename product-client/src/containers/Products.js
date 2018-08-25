import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  state = {
    isLoading: true,
    products: []
  }

  componentDidMount() {
    const API_URL = 'http://localhost:5000/api/v1/products';
    fetch(API_URL)
      .then(res => res.json())
      .then(products => {
        setTimeout(() => {
          this.setState({
            products,
            isLoading: false
          });
        }, 1000);
      });
  }

  render() {
    return (
      <div>
        <h1>Products Page</h1>
        { 
          this.state.isLoading
          ?
            <h2>Loading products...</h2>
          :
          <div className="row">
          {
            this.state.products.map(product => (
              <div className="card col-4">
                <img src={product.image} alt={product.title} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-primary">View product</Link>
                </div>
              </div>
            ))
            }
          </div>
        }
      </div>
    );
  }
}

export default Products;