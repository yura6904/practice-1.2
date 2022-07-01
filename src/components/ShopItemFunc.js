import propTypes from 'prop-types'
import React from 'react'

class ShopItemFunc extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const item = this.props.item

    return (
      <div className="main-content">
          <h2>{item.brand}</h2>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <div className="description">{item.descriptionFull}</div>
          <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
          <div className="divider"></div>
          <div className="purchase-info">
              <div className="price">{item.currency + item.price.toFixed(2)}</div>
              <button>Добавить в корзину</button>
          </div>
      </div>
    )
  }
}
 
ShopItemFunc.propTypes = {
    brand: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    descriptionFull: propTypes.string,
    price: propTypes.number,
    currency: propTypes.string
}

export default ShopItemFunc;