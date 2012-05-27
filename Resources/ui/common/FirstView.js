//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var lblStock = Ti.UI.createLabel({
		color:'#000000',
		text:L('stock_wallet'),
		height:'auto',
		width:'auto'
	});
	
	self.add(lblStock); 
	
	//Add behavior for UI
	/*lblStock.addEventListener('click', function(e) {
		alert(e.source.text);
	});*/
	
	return self;
}

module.exports = FirstView;