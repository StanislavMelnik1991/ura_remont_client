'use client';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './Admin.module.scss';

interface Props {}

export const Admin = ({}: Props) => {
  useEffect(() => {
    toast('authorized');
  }, []);
  return (
    <div className={styles.wrapper}>
      <p>authorized</p>
    </div>
  );
};
