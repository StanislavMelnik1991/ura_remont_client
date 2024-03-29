'use client';
import classNames from 'classnames';
import { ZodObject } from 'zod';
import { FormField, FormattedError } from '_entities/types';
import { Card, TextField } from '_entities/ui';
import { Button } from '_entities/ui/Button/Button';
import styles from './CustomForm.module.scss';
import { useCustomForm } from './useCustomForm';

interface Props {
  className?: string;
  validationSchema: ZodObject<Record<string, any>>;
  fields: Array<FormField>;
  onSubmit(body: Record<string, any>): Promise<{ id: number } | FormattedError>;
  successRedirect?: (id: number) => string;
  title: string;
}

export const CreationForm = ({
  className,
  validationSchema,
  fields,
  onSubmit,
  successRedirect,
  title,
}: Props) => {
  const { errors, setFieldValue, values, handleSubmit } = useCustomForm({
    validationSchema,
    onSubmit,
    successRedirect,
    fields,
  });
  return (
    <Card>
      <form
        className={classNames(styles.wrapper, className)}
        onSubmit={handleSubmit}
      >
        <h2>{title}</h2>
        {fields.map(({ name, label, placeHolder }, index) => {
          if (!Object.keys(values).includes(name)) {
            return <></>;
          }
          return (
            <TextField
              error={errors[name]}
              label={label}
              placeholder={placeHolder}
              key={`Creation-form-field-${index}`}
              value={values[name]}
              onChange={(ev) => setFieldValue(name, ev.target.value)}
            />
          );
        })}
        <Button className={styles.button} type="submit">
          Сохранить
        </Button>
      </form>
    </Card>
  );
};
