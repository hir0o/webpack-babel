export const hello = () => {
  const data = {
    hoge: "hoooooo",
    fuga: "gaaaaaa",
    piyo: "piiiii",
  };

  const { hoge, ...other } = data;

  return {
    hoge,
    other,
  };
};
