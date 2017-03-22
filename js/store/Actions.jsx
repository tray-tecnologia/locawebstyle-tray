// actions types
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEMS = 'ADD_ITEMS';


// actions creators
export const addItem = (itemData) => {
    return {
        type: ADD_ITEM,
        itemData
    }
}

export const removeItem = (itemID) => {
    return {
        type: REMOVE_ITEM,
        itemID
    }
}

export const addItems = (itemsData) => {
    return {
        type: ADD_ITEMS,
        itemsData
    }
}
