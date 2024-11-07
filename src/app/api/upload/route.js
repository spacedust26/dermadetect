import formidable from 'formidable';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data'; // Use form-data for Node.js

export const config = {
  api: {
    bodyParser: false,  // Disable Next.js body parsing so formidable can handle it
  },
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Form parsing error:', err);
        return res.status(500).json({ message: 'Failed to process the image' });
      }

      const imagePath = files.image[0].filepath;

      try {
        // Create a new FormData object for Node.js
        const formData = new FormData();
        formData.append('file', fs.createReadStream(imagePath));

        // Send the image to the target website's API
        const response = await axios.post('http://skin.test.woza.work/api/upload', formData, {
          headers: {
            ...formData.getHeaders(), // Attach proper headers for multipart/form-data
          },
        });

        // Send the result back to the frontend (assuming it contains an image URL and message)
        res.status(200).json({
          message: response.data.message,
          imageUrl: response.data.imageUrl,  // Example: URL of the processed image
        });
      } catch (error) {
        console.error('Error sending image to target API:', error);
        res.status(500).json({ message: 'Failed to forward the image to the target API' });
      } finally {
        // Clean up uploaded file (optional)
        fs.unlinkSync(imagePath);
      }
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
