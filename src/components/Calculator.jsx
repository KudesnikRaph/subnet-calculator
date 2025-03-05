import React, { useState } from "react";
import Input from "./Inputs";
import Button from "./Button";
import ResultsTable from "./ResultsTable";
import subnetMaskOptions from "./arreyData";
import toHex from './ConvertToHex';
import toBin from './ConvertToBin';

function Calculator() {
  const [ipAddress, setIpAddress] = useState("");
  const [subnetMask, setSubnetMask] = useState("");
  const [calculatedIp, setCalculatedIp] = useState("");
  const [hexIp, setHexIp] = useState("");
  const [binIp, setBinIp] = useState("");
  const [bitMask, setBitMask] = useState("");
  const [netMask, setNetMask] = useState("");
  const [binMask, setBinMask] = useState("");
  const [hexMask, setHexMask] = useState("");

  const handleCalculate = () => {
    setCalculatedIp(ipAddress);
    setHexIp(toHex(ipAddress));
    setBinIp(toBin(ipAddress));
    setBinMask(toBin(subnetMask));
    setHexMask(toHex(subnetMask));

    const foundOption = subnetMaskOptions.find(option => option.value === subnetMask);
    setBitMask(foundOption ? foundOption.label.replace("/", "") : "");
    
    const netMaskOption = subnetMaskOptions.find(option => option.value === subnetMask);
    setNetMask(netMaskOption ? netMaskOption.value : "");
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

      <ResultsTable ip={calculatedIp} hexIp={hexIp} binIp={binIp} bitMask={bitMask} binMask={binMask} netMask={netMask} hexMask={hexMask} />
    </div>
  );
}

export default Calculator;
