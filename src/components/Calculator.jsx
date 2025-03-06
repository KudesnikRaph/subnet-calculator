import React, { useState } from "react";
import Input from "./Inputs";
import Button from "./Button";
import ResultsTable from "./ResultsTable";
import subnetMaskOptions from "./arreyData";
import toHex from './ConvertToHex';
import toBin from './ConvertToBin';
import toWildcard from "./toWildCard";
import toNetworkAddress from "./toNetworkAddress";
import toBroadcastAddress from "./toBroadCast";

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
  const [wildCard, setWildCard] = useState("");
  const [hexWild, setHexWild] = useState("");
  const [binWild, setBinWild] = useState("");
  const [networkAddress, setNetworkAddress] = useState("");
  const [hexNetworkAddress, setHexNetworkAddress] = useState("");
  const [binNetworkAddress, setBinNetworkAddress] = useState("");
  const [broadcast, setBroadcast] = useState("");
  const [hexBroadcast, setHexBroadcast] = useState("");
  const [binBroadcast, setBinBroadcast] = useState("");

  const handleCalculate = () => {
    setCalculatedIp(ipAddress);
    setHexIp(toHex(ipAddress));

    const foundOption = subnetMaskOptions.find(option => option.value === subnetMask);
    const bitMaskValue = foundOption ? parseInt(foundOption.label.replace("/", ""), 10) : 0;
    setBitMask(bitMaskValue);
    setBinIp(toBin(ipAddress, bitMaskValue));
    setBinMask(toBin(subnetMask, bitMaskValue));
    setHexMask(toHex(subnetMask));
    
    const netMaskOption = subnetMaskOptions.find(option => option.value === subnetMask);
    setNetMask(netMaskOption ? netMaskOption.value : "");
    const wildCardMask = toWildcard(subnetMask);

    setWildCard(wildCardMask);
    setHexWild(toHex(wildCardMask));
    setBinWild(toBin(wildCardMask, bitMask));

    const network = toNetworkAddress(ipAddress, subnetMask);
    setNetworkAddress(network);
    setHexNetworkAddress(toHex(network));
    setBinNetworkAddress(toBin(network, bitMask));

    const broadcast = toBroadcastAddress(network, wildCardMask);
    setBroadcast(broadcast);
    setHexBroadcast(toHex(broadcast));
    setBinBroadcast(toBin(broadcast, bitMask));
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

      <ResultsTable 
      ip={calculatedIp} 
      hexIp={hexIp} 
      binIp={binIp} 
      bitMask={bitMask} 
      binMask={binMask} 
      netMask={netMask} 
      hexMask={hexMask} 
      wildCard={wildCard} 
      hexWild={hexWild} 
      binWild={binWild} 
      networkAddress={networkAddress}
      hexNetworkAddress={hexNetworkAddress}
      binNetworkAddress={binNetworkAddress}
      broadcast={broadcast}
      hexBroadcast={hexBroadcast}
      binBroadcast={binBroadcast}
      />
    </div>
  );
}

export default Calculator;
