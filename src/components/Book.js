import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { id, title, category } = props;
  return (
    <div>
      This is a row
      {id}
      {' '}
      {title}
      {' '}
      { category}
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
{ /* <tr>
<td>The table body</td>
<td>with two columns</td>
</tr> */ }
