//  okconcept0 copyright 2017-2019
//  SpreadsheetCoreRecursive.js
//  via mlBench & danmckeown.info
import React, { Component } from "react";

class SpreadsheetCoreRecursive extends Component {
  render(props) {
    var g;
    if (typeof this.props.spreadsheetdata !== 'undefined') {
      if (typeof this.props.spreadsheetdata[0] !== 'undefined') {
        g = [{}, ...this.props.spreadsheetdata];
      } else {
        g = [this.props.spreadsheetdata];
      }
    }
    else {
      g = [{'spreadsheetdata':'null'}];
    }

    return (
      <div id="desk" className="mlBench-content">
        
        <section id="datalibrary">
          {g.map(function (interVal) {
            let keyArr = Object.keys(interVal);
            let valArr = Object.values(interVal);

            let retSet = [];

            for (let i = 0; i < keyArr.length; i++) {
              if (typeof keyArr[i] === "object") {
              } else {
                retSet.push(
                  <span key={keyArr[i]} className="valHeaderRow">
                    {keyArr[i] + " "}
                  </span>
                );
              }
              if (i === keyArr.length - 1) {
                retSet.push(<div key={i + keyArr[i] + valArr[i] + `headerDivider`} className="endDividerHead" />);
              }
            }

            for (let i = 0; i < valArr.length; i++) {
              if (typeof valArr[i] === "object") {
                retSet.push(
                  <span key={valArr[i]} className="valSheetRow">
                    <SpreadsheetCoreRecursive spreadsheetdata={valArr[i]} />
                  </span>
                );
              } else {
                retSet.push(
                  <span key={valArr[i]} className="valSheetRow">
                    {valArr[i] + " "}
                  </span>
                );
              }
              if (i === keyArr.length - 1) {
                retSet.push(<div key={i + keyArr[i] + valArr[i] + `valDivider`} className="endDivider" />);
              }
            }

            return [...retSet];
          })}
        </section>
        <style>{`
          .spread {
            font-family: "Ubuntu Mono", "Inconsolata", "Hack", "Fira Code", Menlo, monospace;
          }
          span.valSheetRow {
            background-color: #dae8e8;
            margin-top: 2px;
            margin-right: 10px;
            margin-bottom: 0.2rem;
            line-height: 1.3;
            font-family: "Lato", "Roboto", "Segoe UI", Helvetica, sans-serif; 
            padding-top: calc(0.1vw + 1pt);
            padding-left: calc(0.1vw + 1pt);
            padding-right: calc(0.1vw + 1pt);
            padding-bottom: calc(0.1vw + 1pt);
          }
          span.valHeaderRow {
            background-color: #f0f5f5;
            margin-top: 20px;
            margin-right: 10px;
            margin-bottom: 0.6rem;
            line-height: 1.3;
            font-family: "Lato", "Roboto", "Segoe UI", Helvetica, sans-serif;
            padding-top: calc(0.1vw + 1pt);
            padding-left: calc(0.1vw + 1pt);
            padding-right: calc(0.1vw + 1pt);
            padding-bottom: calc(0.1vw + 1pt);
          }
        `}</style>
      </div>
    );
  }
}

export default SpreadsheetCoreRecursive;
