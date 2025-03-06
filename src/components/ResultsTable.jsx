import React, { useState } from "react";
import * as XLSX from "xlsx";

function ResultsTable({
  ip, hexIp, binIp, bitMask, netMask, binMask, hexMask, 
  wildCard, hexWild, binWild, networkAddress, hexNetworkAddress, 
  binNetworkAddress, broadcast, hexBroadcast, binBroadcast, 
  hostmin, hexHostmin, binHostmin, hostmax, hexHostmax, binHostmax, hosts
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const copyToClipboard = (event, text) => {

    navigator.clipboard.writeText(text).then(() => {

      const rect = event.target.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY - 30,
        left: rect.left + window.scrollX + rect.width / 2 - 50,
      });
      setTooltipText('Скопировано!');
      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }).catch((err) => {
      console.error('Ошибка при копировании: ', err);
    });
  };


  const exportToExcel = () => {
    const data = [
      ["Имя", "Значение", "16-ричный код", "Бинарное значение"],
      ["Адрес", ip, hexIp, binIp],
      ["Bitmask", bitMask, "", ""],
      ["Netmask", netMask, hexMask, binMask],
      ["Wildcard", wildCard, hexWild, binWild],
      ["Network", networkAddress, hexNetworkAddress, binNetworkAddress],
      ["Broadcast", broadcast, hexBroadcast, binBroadcast],
      ["Hostmin", hostmin, hexHostmin, binHostmin],
      ["Hostmax", hostmax, hexHostmax, binHostmax],
      ["Hosts", hosts, "", ""]
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Результаты");

    XLSX.writeFile(wb, "Результаты_калькулятора.xlsx");
  };

  return (
    <div className="results">
      <button onClick={exportToExcel}>Экспорт в Excel</button>
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
            <td onClick={(e) => copyToClipboard(e, ip)}>{ip}</td>
            <td onClick={(e) => copyToClipboard(e, hexIp)}>{hexIp}</td>
            <td onClick={(e) => copyToClipboard(e, binIp)}>{binIp}</td>
          </tr>
          <tr>
            <td><strong>Bitmask:</strong></td>
            <td onClick={(e) => copyToClipboard(e, bitMask)}>{bitMask}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Netmask:</strong></td>
            <td onClick={(e) => copyToClipboard(e, netMask)}>{netMask}</td>
            <td onClick={(e) => copyToClipboard(e, hexMask)}>{hexMask}</td>
            <td onClick={(e) => copyToClipboard(e, binMask)}>{binMask}</td>
          </tr>
          <tr>
            <td><strong>Wildcard:</strong></td>
            <td onClick={(e) => copyToClipboard(e, wildCard)}>{wildCard}</td>
            <td onClick={(e) => copyToClipboard(e, hexWild)}>{hexWild}</td>
            <td onClick={(e) => copyToClipboard(e, binWild)}>{binWild}</td>
          </tr>
          <tr>
            <td><strong>Network:</strong></td>
            <td onClick={(e) => copyToClipboard(e, networkAddress)}>{networkAddress}</td>
            <td onClick={(e) => copyToClipboard(e, hexNetworkAddress)}>{hexNetworkAddress}</td>
            <td onClick={(e) => copyToClipboard(e, binNetworkAddress)}>{binNetworkAddress}</td>
          </tr>
          <tr>
            <td><strong>Broadcast:</strong></td>
            <td onClick={(e) => copyToClipboard(e, broadcast)}>{broadcast}</td>
            <td onClick={(e) => copyToClipboard(e, hexBroadcast)}>{hexBroadcast}</td>
            <td onClick={(e) => copyToClipboard(e, binBroadcast)}>{binBroadcast}</td>
          </tr>
          <tr>
            <td><strong>Hostmin:</strong></td>
            <td onClick={(e) => copyToClipboard(e, hostmin)}>{hostmin}</td>
            <td onClick={(e) => copyToClipboard(e, hexHostmin)}>{hexHostmin}</td>
            <td onClick={(e) => copyToClipboard(e, binHostmin)}>{binHostmin}</td>
          </tr>
          <tr>
            <td><strong>Hostmax:</strong></td>
            <td onClick={(e) => copyToClipboard(e, hostmax)}>{hostmax}</td>
            <td onClick={(e) => copyToClipboard(e, hexHostmax)}>{hexHostmax}</td>
            <td onClick={(e) => copyToClipboard(e, binHostmax)}>{binHostmax}</td>
          </tr>
          <tr>
            <td><strong>Hosts:</strong></td>
            <td onClick={(e) => copyToClipboard(e, hosts)}>{hosts}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            backgroundColor: '#333',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            opacity: 0.7,
            transition: 'opacity 0.2s ease-in-out',
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}

export default ResultsTable;
