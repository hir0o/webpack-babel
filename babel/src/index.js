// https://qiita.com/koedamon/items/92c986456e4b9e845acd

{
  const data = {
    hoge: "hoooooo",
    fuga: "gaaaaaa",
    piyo: "piiiii",
  };

  const { hoge, ...other } = data;

  console.log(hoge, other);
}
const hoge = "mumumu";
