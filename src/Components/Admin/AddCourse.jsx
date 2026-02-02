import React, { useState } from "react";

function AddCourse() {
  const [formData, setFormData] = useState({
    id: "",
    courseName: "",
    subtitle: "",
    description: "",
    duration: "",
    level: "beginner",
    features: "",
    price: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    data.append("id", formData.id);
    data.append("courseName", formData.courseName);
    data.append("subtitle", formData.subtitle);
    data.append("description", formData.description);
    data.append("duration", formData.duration);
    data.append("level", formData.level);
    data.append(
      "features",
      JSON.stringify(formData.features.split(",").map(f => f.trim()))
    );
    data.append("price", formData.price);
    data.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/v1/course/create", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      setMessage("✅ Course added successfully");
      setFormData({
        id: "",
        courseName: "",
        subtitle: "",
        description: "",
        duration: "",
        level: "beginner",
        features: "",
        price: "",
      });
      setImage(null);
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Add Course (Admin)</h2>

        {message && (
          <p className="mb-4 text-center text-sm font-semibold">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Custom ID */}
          <input
            type="number"
            name="id"
            placeholder="Unique Course ID"
            value={formData.id}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <input
            type="text"
            name="courseName"
            placeholder="Course Name"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <input
            type="text"
            name="subtitle"
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg resize-none"
            rows="3"
            required
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <input
            type="text"
            name="features"
            placeholder="Features (comma separated)"
            value={formData.features}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            {loading ? "Uploading..." : "Add Course"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
