const fs = require('fs');
async function download() {
  try {
    const res = await fetch('https://drive.google.com/uc?export=download&id=1fK1R1K5Phc6U5ruPKLVG47CHepAX8QXC');
    const buffer = await res.arrayBuffer();
    fs.writeFileSync('./public/interview.jpg', Buffer.from(buffer));
    console.log('Download complete. Size:', buffer.byteLength);
  } catch (e) {
    console.error(e);
  }
}
download();
