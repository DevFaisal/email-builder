# **Email Builder Application**

This project is an **Email Builder Application** that allows users to choose a layout, edit the content (e.g., title, content, logo), and save or download the customized email templates. It integrates with **Cloudinary** for image uploads and uses a MongoDB database to fetch layouts and save templates.

---

## **Features**
1. **Layout Selection**: 
   - Fetch layouts from an API and display them for users to select.
2. **Content Editing**:
   - Users can edit the title, content, and logo in the chosen layout.
   - Includes a real-time preview of the email.
3. **Image Upload**:
   - Upload custom images for the logo using Cloudinary.
4. **Save and Download Templates**:
   - Save the customized email template to the database.
   - Download the final email template as an HTML file.
5. **API Integration**:
   - Fetch layouts and save templates via dedicated APIs.
6. **Database Integration**:
   - Store email templates and user data in MongoDB.

---

## **Technologies Used**
- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Next.js API routes, MongoDB, Cloudinary
- **Image Management**: Cloudinary
- **State Management**: Context API 

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/DevFaisal/email-builder
cd email-builder
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Environment Variables**
Create a `.env.local` file in the root directory and configure the following environment variables:

```env
# MongoDB Connection String
MONGODB_URI=<Your MongoDB URI>

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
NEXT_PUBLIC_CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
CLOUDINARY_URL=cloudinary://<Your Cloudinary API Key>:<Your Cloudinary API Secret>@<Your Cloudinary Cloud Name>
```

#### **How to Get These Values**
1. **MongoDB URI**:
   - Go to the **MongoDB Atlas** dashboard.
   - Navigate to your cluster, click **Connect**, and copy the connection string.
   - Replace `<username>`, `<password>`, and `<database>` in the URI.

2. **Cloudinary Keys**:
   - Log in to your **Cloudinary account**.
   - Find your **Cloud Name**, **API Key**, and **API Secret** under the **Dashboard**.

---

## **Run the Project**

### **1. Start the Development Server**
```bash
npm run dev
```

### **2. Access the Application**
- Visit `http://localhost:3000` in your browser.

---

## **Features in Detail**

### **1. Layout Selection**
- All available layouts are fetched from the `/api/fetchLayouts` endpoint and displayed to the user.

### **2. Template Editing**
- Users can edit:
  - **Title**: Modify the `<h1>` element with `id="title"`.
  - **Content**: Modify the `<p>` element with `id="content"`.
  - **Logo**: Update the `<img>` element with `id="logo"` via Cloudinary uploads.

### **3. Image Upload**
- Cloudinary is used to handle logo uploads. The uploaded image URL is automatically reflected in the layout preview.

### **4. Save Template**
- Users can save the edited template using the `/api/saveTemplate` endpoint.

### **5. Download Template**
- The customized HTML is serialized and downloaded as an `.html` file.

---

## **How It Works**

### **Frontend**
- Displays layouts in an iframe for live preview.
- Allows editing via input fields that update the layout in real-time.

### **Backend**
- Fetches layouts and stores customized templates in MongoDB.
- Handles image uploads via Cloudinary's API.

---

## **Future Improvements**
- Add user authentication for managing personal templates.
- Enable sharing templates via email.
- Provide more advanced layout customization options.

---

## **Scripts**

### **Run Development Server**
```bash
npm run dev
```

### **Build for Production**
```bash
npm run build
```

### **Lint**
```bash
npm run lint
```

---

## **Contact**
If you have questions or suggestions, feel free to reach out:

- **Email**: dfaisal59@gmail.com  
- **GitHub**: [DevFaisal](https://github.com/DevFaisal)

---

Enjoy building your custom email templates! 🎉