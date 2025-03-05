import React from "react";

function ResultsTable({ ip, hexIp, binIp }) {
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
            <td>{ip}</td>
            <td>{hexIp}</td>
            <td>{binIp}</td>
          </tr>
          <tr>
            <td><strong>Bitmask:</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Netmask:</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Wildcard:</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Network:</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Broadcast:</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Hostmin:</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Hostmax:</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Hosts:</strong></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
