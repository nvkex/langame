import axios from "axios"
import { CORS_BYPASS_URL, PICSUM_URL, RANDOM_WORD_URL } from '../../../constants'

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
        }).catch(err => console.log(err))
}

/**
 * Get random images based on given seed
 * @param {Object} images - current state of images
 * @param {Function} setImages - hook to update state
 * @param {Integer} seed - seed for fetching random images
 * @returns - none
 */
export const getImages = async (images, setImages, seed) => {
    const list = await Array.from(Array(4), (_, i) => `${PICSUM_URL}${i + seed}`)
    setImages({ ...images, images: list })
}