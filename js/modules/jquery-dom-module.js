let
	$result_list,
	$search_term_input,
	$type_select_el;

export function onDomLoad() {
	console.log('onDomLoad running..');
	$result_list       = $('#result-list');
	$search_term_input = $('#search-box');
	$type_select_el    = $('#type-select');
}

export function getSearchTerm(){
	return $search_term_input.val();
}

export function getSearchType(){
	return $type_select_el.val();
}

export function clearResultList() {
	$result_list.empty();
}

function createItemHtmlElement(item) //encapsulation
{
	if (!item) {
		throw new Error('No Item provided for createItemHtmlElement!')
	}
	
	switch(item.kind) {
	
	}
	
	const template = `
		<div class="song-item-wrapper">
			<img src="${item.artworkUrl60}" height="60">
			<div class="song-fields">
				<div class="song-title">
					${item.trackName}
				</div>
				<div class="album-title">
					${item.collectionName}
				</div>
				<div class="artist-title">
					${item.artistName}
				</div>
			</div>
			<div class="song-player">
				<audio src="${item.previewUrl}" controls></audio>
			</div>
		</div>
	`
	return $(template);
}

export function renderList(items) {
	if (!items || !items.length) {
		throw new Error('No Items provided for renderList!')
	}
	for (const item of items)
	{
		const $element = createItemHtmlElement(item);
		$result_list.append($element);
	}
}
