// actions types
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEMS = 'ADD_ITEMS';
const ADD_EDITABLE = 'ADD_EDITABLE';
const REMOVE_EDITABLE = 'REMOVE_EDITABLE';


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

export const addEditable = () => {
    return {
        type: ADD_EDITABLE,
        editable: true,
    }
}

export const removeEditable = () => {
    return {
        type: REMOVE_EDITABLE,
        editable: false,
    }
}
