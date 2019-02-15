

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../client'), constants = Client.constants;

module.exports = Client.sub({
	splitItem: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/items/{itemId}/split?quantity={quantity}&responseFields={responseFields}'
	}),
	bulkUpdateItemDestinations: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/items/destinations?responseFields={responseFields}'
	}),
	addCheckoutItem: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/items?skipInventoryCheck={skipInventoryCheck}&responseFields={responseFields}'
	}),
	updateItemDestination: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/items/{itemId}/destination/{destinationId}?responseFields={responseFields}'
	}),
	deleteCheckoutItem: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/items/{itemId}'
	})
});
