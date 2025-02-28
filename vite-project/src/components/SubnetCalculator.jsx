import React, { useState } from "react";
import Input from "./Inputs";
import Button from "./Button";

function Calculator() {
  const [subnetMask, setSubnetMask] = useState("");

  // Список стандартных масок подсетей
  const subnetMaskOptions = [
    { label: "/0", value: "0.0.0.0"},
    { label: "/1", value: "128.0.0.0"},
    { label: "/2", value: "192.0.0.0"},
    { label: "/3", value: "224.0.0.0"},
    { label: "/4", value: "240.0.0.0"},
    { label: "/5", value: "248.0.0.0"},
    { label: "/6", value: "252.0.0.0"},
    { label: "/7", value: "254.0.0.0"},
    { label: "/8", value: "255.0.0.0" },
    { label: "/16", value: "255.255.0.0" },
    { label: "/24", value: "255.255.255.0" },
    { label: "/25", value: "255.255.255.128" },
    { label: "/26", value: "255.255.255.192" },
    { label: "/27", value: "255.255.255.224" },
    { label: "/28", value: "255.255.255.240" },
    { label: "/29", value: "255.255.255.248" },
    { label: "/30", value: "255.255.255.252" },
    { label: "/31", value: "255.255.255.254" },
    { label: "/32", value: "255.255.255.255" },
  ];

  // Обработка выбора маски подсети
  const handleMaskChange = (event) => {
    const selectedMask = event.target.value;
    setSubnetMask(selectedMask);
  };

  return (
    <div className="calculator">
      <h1>IP Subnet Calculator</h1>

      <div className="form">
        <div className="input-group">
          <label htmlFor="ip">IP-адрес</label>
          <Input id="ip" placeholder="Например, 192.168.1.1" />
        </div>

        <div className="input-group">
          <label htmlFor="subnet-mask">Маска подсети</label>
          {/* Выпадающий список масок подсетей */}
          <select
            id="subnet-mask"
            value={subnetMask}
            onChange={handleMaskChange}
            className="input"
          >
            <option value="">Выберите маску</option>
            {subnetMaskOptions.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <Button text="Рассчитать" />
      </div>

      <div className="results">
        <h2>Результаты</h2>
        <p><strong>IP адрес:</strong> ...</p>
        <p><strong>Префикс маски подсети:</strong> ...</p>
        <p><strong>Маска подсети:</strong> ...</p>
        <p><strong>Обратная маска подсети:</strong> ...</p>
        <p><strong>IP адрес сети:</strong> ...</p>
        <p><strong>Широковещательный адрес:</strong> ...</p>
        <p><strong>IP адрес первого хоста:</strong> ...</p>
        <p><strong>IP адрес последнего хоста:</strong> ...</p>
        <p><strong>Количество доступных адресов:</strong> ...</p>
        <p><strong>Количество рабочих адресов для хостов:</strong> ...</p>
      </div>
    </div>
  );
}

export default Calculator;
