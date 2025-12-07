import React, { useState, useEffect } from "react";

const ImageBase64Upload = ({ label, onChange, defaultImage }) => {
  const [preview, setPreview] = useState(defaultImage || "");

  useEffect(() => {
    setPreview(defaultImage || "");
  }, [defaultImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      onChange(reader.result); // gửi base64 lên cha
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type="file"
        accept="image/*"
        className="form-control mb-2"
        onChange={handleFileChange}
      />

      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{ width: 150, height: 150, objectFit: "cover", borderRadius: 8 }}
        />
      )}
    </div>
  );
};

export default ImageBase64Upload;
