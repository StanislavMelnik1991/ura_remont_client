'use client';
import classNames from 'classnames';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import { deleteImage } from 'features/image';
import { FormattedError } from '_entities/types';
import { Card } from '_entities/ui';
import { Button } from '_entities/ui/Button/Button';
import { IconAdd, IconTrash } from '_entities/ui/icons';
import { IMAGE_TYPES, MAX_IMAGE_SIZE } from 'shared/constants';
import { IImage } from 'shared/types';
import styles from './UpdateImages.module.scss';

interface Props {
  className?: string;
  images: Array<IImage>;
  id: number;
  uploadImage(data: {
    formData: FormData;
    id: number;
  }): Promise<{ id: number } | FormattedError>;
}

export const UpdateImages = ({
  className,
  images = [],
  id,
  uploadImage,
}: Props) => {
  const onDrop = useCallback(
    async (files: File[]) => {
      if (files.length) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(files[0]);
        reader.onloadend = async () => {
          if (reader.result) {
            const formData = new FormData();
            const blob = new Blob([reader.result]);
            formData.append('file', blob);
            uploadImage({ formData, id }).then((data) => {
              if ((data as FormattedError).error) {
                console.error((data as FormattedError).error);
                toast.error((data as FormattedError).error.statusText);
              } else {
                toast('Изображение загружено успешно');
              }
            });
          }
        };
      }
    },
    [id, uploadImage],
  );

  const handleDelete = useCallback(
    (id: number) => () => {
      deleteImage(id).then((data) => {
        console.log(data);
        if ((data as FormattedError).error) {
          console.error((data as FormattedError).error);
          toast.error((data as FormattedError).error.statusText);
        } else {
          toast('Изображение удалено успешно');
        }
      });
    },
    [],
  );

  const { getInputProps, open } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: IMAGE_TYPES,
    maxSize: 4 * MAX_IMAGE_SIZE,
  });

  return (
    <div className={classNames(styles.wrapper, className)}>
      <input {...getInputProps()} />
      <Button
        className={styles.element}
        key={'create-brand-button'}
        onClick={open}
      >
        <IconAdd className={styles.addIcon} />
      </Button>
      {images.map(({ image, id }, index) => {
        return (
          <Card className={styles.element} key={`${index}-${id}`} image={image}>
            <Button className={styles.remove} onClick={handleDelete(id)}>
              <IconTrash />
            </Button>
          </Card>
        );
      })}
    </div>
  );
};
