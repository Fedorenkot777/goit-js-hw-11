const getArr = userParam => {
  const searchParams = new URLSearchParams({
    key: '44056212-bd1976c7b0b20d97aa531ac67',
    q: userParam,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export default getArr;