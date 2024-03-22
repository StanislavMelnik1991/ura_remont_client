'use client';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { updateDictionary } from 'features/dictionary';
import { Card, TextField } from '_entities/ui';
import { Button } from '_entities/ui/Button/Button';
import { IDictionary } from 'shared/types';
import styles from './DictionaryEditor.module.scss';

interface Props {
  className?: string;
  dictionary: IDictionary;
  title: string;
}

export const DictionaryEditor = ({ className, dictionary, title }: Props) => {
  const [ru, setRu] = useState<string>(dictionary.ru);
  const [be, setBe] = useState<string>(dictionary.be || '');
  const [uk, setUk] = useState<string>(dictionary.uk || '');
  const [pl, setPl] = useState<string>(dictionary.pl || '');
  const [en, setEn] = useState<string>(dictionary.en || '');
  const [success, setSuccess] = useState(false);

  const handleUpdate = useCallback(() => {
    setSuccess(false);
    updateDictionary({ be, en, id: dictionary.id, pl, ru, uk })
      .then(() => {
        setSuccess(true);
      })
      .catch((er) => console.error(er));
  }, [be, dictionary.id, en, pl, ru, uk]);

  return (
    <Card className={classNames(className, { [styles.success]: success })}>
      <div className={styles.card}>
        <div className={styles.controls}>
          <h4>{title}</h4>
          <Button onClick={handleUpdate}>Сохранить</Button>
        </div>
        <div className={styles.content}>
          <div className={styles.value}>
            <span>ru: </span>
            <TextField
              value={ru}
              onChange={(ev) => setRu(ev.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.value}>
            <span>be: </span>
            <TextField
              value={be}
              onChange={(ev) => setBe(ev.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.value}>
            <span>uk: </span>
            <TextField
              value={uk}
              onChange={(ev) => setUk(ev.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.value}>
            <span>pl: </span>
            <TextField
              value={pl}
              onChange={(ev) => setPl(ev.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.value}>
            <span>en: </span>
            <TextField
              value={en}
              onChange={(ev) => setEn(ev.target.value)}
              className={styles.input}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
