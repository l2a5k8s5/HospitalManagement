import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      allow: [
        'C:/Users/Laksh/OneDrive/Desktop/HospitalManagement System/Frontend/Frontend',
        // Add more paths if necessary
      ],
    },
    
  },
});
