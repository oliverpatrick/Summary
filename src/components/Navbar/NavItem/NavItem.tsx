// import Tooltip from "../../Tooltip/Tooltip";
// import "./NavItem.scss";

import { ReactNode } from "react";

// export interface ICustomNavbarItem {
//   image: string;
//   label: string;
// }

// export interface INavbarItemProps {
//   color?: string;
//   icon?: string;
//   image?: string;
//   label: string;
// }

// const NavbarItem: React.FC<INavbarItemProps> = (props: INavbarItemProps) => {
//   const handleOnClick = (): void => {
//     // selectContentID(props.contentID);
//   };

//   // const getContent = (): JSX.Element => {
//   //   if (props.icon) {
//   //     const getStyles = (): React.CSSProperties => {
//   //       const styles: React.CSSProperties = {};

//   //       if (props.color) {
//   //         styles.color = `rgb(${props.color})`;
//   //       }

//   //       return styles;
//   //     };

//   //     return <i className={props.icon} style={getStyles()} />;
//   //   } else if (props.image) {
//   //     const styles: React.CSSProperties = {
//   //       backgroundImage: `url(${props.image})`,
//   //     };

//   //     return <div className="navbar-item-image" style={styles} />;
//   //   }
//   // };

//   // const getClasses = (): string => {
//   //   // return classNames("navbar-item", props.type.toLowerCase(), {
//   //   //   active: props.contentID === state.activeContentID,
//   //   // });
//   // };

//   return (
//     <button type="button" onClick={handleOnClick}>
//       <div className="navbar-item-content"></div>
//       <Tooltip text={props.label} />
//     </button>
//   );
// };

// export default NavbarItem;

interface SideBarIconProps {
  icon: React.ReactNode;
  text?: string;
}

const NavButton = ({
  icon,
  text = "tooltip 💡",
}: {
  icon: ReactNode;
  text: string;
}) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default NavButton;
