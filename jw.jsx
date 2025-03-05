import "./App.css";
import Products from "./components/Products/Products";

//2 способа генерации id в списке
function App() {
  // const baseTime = Date.now();
  const data = [
    {
      name: "Никита",
      desc: "Описание 1",
      date: new Date(2014, 1, 1),
    },
    {
      name: "Никита 2",
      desc: "Описание 2",
      date: new Date(2014, 1, 1),
    },
    {
      name: "Никита 3",
      desc: "Описание 3",
      date: new Date(2014, 1, 1),
    },
  ];
  // const generateId = (name, date) => {
  //   return btoa(name + date.toISOString());
  // };

  return (
    <>
      <h1>Привет</h1>
      <Products name="Никита" desc="Тест" date="2014-10-10" />
      <div>
        {data.map((item, index) => (
          <Products
            key={index}
            name={item.name}
            desc={item.desc}
            date={item.date}
          />
        ))}
      </div>
      {/* <div> 1й вариант генерации id
        {data.map((item) => (
          <Products
            key={generateId(item.name, item.date)}
            name={item.name}
            desc={item.desc}
            date={item.date}
          />
        ))}
      </div> */}

      {/* <div> 2й вариант генерации id
        {data.map((item, index) => (
          <Products
            key={baseTime + index}
            name={item.name}
            desc={item.desc}
            date={item.date}
          />
        ))}
      </div> */}

      {/* <div> 3й вариант генерации id
        {data.map((item) => (
          <div key={crypto.randomUUID()}>
            <Products name={item.name} desc={item.desc} date={item.date} />
          </div>
        ))}
      </div> */}
    </>
  );
}
//PS задачи сделал
export default App;
