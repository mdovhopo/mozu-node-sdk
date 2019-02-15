

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../client'), constants = Client.constants;

module.exports = Client.sub({
	getCart: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/carts/{cartId}?responseFields={responseFields}'
	}),
	getOrCreateCart: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/carts/current?responseFields={responseFields}'
	}),
	getCartSummary: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/carts/summary?responseFields={responseFields}'
	}),
	getUserCartSummary: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/carts/user/{userId}/summary?responseFields={responseFields}'
	}),
	getUserCart: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/carts/user/{userId}?responseFields={responseFields}'
	}),
	rejectSuggestedDiscount: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/carts/{cartId}/rejectautodiscount/{discountId}?responseFields={responseFields}'
	}),
	updateCart: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/carts/current?responseFields={responseFields}'
	}),
	deleteCart: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/carts/{cartId}'
	}),
	deleteCurrentCart: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/carts/current'
	})
});
