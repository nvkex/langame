import axios from "axios"
import {  CORS_BYPASS_URL, DETECT_OBJECTS_TR, PICSUM_URL2, RANDOM_WORD_URL, WIDTH, HEIGHT, BASE_URL, DEFAULT_LANGUAGE } from '../../../constants'



/**
 * Return detected array of objects in the selected image. 
 * @param {String} url - image url.
 * @param {Function} setObject - hook to set the value of object.
 */
export const getDetectedObjects = (url, index, callback, language) => {
    axios.post(`${BASE_URL}${DETECT_OBJECTS_TR}`, { url: url, to: language.code })
        .then(res => {
            callback(res.data.object, index, res.data.raw);
        })
        .catch(err => console.log(err))
}

/**
 * Gets a random word using APIs and saves it in the state.
 * @param {Object} word - object containing the state values
 * @param {Function} setWord - hook to set the value of 'word' in state
 * @returns - none
 */
export const getRandomObject = (word, setWord) => {
    axios.get(`${CORS_BYPASS_URL}${RANDOM_WORD_URL}`)
        .then(res => {
            setWord({ ...word, word: res.data[0].split("_").join(" ") })
        })
        .catch(err => console.log(err))
}

/**
 * Get random images based on given seed
 * @param {Object} images - current state of images
 * @param {Function} setImages - hook to update state
 * @param {Function} callback - callback for further actions
 * @returns - none
 */
export const getImages = async (setImages, callback, language) => {
    const list = await Array.from(Array(4), (_, i) => `${PICSUM_URL2}${i + new Date().getTime()}/${WIDTH}/${HEIGHT}`)
    setImages({ loading:false, images: list });

    const index = Math.floor((Math.random() * (list.length)) + 0);
    getDetectedObjects(list[index], index, callback, language);
}

/**
 * Get a random quote
 * @returns - a random quote from the array
 */
export const getRandomCardQuote = () => {
    const q = [
        "Pick Me!",
        "Who made this?",
        "I am the one!",
        "I dont care.",
        "Yes! Yes!",
        "I am hungry!",
        "Just Pick!",
        "Not again.",
        ":)"
    ];
    return q[Math.floor((Math.random() * (q.length - 1)) + 0)]
}

/**
 * Get an array of quotes
 * @param {Integer} MAX - Maximum amount of quotes
 * @returns - array of quotes
 */
export const getQuotes = (MAX) => {
    var arr = [];
    for (var i = 0; i < MAX; i++) {
        arr[i] = getRandomCardQuote();
    }
    return arr;
}