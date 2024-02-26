import { useRef} from 'react';
import html2canvas from 'html2canvas';

const ARComponent = () => {
  const arContainerRef = useRef(null);

  const captureScreen = () => {
    if (!arContainerRef.current) return;

    html2canvas(arContainerRef.current)
      .then((canvas) => {
        // Convert canvas to image data (PNG format)
        const imgData = canvas.toDataURL('image/png');

        // Create Blob from base64 encoded image data
        const blob = dataURLtoBlob(imgData);
        const blobUrl = URL.createObjectURL(blob);

        

        // Trigger download of the image
        downloadImage(blobUrl, 'ARImage.png');
      })
      .catch((error) => {
        console.error('Error capturing screen:', error);
      });
  };

  const downloadImage = (url, filename) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
  };

  // Function to convert base64 encoded image data to Blob
  const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div>
      <div ref={arContainerRef}>hey</div>
      <button onClick={captureScreen}>Capture</button>
      
     
    </div>
  );
};

export default ARComponent;
