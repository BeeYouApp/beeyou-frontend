import { useState } from "react";
import { toppings } from "./toppings";



const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function Checked () {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className="App">
      <h3>Select Toppings</h3>
      <ul>
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div>{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div>
            <div>Total:</div>
            <div>{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}