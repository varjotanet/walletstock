//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		top: 20,
		left: 20,
		text:'Stock',
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	var edit = Ti.UI.createTextField ({
		color:'#000000',
		top: 50,
		left: 20,
		height:'auto',
		width: 150
	});
	self.add(edit);
	
	var botao = Ti.UI.createButton ({
		title: 'Quote!',
		top: 100,
		left: 20,
		height:'auto',
		width: 'auto'
	});
	self.add(botao);
	
	
	//Add behavior for UI
	botao.addEventListener('click', searchYQL);
	
	function searchYQL() {
		query = 'select * from yahoo.finance.quotes where symbol = "' + edit.value + '" limit 1';
		
		Titanium.Yahoo.yql(query, function(e){
			var data = e.data;
			alert(data.quotes.Name);
		});
	};
	
	return self;
}

module.exports = FirstView;
