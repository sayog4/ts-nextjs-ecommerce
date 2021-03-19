import Resizer from 'react-image-file-resizer'

export const resizeImage = (
  image: Blob,
  width = 700,
  height = 600
): Promise<string | Blob | File | ProgressEvent<FileReader>> =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      image,
      width,
      height,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri)
      },
      'base64'
    )
  })
