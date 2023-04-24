import { useState } from "react";
import classNames from "classnames";
import "./Tooltip.scss";

interface ITooltipProps {
  direction?: "bottom" | "left" | "top" | "right";
  label: string;
  children?: React.ReactNode;
}

const Tooltip: React.FC<ITooltipProps> = ({
  direction,
  label,
  children,
}: ITooltipProps) => {
  const [active, setActive] = useState(true);
  const tooltipDirection: string = direction || "right";

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div
          className={classNames("tooltip-tip", tooltipDirection.toLowerCase())}
        >
          <p className="tooltip-text">{label}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
