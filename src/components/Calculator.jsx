import React, { useState } from "react";
import Input from "./Inputs";
import Button from "./Button";
import ResultsTable from "./ResultsTable";
import subnetMaskOptions from "./arreyData";
import ipToHex from './ConvertToHex';
import ipToBin from './ConvertToBin';

function Calculator() {
  const [ipAddress, setIpAddress] = useState("");
  const [subnetMask, setSubnetMask] = useState("");
  const [calculatedIp, setCalculatedIp] = useState("");
  const [hexIp, setHexIp] = useState("");
  const [binIp, setBinIp] = useState("");

  const handleCalculate = () => {
    setCalculatedIp(ipAddress);
    setHexIp(ipToHex(ipAddress));
    setBinIp(ipToBin(ipAddress));
  };

  return (
    <div className="calculator">
      <h1>IP Калькулятор подсетей</h1>

      <div className="form">
        <div className="input-group">
          <label htmlFor="ip">IP-адрес</label>
          <Input
            id="ip"
            placeholder="Например, 192.168.1.1"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="subnet-mask">Маска подсети</label>
          <select
            id="subnet-mask"
            value={subnetMask}
            onChange={(e) => setSubnetMask(e.target.value)}
            className="input"
          >
            <option value="">Выберите маску</option>
            {subnetMaskOptions.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label} - {option.value}
              </option>
            ))}
          </select>
        </div>

        <Button text="Рассчитать" onClick={handleCalculate} />
      </div>

      <ResultsTable ip={calculatedIp} hexIp={hexIp} binIp={binIp} />
    </div>
  );
}

export default Calculator;
