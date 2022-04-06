import {clearResultList, getSearchTerm, getSearchType, onDomLoad} from "./modules/jquery-dom-module.js";
import {searchITunes}                                             from "./modules/itunes-api-module.js";


window.onBodyLoad = (event)=>{
	onDomLoad()
}

window.onButtonClicked = async (event)=>{
    clearResultList();
	
	console.log(getSearchTerm(), 'getSearchTerm()');
	console.log(getSearchType(), 'getSearchType()');
	
	const items = await searchITunes(getSearchTerm(), getSearchType());
	
	for (const item of items)
	{
		console.log(item, 'item');
	}
	
}
