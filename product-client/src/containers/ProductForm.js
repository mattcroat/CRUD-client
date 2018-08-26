import React, { Component } from 'react';

class ProductForm extends Component {
  state = {
    product: {
      title: '',
      description: '',
      price: '',
      quantity: 0,
      image: '',
    },
    creating: false,
  };

  componentDidMount() {
    this.setState({
      product: {
        ...this.props.product,
      },
    });
  }

  valueChanged = (event) => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      product: {
        ...prevState.product,
        [name]: value,
      },
    }));
  };

  validProduct = () => {
    const { product } = this.state;

    const hasTitle = product.title.trim() !== '';
    const hasDescription = product.description.trim() !== '';
    const hasPrice = !isNaN(product.price) && Number(product.price) >= 0;
    const hasQuantity = !isNaN(product.quantity) && Number(product.quantity) >= 0;
    const hasImage = product.image.trim() !== '';

    return hasTitle && hasDescription && hasPrice && hasQuantity;
  };

  formSubmitted = (event) => {
    event.preventDefault();

    if (this.validProduct()) {
      this.props.onFormSubmitted(this.state.product);

      this.setState({
        creating: true,
      });
    }
  };

  render() {
    const { product } = this.state;

    return (
      <form onSubmit={this.formSubmitted}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input onChange={this.valueChanged} value={product.title} type="text" className="form-control" name="title" id="title" placeholder="Enter a title" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea onChange={this.valueChanged} value={product.description} name="description" id="description" rows="3" className="form-control" placeholder="Enter a Description" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input onChange={this.valueChanged} value={product.price} type="text" className="form-control" name="price" id="price" placeholder="Enter a price" required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input onChange={this.valueChanged} value={product.quantity} type="number" step="1" min="0" className="form-control" name="quantity" id="quantity" placeholder="Enter a quantity" required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input onChange={this.valueChanged} value={product.image} type="url" className="form-control" name="image" id="image" placeholder="http://example.com/image.jpg" required />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default ProductForm;
