const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';
const CREATE_AD_REQUEST = 'CREATE_AD_REQUEST';
const CREATE_AD_SUCCESS = 'CREATE_AD_SUCCESS';
const CREATE_AD_FAILURE = 'CREATE_AD_FAILURE';
const GET_ADS_REQUEST = 'GET_ADS_REQUEST';
const GET_ADS_SUCCESS = 'GET_ADS_SUCCESS';
const GET_ADS_FAILURE = 'GET_ADS_FAILURE';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';



function addToCart(adId) {
    return { type: ADD_TO_CART, adId };
}

function removeFromCart(adId) {
    return { type: REMOVE_FROM_CART, adId };
}
function loginRequest() {
    return { type: LOGIN_REQUEST };
}

function loginSuccess(token, userInfo) {
    return { type: LOGIN_SUCCESS, token, userInfo };
}

function loginFailure(error) {
    return { type: LOGIN_FAILURE, error };
}

function logout() {
    return { type: LOGOUT };
}

function registerRequest() {
    return { type: REGISTER_REQUEST };
}

function registerSuccess(message) {
    return { type: REGISTER_SUCCESS, message };
}

function registerFailure(error) {
    return { type: REGISTER_FAILURE, error };
}

function createAdRequest() {
    return { type: CREATE_AD_REQUEST };
}

function createAdSuccess(message) {
    return { type: CREATE_AD_SUCCESS, message };
}

function createAdFailure(error) {
    return { type: CREATE_AD_FAILURE, error };
}

function getAdsRequest() {
    return { type: GET_ADS_REQUEST };
}

function getAdsSuccess(ads) {
    return { type: GET_ADS_SUCCESS, ads };
}

function getAdsFailure(error) {
    return { type: GET_ADS_FAILURE, error };
}

function addToFavorites(adId) {
    return { type: ADD_TO_FAVORITES, adId };
}

function removeFromFavorites(adId) {
    return { type: REMOVE_FROM_FAVORITES, adId };
}


function login(username, password) {
    return function(dispatch) {
        dispatch(loginRequest());
        const formData = { username, password };
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                document.getElementById('createAdForm').style.display = 'block';
                document.getElementById('getAdsBtn').style.display = 'block';
                document.getElementById('favoritesCount').style.display = 'block'
                document.getElementById('cart').style.display = 'block'
                return response.json();
            })
            .then(data => {
                dispatch(loginSuccess(data.token, data.userInfo));
            })
            .catch(error => {
                dispatch(loginFailure(error.message));
            });
    };
}


function register(username, password) {
    return function(dispatch) {
        dispatch(registerRequest());
        const formData = { username, password };
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Registration failed');
                }
                return response.json();
            })
            .then(data => {
                dispatch(registerSuccess(data.message));
            })
            .catch(error => {
                dispatch(registerFailure(error.message));
            });
    };
}


function createAd(title, description, price) {
    return function(dispatch) {
        dispatch(createAdRequest());
        const formData = { title, description, price };
        fetch('http://localhost:3001/ads/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createAdSuccess(data.message));
            })
            .catch(error => {
                dispatch(createAdFailure(error.message));
            });
    };
}


function getAds() {
    return function(dispatch) {
        dispatch(getAdsRequest());
        fetch('http://localhost:3001/ads')
            .then(response => response.json())
            .then(data => {
                dispatch(getAdsSuccess(data));
            })
            .catch(error => {
                dispatch(getAdsFailure(error.message));
            });
    };
}


function cartReducer(state = { items: [] }, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, items: [...state.items, action.adId] };
        case REMOVE_FROM_CART:
            return { ...state, items: state.items.filter(id => id !== action.adId) };
        default:
            return state;
    }
}

function authReducer(state = { loggedIn: false, token: null, userInfo: null, loading: false, error: null }, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, loggedIn: true, token: action.token, userInfo: action.userInfo, loading: false, error: null };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: action.error };
        case LOGOUT:
            return { ...state, loggedIn: false, token: null, userInfo: null, loading: false, error: null };
        default:
            return state;
    }
}


function adsReducer(state = { ads: [], loading: false, error: null }, action) {
    switch (action.type) {
        case CREATE_AD_REQUEST:
        case GET_ADS_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_AD_SUCCESS:
            return { ...state, loading: false, error: null };
        case GET_ADS_SUCCESS:
            return { ...state, ads: action.ads, loading: false, error: null };
        case CREATE_AD_FAILURE:
        case GET_ADS_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}


function favoritesReducer(state = { favorites: [], count: 0 }, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.adId], count: state.count + 1 };
        case REMOVE_FROM_FAVORITES:
            return { ...state, favorites: state.favorites.filter(id => id !== action.adId), count: state.count - 1 };
        default:
            return state;
    }
}
const rootReducer = Redux.combineReducers({ auth: authReducer, ads: adsReducer, favorites: favoritesReducer, cart: cartReducer });
const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk.default));


function renderCart() {
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');
    const state = store.getState();
    const { ads } = state.ads;
    const { items } = state.cart;

    cartList.innerHTML = '';

    let totalPrice = 0;

    items.forEach(itemId => {
        const ad = ads.find(ad => ad.id === itemId);
        if (ad) {
            const li = document.createElement('li');
            li.textContent = `${ad.title} - ${ad.price}$`;
            cartList.appendChild(li);
            totalPrice += parseFloat(ad.price);
        }
    });

    totalPriceElement.textContent = `Total Price: ${totalPrice}$`;
}

store.subscribe(renderCart);
function renderAdsList() {
    const adsList = document.getElementById('adsList');
    adsList.innerHTML = '';
    store.getState().ads.ads.forEach(ad => {
        const li = document.createElement('li');
        li.textContent = ad.title + ' - ' + ad.description + ' = ' + ad.price + '$';

        const favoriteBtn = document.createElement('button');
        favoriteBtn.textContent = 'Favorite';
        favoriteBtn.addEventListener('click', function() {
            toggleFavorite(ad.id);
        });
        li.appendChild(favoriteBtn);

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.addEventListener('click', function() {
            addToCartHandler(ad.id);
        });
        li.appendChild(addToCartBtn);

        adsList.appendChild(li);

    });
}


function toggleFavorite(adId) {
    if (isAdInFavorites(adId)) {
        store.dispatch(removeFromFavorites(adId));
    } else {
        store.dispatch(addToFavorites(adId));
    }
}

function isAdInFavorites(adId) {
    return store.getState().favorites.favorites.includes(adId);
}




function renderFavoritesCount() {
    const favoritesCount = document.getElementById('favoritesCount');
    favoritesCount.textContent = "Favorite: " + store.getState().favorites.count;
}


function addToCartHandler(adId) {
    store.dispatch(addToCart(adId));
}


function removeFromCartHandler(adId) {
    store.dispatch(removeFromCart(adId));
}

document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    store.dispatch(login(username, password));
});


document.getElementById('registerBtn').addEventListener('click', function() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    store.dispatch(register(newUsername, newPassword));
});


document.getElementById('createAdBtn').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    store.dispatch(createAd(title, description, price));
});


document.getElementById('getAdsBtn').addEventListener('click', function() {
    store.dispatch(getAds());
});


store.subscribe(renderAdsList);
store.subscribe(renderFavoritesCount);
