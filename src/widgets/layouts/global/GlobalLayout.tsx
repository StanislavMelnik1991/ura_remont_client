'use client';
import { ToastContainer } from 'react-toastify';
import { useTheme } from 'features/theme';
import styles from './GlobalLayout.module.scss';
import { StyledLayout } from './Styled';

type Props = {
  children: React.ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <StyledLayout theme={theme}>
      <main className={styles.scrolling}>
        <ToastContainer theme={theme} />
        {children}
      </main>
    </StyledLayout>
  );
};
