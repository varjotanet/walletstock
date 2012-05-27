//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var lblStock = Ti.UI.createLabel({
		color:'#000000',
		text:L('stock_wallet'),
		top: 20,
		left: 20,
		height:'auto',
		width:'auto'
	});
	
	self.add(lblStock); 
	
	var edit = Ti.UI.createTextField ({
		color:'#000000',
		top: 50,
		left: 20,
		height:'auto',
		width: 150
	});
	self.add(edit);
	
	var botao = Ti.UI.createButton ({
		title: L('quote'),
		top: 100,
		left: 20,
		height:'auto',
		width: 'auto'
	});
	self.add(botao);
	
	
	//Add behavior for UI
	function searchYQL() {
		query = 'select * from yahoo.finance.quotes where symbol = "' + edit.value + '" limit 1';
		
		Titanium.Yahoo.yql(query, function(e){
			var data = e.data;
			alert(data.quotes.Name);
		});
	};
	
	botao.addEventListener('click', searchYQL);
	
	return self;
}

module.exports = FirstView;
