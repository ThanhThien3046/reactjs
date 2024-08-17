import React, { useEffect, useState } from "react";

const convert = (fromMoney, fromCurrency, toCurrentcy, exchangeRate) => {
  return fromMoney * (exchangeRate[toCurrentcy] / exchangeRate[fromCurrency]);
};

export const CurrencyConverter = () => {
  console.log(useState({}));
  const [currencies, setCurrencies] = useState({});
  const [money, setMoney] = useState({ usd: {} });
  console.log(money);
  const [fromMoney, setFromMoney] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("jpy");
  const [toMoney, setToMoney] = useState(0);
  const [toCurrency, setToCurrency] = useState("vnd");
  console.log("FromMoney: ", fromCurrency);
  //   convert(100, "jpy", "vnd", money.usd)
  console.log(currencies);
  useEffect(() => {
    console.log("get Data");
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    )
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);

  useEffect(() => {
    console.log("get Data Money: ");
    fetch("https://latest.currency-api.pages.dev/v1/currencies/usd.json")
      .then((res) => res.json())
      .then((data) => setMoney(data));
  }, []);

  useEffect(() => {
    console.log(fromMoney);
    const value = convert(fromMoney, fromCurrency, toCurrency, money.usd);
    setToMoney(value)
  }, [fromMoney]);
  if (!money.usd) {
    return "loading...";
  }

  return (
    <div>
      <span>1 {currencies[fromCurrency]} equal</span>
      <h1>
        {money.usd?.[toCurrency] / money.usd?.[fromCurrency]}{" "}
        {currencies[toCurrency]}
      </h1>
      <h5>{money.date} Disclaimer</h5>
      {/* <h5>{money["date"]} Disclaimer</h5> */}
      <div style={{ display: "inline-flex" }}>
        <input
          type="text"
          className="w3-input"
          value={fromMoney}
          onChange={(e) => {
            // const value = Number(e.target.value);
            setFromMoney(Number(e.target.value));
          }}
        />
        <div>
          <select
            name=""
            id=""
            className="w3-select"
            value={fromCurrency}
            onChange={(e) => {
              console.log(e.target.value);
              setFromCurrency(e.target.value);
            }}
          >
            {Object.entries(currencies).map(([currency, name]) => (
              <option key={currency} value={currency}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      <div style={{ display: "inline-flex" }}>
        <input
          type="text"
          className="w3-input"
          value={toMoney}
          onChange={(e) => {
            setToMoney(Number(e.target.value));
          }}
        />
        <div>
          <select
            name=""
            id=""
            className="w3-select"
            value={toCurrency}
            onChange={(e) => {
              setToCurrency(e.target.value);
            }}
          >
            {Object.entries(currencies).map(([currency, name]) => (
              <option key={currency} value={currency}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
