export const sendImageToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ReShop");

  const response = await fetch("https://api.cloudinary.com/v1_1/da1t0c7he/image/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Upload failed");
  }

  return data.secure_url;
};
