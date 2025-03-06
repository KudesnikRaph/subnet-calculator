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
import toHostmin from "./toHostmin";
import toHostmax from "./toHostmax";
import toHosts from "./toHosts";

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
  const [hostmin, setHostmin] = useState("");
  const [hexHostmin, setHexHostmin] = useState("");
  const [binHostmin, setBinHostmin] = useState("");
  const [hostmax, setHostmax] = useState("");
  const [hexHostmax, setHexHostmax] = useState("");
  const [binHostmax, setBinHostmax] = useState("");
  const [hosts, setHosts] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shakeError, setShakeError] = useState(false);

  const validateIp = (ip) => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  };

  const validateMask = (mask) => {
    const maskRegex = /^(255|254|252|248|240|224|192|128|0)\.(255|254|252|248|240|224|192|128|0)\.(255|254|252|248|240|224|192|128|0)\.(255|254|252|248|240|224|192|128|0)$/;
    return maskRegex.test(mask);
  };

  const handleCalculate = () => {
    if (!validateIp(ipAddress) || !validateMask(subnetMask)) {
      setErrorMessage("Неверный IP-адрес или маска подсети!");
      setShakeError(true);
      setTimeout(() => {
        setShakeError(false);
      }, 500);
      return;
    }

    setErrorMessage("");

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

    const hostminAddress = toHostmin(network);
    setHostmin(hostminAddress);
    setHexHostmin(toHex(hostminAddress));
    setBinHostmin(toBin(hostminAddress, bitMask));

    const hostmaxAddress = toHostmax(broadcast);
    setHostmax(hostmaxAddress);
    setHexHostmax(toHex(hostmaxAddress));
    setBinHostmax(toBin(hostmaxAddress, bitMask));

    const hostCount = toHosts(subnetMask);
    setHosts(hostCount);
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
        
        <p className={`error-message ${shakeError ? "shake" : ""}`}>{errorMessage}</p>
        
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
      hostmin={hostmin}
      hexHostmin={hexHostmin}
      binHostmin={binHostmin}
      hostmax={hostmax}
      hexHostmax={hexHostmax}
      binHostmax={binHostmax}
      hosts={hosts}
      />
    </div>
  );
}

export default Calculator;
