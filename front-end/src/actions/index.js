export const add = diary => {
	return {
        type: 'Add',
        payload: diary
	};
};

export const remove = (diary) => {
	return {
        type: 'Remove',
        payload: diary
	};
};

export const favorite = (id,isFav) => {
	return {
        type: 'Favorite',
		id,
		isFav
	};
};
export const filterDate = (date) => {
	return {
        type: 'FilterDate',
		date
	};
};

export const getAll = () => {
	return {
        type: 'GetAll'
		
	};
};

export const fav = (id) => {
	return {
		type: 'Fav',
		id
	};
};

export const unfav = (id) => {
	return {
		type: 'Unfav',
		id
	};
};

