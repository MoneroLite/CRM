import Card from '../card/Card';
import Menu from './menu/Menu';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <Card>
      <Menu />
    </Card>
  );
};

export default Sidebar;
