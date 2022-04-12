import React from 'react';
import './Formation.css';

function Formation({titre, date, etablissement, desc}) {
  return (
    <div className="Formation">
        <div className="Formation__Header">
            <h2 className="Formation__Title">{titre}</h2>
            <h3 className="Formation__Date">{date}</h3>
        </div>
        <div className="Formation__Content">
            <h3 className="Formation__Ecole">{etablissement}</h3>
            <p className="Formation__Desc">{desc}</p>
        </div>
    </div>
  )
}

export default Formation