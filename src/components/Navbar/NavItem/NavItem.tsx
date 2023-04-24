import classNames from "classnames";
import "./NavItem.scss";
import { ReactNode } from "react";
import Tooltip from "../../Tooltip/Tooltip";
import { Link } from "react-router-dom";

interface INavbarItemProps {
  color?: string;
  icon?: ReactNode;
  image?: string;
  label: string;
}

const NavbarItem: React.FC<INavbarItemProps> = ({
  color,
  icon,
  image,
  label,
}: INavbarItemProps) => {
  const handleOnClick = (): void => {
    console.log("clicked");
  };

  const getContent = (): JSX.Element | ReactNode | undefined => {
    if (icon) {
      const getStyles = (): React.CSSProperties => {
        const styles: React.CSSProperties = {};

        if (color) {
          styles.color = `rgb(${color})`;
        }

        return styles;
      };

      return icon;
    } else if (image) {
      const styles: React.CSSProperties = {
        backgroundImage: `url(${image})`,
      };

      return <div className="navbar-item-image" style={styles} />;
    }
  };

  // const getClasses = (): string => {
  //   return classNames("navbar-item", props.type.toLowerCase(), {
  //     active: props.contentID === state.activeContentID,
  //   });
  // };

  return (
    <Tooltip label={label} direction="right">
      <Link to="/summariser">
        <button type="button" className="navbar-item" onClick={handleOnClick}>
          <div className="navbar-item-content">{getContent()}</div>
        </button>
      </Link>
    </Tooltip>
  );
};

export default NavbarItem;
