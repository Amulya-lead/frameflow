// Initializer function for useReducer to ensure fresh localStorage read
export const getInitialFavourites = () => {
    try {
        const saved = localStorage.getItem('favourites_list'); // Changed key to be more specific
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Error loading favourites:', error);
        return [];
    }
};

export const favouritesReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'TOGGLE_FAVOURITE':
            const exists = state.some(photo => photo.id === action.payload.id);
            if (exists) {
                newState = state.filter(photo => photo.id !== action.payload.id);
            } else {
                newState = [...state, action.payload];
            }
            try {
                localStorage.setItem('favourites_list', JSON.stringify(newState));
            } catch (error) {
                console.error('Error saving favourites:', error);
            }
            return newState;
        default:
            return state;
    }
};
