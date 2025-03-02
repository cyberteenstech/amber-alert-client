
import { format } from 'date-fns';
import { AlertTriangle } from 'lucide-react';

export const generatePoster = (child) => {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas dimensions (A4 size at 96 DPI)
  canvas.width = 794; // 8.27 inches at 96 DPI
  canvas.height = 1123; // 11.69 inches at 96 DPI
  
  if (!ctx) {
    console.error('Could not get canvas context');
    return;
  }
  
  // Fill background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw header background
  ctx.fillStyle = '#e11d48'; // Red-600
  ctx.fillRect(0, 0, canvas.width, 120);
  
  // Draw header text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('MISSING CHILD', canvas.width / 2, 70);
  
  // Load child image
  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  img.onload = () => {
    // Draw child image
    const imgWidth = 300;
    const imgHeight = 300;
    const imgX = (canvas.width - imgWidth) / 2;
    const imgY = 150;
    
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
    
    // Draw red border around image
    ctx.strokeStyle = '#e11d48';
    ctx.lineWidth = 5;
    ctx.strokeRect(imgX, imgY, imgWidth, imgHeight);
    
    // Draw child information
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.font = 'bold 36px Arial';
    ctx.fillText(child.name, canvas.width / 2, 500);
    
    ctx.font = '24px Arial';
    ctx.fillText(`Age: ${child.age} | Gender: ${child.gender}`, canvas.width / 2, 540);
    
    if (child.guardianName) {
      ctx.fillText(`Guardian: ${child.guardianName}`, canvas.width / 2, 570);
    }
    
    // Last seen information
    ctx.textAlign = 'left';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('LAST SEEN:', 100, 620);
    
    ctx.font = '20px Arial';
    ctx.fillText(`Date: ${format(new Date(child.lastSeen), 'PPP')}`, 120, 650);
    ctx.fillText(`Location: ${child.location}`, 120, 680);
    
    // Description
    ctx.font = 'bold 20px Arial';
    ctx.fillText('DESCRIPTION:', 100, 730);
    
    // Wrap description text
    const maxWidth = canvas.width - 200;
    const words = child.description.split(' ');
    let line = '';
    let y = 760;
    
    ctx.font = '20px Arial';
    
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth && i > 0) {
        ctx.fillText(line, 120, y);
        line = words[i] + ' ';
        y += 30;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 120, y);
    
    // Contact information
    ctx.font = 'bold 24px Arial';
    ctx.fillText('CONTACT INFORMATION:', 100, 850);
    
    ctx.font = '20px Arial';
    ctx.fillText(`Phone: ${child.contactPhone}`, 120, 880);
    
    if (child.contactEmail) {
      ctx.fillText(`Email: ${child.contactEmail}`, 120, 910);
    }
    
    // Emergency notice
    ctx.fillStyle = '#e11d48';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('IF YOU HAVE ANY INFORMATION, PLEASE CONTACT AUTHORITIES IMMEDIATELY', 100, 960);
    
    // Footer
    ctx.fillStyle = '#e11d48';
    ctx.fillRect(0, 1000, canvas.width, 123);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('AMBER ALERT BANGLADESH', canvas.width / 2, 1040);
    
    ctx.font = '20px Arial';
    ctx.fillText('Emergency Hotline: 999', canvas.width / 2, 1080);
    
    // Convert canvas to image and trigger download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `missing-child-${child.name.replace(/\s+/g, '-').toLowerCase()}.png`;
    link.href = dataUrl;
    link.click();
  };
  
  img.onerror = () => {
    console.error('Error loading image');
    alert('Could not load the child\'s image. Please try again later.');
  };
  
  // Start loading the image
  img.src = child.imageUrl;
};