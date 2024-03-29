'use client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ZodObject } from 'zod';
import { FormField, FormattedError } from '_entities/types';

interface Props {
  validationSchema: ZodObject<Record<string, any>>;
  onSubmit(body: Record<string, any>): Promise<{ id: number } | FormattedError>;
  successRedirect?: (id: number) => string;
  fields: Array<FormField>;
}

export const useCustomForm = ({
  validationSchema,
  onSubmit,
  successRedirect,
  fields,
}: Props) => {
  const router = useRouter();

  const initialValues = fields.reduce(
    (acc: Record<string, string>, { name, defaultValue }) => {
      acc[name] = defaultValue || '';
      return acc;
    },
    {},
  );
  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues,
    validate: (values) => {
      try {
        validationSchema.parse(values);
      } catch (error: any) {
        return error.formErrors.fieldErrors;
      }
    },
    onSubmit: async (ev) => {
      console.log(ev);
      const res = await onSubmit(ev);
      if ((res as FormattedError).error) {
        toast.error((res as FormattedError).error.message);
      } else {
        toast.info('Created successful');
        successRedirect &&
          router.push(successRedirect((res as { id: number }).id));
      }
    },
  });

  return {
    values,
    errors,
    setFieldValue,
    handleSubmit,
  };
};
