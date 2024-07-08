import React from "react";
import "/src/components/headingSelect.css";

export const HeadingSelect: React.FC = () => {
  return (
    <div className="select">
      <h3>Heading 2</h3>
      <ul className="list-group">
        <li>
          <input type="checkbox" className="checkbox" defaultChecked={true} />
          Option 1
        </li>
        <li>
          <input type="checkbox" className="checkbox"defaultChecked={true} />
          Option 2
        </li>
        <li>
          <input type="checkbox" className="checkbox"defaultChecked={true} />
          Option 3
        </li>
        <li>
          <input type="checkbox" className="checkbox"defaultChecked={true} />
          Option 4
        </li>
        <li>
          <input type="checkbox"className="checkbox" defaultChecked={true} />
          Option 5
        </li>
        <li>
          <input type="checkbox" className="checkbox"defaultChecked={true} />
          Option 6
        </li>
        <li>
          <input type="checkbox" className="checkbox"defaultChecked={true} id="check" />
          Option 7
        </li>
        <li>
          <input type="checkbox" className ="check" defaultChecked={false} />
          Option 8
        </li>
      </ul>
    </div>
  );
};
