import './style/index.less';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';
import List from './list';
import ListItem from './list-item';

export type { ListProps } from './type';
export type { ListItemProps } from './type';

export default attachPropertiesToComponent(List, {
  Item: ListItem,
});
