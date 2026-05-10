import IListItemProps from './ListItem.model';

const Item = ({ label, url }: IListItemProps) => {
  return (
    <a href={url} target='_blank' className='hover:underline'>
      {label}
    </a>
  );
};

export default Item;
