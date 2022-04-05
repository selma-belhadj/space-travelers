class SpaceXAPI {
  static baseURL = 'https://api.spacexdata.com/v3/';
  // TODO Implement API functionality in this class as static methods

  static fetchAllRockets = async () => fetch(`${this.baseURL}rockets`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      const requiredData = [];

      data.forEach((value) => {
        requiredData.push({
          id: value.id,
          name: value.rocket_name,
          type: value.rocket_type,
          images: value.flickr_images,
          description: value.description,
        });
      });
      return requiredData;
    }
    return null;
  });
}

export default SpaceXAPI;
