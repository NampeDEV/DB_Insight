import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import withRouter from '@aiscore/core/withRouter';
import FuseNavBadge from '../../FuseNavBadge';
import FuseSvgIcon from '../../../FuseSvgIcon';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none!important',
  minHeight: 48,
  '&.active': {
    backgroundColor: `${theme.palette.secondary.main}!important`,
    color: `${theme.palette.secondary.contrastText}!important`,
    pointerEvents: 'none',
    '& .aiscore-list-item-text-primary': {
      color: 'inherit',
    },
    '& .aiscore-list-item-icon': {
      color: 'inherit',
    },
  },
  '& .aiscore-list-item-icon': {},
  '& .aiscore-list-item-text': {
    padding: '0 0 0 16px',
  },
}));

function FuseNavHorizontalLink(props) {
  const { item } = props;

  return useMemo(
    () => (
      <StyledListItem
        button
        component="a"
        href={item.url}
        target={item.target ? item.target : '_blank'}
        className={clsx('aiscore-list-item')}
        role="button"
        sx={item.sx}
        disabled={item.disabled}
      >
        {item.icon && (
          <FuseSvgIcon
            className={clsx('aiscore-list-item-icon shrink-0', item.iconClass)}
            color="action"
          >
            {item.icon}
          </FuseSvgIcon>
        )}

        <ListItemText
          className="aiscore-list-item-text"
          primary={item.title}
          classes={{ primary: 'text-13 aiscore-list-item-text-primary truncate' }}
        />

        {item.badge && <FuseNavBadge className="ltr:ml-8 rtl:mr-8" badge={item.badge} />}
      </StyledListItem>
    ),
    [item.badge, item.icon, item.iconClass, item.target, item.title, item.url]
  );
}

FuseNavHorizontalLink.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
  }),
};

FuseNavHorizontalLink.defaultProps = {};

const NavHorizontalLink = withRouter(memo(FuseNavHorizontalLink));

export default NavHorizontalLink;
