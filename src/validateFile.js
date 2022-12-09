export function validateMedia(file) {
  // Check file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Invalid file type. Allowed types are: jpeg, png, gif, mp4');
  }

  // Check file size
  const maxSize = 10485760; // 10MB in bytes
  if (file.size > maxSize) {
    throw new Error('Invalid file size. Maximum allowed size is: ${maxSize} bytes');
  }

  // Check dimensions and ratio for images
  if (file.type.startsWith('image/')) {
    const width = file.naturalWidth;
    const height = file.naturalHeight;
    const ratio = width / height;

    if (width < 640 || height < 480) {
      console.log('Invalid dimensions. Minimum allowed size is: 640x480 pixels');
    } else if (ratio < 1 || ratio > 1.5) {
      console.log('Invalid aspect ratio. Allowed ratio range is: 1 - 1.5');
    } else {
     console.log(true)
    }
  }

  // Check duration and dimensions/ratio for videos
  if (file.type === 'video/mp4') {
    const duration = file.duration;
    if (duration < 5 || duration > 60) {
      console.log('Invalid duration. Allowed duration range is: 5 - 60 seconds');
    }

    const width = file.videoWidth;
    const height = file.videoHeight;
    const ratio = width / height;

    if (width < 640 || height < 480) {
      console.log('Invalid dimensions. Minimum allowed size is: 640x480 pixels');
    } else if (ratio < 1 || ratio > 1.5) {
      console.log('Invalid aspect ratio. Allowed ratio range is: 1 - 1.5');
    } else {
      console.log(true)
    }
  }

  // For other file types, just return true
  return true;
}