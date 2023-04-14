import classNames from "classnames";

enum TooltipDirection {
  Right = "Right",
  Top = "Top",
}

interface ITooltipProps {
  direction?: TooltipDirection;
  text: string;
}

const Tooltip: React.FC<ITooltipProps> = (props: ITooltipProps) => {
  const direction: TooltipDirection = props.direction || TooltipDirection.Right;

  return (
    <div className={classNames("tooltip", direction.toLowerCase())}>
      <p>{props.text}</p>
    </div>
  );
};

export default Tooltip;
