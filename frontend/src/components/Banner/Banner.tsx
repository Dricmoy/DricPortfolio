import React from "react";
import "./Banner.css"; // Assuming you move the styles from "style.css" to this file

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 } as React.CSSProperties}>
        <div className="item" style={{ "--position": 1 } as React.CSSProperties}>
          <img src="/images/dragon_1.jpg" alt="Dragon 1" />
        </div>
        <div className="item" style={{ "--position": 2 } as React.CSSProperties}>
          <img src="images/dragon_2.jpg" alt="Dragon 2" />
        </div>
        <div className="item" style={{ "--position": 3 } as React.CSSProperties}>
          <img src="images/dragon_3.jpg" alt="Dragon 3" />
        </div>
        <div className="item" style={{ "--position": 4 } as React.CSSProperties}>
          <img src="images/dragon_4.jpg" alt="Dragon 4" />
        </div>
        <div className="item" style={{ "--position": 5 } as React.CSSProperties}>
          <img src="images/dragon_5.jpg" alt="Dragon 5" />
        </div>
        <div className="item" style={{ "--position": 6 } as React.CSSProperties}>
          <img src="images/dragon_6.jpg" alt="Dragon 6" />
        </div>
        <div className="item" style={{ "--position": 7 } as React.CSSProperties}>
          <img src="images/dragon_7.jpg" alt="Dragon 7" />
        </div>
        <div className="item" style={{ "--position": 8 } as React.CSSProperties}>
          <img src="images/dragon_8.jpg" alt="Dragon 8" />
        </div>
        <div className="item" style={{ "--position": 9 } as React.CSSProperties}>
          <img src="images/dragon_9.jpg" alt="Dragon 9" />
        </div>
        <div className="item" style={{ "--position": 10 } as React.CSSProperties}>
          <img src="images/dragon_10.jpg" alt="Dragon 10" />
        </div>
      </div>

    </div>
  );
};

export default Banner;
