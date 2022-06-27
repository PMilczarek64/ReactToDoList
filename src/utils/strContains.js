  export const strContains = (str1, str2) => {
    let callback = false;
    if(str1.toLowerCase().includes(str2.toLowerCase())) {
      callback = true;
    };
    return callback;
  };