import React from "react";

function ResultsTable({ 
    ip,
    hexIp,
    binIp, 
    bitMask, 
    netMask, 
    binMask,
    hexMask, 
    wildCard, 
    hexWild, 
    binWild, 
    networkAddress, 
    binNetworkAddress, 
    hexNetworkAddress, 
    broadcast, 
    hexBroadcast, 
    binBroadcast, 
    hostmin, 
    hexHostmin, 
    binHostmin, 
    hostmax, 
    hexHostmax, 
    binHostmax, 
    hosts }) {

  const copyToClipboard = (text) => {
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Скопировано: ' + text);
        })
        .catch(err => {
          console.error('Ошибка при копировании: ', err);
        });
    } else {
      alert('Нет данных для копирования');
    }
  };

  return (
    <div className="results">
      <table>
        <caption><h2>Результаты</h2></caption>
        <tbody>
          <tr>
            <th>Имя</th>
            <th>Значение</th>
            <th>16-ричный код</th>
            <th>Бинарное значение</th>
          </tr>
          <tr>
            <td><strong>Адрес:</strong></td>
            <td onClick={() => copyToClipboard(ip)}>{ip}</td>
            <td onClick={() => copyToClipboard(hexIp)}>{hexIp}</td>
            <td onClick={() => copyToClipboard(binIp)}>{binIp}</td>
          </tr>
          <tr>
            <td><strong>Bitmask:</strong></td>
            <td onClick={() => copyToClipboard(bitMask)}>{bitMask}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Netmask:</strong></td>
            <td onClick={() => copyToClipboard(netMask)}>{netMask}</td>
            <td onClick={() => copyToClipboard(hexMask)}>{hexMask}</td>
            <td onClick={() => copyToClipboard(binMask)}>{binMask}</td>
          </tr>
          <tr>
            <td><strong>Wildcard:</strong></td>
            <td onClick={() => copyToClipboard(wildCard)}>{wildCard}</td>
            <td onClick={() => copyToClipboard(hexWild)}>{hexWild}</td>
            <td onClick={() => copyToClipboard(binWild)}>{binWild}</td>
          </tr>
          <tr>
            <td><strong>Network:</strong></td>
            <td onClick={() => copyToClipboard(networkAddress)}>{networkAddress}</td>
            <td onClick={() => copyToClipboard(hexNetworkAddress)}>{hexNetworkAddress}</td>
            <td onClick={() => copyToClipboard(binNetworkAddress)}>{binNetworkAddress}</td>
          </tr>
          <tr>
            <td><strong>Broadcast:</strong></td>
            <td onClick={() => copyToClipboard(broadcast)}>{broadcast}</td>
            <td onClick={() => copyToClipboard(hexBroadcast)}>{hexBroadcast}</td>
            <td onClick={() => copyToClipboard(binBroadcast)}>{binBroadcast}</td>
          </tr>
          <tr>
            <td><strong>Hostmin:</strong></td>
            <td onClick={() => copyToClipboard(hostmin)}>{hostmin}</td>
            <td onClick={() => copyToClipboard(hexHostmin)}>{hexHostmin}</td>
            <td onClick={() => copyToClipboard(binHostmin)}>{binHostmin}</td>
          </tr>
          <tr>
            <td><strong>Hostmax:</strong></td>
            <td onClick={() => copyToClipboard(hostmax)}>{hostmax}</td>
            <td onClick={() => copyToClipboard(hexHostmax)}>{hexHostmax}</td>
            <td onClick={() => copyToClipboard(binHostmax)}>{binHostmax}</td>
          </tr>
          <tr>
            <td><strong>Hosts:</strong></td>
            <td onClick={() => copyToClipboard(hosts)}>{hosts}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
