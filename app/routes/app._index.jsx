import { useState, useEffect } from "react";

export const loader = async () => {
  return null;
};

export default function Index() {
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAnnouncements = async () => {
    const response = await fetch("/api/announcement");
    const data = await response.json();

    if (data.success) {
      setAnnouncements(data.announcements);
    }
  };

 const saveAnnouncement = async () => {
  try {
    setLoading(true);

    const response = await fetch("/api/announcement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: announcement,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Announcement Saved Successfully!");

      setAnnouncement("");

      fetchAnnouncements(); // save ke baad refresh
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Error saving announcement");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Announcement Dashboard</h1>

      <textarea
        rows="5"
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
        }}
        placeholder="Enter announcement"
      />

      <br />
      <br />

      <button
        onClick={saveAnnouncement}
        disabled={loading}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Saving..." : "Save Announcement"}
      </button>

      <hr />

      <h2>Saved Announcements</h2>

      {announcements.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
