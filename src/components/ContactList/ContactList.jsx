import React from 'react';
import T from 'prop-types';
import styles from './contactList.module.css';

const ContactList = ({ contacts, onDelete }) =>
  contacts && (
    <ul className={styles.list}>
      {contacts.map(el => (
        <li className={styles.item} key={el.id}>
          {' '}
          <p className={styles.text}>
            {el.name}: {el.number}{' '}
          </p>
          <button
            className={styles.btn}
            type="submit"
            onClick={() => onDelete(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

ContactList.propTypes = {
  contacts: T.arrayOf(T.shape({})).isRequired,
  onDelete: T.func.isRequired,
};

export default ContactList;
