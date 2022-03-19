const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');

module.exports.getCart = (payload) => {

	return Cart.find({userId: payload.id}).then(result => {
		return result;
	})
}

module.exports.addToCart = async (data) => {
	const {productId, quantity, url} = data.reqBody;

	// findOne returns null (falsy) if nothing is found
	let cart = await Cart.findOne({userId: data.payload.id});
	let product = await Product.findOne({_id: productId});

	if(!product) {
		return 'Product not Found!';
	}
	
	const {price, name} = product;

	// If cart already exists for the user
	if(cart) {
		let productIndex = cart.products.findIndex(p => p.productId == productId);

		// Check to see if item is already in the cart. If -1, it doesn't exist.
		if(productIndex > -1) {
			let productItem = cart.products[productIndex]; 
			productItem.quantity += quantity;
			cart.products[productIndex] = productItem;
		}
		else {
			cart.products.push({productId: productId, name: name, quantity: quantity, price: price, url: url})
		}
		cart.bill += price * quantity;

		return cart.save().then((result, err) => {
			if(err) {
				return false;
			}
			else {
				return true;
			}
		})

	}
	else {
		// There is no cart existing so create one. 
		cart = new Cart({
			userId: data.payload.id,
			products: [{productId: productId, name: name, quantity: quantity, price: price, url: url}],
			bill: price * quantity
		});

		return cart.save().then((result, err) => {
			if(err) {
				return false;
			}
			else {
				return true;
			}
		})
	}
}

module.exports.deleteCart = (userId) => {
	return Cart.deleteOne({userId: userId}).then(result => {
		return result;
	})
}


module.exports.removeProduct = async (data) => {
	const {userId, productId} = data;
	let cart = await Cart.findOne({userId: userId});
	let productIndex = cart.products.findIndex(p => p.productId == productId);

	// Product is in the cart
	if(productIndex > -1) {
		let productItem = cart.products[productIndex];
		cart.bill -= productItem.quantity*productItem.price;
        cart.products.splice(productIndex,1);
	}
	return cart.save().then((result, err) => {
		if(err) {
			return false;
		}
		else {
			return result;
		}
	})

}

