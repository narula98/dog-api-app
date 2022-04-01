export default class DogApi {
  static getAllDogsList() {
    const options = {
      method: 'GET',
    };
    return fetch('https://dog.ceo/api/breeds/list/all', options).then((resp) => resp.json());
  }

  static getAllDogRandomImage(name) {
    const options = {
      method: 'GET',
    };
    return fetch(`https://dog.ceo/api/breed/${name}/images/random`, options).then((resp) => resp.json());
  }

  static getDogImageUrlList(name) {
    const options = {
      method: 'GET', // or 'PUT'
    };
    return fetch(`https://dog.ceo/api/breed/${name}/images`, options).then((resp) => resp.json());
  }
}
