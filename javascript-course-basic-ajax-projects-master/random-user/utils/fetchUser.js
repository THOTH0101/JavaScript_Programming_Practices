const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  const person = await data.results[0];

  // destructing
  const {
    phone,
    email,
    dob: { age },
    location: {
      street: { number, name },
    },
    name: { first, last },
    login: { password },
    picture: { large: image },
  } = person;

  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
